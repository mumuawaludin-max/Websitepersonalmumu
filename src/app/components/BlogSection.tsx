import { useState, useEffect } from 'react';
import { BookOpen, Calendar, Tag, ArrowRight, Search, X } from 'lucide-react';
import { projectId } from '/utils/supabase/info';

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  tags: string[];
  coverImage: string;
  views: number;
}

export function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const apiUrl = `https://${projectId}.supabase.co/functions/v1/make-server-b1497bc1`;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/blogs`);
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get all unique tags
  const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags)));

  // Filter blogs
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || blog.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  // Blog Detail View
  if (selectedBlog) {
    return (
      <section id="blog" className="min-h-screen bg-[#0a282e] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          {/* Back Button */}
          <button
            onClick={() => setSelectedBlog(null)}
            className="flex items-center gap-2 text-[#dac5a7] hover:text-white mb-8 transition-colors font-['Plus_Jakarta_Sans',sans-serif]"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Kembali ke Blog
          </button>

          {/* Cover Image */}
          {selectedBlog.coverImage && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img
                src={selectedBlog.coverImage}
                alt={selectedBlog.title}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
          )}

          {/* Blog Header */}
          <div className="mb-8">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[32px] md:text-[48px] text-white mb-4 leading-tight">
              {selectedBlog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(selectedBlog.publishedDate)}
              </div>
              <span>•</span>
              <span>{selectedBlog.author}</span>
            </div>

            {selectedBlog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedBlog.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#dac5a7]/20 text-[#dac5a7] text-sm rounded-full font-['Plus_Jakarta_Sans',sans-serif]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Blog Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-white/90 leading-relaxed font-['Plus_Jakarta_Sans',sans-serif] whitespace-pre-wrap"
              style={{ lineHeight: '1.8' }}
            >
              {selectedBlog.content}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/60 font-['Plus_Jakarta_Sans',sans-serif] mb-4">
              Bagikan artikel ini:
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(selectedBlog.title + ' - ' + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-['Plus_Jakarta_Sans',sans-serif] text-sm"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-['Plus_Jakarta_Sans',sans-serif] text-sm"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedBlog.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors font-['Plus_Jakarta_Sans',sans-serif] text-sm"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Blog List View
  return (
    <section id="blog" className="bg-[#0a282e] section-block border-t border-white/[0.06]">
      <div className="section-wrap !max-w-[1320px]">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]/40" />
            <span className="eyebrow text-[#dac5a7]/60">Tulisan &amp; Wawasan</span>
            <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]/40" />
          </div>
          <h2 className="t-h1 text-white mb-4">
            Blog &amp; Artikel
          </h2>
          <p className="t-body text-white/55 max-w-2xl mx-auto">
            Temukan tips parenting digital, solusi kecanduan gadget, dan strategi komunikasi keluarga yang efektif
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari artikel..."
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] transition-colors font-['Plus_Jakarta_Sans',sans-serif]"
            />
          </div>

          {/* Tag Filter */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full font-['Plus_Jakarta_Sans',sans-serif] text-sm transition-all ${
                  selectedTag === null
                    ? 'bg-[#dac5a7] text-[#0a282e]'
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                Semua
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full font-['Plus_Jakarta_Sans',sans-serif] text-sm transition-all flex items-center gap-2 ${
                    selectedTag === tag
                      ? 'bg-[#dac5a7] text-[#0a282e]'
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-[#dac5a7]/30 border-t-[#dac5a7] rounded-full animate-spin"></div>
            <p className="text-white/60 mt-4 font-['Plus_Jakarta_Sans',sans-serif]">Memuat artikel...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/60 font-['Plus_Jakarta_Sans',sans-serif]">
              {searchQuery || selectedTag ? 'Tidak ada artikel yang cocok dengan pencarian' : 'Belum ada artikel yang dipublikasikan'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-[#dac5a7]/50 transition-all hover:transform hover:scale-[1.02] cursor-pointer"
                onClick={() => setSelectedBlog(blog)}
              >
                {/* Cover Image */}
                {blog.coverImage ? (
                  <div className="h-48 overflow-hidden bg-white/5">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-[#dac5a7]/20 to-[#dac5a7]/5 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-[#dac5a7]/40" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-white/40 text-sm mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
                    <Calendar className="w-4 h-4" />
                    {formatDate(blog.publishedDate)}
                  </div>

                  {/* Title */}
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] md:text-[20px] text-white mb-3 leading-tight line-clamp-2 group-hover:text-[#dac5a7] transition-colors">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/70 text-sm mb-4 line-clamp-3 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  {blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#dac5a7]/10 text-[#dac5a7] text-xs rounded font-['Plus_Jakarta_Sans',sans-serif]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-[#dac5a7] group-hover:gap-3 transition-all font-['Plus_Jakarta_Sans',sans-serif] text-sm">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
