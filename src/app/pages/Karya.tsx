import { useState } from 'react';

export default function Karya() {
  const [activeFilter, setActiveFilter] = useState<string>('semua');

  const filters = [
    { id: 'semua', label: 'Semua' },
    { id: 'program', label: 'Program Edukasi' },
    { id: 'seminar', label: 'Seminar & Pelatihan' },
    { id: 'campaign', label: 'Campaign & CSR' },
    { id: 'produk', label: 'Produk & Sistem' },
  ];

  const works = [
    {
      category: 'program',
      title: 'Program Literasi Digital Sekolah Dasar',
      context: 'Pendampingan sekolah dalam merancang kurikulum literasi digital yang sesuai dengan usia siswa SD',
      role: 'Program Manager & Trainer',
    },
    {
      category: 'seminar',
      title: 'Pelatihan Parenting Digital untuk Orangtua',
      context: 'Seri pelatihan untuk orangtua tentang mendampingi anak di era digital dengan pendekatan psikologi',
      role: 'Narasumber & Fasilitator',
    },
    {
      category: 'campaign',
      title: 'Kampanye Kesehatan Mental Remaja',
      context: 'Kampanye sosial untuk meningkatkan awareness tentang kesehatan mental di kalangan remaja',
      role: 'Campaign Manager & Content Designer',
    },
    {
      category: 'produk',
      title: 'Desain Platform Pembelajaran Interaktif',
      context: 'Perancangan sistem pembelajaran online yang berfokus pada pengalaman pengguna yang inklusif',
      role: 'Product Designer & UX Researcher',
    },
    {
      category: 'program',
      title: 'Program Pendampingan Guru dalam Mengintegrasikan Teknologi',
      context: 'Pelatihan dan pendampingan guru untuk menggunakan teknologi dalam proses pembelajaran',
      role: 'Program Manager & Mentor',
    },
    {
      category: 'seminar',
      title: 'Seminar Pencegahan Kecanduan Game pada Remaja',
      context: 'Seminar untuk komunitas tentang memahami dan mencegah kecanduan game dengan pendekatan empatik',
      role: 'Narasumber',
    },
    {
      category: 'campaign',
      title: 'Program CSR Perusahaan Teknologi untuk Sekolah Pinggiran',
      context: 'Merancang dan menjalankan program CSR yang fokus pada akses pendidikan di daerah terpencil',
      role: 'Program Coordinator',
    },
    {
      category: 'produk',
      title: 'Sistem Monitoring Perkembangan Anak Berbasis Data',
      context: 'Pengembangan sistem untuk membantu orangtua dan sekolah memantau perkembangan anak secara holistik',
      role: 'Product Manager & System Designer',
    },
  ];

  const filteredWorks = activeFilter === 'semua' 
    ? works 
    : works.filter(work => work.category === activeFilter);

  const stats = [
    { number: '200+', label: 'Sesi seminar & pelatihan' },
    { number: '150+', label: 'Sekolah & institusi' },
    { number: '148', label: 'Kota/kabupaten' },
    { number: '3.000+', label: 'Peserta' },
  ];

  return (
    <div className="min-h-screen bg-[#0a282e] pt-[100px]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] text-white mb-4">
            Karya & Pengalaman
          </h1>
          <div className="w-[64px] h-[4px] bg-[#dac5a7] rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-['Montserrat:Medium',sans-serif] text-[14px] md:text-[16px] transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#dac5a7] text-[#0a282e]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-[#dac5a7]/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {filteredWorks.map((work, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#dac5a7]/10 hover:border-[#dac5a7]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#dac5a7]/5"
            >
              <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[20px] md:text-[24px] text-white mb-3">
                {work.title}
              </h3>
              <p className="text-white/80 text-[15px] md:text-[16px] leading-relaxed mb-4">
                {work.context}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#dac5a7] rounded-full" />
                <p className="text-[#dac5a7] text-[14px] md:text-[15px] font-['Montserrat:Medium',sans-serif]">
                  {work.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-[#dac5a7]/10 to-[#dac5a7]/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#dac5a7]/20">
          <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#dac5a7] mb-12 text-center">
            Angka Pengalaman
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-white/80 text-[14px] md:text-[16px] font-['Montserrat:Medium',sans-serif]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}