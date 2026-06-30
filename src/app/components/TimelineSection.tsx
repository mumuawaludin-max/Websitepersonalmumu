import { useState } from 'react';
import imgPartnership from "figma:asset/c52a041e712392f8b0a89cfc0d8a3bee5f8ad18e.png";
import imgLeadershipExp from "figma:asset/f2b7edc3706bc0c9b87f50318dae598e1cd9faed.png";
import imgParenting from "figma:asset/fdd34e2de161866abf773c63f00a55c0abac94a0.png";
import imgMentor from "figma:asset/32421b3834d189b346992674c1aa7c6d8728c772.png";

const TIMELINE_DATA = {
  partnership: {
    id: 'partnership',
    title: 'Strategic Partnership',
    image: imgPartnership,
    content: (
      <>
        <p className="mb-4">
          Terbiasa merancang dan mengelola <strong>kolaborasi lintas sektor</strong> untuk program edukasi dan sosial. Saya sering berada di peran <strong>penghubung</strong> antara sekolah, pemerintah pusat dan pemerintah daerah, komunitas, perusahaan, dan media agar sebuah program tidak hanya berjalan, tetapi <strong>benar-benar berdampak</strong>. Pendekatan yang saya gunakan berangkat dari <strong>pemahaman kebutuhan tiap pihak</strong>, lalu diterjemahkan menjadi desain kolaborasi yang <strong>realistis, terukur, dan bisa dieksekusi bersama</strong>. Bagi saya, kemitraan yang baik bukan soal banyaknya logo, tetapi <strong>kejelasan peran dan tujuan yang selaras</strong>.
        </p>
        <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
          "Kolaborasi yang kuat lahir dari kejelasan tujuan, bukan sekadar kesepakatan di atas kertas."
        </blockquote>
        <div className="mt-6">
          <p className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
            Keahlian Terkait
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Strategic Partnership</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Program Design</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Stakeholder Engagement</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[#13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Pentahelix Collaboration</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">CSR Program</span>
          </div>
        </div>
      </>
    ),
  },
  leadership: {
    id: 'leadership',
    title: 'Leadership Experiences',
    image: imgLeadershipExp,
    content: (
      <>
        <p className="mb-4">
          Berpengalaman memimpin program dan organisasi edukasi sejak masa kuliah hingga lebih dari 10 tahun setelahnya.
        </p>
        <p className="mb-4">
          Atas izin Allah, saya pernah diamanahi sebagai <strong>Co-Lead Microsoft Student Partner Jawa Barat</strong>, mengelola program edukasi Microsoft serta membina anggota dari berbagai universitas.
        </p>
        <p className="mb-4">
          <strong>Pengalaman tersebut berlanjut setelah lulus kuliah, saat saya dipercaya memimpin perusahaan di bidang edukasi dan teknologi. Dimulai dari Kakatu (startup parenting dengan ratusan ribu pengguna), hingga Fammi (konsultan pendidikan yang menjangkau ribuan sekolah).</strong>
        </p>
        <p className="mb-4">
          Dalam perjalanan kepemimpinan ini, saya terlibat langsung dari hulu ke hilir. Mulai dari riset dan pengembangan produk, membangun kemitraan lintas pemangku kepentingan, mengelola tim internal dan eksternal, merancang sistem operasional, hingga mengawal sales dan marketing, branding dan desain, pitching serta investasi.
        </p>
        <p className="mb-4">
          Saya juga berperan sebagai narasumber sekaligus program manager dalam berbagai kolaborasi nasional, termasuk pengelolaan dan monitoring keuangan program.
        </p>
        <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
          "Kepemimpinan saya dimulai dari keteladanan, menghargai keunikan setiap tim, dan mengajak fokus pada hal-hal yang berada dalam kendali, agar tujuan bersama tetap tercapai."
        </blockquote>
        <div className="mt-6">
          <p className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
            Keahlian Terkait
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Strategic Partnership</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Team Management</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Product Development</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Business Operations</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Sales & Marketing</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Pitching & Investment</span>
          </div>
        </div>
      </>
    ),
  },
  parenting: {
    id: 'parenting',
    title: 'Parenting & Mental Health',
    image: imgParenting,
    content: (
      <>
        <p className="mb-4">
          Saya aktif membahas dan mengembangkan berbagai konten edukasi seputar <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">parenting digital, komunikasi dalam keluarga, serta kesehatan mental</strong>.
        </p>
        <p className="mb-4">
          Fokus saya adalah membantu orang tua <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">membangun cara pandang yang lebih utuh</strong> dalam melihat persoalan anak, mulai dari usia dini hingga remaja dan dewasa. Bukan untuk menggurui, tetapi untuk membuka ruang refleksi dan dialog yang sehat.
        </p>
        <p className="mb-4">
          Dalam proses ini, saya tidak menempatkan diri sebagai pihak yang paling tahu. Saya memilih untuk terus belajar, sekaligus <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">membersamai orang tua dalam perjalanan tumbuh bersama anak-anak mereka</strong>.
        </p>
        <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
          "Saya percaya bahwa anak hebat tidak selalu lahir dari orangtua yang sempurna, tapi dari orangtua yang mau tumbuh belajar bersama."
        </blockquote>
        <div className="mt-6">
          <p className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
            Keahlian Terkait
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Digital Parenting</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Content Development</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Parent Coaching</span>
          </div>
        </div>
      </>
    ),
  },
  mentor: {
    id: 'mentor',
    title: 'Mentor',
    image: imgMentor,
    content: (
      <>
        <p className="mb-4">
          Saya membimbing anak dan remaja untuk menemukan potensi terbaik mereka sekaligus mengelola tantangan hidup melalui sesi mentoring privat. Dalam peran ini, saya dipercaya oleh <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">PKBM Daarut Tauhiid</strong> untuk terlibat dalam program pendampingan personal.
        </p>
        <p className="mb-4">
          Selain pendampingan personal, saya juga aktif memfasilitasi perjalanan kewirausahaan remaja, mahasiswa, hingga startup, dari tahap ide, validasi, hingga eksekusi. Pengalaman ini diperkuat melalui peran saya sebagai <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">Dosen Kewirausahaan di STT Nurul Fikri Depok</strong> selama dua tahun, mentor di <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">The GreaterHub SBM ITB</strong>, serta mentor aktif di <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">Bandung Technopark Incubation Program Telkom University</strong> sejak 2024 hingga saat ini.
        </p>
        <p className="mb-4">
          Bagi saya, setiap sesi mentoring bukan sekadar berbagi pengetahuan, tetapi ruang untuk menumbuhkan kejelasan arah, kepercayaan diri, dan keberanian mengambil langkah.
        </p>
        <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
          "Mentor bukan memberi tahu jalan yang harus ditempuh, tetapi membantu seseorang menemukan jalannya sendiri dengan lebih yakin dan sadar."
        </blockquote>
        <div className="mt-6">
          <p className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
            Keahlian Terkait
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Youth Mentoring</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Entrepreneurship Coaching</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Personal Development</span>
            <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Startup Mentoring</span>
          </div>
        </div>
      </>
    ),
  },
} as const;

interface TimelineSectionProps {
  activeTimeline: string;
  onTimelineChange: (id: string) => void;
}

export function TimelineSection({ activeTimeline, onTimelineChange }: TimelineSectionProps) {
  const currentTimeline = TIMELINE_DATA[activeTimeline as keyof typeof TIMELINE_DATA];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Timeline Navigation */}
      <div className="space-y-4">
        {Object.values(TIMELINE_DATA).map((item) => (
          <button
            key={item.id}
            onClick={() => onTimelineChange(item.id)}
            className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
              activeTimeline === item.id
                ? 'bg-[#dac5a7] shadow-xl scale-105'
                : 'bg-white/10 hover:bg-white/20 border border-white/20'
            }`}
          >
            <h3
              className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] md:text-[20px] ${
                activeTimeline === item.id ? 'text-[#0a282e]' : 'text-white'
              }`}
            >
              {item.title}
            </h3>
          </button>
        ))}
      </div>

      {/* Right: Timeline Content */}
      <div className="bg-[#dac5a7] rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative h-[280px] md:h-[320px] overflow-hidden">
          <img
            src={currentTimeline.image}
            alt={currentTimeline.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#dac5a7] to-transparent" />
        </div>
        <div className="p-8 md:p-10">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[24px] md:text-[28px] text-[#0a282e] mb-6">
            {currentTimeline.title}
          </h2>
          <div className="text-[#0a282e] text-[15px] md:text-[16px] leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
            {currentTimeline.content}
          </div>
        </div>
      </div>
    </div>
  );
}
