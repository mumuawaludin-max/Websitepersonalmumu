export default function TentangSaya() {
  return (
    <div className="min-h-screen bg-[#0a282e] pt-[100px]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] text-white mb-4">
            Tentang Kak Mumu
          </h1>
          <div className="w-[64px] h-[4px] bg-[#dac5a7] rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Section: Tentang Kak Mumu */}
          <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#dac5a7]/10">
            <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[28px] md:text-[32px] text-[#dac5a7] mb-6">
              Tentang Kak Mumu
            </h2>
            <div className="space-y-4 text-white/90 text-[16px] md:text-[18px] leading-relaxed">
              <p>
                Saya adalah praktisi yang bekerja di persimpangan antara edukasi, psikologi, dan teknologi. Selama lebih dari 10 tahun, saya mendampingi sekolah, keluarga, dan berbagai organisasi dalam merancang program yang tidak hanya berbasis teori, tetapi juga mempertimbangkan konteks lapangan dan kebutuhan nyata dari masing-masing pihak.
              </p>
              <p>
                Fokus saya adalah pada literasi digital, pengasuhan berbasis data, dan pendekatan psikologi yang memahami kompleksitas manusia—khususnya anak dan remaja. Saya percaya bahwa pendidikan yang baik bukan hanya tentang transfer pengetahuan, tetapi juga tentang membangun lingkungan yang mendukung tumbuh kembang setiap individu secara utuh.
              </p>
              <p>
                Latar belakang saya di bidang teknologi memberi saya perspektif praktis tentang bagaimana alat dan sistem bisa dirancang untuk mendukung proses edukasi. Namun, saya tidak pernah lupa bahwa di balik setiap sistem, ada manusia dengan kebutuhan, harapan, dan tantangan mereka sendiri.
              </p>
            </div>
          </section>

          {/* Section: Cara Saya Bekerja */}
          <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#dac5a7]/10">
            <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[28px] md:text-[32px] text-[#dac5a7] mb-6">
              Cara Saya Bekerja
            </h2>
            <div className="grid gap-6">
              {[
                {
                  title: 'Memahami konteks lapangan',
                  description: 'Setiap sekolah, keluarga, dan organisasi memiliki situasi unik. Saya tidak percaya pada solusi satu untuk semua.'
                },
                {
                  title: 'Menyusun solusi yang realistis',
                  description: 'Program dan pendekatan yang saya tawarkan disesuaikan dengan kapasitas dan sumber daya yang tersedia.'
                },
                {
                  title: 'Mendampingi proses, bukan hanya memberi materi',
                  description: 'Saya tidak sekadar memberikan presentasi, tetapi ikut terlibat dalam proses implementasi dan evaluasi.'
                },
                {
                  title: 'Terbuka terhadap kolaborasi lintas peran',
                  description: 'Saya bekerja sama dengan orangtua, guru, psikolog, dan praktisi lain untuk menciptakan solusi yang holistik.'
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#dac5a7] rounded-full mt-3" />
                  <div className="flex-1">
                    <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-2">
                      {item.title}
                    </p>
                    <p className="text-white/80 text-[15px] md:text-[16px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Pengalaman Nyata */}
          <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#dac5a7]/10">
            <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[28px] md:text-[32px] text-[#dac5a7] mb-6">
              Pengalaman Nyata
            </h2>
            <div className="space-y-4 text-white/90 text-[16px] md:text-[18px] leading-relaxed">
              <p>
                Saya pernah mengalami kecanduan game di masa remaja. Pengalaman ini memberi saya pemahaman langsung tentang bagaimana teknologi bisa menjadi pisau bermata dua—bisa sangat bermanfaat, tapi juga bisa membawa dampak negatif jika tidak dikelola dengan baik.
              </p>
              <p>
                Dari pengalaman pribadi itu, saya belajar bahwa pendekatan yang menghakimi atau hanya berfokus pada larangan tidak efektif. Yang dibutuhkan adalah pendampingan yang empatik, pemahaman tentang kebutuhan psikologis di balik perilaku tersebut, dan solusi yang membantu individu menemukan keseimbangan mereka sendiri.
              </p>
              <p>
                Perspektif ini saya bawa dalam setiap sesi pelatihan, konsultasi, dan program yang saya rancang. Saya tidak datang sebagai "ahli" yang mengajarkan dari atas, tetapi sebagai seseorang yang memahami bahwa setiap tantangan edukasi dan teknologi punya lapisan kompleksitas yang perlu didengar dan dipahami dengan utuh.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}