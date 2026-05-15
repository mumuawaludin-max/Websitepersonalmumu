# 📚 Quick Reference Guide - Kak Mumu Website

## 🗂️ File Structure Overview

```
/src/app/
├── App.tsx                          # Main application
├── routes.ts                        # React Router config
│
├── components/
│   ├── RuangKolaborasi.tsx         # Services section
│   ├── BlogSection.tsx             # Public blog display
│   ├── AdminPanel.tsx              # Admin blog management
│   ├── FloatingContactButton.tsx   # Floating CTA button
│   ├── TimelineSection.tsx         # About me timeline
│   ├── SEOHead.tsx                 # SEO meta management
│   └── figma/
│       └── ImageWithFallback.tsx   # Image component
│
├── utils/
│   ├── constants.ts                # Static data & config
│   └── helpers.ts                  # Utility functions
│
└── hooks/
    └── useScrollManager.ts         # Scroll state management
```

---

## 🎯 Common Tasks

### **Update Hero Text**
**File:** `/src/app/App.tsx`
**Line:** ~1280
```typescript
<p className="...">
  Your new text here
</p>
```

### **Add New Event**
**File:** `/src/app/utils/constants.ts`
```typescript
export const UPCOMING_EVENTS = [
  {
    id: 4,
    title: 'Your Event Title',
    description: 'Event description',
    date: 'Jul',
    day: '25',
    fullDate: '2026-07-25',
    time: '09:00 - 12:00 WIB',
    location: 'Venue Name',
    category: 'Workshop',
    color: 'from-blue-500 to-blue-600',
    preTestUrl: 'https://forms.gle/...',
    worksheetUrl: 'https://drive.google.com/...',
  },
] as const;
```

### **Update SEO Meta**
**File:** `/src/app/utils/constants.ts`
```typescript
export const SEO_META = {
  title: 'Your New Title',
  description: 'Your description',
  keywords: 'keyword1, keyword2, keyword3',
} as const;
```

### **Add Media Coverage**
**File:** `/src/app/utils/constants.ts`

For Videos:
```typescript
export const MEDIA_VIDEOS = [
  {
    id: 4,
    youtubeId: 'VIDEO_ID_HERE',
    title: 'Video Title',
    channel: 'Channel Name',
    logo: logoImportName,
  },
] as const;
```

For Articles:
```typescript
export const MEDIA_ARTICLES = [
  {
    id: 4,
    title: 'Article Title',
    publisher: 'Publisher Name',
    url: 'https://...',
    logo: logoImportName,
  },
] as const;
```

### **Change Colors**
**Primary Colors (Global Search & Replace):**
- `#0a282e` → Dark teal background
- `#dac5a7` → Cream/beige accent
- `#c9b396` → Darker cream hover

**Search for:** `bg-[#0a282e]` or `text-[#dac5a7]`

---

## 🛠️ Utility Functions

### **Date & Time**
```typescript
import { calculateDaysRemaining, formatDate } from './utils/helpers';

const daysLeft = calculateDaysRemaining('2026-04-15'); // 27
const formatted = formatDate('2026-04-15'); // "15 April 2026"
```

### **Text Processing**
```typescript
import { generateSlug, truncateText } from './utils/helpers';

const slug = generateSlug('My Blog Post Title'); // "my-blog-post-title"
const short = truncateText('Long text...', 100); // "Long text..."
```

### **Clipboard**
```typescript
import { copyToClipboard } from './utils/helpers';

const success = await copyToClipboard('Text to copy');
if (success) console.log('Copied!');
```

### **Scroll**
```typescript
import { smoothScrollTo } from './utils/helpers';

smoothScrollTo('kontak'); // Scrolls to #kontak
```

### **Social Sharing**
```typescript
import { getShareUrls } from './utils/helpers';

const urls = getShareUrls(
  'https://kakmumu.com/blog/post',
  'Blog Post Title'
);

// urls.whatsapp, urls.facebook, urls.twitter, urls.linkedin
```

---

## 🎨 Design System

### **Font Families**
```css
font-['Montserrat:Regular',sans-serif]
font-['Montserrat:Medium',sans-serif]
font-['Montserrat:SemiBold',sans-serif]
font-['Montserrat:Bold',sans-serif]
font-['Montserrat:ExtraBold',sans-serif]
```

### **Font Sizes (Responsive)**
```typescript
text-[11px]           // Mobile minimum
text-[14px] md:text-[16px]  // Body text
text-[18px] md:text-[22px]  // Subheading
text-[24px] md:text-[32px]  // Section heading
text-[32px] md:text-[42px] lg:text-[52px] // Hero heading
```

### **Spacing Scale**
```typescript
gap-3  gap-6  gap-8  gap-12     // Gaps
p-4    p-6    p-8    p-12       // Padding
my-4   my-8   my-12  my-16      // Margin vertical
py-16  md:py-24                 // Section padding
```

### **Border Radius**
```typescript
rounded-lg    // 8px
rounded-xl    // 12px
rounded-2xl   // 16px
rounded-3xl   // 24px
rounded-full  // Circle/pill
```

### **Shadows**
```typescript
shadow-lg         // Default shadow
shadow-xl         // Large shadow
shadow-2xl        // Extra large shadow
```

---

## 🔧 Custom Hooks

### **useScrollManager**
```typescript
import { useScrollManager } from './hooks/useScrollManager';

function MyComponent() {
  const { scrollY, activeSection, scrollToSection } = useScrollManager();

  return (
    <button onClick={() => scrollToSection('kontak')}>
      Contact Us
    </button>
  );
}
```

**Returns:**
- `scrollY: number` - Current scroll position
- `activeSection: string` - Current active section ID
- `setActiveSection: (id: string) => void` - Manual setter
- `scrollToSection: (id: string) => void` - Smooth scroll

---

## 📱 Responsive Breakpoints

```typescript
// Mobile first approach
className="..."                    // Mobile (< 768px)
className="md:..."                 // Tablet (≥ 768px)
className="lg:..."                 // Desktop (≥ 1024px)
className="xl:..."                 // Large Desktop (≥ 1280px)

// Common patterns
"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
"text-[14px] md:text-[16px] lg:text-[18px]"
"px-4 md:px-8 lg:px-16"
```

---

## 🎭 Common Patterns

### **Card with Hover Effect**
```typescript
<div className="group bg-white/10 rounded-2xl p-6 border border-white/20 
                hover:border-[#dac5a7]/60 hover:bg-white/15 
                transition-all duration-300 hover:scale-102">
  <h3 className="text-white group-hover:text-[#dac5a7] transition-colors">
    Title
  </h3>
</div>
```

### **CTA Button**
```typescript
<button className="px-8 py-4 bg-[#dac5a7] hover:bg-[#c9b396] 
                   text-[#0a282e] rounded-xl 
                   font-['Montserrat:SemiBold',sans-serif] 
                   transition-all hover:scale-105 shadow-lg">
  Click Me
</button>
```

### **Section Container**
```typescript
<section className="min-h-screen bg-[#0a282e] py-16 md:py-24">
  <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
    {/* Content */}
  </div>
</section>
```

### **Gradient Background**
```typescript
<div className="bg-gradient-to-br from-[#dac5a7] to-[#c9b396]">
  {/* Content */}
</div>
```

### **Backdrop Blur Glass Effect**
```typescript
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
  {/* Content */}
</div>
```

---

## 🚀 Performance Tips

### **Image Optimization**
```typescript
// Use appropriate sizes
<img 
  src={image} 
  alt="Description"
  loading="lazy"           // Lazy load
  width="1200"             // Set dimensions
  height="800"
  className="object-cover"
/>
```

### **Debounce Search**
```typescript
import { debounce } from './utils/helpers';

const debouncedSearch = debounce((query: string) => {
  // Search logic
}, 300);
```

### **Memoize Expensive Calculations**
```typescript
import { useMemo } from 'react';

const filteredData = useMemo(() => {
  return data.filter(item => /* condition */);
}, [data, dependency]);
```

---

## 🐛 Debugging

### **Check Active Section**
```typescript
// Add to App.tsx temporarily
console.log('Active Section:', activeSection);
```

### **Check Scroll Position**
```typescript
console.log('Scroll Y:', scrollY);
```

### **Inspect Element Positions**
```typescript
const element = document.getElementById('section-id');
console.log(element?.getBoundingClientRect());
```

---

## 📦 Dependencies

### **Core:**
- React 18+
- React Router (react-router, not react-router-dom)
- TypeScript

### **UI:**
- Tailwind CSS v4
- Lucide React (icons)
- Motion (animations) - optional

### **Backend:**
- Supabase Client
- Supabase Edge Functions (Deno)

---

## 🔐 Environment Variables

```env
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

**Access in Frontend:**
```typescript
import { projectId, publicAnonKey } from '/utils/supabase/info';
```

**Access in Backend:**
```typescript
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
```

---

## 📝 Blog System

### **Public Access:**
```
GET /make-server-b1497bc1/blogs
GET /make-server-b1497bc1/blogs/:slug
```

### **Admin Access:**
```
POST /make-server-b1497bc1/admin/login
GET  /make-server-b1497bc1/admin/blogs
POST /make-server-b1497bc1/admin/blogs
PUT  /make-server-b1497bc1/admin/blogs/:id
DELETE /make-server-b1497bc1/admin/blogs/:id
```

### **Create Blog Post:**
```typescript
const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-b1497bc1/admin/blogs`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      title: 'Blog Title',
      slug: 'blog-slug',
      content: 'Full content...',
      excerpt: 'Short description',
      tags: ['Tag1', 'Tag2'],
      coverImage: 'https://...',
      status: 'published',
    }),
  }
);
```

---

## 🎯 Quick Wins

### **Change Hero Background Color:**
**Find:** `bg-[#0a282e]` in hero section
**Replace with:** Your color

### **Change Accent Color:**
**Find:** `bg-[#dac5a7]` globally
**Replace with:** Your accent color

### **Add Instagram Link:**
**Find:** `@mumuawaludin`
**Replace with:** Your handle

### **Update Contact Form Action:**
**File:** `/src/app/App.tsx`
**Find:** `handleSubmit` function
**Update:** WhatsApp URL or email action

---

## 📞 Support

### **Common Issues:**

**Issue:** Text overlapping in hero section
**Fix:** Adjust `bottom` value in hero text div

**Issue:** Navbar not highlighting correctly
**Fix:** Check section IDs match exactly

**Issue:** Floating button not showing
**Fix:** Check z-index and position:fixed

**Issue:** Images not loading
**Fix:** Verify import paths and figma:asset URLs

---

## ✅ Checklist Before Deploy

- [ ] All images optimized
- [ ] All links working
- [ ] SEO meta tags set
- [ ] Environment variables configured
- [ ] Blog admin user created
- [ ] Contact form tested
- [ ] Mobile responsive checked
- [ ] Browser compatibility tested
- [ ] Performance tested (Lighthouse)
- [ ] Accessibility checked

---

**Last Updated:** March 19, 2026
**Version:** 2.0 (Optimized)
