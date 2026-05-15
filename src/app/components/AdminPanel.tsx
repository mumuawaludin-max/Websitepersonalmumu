import { useState, useEffect } from 'react';
import { Lock, LogOut, Plus, Edit2, Trash2, Eye, FileText, Check, X } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedDate: string | null;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  coverImage: string;
  status: 'draft' | 'published';
  views: number;
}

export function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  
  // Editor states
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [saveError, setSaveError] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const apiUrl = `https://${projectId}.supabase.co/functions/v1/make-server-b1497bc1`;

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem('adminToken');
    if (token) {
      verifyToken(token);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchBlogs();
    }
  }, [isAuthenticated]);

  // Auto-generate slug from title
  useEffect(() => {
    if (title && !editingBlog) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setSlug(generatedSlug);
    }
  }, [title, editingBlog]);

  const verifyToken = async (token: string) => {
    try {
      const response = await fetch(`${apiUrl}/admin/verify`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('adminToken');
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('adminToken');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success && data.accessToken) {
        localStorage.setItem('adminToken', data.accessToken);
        setIsAuthenticated(true);
        setPassword('');
      } else {
        // More helpful error messages
        let errorMsg = data.error || 'Login failed';
        
        if (errorMsg.includes('Invalid credentials') || errorMsg.includes('Invalid login')) {
          errorMsg = 'Email atau password salah. Pastikan user sudah dibuat di Supabase Auth (lihat ADMIN_LOGIN_FIX.md).';
        } else if (errorMsg.includes('Email not confirmed')) {
          errorMsg = 'Email belum dikonfirmasi. Aktifkan email di Supabase Dashboard.';
        }
        
        setLoginError(errorMsg);
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Network error. Periksa koneksi internet atau API URL.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setBlogs([]);
    setShowEditor(false);
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${apiUrl}/admin/blogs`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewBlog = () => {
    resetEditor();
    setShowEditor(true);
  };

  const handleEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setTitle(blog.title);
    setSlug(blog.slug);
    setContent(blog.content);
    setExcerpt(blog.excerpt);
    setTags(blog.tags);
    setCoverImage(blog.coverImage);
    setStatus(blog.status);
    setShowEditor(true);
  };

  const handleDeleteBlog = async (blogId: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${apiUrl}/admin/blogs/${blogId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        fetchBlogs();
      } else {
        alert(data.error || 'Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Network error. Please try again.');
    }
  };

  const resetEditor = () => {
    setEditingBlog(null);
    setTitle('');
    setSlug('');
    setContent('');
    setExcerpt('');
    setTags([]);
    setTagInput('');
    setCoverImage('');
    setStatus('draft');
    setSaveError('');
    setSaveSuccess(false);
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError('');
    setSaveSuccess(false);
    setLoading(true);

    try {
      const token = localStorage.getItem('adminToken');
      const blogData = {
        title,
        slug,
        content,
        excerpt: excerpt || content.substring(0, 160),
        tags,
        coverImage,
        status,
      };

      const url = editingBlog 
        ? `${apiUrl}/admin/blogs/${editingBlog.id}`
        : `${apiUrl}/admin/blogs`;
      
      const method = editingBlog ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();

      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => {
          setShowEditor(false);
          resetEditor();
          fetchBlogs();
        }, 1500);
      } else {
        setSaveError(data.error || 'Failed to save blog');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      setSaveError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a282e] to-[#0a3d4a] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-[#dac5a7] p-4 rounded-2xl">
              <Lock className="w-8 h-8 text-[#0a282e]" />
            </div>
          </div>
          
          <h1 className="font-['Montserrat:Bold',sans-serif] text-3xl text-white text-center mb-2">
            Admin Panel
          </h1>
          <p className="text-white/60 text-center mb-8 font-['Montserrat:Medium',sans-serif]">
            Login to manage blog posts
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-white/80 mb-2 font-['Montserrat:Medium',sans-serif] text-sm">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] transition-colors font-['Montserrat:Regular',sans-serif]"
                placeholder="admin@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 font-['Montserrat:Medium',sans-serif] text-sm">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] transition-colors font-['Montserrat:Regular',sans-serif]"
                placeholder="••••••••"
                required
              />
            </div>

            {loginError && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-sm font-['Montserrat:Medium',sans-serif]">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#dac5a7] hover:bg-[#c9b396] text-[#0a282e] px-6 py-3 rounded-xl font-['Montserrat:Bold',sans-serif] font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Editor Screen
  if (showEditor) {
    return (
      <div className="min-h-screen bg-[#0a282e] p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-['Montserrat:Bold',sans-serif] text-3xl text-white">
              {editingBlog ? 'Edit Blog Post' : 'New Blog Post'}
            </h1>
            <button
              onClick={() => {
                setShowEditor(false);
                resetEditor();
              }}
              className="p-2 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Editor Form */}
          <form onSubmit={handleSaveBlog} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-white/80 mb-2 font-['Montserrat:SemiBold',sans-serif]">
                Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] transition-colors font-['Montserrat:Medium',sans-serif]"
                placeholder="Enter blog title"
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-white/80 mb-2 font-['Montserrat:SemiBold',sans-serif]">
                Slug * (URL-friendly)
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] transition-colors font-['Montserrat:Medium',sans-serif]"
                placeholder="blog-post-url-slug"
                required
              />
              <p className="text-white/40 text-sm mt-1 font-['Montserrat:Regular',sans-serif]">
                Preview: /blog/{slug || 'your-slug'}
              </p>
            </div>

            {/* Cover Image URL */}
            <div>
              <label className="block text-white/80 mb-2 font-['Montserrat:SemiBold',sans-serif]">
                Cover Image URL
              </label>
              <input
                type="url"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] transition-colors font-['Montserrat:Medium',sans-serif]"
                placeholder="https://images.unsplash.com/..."
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-white/80 mb-2 font-['Montserrat:SemiBold',sans-serif]">
                Excerpt (Short Description)
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] transition-colors font-['Montserrat:Medium',sans-serif] resize-none"
                placeholder="Brief description for blog list view..."
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-white/80 mb-2 font-['Montserrat:SemiBold',sans-serif]">
                Content * (Markdown supported)
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={15}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] transition-colors font-['Montserrat:Medium',sans-serif] resize-y"
                placeholder="Write your blog content here..."
                required
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-white/80 mb-2 font-['Montserrat:SemiBold',sans-serif]">
                Tags
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] transition-colors font-['Montserrat:Medium',sans-serif]"
                  placeholder="Add a tag and press Enter"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-[#dac5a7]/20 text-[#dac5a7] rounded-xl hover:bg-[#dac5a7]/30 transition-colors font-['Montserrat:SemiBold',sans-serif]"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-[#dac5a7]/20 text-[#dac5a7] rounded-full text-sm font-['Montserrat:Medium',sans-serif]"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-white transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-white/80 mb-2 font-['Montserrat:SemiBold',sans-serif]">
                Status
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="draft"
                    checked={status === 'draft'}
                    onChange={(e) => setStatus(e.target.value as 'draft')}
                    className="w-4 h-4 text-[#dac5a7]"
                  />
                  <span className="text-white font-['Montserrat:Medium',sans-serif]">Draft</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="published"
                    checked={status === 'published'}
                    onChange={(e) => setStatus(e.target.value as 'published')}
                    className="w-4 h-4 text-[#dac5a7]"
                  />
                  <span className="text-white font-['Montserrat:Medium',sans-serif]">Published</span>
                </label>
              </div>
            </div>

            {/* Error/Success Messages */}
            {saveError && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl font-['Montserrat:Medium',sans-serif]">
                {saveError}
              </div>
            )}

            {saveSuccess && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-xl font-['Montserrat:Medium',sans-serif] flex items-center gap-2">
                <Check className="w-5 h-5" />
                Blog saved successfully! Redirecting...
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => {
                  setShowEditor(false);
                  resetEditor();
                }}
                className="flex-1 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors font-['Montserrat:SemiBold',sans-serif]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-[#dac5a7] text-[#0a282e] rounded-xl hover:bg-[#c9b396] transition-colors font-['Montserrat:Bold',sans-serif] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : editingBlog ? 'Update Blog' : 'Create Blog'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard Screen
  return (
    <div className="min-h-screen bg-[#0a282e] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-['Montserrat:Bold',sans-serif] text-3xl text-white mb-2">
              Blog Management
            </h1>
            <p className="text-white/60 font-['Montserrat:Medium',sans-serif]">
              {blogs.length} blog post{blogs.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleNewBlog}
              className="flex items-center gap-2 px-6 py-3 bg-[#dac5a7] text-[#0a282e] rounded-xl hover:bg-[#c9b396] transition-colors font-['Montserrat:Bold',sans-serif] font-bold"
            >
              <Plus className="w-5 h-5" />
              New Blog
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors font-['Montserrat:SemiBold',sans-serif]"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>

        {/* Blog List */}
        {loading && blogs.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-[#dac5a7]/30 border-t-[#dac5a7] rounded-full animate-spin"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/60 font-['Montserrat:Medium',sans-serif]">
              No blog posts yet. Create your first one!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-[#dac5a7]/50 transition-all group"
              >
                {blog.coverImage && (
                  <div className="h-48 overflow-hidden bg-white/5">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-['Montserrat:SemiBold',sans-serif] ${
                      blog.status === 'published' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {blog.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                  </div>

                  <h3 className="font-['Montserrat:Bold',sans-serif] text-lg text-white mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-4 line-clamp-2 font-['Montserrat:Regular',sans-serif]">
                    {blog.excerpt}
                  </p>

                  {blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#dac5a7]/10 text-[#dac5a7] text-xs rounded font-['Montserrat:Medium',sans-serif]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditBlog(blog)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#dac5a7]/20 text-[#dac5a7] rounded-lg hover:bg-[#dac5a7]/30 transition-colors font-['Montserrat:SemiBold',sans-serif] text-sm"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(blog.id)}
                      className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}