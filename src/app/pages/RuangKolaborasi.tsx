import { Link } from 'react-router';

export default function RuangKolaborasi() {
  const collaborationTypes = [
    {
      title: 'Narasumber & Trainer',
      description: 'Mengisi seminar, pelatihan, dan kelas edukasi untuk orangtua, anak, remaja, guru, dan komunitas.',
      formats: [
        'Seminar',
        'Pelatihan tematik',
        'Kelas berkelanjutan',
        'Diskusi interaktif',
      ],
      cta: 'Diskusi Kegiatan',
    },
    {
      title: 'Program & Campaign Manager',
      description: 'Mendampingi organisasi dalam merancang dan menjalankan program edukasi atau kampanye sosial, termasuk CSR.',
      formats: [
        'Perumusan tujuan program',
        'Desain alur kegiatan',
        'Penyusunan TOR & materi',
        'Koordinasi stakeholder',
        'Evaluasi program',
      ],
      cta: 'Diskusi Program',
    },
    {
      title: 'Product & System Design',
      description: 'Pendampingan pengembangan produk atau sistem edukasi berbasis kebutuhan pengguna.',
      formats: [
        'Riset kebutuhan',
        'User flow & journey',
        'Desain visual hingga UI/UX awal',
        'Pemanfaatan teknologi & AI tools',
      ],
      cta: 'Diskusi Produk',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a282e] pt-[100px]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] text-white mb-4">
            Ruang Kolaborasi
          </h1>
          <p className="text-[#dac5a7] text-[18px] md:text-[22px] font-['Montserrat:Medium',sans-serif]">
            Beberapa bentuk kolaborasi yang sering saya jalani
          </p>
          <div className="w-[64px] h-[4px] bg-[#dac5a7] rounded-full mx-auto mt-6" />
        </div>

        {/* Collaboration Cards */}
        <div className="grid gap-8 md:gap-12">
          {collaborationTypes.map((collab, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#dac5a7]/10 hover:border-[#dac5a7]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#dac5a7]/5"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[28px] md:text-[32px] text-[#dac5a7] mb-4">
                    {collab.title}
                  </h2>
                  <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed mb-6">
                    {collab.description}
                  </p>
                </div>
              </div>

              {/* Formats/Responsibilities List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {collab.formats.map((format, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#dac5a7] rounded-full mt-2.5" />
                    <p className="text-white/80 text-[15px] md:text-[16px]">
                      {format}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#dac5a7] hover:bg-[#c9b496] text-[#0a282e] rounded-xl font-['Montserrat:SemiBold',sans-serif] font-semibold text-[16px] transition-colors"
              >
                {collab.cta}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}