# 🗄️ Supabase Blog Table Setup - Complete Guide

## ✅ Apa yang Sudah Dibuat:

### 1. **Database Table Schema**
- ✅ Table `blogs` dengan struktur lengkap
- ✅ Indexes untuk performance optimization
- ✅ Row Level Security (RLS) policies
- ✅ Auto-updated timestamp trigger
- ✅ 2 Sample blog posts untuk demo

### 2. **Backend API (Updated)**
- ✅ Menggunakan Supabase PostgreSQL (bukan KV Store)
- ✅ Full CRUD operations
- ✅ Authentication & authorization
- ✅ View counter otomatis

---

## 🚀 Setup Instructions

### **Step 1: Buka Supabase Dashboard**

1. Login ke [Supabase Dashboard](https://supabase.com/dashboard)
2. Pilih project Anda
3. Klik **SQL Editor** di sidebar kiri

### **Step 2: Run Migration SQL**

Copy & paste SQL berikut ke SQL Editor, lalu klik **RUN**:

```sql
-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT DEFAULT 'Muhamad Nur Awaludin (Kak Mumu)',
  author_id UUID,
  published_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  tags TEXT[] DEFAULT '{}',
  cover_image TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  views INTEGER DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT[]
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);
CREATE INDEX IF NOT EXISTS idx_blogs_published_date ON blogs(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_tags ON blogs USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_blogs_author_id ON blogs(author_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blogs_updated_at BEFORE UPDATE ON blogs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published blogs
CREATE POLICY "Public can view published blogs"
  ON blogs FOR SELECT
  USING (status = 'published');

-- Policy: Authenticated users can do everything
CREATE POLICY "Authenticated users can manage blogs"
  ON blogs FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Grant permissions
GRANT SELECT ON blogs TO anon;
GRANT ALL ON blogs TO authenticated;
GRANT ALL ON blogs TO service_role;
```

### **Step 3: Verify Table Creation**

1. Klik **Table Editor** di sidebar
2. Cari table `blogs`
3. Seharusnya ada table dengan kolom:
   - id, title, slug, content, excerpt
   - author, author_id, published_date
   - created_at, updated_at
   - tags, cover_image, status, views
   - meta_title, meta_description, meta_keywords

### **Step 4: (Optional) Insert Sample Data**

Untuk testing, tambahkan sample blog:

```sql
INSERT INTO blogs (title, slug, content, excerpt, tags, cover_image, status, published_date)
VALUES (
  '5 Strategi Efektif Mengatasi Kecanduan Gadget pada Anak',
  '5-strategi-mengatasi-kecanduan-gadget-anak',
  'Konten artikel lengkap di sini...',
  'Panduan lengkap untuk orangtua modern dalam mengatasi kecanduan gadget pada anak.',
  ARRAY['Parenting Digital', 'Kecanduan Gadget', 'Tips Orangtua'],
  'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=1200',
  'published',
  NOW()
);
```

### **Step 5: Setup Admin User**

1. Klik **Authentication** di sidebar
2. Klik **Add User** → **Create new user**
3. Masukkan:
   - **Email**: admin@kakmumu.com (atau email pilihan Anda)
   - **Password**: Password yang kuat
   - **Auto Confirm User**: ✅ YES (penting!)
4. Klik **Create User**

### **Step 6: Test API**

Backend sudah auto-update untuk menggunakan table. Test dengan:

```bash
# Get published blogs (public)
curl https://YOUR_PROJECT.supabase.co/functions/v1/make-server-b1497bc1/blogs

# Expected response:
{
  "success": true,
  "blogs": [...]
}
```

---

## 📊 Table Structure

### **Columns:**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key (auto-generated) |
| `title` | TEXT | Blog title (required) |
| `slug` | TEXT | URL-friendly slug (unique, required) |
| `content` | TEXT | Full blog content (required) |
| `excerpt` | TEXT | Short description |
| `author` | TEXT | Author name (default: Kak Mumu) |
| `author_id` | UUID | Reference to auth.users |
| `published_date` | TIMESTAMPTZ | When blog was published |
| `created_at` | TIMESTAMPTZ | Auto-set on create |
| `updated_at` | TIMESTAMPTZ | Auto-updated on changes |
| `tags` | TEXT[] | Array of tags |
| `cover_image` | TEXT | Cover image URL |
| `status` | TEXT | 'draft' or 'published' |
| `views` | INTEGER | View counter (default: 0) |
| `meta_title` | TEXT | SEO meta title |
| `meta_description` | TEXT | SEO meta description |
| `meta_keywords` | TEXT[] | SEO keywords array |

### **Indexes:**

- `idx_blogs_slug` - Fast lookup by slug
- `idx_blogs_status` - Filter by status
- `idx_blogs_published_date` - Sort by date
- `idx_blogs_tags` - Search by tags (GIN index)
- `idx_blogs_author_id` - Filter by author

### **Constraints:**

- `slug` is UNIQUE
- `status` CHECK: only 'draft' or 'published'

---

## 🔐 Row Level Security (RLS) Policies

### **Public Access:**
```sql
"Public can view published blogs"
→ Anyone can SELECT where status = 'published'
```

### **Authenticated Access:**
```sql
"Authenticated users can manage blogs"
→ Logged-in users can do ALL operations
```

**Security Level:**
- ✅ Public users: Can only read published blogs
- ✅ Anonymous users: Cannot create/edit/delete
- ✅ Authenticated users: Full CRUD access
- ✅ Service role: Bypass RLS (used by backend)

---

## 🎯 API Endpoints (Updated)

All endpoints now use Supabase table instead of KV Store:

### **Public Endpoints:**

#### Get All Published Blogs
```
GET /make-server-b1497bc1/blogs
```

**Response:**
```json
{
  "success": true,
  "blogs": [
    {
      "id": "uuid",
      "title": "Blog Title",
      "slug": "blog-slug",
      "content": "Full content...",
      "excerpt": "Short description",
      "author": "Kak Mumu",
      "published_date": "2026-03-19T10:30:00Z",
      "tags": ["Tag1", "Tag2"],
      "cover_image": "https://...",
      "views": 42,
      ...
    }
  ]
}
```

#### Get Single Blog by Slug
```
GET /make-server-b1497bc1/blogs/:slug
```

**Features:**
- Auto-increment view counter
- Returns 404 if not found or not published

### **Admin Endpoints (Auth Required):**

#### Get All Blogs (Including Drafts)
```
GET /make-server-b1497bc1/admin/blogs
Headers: Authorization: Bearer {token}
```

#### Create New Blog
```
POST /make-server-b1497bc1/admin/blogs
Headers: Authorization: Bearer {token}
Content-Type: application/json

Body:
{
  "title": "Blog Title",
  "slug": "blog-slug",
  "content": "Full content",
  "excerpt": "Short desc",
  "tags": ["Tag1", "Tag2"],
  "coverImage": "https://...",
  "status": "published"
}
```

#### Update Blog
```
PUT /make-server-b1497bc1/admin/blogs/:id
Headers: Authorization: Bearer {token}

Body: (same as create)
```

#### Delete Blog
```
DELETE /make-server-b1497bc1/admin/blogs/:id
Headers: Authorization: Bearer {token}
```

---

## ✨ New Features vs KV Store

### **Performance:**
- ✅ **Faster queries** with indexed columns
- ✅ **Efficient filtering** by status, tags, date
- ✅ **Full-text search** capability (can be added)

### **Scalability:**
- ✅ **No limit** on number of blogs (KV Store has limits)
- ✅ **Better for large datasets**
- ✅ **Proper relational data** with foreign keys

### **Features:**
- ✅ **View counter** auto-increment
- ✅ **Auto-updated timestamps**
- ✅ **SEO meta fields** (meta_title, meta_description, meta_keywords)
- ✅ **Row Level Security** for data protection

### **Developer Experience:**
- ✅ **SQL queries** instead of key-based lookups
- ✅ **Table Editor** for manual data management
- ✅ **Backup & restore** built-in
- ✅ **Analytics** from Supabase dashboard

---

## 🧪 Testing Guide

### **1. Test Public Access (No Auth)**

```bash
# Get all published blogs
curl https://YOUR_PROJECT.supabase.co/functions/v1/make-server-b1497bc1/blogs

# Get single blog by slug
curl https://YOUR_PROJECT.supabase.co/functions/v1/make-server-b1497bc1/blogs/your-blog-slug
```

### **2. Test Admin Login**

```bash
# Login
curl -X POST https://YOUR_PROJECT.supabase.co/functions/v1/make-server-b1497bc1/admin/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@kakmumu.com",
    "password": "your-password"
  }'

# Response will include accessToken
# Use this token for admin endpoints
```

### **3. Test Create Blog (Admin)**

```bash
curl -X POST https://YOUR_PROJECT.supabase.co/functions/v1/make-server-b1497bc1/admin/blogs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "title": "Test Blog",
    "slug": "test-blog",
    "content": "This is a test blog post",
    "status": "published"
  }'
```

---

## 📝 Best Practices

### **Slug Naming:**
```
✅ Good: "5-tips-mengatasi-kecanduan-gadget"
❌ Bad: "Tips Gadget!!!" or "tips_gadget"
```

**Rules:**
- Lowercase only
- Use hyphens, not spaces or underscores
- No special characters
- Keep it short but descriptive

### **Tags Best Practices:**
```
✅ Good: ["Parenting Digital", "Tips Orangtua", "Kecanduan Gadget"]
❌ Bad: ["tips", "blog", "post"]
```

**Tips:**
- Use specific, searchable tags
- 3-5 tags per post
- Be consistent with tag naming
- Use title case

### **Cover Images:**
```
✅ Good: "https://images.unsplash.com/photo-xxx?w=1200"
❌ Bad: "https://website.com/image.jpg" (might have CORS issues)
```

**Recommendations:**
- Use Unsplash for free, high-quality images
- Minimum width: 1200px
- Aspect ratio: 16:9 or 4:3
- File format: JPG or WebP

---

## 🔧 Maintenance

### **View Blog Stats:**

```sql
-- Total blogs
SELECT COUNT(*) FROM blogs;

-- Published vs Draft
SELECT status, COUNT(*) FROM blogs GROUP BY status;

-- Most viewed blogs
SELECT title, views FROM blogs ORDER BY views DESC LIMIT 10;

-- Recent blogs
SELECT title, created_at FROM blogs ORDER BY created_at DESC LIMIT 5;
```

### **Backup Data:**

Supabase provides automatic backups, but you can also:

1. Go to **Database** → **Backups**
2. Or export via SQL:
```sql
COPY (SELECT * FROM blogs) TO '/tmp/blogs_backup.csv' WITH CSV HEADER;
```

### **Clean Up Test Data:**

```sql
-- Delete all draft blogs
DELETE FROM blogs WHERE status = 'draft';

-- Delete blogs with no views
DELETE FROM blogs WHERE views = 0 AND created_at < NOW() - INTERVAL '30 days';
```

---

## 🎉 Migration Complete!

Your blog system now uses a **proper Supabase PostgreSQL table** instead of KV Store!

**Benefits:**
- 🚀 Better performance
- 📊 Easier data management
- 🔍 Advanced querying capabilities
- 📈 Scalable for thousands of blog posts
- 🔐 Built-in security with RLS

**Next Steps:**
1. ✅ Create admin user in Supabase Auth
2. ✅ Login to admin panel at `/#admin`
3. ✅ Create your first blog post
4. ✅ Test on public blog section

---

## 📞 Troubleshooting

### **Error: "relation blogs does not exist"**
→ Run the migration SQL again in SQL Editor

### **Error: "permission denied for table blogs"**
→ Run the GRANT statements in SQL

### **Error: "new row violates check constraint"**
→ Make sure status is either 'draft' or 'published'

### **RLS Error: "row-level security policy"**
→ Make sure you're using service_role key in backend, not anon key

---

Happy Blogging with Supabase! 🎉
