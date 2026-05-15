// Constants and Static Data for Kak Mumu Website

export const FILTERS = [
  { id: 'semua', label: 'Semua' },
  { id: 'awards', label: 'Awards & Penghargaan' },
  { id: 'media', label: 'Liputan Media' },
] as const;

export const AWARDS = [
  // Semasa Kuliah
  { category: 'kuliah', title: 'Juara 1 Kompetisi Web Design Tingkat Nasional UNIKOM 2011' },
  { category: 'kuliah', title: 'Juara 1 Lomba Karya Tulis Ilmiah UNIKOM 2011' },
  { category: 'kuliah', title: 'Juara 3 GEMASTIK V 2012 - Lomba Aplikasi Berbasis Microsoft Tech' },
  { category: 'kuliah', title: 'Juara 1 Kompetisi Microsoft Imagine Cup 2013 Indonesia' },
  { category: 'kuliah', title: 'Best Student Award 2013 by Microsoft Indonesia' },
  { category: 'kuliah', title: 'Top 15 Imagine Cup Asia Pacific 2013 (Russia)' },
  // Kakatu Awards
  { category: 'kakatu', title: 'Kakatu sebagai "Best Edtech Startup" di Indonesia Millennial Summit 2017' },
  { category: 'kakatu', title: 'Kakatu Terpilih sebagai Top 50 EdTech Startup oleh QS APPLE 2018' },
  { category: 'kakatu', title: 'Kakatu Terpilih sebagai Top 8 Startup Social Impact di Startup Istanbul 2018 (Turkey)' },
  { category: 'kakatu', title: 'Kakatu Terpilih untuk Program GEN(D) - Pre-Acceleration Google Developers Launchpad 2019' },
  // Fammi Awards
  { category: 'fammi', title: 'Fammi masuk sebagai "Top 100 EdTech Indonesia" oleh HolonIQ 2021' },
  { category: 'fammi', title: 'Fammi terpilih masuk Google for Startups Accelerator: Southeast Asia 2021' },
] as const;

export const MEDIA_VIDEOS = [
  {
    id: 1,
    youtubeId: 'Vs-kLDaOzdc',
    title: 'Seminar Kesehatan Mental Remaja dan Dampak Kecanduan Gadget - Kompas TV Bandung',
    channel: 'Kompas TV',
    logo: '',
  },
  {
    id: 2,
    youtubeId: 'o_4OXBuOJnw',
    title: 'Wawancara Seputar Kecanduan Game Online pada Anak - NET TV',
    channel: 'NET TV',
    logo: '',
  },
  {
    id: 3,
    youtubeId: '9bOE0ZWj9w4',
    title: 'Workshop Literasi Digital untuk Orangtua dan Guru - DAAI TV',
    channel: 'DAAI TV',
    logo: '',
  },
] as const;

export const MEDIA_ARTICLES = [
  {
    id: 1,
    title: 'Tips Mengatasi Kecanduan Gadget pada Anak Usia Dini',
    publisher: 'Kumparan',
    url: 'https://kumparan.com/search/kak+mumu',
    logo: '',
  },
  {
    id: 2,
    title: 'Pentingnya Literasi Digital di Era Society 5.0',
    publisher: 'Tech in Asia',
    url: 'https://www.techinasia.com/search?query=digital+parenting+indonesia',
    logo: '',
  },
  {
    id: 3,
    title: 'Strategi Komunikasi Efektif dalam Keluarga Modern',
    publisher: 'Youngster',
    url: 'https://youngster.id/search?q=parenting+digital',
    logo: '',
  },
] as const;

export const UPCOMING_EVENTS = [
  {
    id: 1,
    title: 'Workshop Parenting Digital untuk Orangtua Milenial',
    description: 'Belajar strategi mendampingi anak di era digital dengan pendekatan komunikasi efektif.',
    date: 'Apr',
    day: '15',
    fullDate: '2026-04-15',
    time: '09:00 - 12:00 WIB',
    location: 'Aula Sekolah XYZ, Bandung',
    category: 'Workshop',
    color: 'from-blue-500 to-blue-600',
    preTestUrl: 'https://forms.gle/example1',
    worksheetUrl: 'https://drive.google.com/file/example1',
  },
  {
    id: 2,
    title: 'Seminar Kesehatan Mental Remaja',
    description: 'Memahami tantangan kesehatan mental remaja dan cara pendampingan yang tepat.',
    date: 'Mei',
    day: '20',
    fullDate: '2026-05-20',
    time: '13:00 - 16:00 WIB',
    location: 'Gedung Serbaguna ABC, Jakarta',
    category: 'Seminar',
    color: 'from-purple-500 to-purple-600',
    preTestUrl: 'https://forms.gle/example2',
    worksheetUrl: 'https://drive.google.com/file/example2',
  },
  {
    id: 3,
    title: 'Pelatihan Komunikasi BATIK untuk Guru',
    description: 'Teknik komunikasi Baik, Tegas, Informatif, dan Konsisten untuk pendidik.',
    date: 'Jun',
    day: '10',
    fullDate: '2026-06-10',
    time: '08:00 - 15:00 WIB',
    location: 'Hotel Merdeka, Surabaya',
    category: 'Training',
    color: 'from-teal-500 to-teal-600',
    preTestUrl: 'https://forms.gle/example3',
    worksheetUrl: 'https://drive.google.com/file/example3',
  },
] as const;

export const SEO_META = {
  title: 'Kak Mumu - Narasumber Parenting Digital, Kecanduan Gadget & Game | Trainer Komunikasi Keluarga',
  description: 'Narasumber parenting digital, kecanduan game, dan kecanduan HP dengan pengalaman 10+ tahun. Solusi praktis mengatasi screen time berlebihan, digital parenting, dan kesehatan mental keluarga di era digital. Dipercaya institusi di 50+ kota Indonesia.',
  keywords: 'narasumber parenting, narasumber kecanduan gadget, narasumber kecanduan game, digital parenting, kecanduan HP, screen time management, trainer komunikasi keluarga, kesehatan mental anak, anti bullying, literasi digital, parenting Indonesia, mengatasi kecanduan game anak, solusi kecanduan HP, pendampingan orangtua, narasumber pendidikan, kecanduan gadget anak',
} as const;
