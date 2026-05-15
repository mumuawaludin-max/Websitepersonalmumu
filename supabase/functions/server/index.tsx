import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    exposeHeaders: ["Content-Length", "Content-Type"],
    maxAge: 86400,
    credentials: true,
  }),
);

// Explicit OPTIONS handler for preflight
app.options("/*", (c) => {
  return c.json({ ok: true }, 200);
});

// Health check endpoint
app.get("/make-server-b1497bc1/health", (c) => {
  return c.json({ status: "ok" });
});

// Debug endpoint to check environment variables (REMOVE IN PRODUCTION!)
app.get("/make-server-b1497bc1/debug/env", (c) => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const hasAnonKey = !!Deno.env.get('SUPABASE_ANON_KEY');
  const hasServiceKey = !!Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  
  return c.json({ 
    supabaseUrl: supabaseUrl || 'MISSING',
    hasAnonKey,
    hasServiceKey,
    allEnvKeys: Object.keys(Deno.env.toObject())
  });
});

// Test login endpoint (without auth)
app.post("/make-server-b1497bc1/test/login", async (c) => {
  try {
    const body = await c.req.json();
    console.log("Test login received:", { email: body.email, passwordLength: body.password?.length });
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
    
    if (!supabaseUrl || !anonKey) {
      return c.json({ 
        success: false, 
        error: "Environment variables not configured",
        debug: {
          hasUrl: !!supabaseUrl,
          hasKey: !!anonKey
        }
      }, 500);
    }
    
    const supabase = createClient(supabaseUrl, anonKey);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: body.email,
      password: body.password,
    });
    
    if (error) {
      console.error("Supabase auth error:", error);
      return c.json({ 
        success: false, 
        error: error.message,
        errorCode: error.status,
        errorName: error.name
      }, 401);
    }
    
    if (!data.session) {
      return c.json({ 
        success: false, 
        error: "No session returned"
      }, 401);
    }
    
    return c.json({ 
      success: true, 
      accessToken: data.session.access_token,
      user: { id: data.user.id, email: data.user.email }
    });
  } catch (error: any) {
    console.error("Test login error:", error);
    return c.json({ 
      success: false, 
      error: error.message || "Unknown error",
      stack: error.stack
    }, 500);
  }
});

// ==================== BLOG ENDPOINTS ====================

// Helper function to create Supabase client
function getSupabaseClient(useServiceRole = false) {
  const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
  const supabaseKey = useServiceRole 
    ? Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    : Deno.env.get('SUPABASE_ANON_KEY') ?? '';
  
  return createClient(supabaseUrl, supabaseKey);
}

// Middleware to verify admin authentication
async function verifyAdmin(authHeader: string | null) {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { authenticated: false, userId: null };
  }

  const accessToken = authHeader.split(' ')[1];
  const supabase = getSupabaseClient(true);

  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  
  if (error || !user) {
    return { authenticated: false, userId: null };
  }

  return { authenticated: true, userId: user.id };
}

// GET all published blogs (Public)
app.get("/make-server-b1497bc1/blogs", async (c) => {
  try {
    const supabase = getSupabaseClient();
    
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .order('published_date', { ascending: false });
    
    if (error) {
      console.error("Error fetching blogs:", error);
      return c.json({ success: false, error: error.message }, 500);
    }
    
    return c.json({ success: true, blogs: blogs || [] });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return c.json({ success: false, error: "Failed to fetch blogs" }, 500);
  }
});

// GET single blog by slug (Public)
app.get("/make-server-b1497bc1/blogs/:slug", async (c) => {
  try {
    const slug = c.req.param('slug');
    const supabase = getSupabaseClient();
    
    const { data: blog, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    
    if (error) {
      console.error("Error fetching blog:", error);
      return c.json({ success: false, error: "Blog not found" }, 404);
    }
    
    // Increment view count
    await supabase
      .from('blogs')
      .update({ views: (blog.views || 0) + 1 })
      .eq('id', blog.id);
    
    return c.json({ success: true, blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return c.json({ success: false, error: "Failed to fetch blog" }, 500);
  }
});

// GET all blogs for admin (including drafts)
app.get("/make-server-b1497bc1/admin/blogs", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    const { authenticated } = await verifyAdmin(authHeader);
    
    if (!authenticated) {
      return c.json({ success: false, error: "Unauthorized" }, 401);
    }

    const supabase = getSupabaseClient(true);
    
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Error fetching admin blogs:", error);
      return c.json({ success: false, error: error.message }, 500);
    }
    
    return c.json({ success: true, blogs: blogs || [] });
  } catch (error) {
    console.error("Error fetching admin blogs:", error);
    return c.json({ success: false, error: "Failed to fetch blogs" }, 500);
  }
});

// GET single blog by ID for admin
app.get("/make-server-b1497bc1/admin/blogs/:id", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    const { authenticated } = await verifyAdmin(authHeader);
    
    if (!authenticated) {
      return c.json({ success: false, error: "Unauthorized" }, 401);
    }

    const id = c.req.param('id');
    const supabase = getSupabaseClient(true);
    
    const { data: blog, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error("Error fetching blog:", error);
      return c.json({ success: false, error: "Blog not found" }, 404);
    }
    
    return c.json({ success: true, blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return c.json({ success: false, error: "Failed to fetch blog" }, 500);
  }
});

// CREATE new blog post (Admin only)
app.post("/make-server-b1497bc1/admin/blogs", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    const { authenticated, userId } = await verifyAdmin(authHeader);
    
    if (!authenticated) {
      return c.json({ success: false, error: "Unauthorized - Admin access required" }, 401);
    }

    const body = await c.req.json();
    const { title, slug, content, excerpt, tags, coverImage, status, metaTitle, metaDescription, metaKeywords } = body;

    // Validate required fields
    if (!title || !slug || !content) {
      return c.json({ success: false, error: "Title, slug, and content are required" }, 400);
    }

    const supabase = getSupabaseClient(true);

    // Check if slug already exists
    const { data: existingBlog } = await supabase
      .from('blogs')
      .select('id')
      .eq('slug', slug)
      .single();
    
    if (existingBlog) {
      return c.json({ success: false, error: "Slug already exists. Please use a different slug." }, 400);
    }

    const blogData = {
      title,
      slug,
      content,
      excerpt: excerpt || content.substring(0, 160),
      author_id: userId,
      published_date: status === 'published' ? new Date().toISOString() : null,
      tags: tags || [],
      cover_image: coverImage || '',
      status: status || 'draft',
      meta_title: metaTitle || title,
      meta_description: metaDescription || (excerpt || content.substring(0, 160)),
      meta_keywords: metaKeywords || tags || []
    };

    const { data: blog, error } = await supabase
      .from('blogs')
      .insert(blogData)
      .select()
      .single();

    if (error) {
      console.error("Error creating blog:", error);
      return c.json({ success: false, error: error.message }, 500);
    }

    return c.json({ success: true, blog });
  } catch (error) {
    console.error("Error creating blog:", error);
    return c.json({ success: false, error: "Failed to create blog" }, 500);
  }
});

// UPDATE blog post (Admin only)
app.put("/make-server-b1497bc1/admin/blogs/:id", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    const { authenticated } = await verifyAdmin(authHeader);
    
    if (!authenticated) {
      return c.json({ success: false, error: "Unauthorized - Admin access required" }, 401);
    }

    const id = c.req.param('id');
    const body = await c.req.json();
    const { title, slug, content, excerpt, tags, coverImage, status, metaTitle, metaDescription, metaKeywords } = body;

    const supabase = getSupabaseClient(true);

    // Get existing blog
    const { data: existingBlog, error: fetchError } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();
    
    if (fetchError || !existingBlog) {
      return c.json({ success: false, error: "Blog not found" }, 404);
    }

    // If slug is changing, check if new slug already exists
    if (slug && slug !== existingBlog.slug) {
      const { data: duplicateSlug } = await supabase
        .from('blogs')
        .select('id')
        .eq('slug', slug)
        .neq('id', id)
        .single();
      
      if (duplicateSlug) {
        return c.json({ success: false, error: "Slug already exists. Please use a different slug." }, 400);
      }
    }

    const wasPublished = existingBlog.status === 'published';
    const isNowPublished = status === 'published';

    const updateData: any = {
      title: title || existingBlog.title,
      slug: slug || existingBlog.slug,
      content: content || existingBlog.content,
      excerpt: excerpt || existingBlog.excerpt,
      tags: tags !== undefined ? tags : existingBlog.tags,
      cover_image: coverImage !== undefined ? coverImage : existingBlog.cover_image,
      status: status || existingBlog.status,
      meta_title: metaTitle || existingBlog.meta_title,
      meta_description: metaDescription || existingBlog.meta_description,
      meta_keywords: metaKeywords || existingBlog.meta_keywords,
    };

    // Set publishedDate only when first published
    if (!wasPublished && isNowPublished) {
      updateData.published_date = new Date().toISOString();
    }

    const { data: blog, error } = await supabase
      .from('blogs')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error("Error updating blog:", error);
      return c.json({ success: false, error: error.message }, 500);
    }

    return c.json({ success: true, blog });
  } catch (error) {
    console.error("Error updating blog:", error);
    return c.json({ success: false, error: "Failed to update blog" }, 500);
  }
});

// DELETE blog post (Admin only)
app.delete("/make-server-b1497bc1/admin/blogs/:id", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    const { authenticated } = await verifyAdmin(authHeader);
    
    if (!authenticated) {
      return c.json({ success: false, error: "Unauthorized - Admin access required" }, 401);
    }

    const id = c.req.param('id');
    const supabase = getSupabaseClient(true);
    
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Error deleting blog:", error);
      return c.json({ success: false, error: error.message }, 500);
    }

    return c.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return c.json({ success: false, error: "Failed to delete blog" }, 500);
  }
});

// ==================== AUTH ENDPOINTS ====================

// Admin login endpoint
app.post("/make-server-b1497bc1/admin/login", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body;

    if (!email || !password) {
      return c.json({ success: false, error: "Email and password are required" }, 400);
    }

    const supabase = getSupabaseClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      console.error("Login error:", error);
      return c.json({ success: false, error: "Invalid credentials" }, 401);
    }

    return c.json({ 
      success: true, 
      accessToken: data.session.access_token,
      user: data.user
    });
  } catch (error) {
    console.error("Error during login:", error);
    return c.json({ success: false, error: "Login failed" }, 500);
  }
});

// Verify admin session
app.get("/make-server-b1497bc1/admin/verify", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    const { authenticated, userId } = await verifyAdmin(authHeader);
    
    if (!authenticated) {
      return c.json({ success: false, error: "Unauthorized" }, 401);
    }

    return c.json({ success: true, userId });
  } catch (error) {
    console.error("Error verifying admin:", error);
    return c.json({ success: false, error: "Verification failed" }, 500);
  }
});

Deno.serve(app.fetch);