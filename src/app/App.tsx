import { useState, useEffect, useRef } from 'react';
import { Presentation, Code, Users, Lightbulb, Sparkles, ArrowRight, Trophy, Award, GraduationCap, Rocket, BookOpen, Megaphone, Star, ExternalLink, Video, FileText, Heart, Instagram, Calendar, Clock, MapPin, X, ClipboardList, CheckCircle2, Share2, Copy, Check, Download } from 'lucide-react';

// Set document title and meta for SEO
if (typeof document !== 'undefined') {
  document.title = 'Kak Mumu - Narasumber Parenting Digital, Kecanduan Gadget & Game | Trainer Komunikasi Keluarga';
  
  // Set or update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', 'Narasumber parenting digital, kecanduan game, dan kecanduan HP dengan pengalaman 10+ tahun. Solusi praktis mengatasi screen time berlebihan, digital parenting, dan kesehatan mental keluarga di era digital. Dipercaya institusi di 50+ kota Indonesia.');
  
  // Set keywords meta
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', 'narasumber parenting, narasumber kecanduan gadget, narasumber kecanduan game, digital parenting, kecanduan HP, screen time management, trainer komunikasi keluarga, kesehatan mental anak, anti bullying, literasi digital, parenting Indonesia, mengatasi kecanduan game anak, solusi kecanduan HP, pendampingan orangtua, narasumber pendidikan, kecanduan gadget anak');
}
import svgPaths from '../imports/svg-udsxpecb9u';
import svgDownload from '../imports/svg-5xze2d4q52';
import imgMumuFoto24 from "figma:asset/cad3138b6e58073d377947f640a8658afed27845.png";
import imgGamesAddiction from "figma:asset/e6c1dd95dc45985a6b138791206de0a68a533a16.png";
import imgLeadershipExp from "figma:asset/f2b7edc3706bc0c9b87f50318dae598e1cd9faed.png";
import imgParenting from "figma:asset/fdd34e2de161866abf773c63f00a55c0abac94a0.png";
import imgImage508 from "figma:asset/cbf0f6bb3e21be2084545bec155a539d3ddfb1da.png";
import imgImage2313 from "figma:asset/5c4ca3fd1d58f6da8a788049ce163ff299cd312e.png";
import imgImage2312 from "figma:asset/e1eab43ec882355ab36823e3a541f60108139389.png";
import imgImage2311 from "figma:asset/1c0d17eede30a772c0f8632a01927bd54ade42cc.png";
import imgImage2310 from "figma:asset/5e3805d7bf430488e46da8638ef81a2cb09af41a.png";
import imgImage750 from "figma:asset/8514d96a0304334b75f582a850fdfdb347da38d8.png";
import imgLogoDtSm from "figma:asset/7216371e2d2aae758da47a5cbf11282e49367735.png";
import imgImage2317 from "figma:asset/8591cec0a94d8118f54921ee0fa1979baad4b2e6.png";
import imgImage2320 from "figma:asset/7233b4317641f20f3ce89f8366450855f3b8eaeb.png";
import imgImage2321 from "figma:asset/c974224a9a4e74ae8f3bd18f42ab2cdf9b64de30.png";
import imgImage2033 from "figma:asset/dd0f19c323fd5afea38ddf9adfc6f49dd61aad60.png";
import imgImage2319 from "figma:asset/07a8ea7c74c80392e48063160447bed74d3faba8.png";
import imgPartnership from "figma:asset/c52a041e712392f8b0a89cfc0d8a3bee5f8ad18e.png";
import imgImage2314 from "figma:asset/a77aca48dba9f23ff4c5d2dd7b64732c9e4509e5.png";
import imgImage2315 from "figma:asset/22cc8d6b3a10b6914fce32d96638e869bccf035f.png";
import imgImage2316 from "figma:asset/77bc1774b55b36565156de25e92b0d73aba99715.png";
import imgImage184 from "figma:asset/e80f8f2f322aec499601af18b458e9d53022201e.png";
import imgImage740 from "figma:asset/f0a336995ccd5d9cba3c90e72613a3c2da23c151.png";
import imgImage2322 from "figma:asset/38b0d97f752e46623c7c6d6c47d8335cab9a65c3.png";
import imgCreativeProduction from "figma:asset/4d2f6e79d398091ee5d8cf29d0725f857eadaaa5.png";
import imgPublicSpeaking from "figma:asset/a1ab73a2447ac9ec73536afd79878ee366e30a08.png";
import imgDigitalTransformation from "figma:asset/6887051f8e7ebb379460b04e357736dfe7560ad7.png";
import imgPsikologiPendidikan from "figma:asset/51de8a9f279a6036d4d4b3cd80b8c238dfc2090b.png";
import imgMentoringProgram from "figma:asset/c0b56ef74d32af4cc081424b868af6162c165b0d.png";
// Media Logos
import logoKompasTV from "figma:asset/597e084aee4e2a09cda157b5f4a99e8c957f4bc4.png";
import logoNetTV from "figma:asset/304c47dde26397c564aa2e7a2706912074e88161.png";
import logoDAAITV from "figma:asset/b0dba70c0bf2e0bcaee1d11e7e2d79bfcbd14114.png";
import logoKumparan from "figma:asset/72e57ba091f64c41935ef0f8ba785e4bb05daed0.png";
import logoTechInAsia from "figma:asset/258800ea69e4a7fb44bb997ff79f504c3a948573.png";
import logoYoungster from "figma:asset/5807210fdbdf8d258e0130393c5e1f5ea04844df.png";
import photoNetTV from "figma:asset/3e3566972bda83a1860a208736f708725ca1a849.png";
import imgAksiSosial from "figma:asset/7b30a4d85c5dc0d729fd0004455e02de4ec165d3.png";
import imgMentor from "figma:asset/32421b3834d189b346992674c1aa7c6d8728c772.png";
import imgKuliahPhoto from "figma:asset/54ab18f6e8a6531c4544d3ee567e3b4e01ad16b9.png";
import imgEntrepreneurPhoto from "figma:asset/214f85c79e7cf5b24205e703d211d18f785cdf78.png";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { RuangKolaborasi } from './components/RuangKolaborasi';
import { BlogSection } from './components/BlogSection';
import { AdminPanel } from './components/AdminPanel';
import { FloatingContactButton } from './components/FloatingContactButton';

// Main App Component - Responsive Website for Kak Mumu
export default function App() {
  const [activeFilter, setActiveFilter] = useState<string>('semua');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeTimeline, setActiveTimeline] = useState<string>('partnership');
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false, false]);
  const [selectedCollab, setSelectedCollab] = useState<number | null>(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    institusi: '',
    kebutuhan: '',
  });
  const [scrollY, setScrollY] = useState(0);
  const [creamBg, setCreamBg] = useState({ left: 0, width: 430 }); // Will be calculated on mount
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [showEventDialog, setShowEventDialog] = useState(false);

  // Refs for navbar buttons (except home which uses fixed width)
  const tentangRef = useRef<HTMLButtonElement>(null);
  const kolaborasiRef = useRef<HTMLButtonElement>(null);
  const karyaRef = useRef<HTMLButtonElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Update cream background position based on active section
  useEffect(() => {
    const updateCreamPosition = () => {
      if (!navContainerRef.current) return;

      const navRect = navContainerRef.current.getBoundingClientRect();
      const navWidth = navRect.width;

      // Special case for home - use SAME formula as beige panel in hero section
      if (activeSection === 'home') {
        const centerWidth = Math.min(430, navWidth * 0.3);
        // Use same calculation as hero beige panel: max(calc((100% - 430px) / 2), calc(35.35% - 10px))
        const leftPosition = Math.max(
          (navWidth - 430) / 2,  // centered when enough space
          (navWidth * 0.3535) - 10  // offset for smaller screens
        );
        
        setCreamBg({
          left: leftPosition,
          width: centerWidth
        });
        return;
      }

      // For other sections, calculate from button width
      let targetRef: React.RefObject<HTMLButtonElement> | null = null;
      
      if (activeSection === 'tentang-saya') targetRef = tentangRef;
      else if (activeSection === 'ruang-kolaborasi') targetRef = kolaborasiRef;
      else if (activeSection === 'karya') targetRef = karyaRef;

      if (targetRef?.current) {
        const buttonRect = targetRef.current.getBoundingClientRect();
        
        setCreamBg({
          left: buttonRect.left - navRect.left,
          width: buttonRect.width
        });
      }
    };

    // Delay update to ensure DOM is ready
    setTimeout(updateCreamPosition, 10);
    window.addEventListener('resize', updateCreamPosition);
    return () => window.removeEventListener('resize', updateCreamPosition);
  }, [activeSection]);

  // Timeline data dengan foto dan konten yang berbeda
  const timelineData = {
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
            <p className="text-[13px] font-['Montserrat:SemiBold',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Strategic Partnership</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Program Design</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Stakeholder Engagement</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Pentahelix Collaboration</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">CSR Program</span>
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
            <p className="text-[13px] font-['Montserrat:SemiBold',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Strategic Partnership</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Team Management</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Product Development</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Business Operations</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Sales & Marketing</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Pitching & Investment</span>
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
            Saya aktif membahas dan mengembangkan berbagai konten edukasi seputar <strong className="font-['Montserrat:Bold',sans-serif] font-bold">parenting digital, komunikasi dalam keluarga, serta kesehatan mental</strong>.
          </p>
          <p className="mb-4">
            Fokus saya adalah membantu orang tua <strong className="font-['Montserrat:Bold',sans-serif] font-bold">membangun cara pandang yang lebih utuh</strong> dalam melihat persoalan anak, mulai dari usia dini hingga remaja dan dewasa. Bukan untuk menggurui, tetapi untuk membuka ruang refleksi dan dialog yang sehat.
          </p>
          <p className="mb-4">
            Dalam proses ini, saya tidak menempatkan diri sebagai pihak yang paling tahu. Saya memilih untuk terus belajar, sekaligus <strong className="font-['Montserrat:Bold',sans-serif] font-bold">membersamai orang tua dalam perjalanan tumbuh bersama anak-anak mereka</strong>.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Saya percaya bahwa anak hebat tidak selalu lahir dari orangtua yang sempurna, tapi dari orangtua yang mau tumbuh belajar bersama."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Montserrat:SemiBold',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Digital Parenting</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Content Development</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Parent Coaching</span>
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
            Saya membimbing anak dan remaja untuk menemukan potensi terbaik mereka sekaligus mengelola tantangan hidup melalui sesi mentoring privat. Dalam peran ini, saya dipercaya oleh <strong className="font-['Montserrat:Bold',sans-serif] font-bold">PKBM Daarut Tauhiid</strong> untuk terlibat dalam program pendampingan personal.
          </p>
          <p className="mb-4">
            Selain pendampingan personal, saya juga aktif memfasilitasi perjalanan kewirausahaan remaja, mahasiswa, hingga startup, dari tahap ide, validasi, hingga eksekusi. Pengalaman ini diperkuat melalui peran saya sebagai <strong className="font-['Montserrat:Bold',sans-serif] font-bold">Dosen Kewirausahaan di STT Nurul Fikri Depok</strong> selama dua tahun, mentor di <strong className="font-['Montserrat:Bold',sans-serif] font-bold">The GreaterHub SBM ITB</strong>, serta mentor aktif di <strong className="font-['Montserrat:Bold',sans-serif] font-bold">Bandung Technopark Incubation Program Telkom University</strong> sejak 2024 hingga saat ini.
          </p>
          <p className="mb-4">
            Bagi saya, setiap sesi mentoring bukan sekadar berbagi pengetahuan, tetapi ruang untuk menumbuhkan kejelasan arah, kepercayaan diri, dan keberanian mengambil langkah.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Mentor bukan memberi tahu jalan yang harus ditempuh, tetapi membantu seseorang menemukan jalannya sendiri dengan lebih yakin dan sadar."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Montserrat:SemiBold',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Youth Mentoring</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Entrepreneurship Coaching</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Personal Development</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Startup Mentoring</span>
            </div>
          </div>
        </>
      ),
    },
    design: {
      id: 'design',
      title: 'Creative Production',
      image: imgCreativeProduction,
      content: (
        <>
          <p className="mb-4">
            Di bidang Creative Production, saya mendalami <strong className="font-['Montserrat:Bold',sans-serif] font-bold">pitching dan business presentation, desain grafis, hingga UI/UX</strong>. Kemampuan ini saya gunakan untuk membantu ide dan pesan edukasi tersampaikan secara lebih jelas dan mudah dipahami.
          </p>
          <p className="mb-4">
            Selain desain, saya juga terbiasa memproduksi konten multimedia. Saya mengoperasikan tools seperti <strong className="font-['Montserrat:Bold',sans-serif] font-bold">OBS Studio</strong> untuk kebutuhan <strong className="font-['Montserrat:Bold',sans-serif] font-bold">streaming dan recording</strong>, serta mengelola proses produksi konten dari perencanaan hingga eksekusi. Pendekatan ini membantu mengemas gagasan yang kompleks menjadi visual dan konten yang komunikatif untuk berbagai kalangan.
          </p>
          <p className="mb-4">
            Bagi saya, visual bukan sekadar tampilan, tetapi <strong className="font-['Montserrat:Bold',sans-serif] font-bold">sarana untuk memperjelas makna dan mendorong pemahaman yang lebih baik</strong>.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Saya percaya bahwa kekuatan visual dan konten multimedia dapat memberikan sudut pandang baru, menyederhanakan kompleksitas, dan menggerakkan orang untuk bertindak. Dari desain hingga produksi video, setiap karya adalah jembatan antara ide dan pemahaman."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Montserrat:SemiBold',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Graphic Design</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">UI/UX Design</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Content Production</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Video Streaming & Recording</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Business Presentation</span>
            </div>
          </div>
        </>
      ),
    },
    speaking: {
      id: 'speaking',
      title: 'Public Speaking',
      image: imgPublicSpeaking,
      content: (
        <>
          <p className="mb-4">
            Sebagai praktisi public speaking, saya telah terlibat dalam <strong className="font-['Montserrat:Bold',sans-serif] font-bold">ratusan sesi seminar dan pelatihan</strong> dengan fokus pada <strong className="font-['Montserrat:Bold',sans-serif] font-bold">pitching, storytelling, dan penyusunan narasi</strong> yang mendorong perubahan cara pandang.
          </p>
          <p className="mb-4">
            Bagi saya, public speaking bukan sekadar menyampaikan materi, tetapi <strong className="font-['Montserrat:Bold',sans-serif] font-bold">membangun koneksi yang bermakna dengan audiens</strong>. Setiap sesi adalah ruang dialog untuk menyentuh, mengajak berpikir, dan membuka kemungkinan sudut pandang baru melalui kata-kata yang relevan dan kontekstual.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "If you can speak, you can influence. If you can influence, you can change lives. Saya percaya bahwa public speaking bukan hanya tentang berbicara, tetapi tentang menciptakan koneksi yang bermakna dan meninggalkan jejak positif di hati pendengar."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Montserrat:SemiBold',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Storytelling</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Pitching</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Workshop Facilitation</span>
            </div>
          </div>
        </>
      ),
    },
    digital: {
      id: 'digital',
      title: 'Digital Transformation',
      image: imgDigitalTransformation,
      content: (
        <>
          <p className="mb-4">
            Saya mendampingi berbagai institusi dalam <strong className="font-['Montserrat:Bold',sans-serif] font-bold">mengoptimalkan proses kerja melalui pemanfaatan teknologi digital</strong> agar lebih efektif dan efisien.
          </p>
          <p className="mb-4">
            Pendampingan dilakukan sejak tahap awal, mulai dari <strong className="font-['Montserrat:Bold',sans-serif] font-bold">riset kebutuhan yang mendalam, penyusunan konsep dan prototyping, hingga perancangan solusi digital</strong> yang selaras dengan kebutuhan pengguna dan konteks organisasi. Pendekatan ini memastikan transformasi digital tidak sekadar mengganti alat, tetapi benar-benar memperbaiki cara kerja.
          </p>
          <p className="mb-4">
            Bagi saya, transformasi digital yang baik selalu berangkat dari <strong className="font-['Montserrat:Bold',sans-serif] font-bold">pemahaman masalah dan tujuan yang jelas</strong>.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Saya menaruh perhatian besar dengan transformasi digital karena percaya bahwa solusi yang tepat dapat mengubah cara kerja menjadi lebih bermakna, menghemat waktu, dan memberdayakan lebih banyak orang untuk fokus pada hal-hal yang benar-benar penting dan berdampak besar."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Montserrat:SemiBold',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">EdTech Development</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">System Design</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Digital Strategy</span>
            </div>
          </div>
        </>
      ),
    },
    psikologi: {
      id: 'psikologi',
      title: 'Psikologi Pendidikan',
      image: imgPsikologiPendidikan,
      content: (
        <>
          <p className="mb-4">
            Latar belakang pendidikan saya dimulai dari <strong className="font-['Montserrat:Bold',sans-serif] font-bold">Teknik Informatika</strong>, lalu dilanjutkan dengan lebih dari 10 tahun terlibat aktif dalam perancangan program pembelajaran dan pendekatan psikologi di berbagai konteks.
          </p>
          <p className="mb-4">
            Perjalanan tersebut membawa saya di tahun ini pada keputusan untuk melanjutkan kembali studi <strong className="font-['Montserrat:Bold',sans-serif] font-bold">Magister Psikologi Pendidikan</strong>. Kombinasi antara teknologi, psikologi, dan pendidikan ini memperluas cara pandang saya bahwa <strong className="font-['Montserrat:Bold',sans-serif] font-bold">proses belajar dan perilaku manusia tidak hanya terjadi di ruang kelas sekolah</strong>, tetapi juga relevan di lingkungan organisasi, korporasi, dan berbagai institusi lain selama di dalamnya terdapat proses pembelajaran dan interaksi manusia.
          </p>
          <p className="mb-4">
            Pendalaman teori dan praktik ini menjadi landasan bagi saya untuk merancang <strong className="font-['Montserrat:Bold',sans-serif] font-bold">intervensi, program, dan sistem pembelajaran yang lebih kontekstual dan berdampak</strong>.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Memperdalam pemahaman teoritis dan praktis adalah langkah untuk memberi manfaat yang lebih luas dan berkelanjutan."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Montserrat:SemiBold',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Learning Theory</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Child Development</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Educational Research</span>
            </div>
          </div>
        </>
      ),
    },
    games: {
      id: 'games',
      title: 'Games Addiction Survivor',
      image: imgGamesAddiction,
      content: (
        <>
          <p className="mb-4">
            Pernah mengalami <strong className="font-['Montserrat:Bold',sans-serif] font-bold">kecanduan game lebih dari 13 tahun</strong> dan bermain hingga <strong className="font-['Montserrat:Bold',sans-serif] font-bold">30 jam non-stop</strong>. Saya berhenti bukan karena nasihat, tetapi karena peristiwa besar dalam hidup yaitu <strong className="font-['Montserrat:Bold',sans-serif] font-bold">kehilangan kedua orang tua saat masa kuliah</strong> yang membuat saya mulai menata ulang arah hidup.
          </p>
          <p className="mb-4">
            Pengalaman tersebut membentuk cara pandang saya terhadap isu kecanduan digital, terutama pada anak dan remaja. Karena pernah berada di posisi itu, saya memahami betul rasa terjebak, penyangkalan, dan sulitnya keluar tanpa dukungan yang tepat. Pengalaman pribadi inilah yang kini menjadi <strong className="font-['Montserrat:Bold',sans-serif] font-bold">dasar empati dan pendekatan saya dalam setiap pendampingan</strong>.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Perubahan tidak dimulai dari menghakimi, tetapi dari memahami pengalaman manusia di balik perilakunya tersebut."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Montserrat:SemiBold',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Psikologi Anak</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Digital Wellness</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Parenting</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Growth Mindset</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Kesehatan Mental</span>
            </div>
          </div>
        </>
      ),
    },
    volunteer: {
      id: 'volunteer',
      title: 'Aksi Sosial',
      image: imgAksiSosial,
      content: (
        <>
          <p className="mb-4">
            Sejak masa perkuliahan hingga saat ini, saya terlibat aktif dalam berbagai gerakan sosial yang berfokus pada anak, keluarga, dan pendidikan. Keterlibatan ini mencakup peran di <strong className="font-['Montserrat:Bold',sans-serif] font-bold">BERMA (Komunitas Pemerhati Yatim Piatu)</strong>, pengurus aktif <strong className="font-['Montserrat:Bold',sans-serif] font-bold">POKJA Bunda PAUD Kota Bandung</strong>, serta fasilitator <strong className="font-['Montserrat:Bold',sans-serif] font-bold">GAHARU Keluarga</strong> (Gerakan Pembaharu/Changemaker Keluarga) dari Ashoka.
          </p>
          <p className="mb-4">
            Selain itu, saya juga terlibat langsung sebagai <strong className="font-['Montserrat:Bold',sans-serif] font-bold">pengajar di wilayah terpencil dan komunitas dengan keterbatasan akses</strong>, serta melakukan <strong className="font-['Montserrat:Bold',sans-serif] font-bold">home visit untuk mendampingi remaja yang mengalami kecanduan game</strong>. Pengalaman ini mempertemukan saya dengan realitas lapangan yang beragam dan memperkuat keyakinan bahwa perubahan selalu dimulai dari kehadiran yang tulus dan konsisten.
          </p>
          <p className="mb-4">
            Bagi saya, aksi sosial bukan sekadar kegiatan sukarela, tetapi <strong className="font-['Montserrat:Bold',sans-serif] font-bold">ruang belajar untuk memahami manusia, konteks, dan kebutuhan nyata di sekitar kita</strong>.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Setiap aksi sosial adalah kesempatan untuk hadir, belajar, dan memberi dampak nyata bagi sesama."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Montserrat:SemiBold',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Social Facilitation</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Community Engagement</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Montserrat:Medium',sans-serif]">Child & Family Advocacy</span>
            </div>
          </div>
        </>
      ),
    },
  };

  // Get current timeline data
  const currentTimeline = timelineData[activeTimeline as keyof typeof timelineData];

  // Upcoming Events Data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Workshop Incubation Program Training Bandung TechnoPark (2026)',
      date: 'MAR',
      day: '11',
      month: 'Kamis',
      fullDate: '2026-03-11', // For calculating days remaining
      location: 'Zoom Meeting',
      time: '09:00 - 15:30 WIB',
      color: 'from-blue-600 to-indigo-700',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      description: 'Customer Persona Development and Customer Discovery & Validation, Customer Identification, Value Proposition, Analysis of Customer Problems and Needs',
      category: 'Workshop',
      preTestUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe4U3y1zw3-ASt6f7TuIASRbzromztu2WGqwcX4KCl1yqwgRQ/viewform?usp=header',
      postTestUrl: 'https://forms.gle/example-posttest-1',
      detailUrl: 'https://example.com/event-detail-1',
      worksheetUrl: 'https://docs.google.com/document/d/1ddjiZitSiv9xMyQo4vXNnsVYncB-u4ZK/edit'
    }
  ];

  // Function to calculate days remaining (GMT+7)
  const calculateDaysRemaining = (eventDate: string) => {
    const now = new Date();
    // Convert to GMT+7
    const gmtPlus7Offset = 7 * 60; // minutes
    const localOffset = now.getTimezoneOffset(); // minutes
    const totalOffset = gmtPlus7Offset + localOffset;
    const nowGMT7 = new Date(now.getTime() + totalOffset * 60 * 1000);
    
    const event = new Date(eventDate + 'T00:00:00+07:00');
    const diffTime = event.getTime() - nowGMT7.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };

  // Parallax scroll effect and scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Improved scroll-based section detection using getBoundingClientRect
      const sections = [
        { id: 'home', elementId: 'hero-section' },
        { id: 'tentang-saya', elementId: 'tentang-saya' },
        { id: 'ruang-kolaborasi', elementId: 'ruang-kolaborasi' },
        { id: 'karya', elementId: 'karya' },
        { id: 'events', elementId: 'events' },
        { id: 'kontak', elementId: 'kontak' },
      ];
      
      // Get the middle of the viewport as reference point
      const viewportMiddle = window.innerHeight / 3; // Top third of viewport
      
      let activeId = 'home'; // default
      let minDistance = Infinity;
      
      // Find section closest to the top third of viewport
      sections.forEach(({ id, elementId }) => {
        const element = document.getElementById(elementId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - viewportMiddle);
          
          // Section is active if it's in view and closest to reference point
          if (rect.top <= viewportMiddle && rect.bottom >= 0) {
            if (distance < minDistance) {
              minDistance = distance;
              activeId = id;
            }
          }
        }
      });
      
      setActiveSection(activeId);
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener with throttling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Set active section immediately for responsive UI
    setActiveSection(sectionId);
    
    // Map 'home' to actual section ID 'hero-section'
    const targetId = sectionId === 'home' ? 'hero-section' : sectionId;
    const element = document.getElementById(targetId);
    
    if (element) {
      // Use native scrollIntoView for maximum compatibility
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      // Adjust for fixed navbar after scroll
      setTimeout(() => {
        const navHeight = 80;
        const currentScroll = window.scrollY;
        
        window.scrollTo({
          top: currentScroll - navHeight,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  const toggleFlip = (index: number) => {
    const newFlipped = [...flippedCards];
    newFlipped[index] = !newFlipped[index];
    setFlippedCards(newFlipped);
  };

  const scrollToTimeline = (timelineId: string) => {
    setActiveTimeline(timelineId);
    const element = document.getElementById(`timeline-${timelineId}`);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      setTimeout(() => {
        const navHeight = 80;
        const extraOffset = 100;
        const currentScroll = window.scrollY;
        window.scrollTo({
          top: currentScroll - navHeight - extraOffset,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Assalamu'alaikum tim Kak Mumu,

Saya ${formData.nama} dari ${formData.institusi}.

${formData.kebutuhan}

Terima kasih.`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL with phone number and message
    const whatsappURL = `https://wa.me/6282216555004?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({ nama: '', institusi: '', kebutuhan: '' });
  };

  const filters = [
    { id: 'semua', label: 'Semua' },
    { id: 'awards', label: 'Apresiasi' },
    { id: 'media', label: 'Liputan Media' },
  ];

  const awards = [
    // Semasa Kuliah
    {
      category: 'kuliah',
      title: 'Winner Digital Creative Indonesia (DCI) Telkomsel 2013',
      type: 'Winner',
    },
    {
      category: 'kuliah',
      title: 'Winner INAICTA 2013 Kategori Digital Interactive Media',
      type: 'Winner',
    },
    // Kakatu - Parenting Startup
    {
      category: 'kakatu',
      title: 'Startup Google Launchpad Accelerator 2016',
      type: 'Accelerator',
    },
    {
      category: 'kakatu',
      title: 'Winner Top 50 Local Apps Baidu 2014',
      type: 'Winner',
    },
    {
      category: 'kakatu',
      title: 'Winner Startup of The Year Bubu Awards 2015',
      type: 'Winner',
    },
    {
      category: 'kakatu',
      title: 'Winner Global Brain Awards 2015',
      type: 'Winner',
    },
    {
      category: 'kakatu',
      title: 'Startup Telkom Indigo Accelerator 2016',
      type: 'Accelerator',
    },
    {
      category: 'kakatu',
      title: 'Startup Telkom Indigo Incubator 2015',
      type: 'Incubator',
    },
    {
      category: 'kakatu',
      title: 'Top 100 Startup Asia Echelon 2015',
      type: 'Top 100',
    },
    // Fammi - Education Consultant
    {
      category: 'fammi',
      title: 'WINNER USAID National Startup Impact Competition 2023',
      type: 'Winner',
    },
    {
      category: 'fammi',
      title: 'Startup Eduspaze Singapore Accelerator 2023',
      type: 'Accelerator',
    },
    {
      category: 'fammi',
      title: 'Startup TINC Telkomsel Accelerator 2022',
      type: 'Accelerator',
    },
    {
      category: 'fammi',
      title: 'Winner Startup Rookie Of The Year Telkom Indigo 2020',
      type: 'Winner',
    },
    {
      category: 'fammi',
      title: 'Winner Startup Bandung Pitching Day 2020',
      type: 'Winner',
    },
    {
      category: 'fammi',
      title: 'Startup Telkom Indigo Incubator 2020',
      type: 'Incubator',
    },
  ];

  const mediaVideos = [
    {
      id: 'video1',
      title: 'Wawancara tentang Kecanduan Gadget & Digital Parenting',
      channel: 'Kompas TV',
      youtubeId: 'JZIyJAES26c',
      logo: logoKompasTV,
    },
    {
      id: 'video2',
      title: 'Tips Bijak Menggunakan Gadget untuk Anak',
      channel: 'NET TV',
      youtubeId: 'LOGkKsv9kIU',
      logo: logoNetTV,
    },
    {
      id: 'video3',
      title: 'Membangun Kesadaran Digital di Era Modern',
      channel: 'MNC TV',
      youtubeId: 'rGtJdbn6ZzA',
      logo: logoDAAITV,
    },
  ];

  const mediaPhotos = [
    {
      id: 'photo1',
      title: 'Diskusi tentang Digital Parenting dan Pengasuhan Modern',
      channel: 'NET TV',
      image: photoNetTV,
      logo: logoNetTV,
    },
  ];

  const mediaArticles = [
    {
      id: 'article1',
      title: 'Gaming Junkie Helps Parents Protect Children From Gadget Addiction',
      publisher: 'Tech in Asia',
      url: 'https://www.techinasia.com/gaming-junkie-helps-parents-protect-children-gadget-addiction',
      logo: logoTechInAsia,
    },
    {
      id: 'article2',
      title: 'CEO Fammi Sembuh dari Kecanduan Game dengan Sibuk Berkomunitas',
      publisher: 'Kumparan',
      url: 'https://kumparan.com/temali/ceo-fammi-sembuh-dari-kecanduan-game-dengan-sibuk-berkomunitas-1sCJOgUIg57',
      logo: logoKumparan,
    },
    {
      id: 'article3',
      title: 'Muhamad Nur Awaludin: Pecandu Gadget yang Cari Solusi',
      publisher: 'Youngster.id',
      url: 'https://youngster.id/technopreneur/muhamad-nur-awaludin-pecandu-gadget-yang-cari-solusi/',
      logo: logoYoungster,
    },
  ];

  const collaborationTypes = [
    {
      title: 'Narasumber & Trainer',
      icon: Presentation,
      description: 'Narasumber parenting digital, kecanduan game, dan kecanduan HP dengan pengalaman 10+ tahun. Mengisi seminar dan pelatihan tentang digital parenting, screen time management, komunikasi keluarga, dan kesehatan mental untuk orangtua, guru, mahasiswa, dan organisasi di seluruh Indonesia.',
      topics: {
        'Orangtua': [
          'Mengatasi Kecanduan Gadget & Game pada Anak: Solusi Praktis untuk Orangtua',
          'Digital Parenting: Strategi Mengatur Screen Time dan HP Anak di Era Digital',
          'Mindful Parents: Gadget Teman atau Lawan? Cara Bijak Dampingi Anak Berteknologi',
          'Mengatasi Kecanduan HP pada Remaja: Panduan Lengkap untuk Orangtua',
          'Teknik Komunikasi BATIK (Baik, Tegas dan Efektif) dalam Keluarga',
          'Parent as Coach: Teknik Coaching untuk Orangtua Modern',
          'Mengelola Parental Burnout: Manajemen Stress bagi Orangtua',
          'Pencegahan Bullying & Kekerasan Seksual pada Anak',
          'Tantangan Mendidik Gen Alpha di Era Digital',
          'Strategi Parenting Anti Bullying: Aman di Sekolah, Nyaman di Rumah',
          'Komunikasi SEHAT dengan Pasangan untuk Keluarga Harmonis',
        ],
        'Anak & Remaja': [
          'Bijak Bermedia Sosial: Mengelola HP dan Gadget dengan Sehat',
          'Be a Changemaker - Digital Life as Student: Produktif di Era Digital',
          'Stop Bullying: Rumus Hati Tenang untuk Remaja',
          'Teknik Komunikasi SERU dengan Orangtua dan Teman',
          'Unlock Your Potential - Temukan Minat & Bakat Terbaikmu',
          'Growth Mindset for Teens: Pola Pikir Sukses Remaja',
          'Bahaya Pornografi & Cara Menghindarinya (Narkolema)',
          'Manajemen Waktu & Gadget: Bijak Bergadget untuk Remaja',
          'Kesehatan Mental Remaja: Kenali Diri & Jaga Mental Health',
        ],
        'Sekolah & Guru': [
          'Literasi Digital untuk Guru: Mendampingi Siswa di Era Digital',
          'Mengatasi Kecanduan Gadget Siswa: Strategi untuk Guru & Sekolah',
          'Teacher as Coach: Komunikasi Positif dengan Teknik Coaching',
          'Membangun Growth Mindset di Sekolah untuk Prestasi Optimal',
          'School Wellbeing: Manajemen Stress & Kesehatan Mental Guru',
          'All Out Tanpa Burnout: Mengelola Kelelahan Guru',
          'Pembelajaran Abad 21: Strategi Inovatif untuk Guru Modern',
          'Strategi Anti Bullying di Sekolah yang Efektif',
        ],
        'Mahasiswa': [
          'Life purpose to be meaningful',
          'Mengenal potensi diri',
          'Teknik regulasi emosi',
          'Time management & decision making',
          'Growth mindset',
          'Longlife learning',
          'Public speaking',
          'Social dilemma & digital literacy',
          'Social media optimization to create social impact',
        ],
        'Perusahaan & Organisasi': [
          'Design thinking',
          'Employee wellbeing & mental health awareness',
          'Innovative & creative problem solving',
        ],
        'Kelas Khusus Kewirausahaan': [
          'Entrepreneurship 101: Dari idea validation hingga business model validation',
        ],
      },
      cta: 'Diskusi Kegiatan',
      borderColor: '#0a7c7c', // teal
      iconBg: '#ccf5f5', // teal light
    },
    {
      title: 'Program & Campaign Manager',
      icon: Users,
      description: 'Mengelola program literasi digital, parenting education, dan kampanye anti kecanduan gadget untuk Kementerian, lembaga pemerintah, dan perusahaan. Berpengalaman merancang program edukasi anti bullying, kesehatan mental, dan pencegahan kecanduan game yang berdampak nyata.',
      clients: {
        'Institusi Pemerintahan': [
          { 
            name: 'KEMENPPPA',
            bgColor: '#FEE2E2',
            links: [
              { 
                type: 'article', 
                url: 'https://www.kemenpppa.go.id/index.php/siaran-pers/kemen-pppa-lakukan-literasi-digital-demi-cegah-anak-jadi-korban-predator-seks', 
                label: 'Kemen PPPA Lakukan Literasi Digital Demi Cegah Anak Jadi Korban Predator Seks' 
              }
            ]
          },
          { 
            name: 'KEMENDIKBUDRISTEK (KEMENDIKDASMEN)',
            bgColor: '#DBEAFE',
            links: [
              { 
                type: 'video', 
                url: 'https://youtu.be/hx4bD72tR0M?si=R4-52EwPG97wc8wZ', 
                label: 'Program Guru Terampil (Terlatih, Aktif dan Tampil) Roadshow Nasional' 
              },
              { 
                type: 'article', 
                url: 'https://gurupaudpnf.kemendikdasmen.go.id/artikel/berita/article-2', 
                label: 'Kemendikdasmen Gelar Program Literasi Digital untuk Guru PAUD PNF' 
              }
            ]
          },
          { 
            name: 'KOMINFO (KOMDIGI)',
            bgColor: '#D1FAE5',
            links: [
              { 
                type: 'video', 
                url: 'https://youtu.be/Ttr4Qvq8pGw?si=R_gkGTBVf75r6stx', 
                label: 'Festival Literasi Game SERU (Sesuai Rating dan Usia) 2021' 
              }
            ]
          },
          { 
            name: 'DP2KBP3A Prov. Sumatera Barat',
            bgColor: '#FCE7F3',
            links: [
              { type: 'video', url: 'https://youtu.be/9jwlI8iFSQU?si=xd13Mo8FrzWmvOwe', label: 'Sosialisasi Internet Pintar Sahabat Anak di Sumatera Barat' },
              { type: 'article', url: 'https://infopublik.id/kategori/nusantara/609942/wagub-sumbar-buka-sosialisasi-internet-pintar-sahabat-anak', label: 'Wagub Sumbar Buka Sosialisasi Internet Pintar Sahabat Anak' }
            ]
          },
          { 
            name: 'Dinas Pendidikan Kota Bandung',
            bgColor: '#FEF3C7',
            links: [
              { 
                type: 'video', 
                url: 'https://youtu.be/Krkdr0yEgL4?si=0XuggNDbO761SHcY', 
                label: 'Program ABDI PAUD (Platform konsultasi masyarakat dengan para ahli pendidikan anak usia dini di Kota Bandung)' 
              }
            ]
          },
        ],
        'Private Sector': [
          { 
            name: 'Telkomsel',
            bgColor: '#E0E7FF',
            links: [
              {
                type: 'video',
                label: 'Video Kampanye #InternetBAIK',
                url: 'https://youtu.be/n-p8pS6gzA0?si=MVgBK7D5HLz3OtvT'
              },
              {
                type: 'article',
                label: 'Lewat #internetBAIK Telkomsel Gaungkan Kesadaran Literasi Digital untuk Ekosistem',
                url: 'https://www.telkomsel.com/about-us/blogs/lewat-internetbaik-telkomsel-gaungkan-kesadaran-literasi-digital-untuk-ekosistem'
              },
              {
                type: 'article',
                label: 'Telkomsel Luncurkan #internetBAIK',
                url: 'https://tekno.republika.co.id/berita/o7ztwb219/telkomsel-luncurkan-internetbaik'
              }
            ]
          },
          { 
            name: 'Pijar Belajar Telkom Indonesia',
            bgColor: '#FAE8FF',
            links: [
              { 
                type: 'video', 
                url: 'https://youtu.be/S5Ziyc3m1hA?si=RlvtqmpdcYycqR9G', 
                label: 'Komunitas Orangtua BERPIJAR (Bersama dampingi anak belajar)' 
              },
              { 
                type: 'article', 
                url: 'https://www.pijarbelajar.id/blog/grand-launching-komunitas-orangtua-berpijar', 
                label: 'Grand Launching Komunitas Orangtua Berpijar' 
              }
            ]
          },
          { 
            name: 'Telkomsel Orbit',
            bgColor: '#DCFCE7',
            links: [
              { 
                type: 'video', 
                url: 'https://youtu.be/dW98GCHMNic?si=D2kuelZ19ZVIxY5a', 
                label: 'Campaign Keluarga DIGITAL (Didik Generasi Lekat dan Sehat Mental)' 
              },
              { 
                type: 'article', 
                url: 'https://www.indotelko.com/read/1671149045/telkomsel-dan-fammily-implementasi-internet-sehat-di-keluarga-indonesia#:~:text=JAKARTA%20(IndoTelko)%20%2D%2D%20Rangkaian%20kegiatan%20Program%20Keluarga,Jabar%2C%20kemudian%20dilanjutkan%20dengan%20Parenting%20Bootcamp%20Competition', 
                label: 'Roadshow Parenting Keluarga Digital (Hybrid Program)' 
              }
            ]
          },
        ],
      },
      services: [
        'Perumusan tujuan & KPI program',
        'Desain alur kegiatan & timeline',
        'Penyusunan TOR & materi edukasi',
        'Koordinasi stakeholder & tim',
        'Project management & execution',
        'Monitoring & evaluasi program',
      ],
      servicesTitle: 'Apa yang bisa saya bantu?',
      cta: 'Diskusi Program',
      borderColor: '#ef4444', // red
      iconBg: '#fee2e2', // red light
    },
    {
      title: 'IT Consultant',
      icon: Code,
      description: 'Membantu organisasi, institusi, dan individu memanfaatkan teknologi secara optimal. Dari konsultasi pemilihan tools, pengembangan sistem, hingga transformasi digital yang sesuai kebutuhan dan budget.',
      services: [
        'Konsultasi pemilihan teknologi & platform',
        'Digital transformation strategy',
        'Website & aplikasi custom development',
        'Sistem informasi & automation',
        'Technical advisory & problem solving',
        'Training & knowledge transfer',
      ],
      servicesTitle: 'Apa saja yang bisa saya bantu.',
      cta: 'Konsultasi Teknologi',
      borderColor: '#3b82f6', // blue
      iconBg: '#dbeafe', // blue light
    },
    {
      title: 'Mentoring',
      icon: Heart,
      description: 'Program mentoring personal untuk mengatasi kecanduan game, HP, dan gadget pada anak & remaja (usia 13-25 tahun). Pendampingan mengatasi kecanduan HP berlebihan, screen time addiction, dan tantangan digital life dengan pendekatan coaching yang humanis. Membantu menemukan jati diri, purpose hidup, dan membangun pola hidup sehat di era digital.',
      mentoringTargetAge: '13-25 Tahun',
      mentoringIssues: [
        { 
          category: 'Kepercayaan Diri & Identitas',
          problems: ['Merasa tidak percaya diri', 'Bingung dengan potensi diri', 'Belum tahu arah masa depan']
        },
        { 
          category: 'Perilaku & Kebiasaan',
          problems: ['Kecanduan games atau gadget', 'Sulit mengatur waktu', 'Kehilangan motivasi']
        },
        { 
          category: 'Relasi & Komunikasi',
          problems: ['Sering konflik dengan orangtua', 'Kesulitan komunikasi dalam keluarga', 'Merasa tidak dipahami']
        },
      ],
      mentoringProcess: {
        title: 'Bagaimana Prosesnya?',
        description: 'Program ini dirancang fleksibel sesuai kebutuhan individu, dengan komitmen minimal 3 sesi coaching personal.',
        steps: [
          {
            title: 'Sesi Privat Coaching',
            detail: 'Minimal 3x pertemuan (total ~6 jam)',
            note: 'Bisa dalam Bahasa Indonesia atau Inggris',
            features: ['One-on-one session', 'Agenda disesuaikan dengan kebutuhan', 'Fleksibel: online via Zoom atau kunjungan ke rumah']
          },
          {
            title: 'Pendampingan Berkelanjutan',
            detail: 'Layanan konsultasi 30 hari',
            note: 'Tersedia selama program berlangsung',
            features: ['Bisa bertanya atau curhat kapan saja', 'Dukungan di luar jadwal sesi', 'Follow-up progress']
          },
          {
            title: 'Growth Journey Report',
            detail: 'Laporan perkembangan eksklusif',
            note: 'Dilengkapi rekomendasi untuk orangtua',
            features: ['Analisis perjalanan mentoring', 'Insight perkembangan anak', 'Rekomendasi langkah selanjutnya']
          },
        ]
      },
      mentoringOutcomes: [
        'Lebih mengenal diri sendiri dan potensi yang dimiliki',
        'Memiliki arah dan tujuan hidup yang lebih jelas',
        'Mampu mengelola emosi dan menghadapi tekanan dengan lebih baik',
        'Meningkatkan kemampuan komunikasi dan problem-solving',
        'Membangun relasi yang lebih sehat dengan keluarga',
        'Tumbuh tidak hanya secara skill, tapi juga karakter dan spiritual',
      ],
      mentoringTestimonials: [
        {
          name: 'Yanda',
          age: 22,
          context: 'Mahasiswa Tingkat Akhir di Amerika Serikat',
          quote: 'The session with Kak Mumu was fun, I felt heard and helped to formulate solutions to the problems I have been experiencing.',
          rating: '10/10',
          format: 'Offline'
        },
        {
          name: 'Farrel',
          age: 18,
          context: 'Siswa SMA di New Zealand',
          quote: 'The 3-month session with Kak Mumu actually helped me a lot to change the way I use gadget. This is really useful tool for me.',
          rating: '10/10',
          format: 'Online'
        },
      ],
      whyDifferent: {
        title: 'Kenapa berbeda?',
        points: [
          { label: 'Pengalaman Personal', text: 'Saya pernah mengalami struggle yang sama - dari kecanduan games hingga menemukan purpose hidup' },
          { label: 'Pendekatan Holistik', text: 'Tidak hanya fokus pada behavior, tapi juga spiritual, emosi, dan relasi' },
          { label: 'Praktisi Berpengalaman', text: '10+ tahun mendampingi ratusan anak muda dari berbagai latar belakang' },
          { label: 'Flexible & Personal', text: 'Disesuaikan dengan kebutuhan unik setiap individu, bukan program template' },
        ]
      },
      cta: 'Ngobrol-ngobrol dulu sekarang',
      borderColor: '#8b5cf6', // purple
      iconBg: '#ede9fe', // purple light
    },
  ];

  // Check if URL is /admin
  useEffect(() => {
    const checkAdminRoute = () => {
      const path = window.location.hash.replace('#', '') || window.location.pathname;
      if (path === '/admin' || path === 'admin') {
        setShowAdminPanel(true);
      } else {
        setShowAdminPanel(false);
      }
    };

    checkAdminRoute();
    window.addEventListener('hashchange', checkAdminRoute);
    return () => window.removeEventListener('hashchange', checkAdminRoute);
  }, []);

  // Show Admin Panel if requested
  if (showAdminPanel) {
    return <AdminPanel />;
  }

  return (
    <div className="bg-[#0a282e] leading-none">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a282e]">
        <div className="relative w-full h-[64px] md:h-[80px] flex justify-center overflow-visible">
          <div ref={navContainerRef} className="relative w-full max-w-[1440px] h-full overflow-visible px-4">
            {/* Dynamic cream background - DESKTOP ONLY */}
            <div 
              className="hidden md:block absolute top-0 h-full bg-[#dac5a7] transition-all duration-500 ease-in-out pointer-events-none"
              style={{
                left: `${creamBg.left}px`,
                width: `${creamBg.width}px`,
                zIndex: -1,
              }}
            />

            {/* MOBILE NAVIGATION */}
            <div className="md:hidden flex items-center justify-between h-full w-full">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-[20px] font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-white"
              >
                Kak Mumu
              </button>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => scrollToSection('tentang-saya')}
                  className={`px-2 py-1 text-[11px] font-['Montserrat:Medium',sans-serif] font-medium ${
                    activeSection === 'tentang-saya' ? 'text-[#dac5a7]' : 'text-white/70'
                  }`}
                >
                  Tentang
                </button>
                <button 
                  onClick={() => scrollToSection('ruang-kolaborasi')}
                  className={`px-2 py-1 text-[11px] font-['Montserrat:Medium',sans-serif] font-medium ${
                    activeSection === 'ruang-kolaborasi' ? 'text-[#dac5a7]' : 'text-white/70'
                  }`}
                >
                  Kolaborasi
                </button>
                <button 
                  onClick={() => scrollToSection('blog')}
                  className={`px-2 py-1 text-[11px] font-['Montserrat:Medium',sans-serif] font-medium ${
                    activeSection === 'blog' ? 'text-[#dac5a7]' : 'text-white/70'
                  }`}
                >
                  Blog
                </button>
              </div>
            </div>

            {/* DESKTOP NAVIGATION - RESPONSIVE */}
            <div className="hidden md:flex relative h-full items-center justify-between px-4 lg:px-8 xl:px-12">
              {/* Left section */}
              <div className="flex items-center gap-6 lg:gap-8 xl:gap-12 z-20">
                <button 
                  ref={tentangRef}
                  onClick={() => scrollToSection('tentang-saya')}
                  className={`px-4 py-2 text-[15px] lg:text-[16px] font-['Montserrat:Medium',sans-serif] font-medium transition-colors hover:text-white whitespace-nowrap cursor-pointer ${
                    activeSection === 'tentang-saya' ? 'text-[#0a282e]' : 'text-[#d9c4a7]'
                  }`}
                >
                  Tentang Saya
                </button>
                <button 
                  ref={kolaborasiRef}
                  onClick={() => scrollToSection('ruang-kolaborasi')}
                  className={`px-4 py-2 text-[15px] lg:text-[16px] font-['Montserrat:Medium',sans-serif] font-medium transition-colors hover:text-white whitespace-nowrap cursor-pointer ${
                    activeSection === 'ruang-kolaborasi' ? 'text-[#0a282e]' : 'text-[#d9c4a7]'
                  }`}
                >
                  Ruang Kolaborasi
                </button>
              </div>

              {/* Center logo */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20">
                <button 
                  onClick={() => scrollToSection('home')}
                  className={`px-6 py-2 text-[24px] lg:text-[26px] xl:text-[28px] font-['Montserrat:ExtraBold',sans-serif] font-extrabold transition-all cursor-pointer ${
                    activeSection === 'home' ? 'text-[#0a282e]' : 'text-[#d9c4a7] hover:text-white'
                  }`}
                >
                  Kak Mumu
                </button>
              </div>

              {/* Right section */}
              <div className="flex items-center gap-6 lg:gap-8 xl:gap-12 z-20">
                <button 
                  ref={karyaRef}
                  onClick={() => scrollToSection('karya')}
                  className={`px-4 py-2 text-[15px] lg:text-[16px] font-['Montserrat:Medium',sans-serif] font-medium transition-colors hover:text-white whitespace-nowrap cursor-pointer ${
                    activeSection === 'karya' ? 'text-[#0a282e]' : 'text-[#d9c4a7]'
                  }`}
                >
                  Apresiasi & Media
                </button>
                <button 
                  onClick={() => scrollToSection('blog')}
                  className={`px-4 py-2 text-[15px] lg:text-[16px] font-['Montserrat:Medium',sans-serif] font-medium transition-colors hover:text-white whitespace-nowrap cursor-pointer ${
                    activeSection === 'blog' ? 'text-[#0a282e]' : 'text-[#d9c4a7]'
                  }`}
                >
                  Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero-section" className="relative w-full min-h-screen md:h-auto bg-[#0a282e] overflow-x-hidden pb-0">
        <div className="relative w-full h-full md:h-auto">
          {/* Main Container - ONLY SHOW ON DESKTOP - NOW RESPONSIVE */}
          <div className="hidden md:block relative mx-auto top-0 w-full max-w-[1440px]" style={{ height: '700px' }}>
            
            {/* Cover Section */}
            <div className="absolute left-0 top-0 w-full" style={{ height: '700px' }}>
              {/* Dark background */}
              <div className="absolute bg-[#0a282e] left-0 top-0 w-full" style={{ height: '700px' }} />
              
              {/* Beige center panel - RESPONSIVE: centered */}
              <div 
                className="absolute bg-[#dac5a7] top-0 bottom-[140px]" 
                style={{
                  left: 'max(calc((100% - 430px) / 2), calc(35.35% - 10px))',
                  width: 'min(430px, 30%)'
                }}
              />
              
              {/* Photo - PARALLAX - RESPONSIVE: centered */}
              <div 
                className="absolute transition-transform duration-75" 
                style={{
                  top: '80px',
                  left: 'max(calc((100% - 430px) / 2), calc(35.35% - 10px))',
                  width: 'min(430px, 30%)',
                  bottom: '140px',
                  transform: `translateY(${scrollY * 0.15}px)`
                }}
              >
                <img 
                  alt="Muhamad Nur Awaludin - Kak Mumu" 
                  className="absolute inset-0 max-w-none object-cover object-top pointer-events-none size-full" 
                  src={imgMumuFoto24} 
                />
              </div>
              
              {/* White background for logos */}
              <div className="absolute bg-white left-0 bottom-0 w-full rounded-t-[32px]" style={{ height: '140px' }} />
              
              {/* Text above logos - NOW INSIDE WHITE SECTION */}
              <div className="absolute left-0 w-full text-center px-8 lg:px-16 xl:px-24" style={{ bottom: '95px' }}>
                <p className="font-['Montserrat:Bold',sans-serif] font-bold text-gray-700 text-[15px] lg:text-[16px] xl:text-[17px] leading-[24px] max-w-[1000px] mx-auto">
                  Narasumber dan Trainer untuk Institusi, Sekolah & Organisasi di 50+ Kota
                </p>
              </div>
              
              {/* Logo strip with marquee - RESPONSIVE */}
              <div className="absolute left-4 lg:left-8 right-4 lg:right-8 h-[76px] overflow-hidden" style={{ bottom: '30px' }}>
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes marquee-home {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .animate-marquee-home {
                    animation: marquee-home 40s linear infinite;
                  }
                  .animate-marquee-home:hover {
                    animation-play-state: paused;
                  }
                `}} />
                
                <div className="flex items-center h-full">
                  <div className="flex items-center gap-[11px] animate-marquee-home">
                    {[...Array(3)].map((_, setIndex) => (
                      <div key={setIndex} className="flex items-center gap-[11px] shrink-0">
                        {/* Logo 1 - Bank Indonesia */}
                        <div className="h-[60px] w-[112px] relative shrink-0">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="Partner logo" className="absolute h-[131.03%] left-[-0.23%] max-w-none top-[-15.52%] w-[100.47%]" src={imgImage2313} />
                          </div>
                        </div>
                        {/* Logo 2 - BPS */}
                        <div className="size-[45px] relative shrink-0">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="Partner logo" className="absolute h-[100.08%] left-0 max-w-none top-[-0.04%] w-[397.22%]" src={imgImage508} />
                          </div>
                        </div>
                        {/* Logo 3 - Komdigi */}
                        <div className="h-[18.727px] w-[109.514px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2312} />
                        </div>
                        <div className="h-[44px] w-[60px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2311} />
                        </div>
                        <div className="size-[45px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2310} />
                        </div>
                        <div className="h-[33px] w-[95px] relative shrink-0">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="Partner logo" className="absolute h-full left-[1.73%] max-w-none top-0 w-[96.92%]" src={imgImage750} />
                          </div>
                        </div>
                        <div className="size-[52px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoDtSm} />
                        </div>
                        <div className="size-[55px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2317} />
                        </div>
                        <div className="h-[50px] w-[33px] relative shrink-0">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="Partner logo" className="absolute h-[90.23%] left-[-0.71%] max-w-none top-[4.88%] w-full" src={imgImage2320} />
                          </div>
                        </div>
                        <div className="h-[50px] w-[96px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2321} />
                        </div>
                        <div className="h-[28px] w-[83px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2033} />
                        </div>
                        <div className="size-[36px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2319} />
                        </div>
                        <div className="h-[31px] w-[94px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2314} />
                        </div>
                        <div className="h-[29.13px] w-[134px] relative shrink-0">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="Partner logo" className="absolute h-full left-[-0.91%] max-w-none top-0 w-[98.91%]" src={imgImage2315} />
                          </div>
                        </div>
                        <div className="h-[44px] w-[43px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2316} />
                        </div>
                        <div className="size-[36px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage184} />
                        </div>
                        <div className="h-[22px] w-[64px] relative shrink-0">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="Partner logo" className="absolute h-[327.24%] left-[-4.61%] max-w-none top-[-112.87%] w-[109.4%]" src={imgImage740} />
                          </div>
                        </div>
                        <div className="h-[44px] w-[60px] relative shrink-0">
                          <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2322} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Mari Berkolaborasi - Right side - RESPONSIVE */}
              <button 
                onClick={() => scrollToSection('ruang-kolaborasi')}
                className="absolute top-[350px] inline-flex items-center gap-3 text-[#dac5a7] hover:text-white font-['Montserrat:Medium',sans-serif] font-medium text-[clamp(22px,2vw,28px)] leading-[25px] transition-colors group cursor-pointer"
                style={{
                  right: 'max(31px, 2%)'
                }}
              >
                Mari Berkolaborasi
                <svg className="w-[34px] h-[15px] group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 35 15">
                  <path d={svgPaths.p28059e00} fill="currentColor" />
                </svg>
              </button>
            </div>
            
            {/* Left Content - PARALLAX - RESPONSIVE */}
            <div 
              className="absolute top-[120px] w-[min(400px,28%)] h-[266px] transition-transform duration-75"
              style={{ 
                left: 'max(55px, 4%)',
                transform: `translateY(${scrollY * 0.1}px)` 
              }}
            >
              <p className="absolute font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[0] left-0 text-[clamp(32px,2.8vw,41.128px)] text-white top-0">
                <span className="leading-[1.05]">Assalamu'alaikum</span>
                <span className="leading-[1.05] text-[#dac5a7]">.</span>
              </p>
              
              <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[51px] text-[#dac5a7] text-[clamp(16px,1.4vw,20px)] top-[53px] whitespace-nowrap">
                Saya Muhamad Nur Awaludin
              </p>
              
              <div className="absolute h-0 left-0 top-[73px] w-[32px]">
                <div className="absolute inset-[-3.14px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 3.13786">
                    <line stroke="#DAC5A7" strokeWidth="3.13786" x2="32" y1="1.56893" y2="1.56893" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] left-0 text-[clamp(16px,1.5vw,21.702px)] text-white top-[106px] whitespace-nowrap">
                <p className="mb-0">Narasumber & Trainer</p>
                <p>Program Manager · Product Designer</p>
              </div>
              
              <div className="absolute left-0 top-[206px]">
                <a 
                  href="https://s.id/profilkakmumu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center bg-[#dac5a7] hover:bg-[#c9b496] h-[60px] w-[230px] rounded-[8px] transition-colors cursor-pointer"
                >
                  <div className="absolute left-[45px] size-[24px] top-[18px]">
                    <div className="absolute inset-[12.5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g>
                          <path clipRule="evenodd" d={svgDownload.p39fea300} fill="#0E0E0E" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgDownload.p3baeb000} fill="#0E0E0E" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[74px] text-[#0e0e0e] text-[16px] top-[22px]">
                    Download CV
                  </p>
                </a>
              </div>
            </div>
            
            {/* Right Content - RESPONSIVE */}
            <p 
              className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[25px] text-[#dac5a7] text-[clamp(14px,1.1vw,16px)] text-justify top-[130px] w-[min(431px,30%)] whitespace-pre-wrap"
              style={{
                right: 'max(31px, 2%)'
              }}
            >
              <span className="font-['Montserrat:Bold',sans-serif] font-bold">Narasumber Parenting Digital, Kecanduan Gadget & Game - </span>
              <span>Praktisi dengan pengalaman </span>
              <span className="font-['Montserrat:Bold',sans-serif] font-bold">10+ tahun </span>
              <span>mendampingi orangtua, guru, dan organisasi mengatasi </span>
              <span className="font-['Montserrat:Bold',sans-serif] font-bold">kecanduan HP, screen time berlebihan, dan tantangan digital parenting</span>
              <span>. Menghadirkan solusi praktis berbasis psikologi dan pengalaman lapangan.</span>
            </p>
          </div>

          {/* MOBILE HERO - Simple Version */}
          <div className="md:hidden relative w-full min-h-screen flex flex-col items-center justify-start px-6 pt-24 pb-0 text-center bg-[#0a282e]">
            <div className="mb-8 flex-1 flex flex-col justify-center">
              <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[32px] text-white mb-3">
                Muhamad Nur Awaludin
              </h1>
              
              {/* Subtitle - Professional Roles */}
              <div className="mb-6">
                <p className="text-white font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[22px]">
                  Narasumber Parenting Digital & Kecanduan Gadget
                </p>
                <p className="text-white font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[22px]">
                  Trainer Komunikasi Keluarga & Kesehatan Mental
                </p>
              </div>
              
              <p className="text-[#dac5a7] text-[14px] font-['Montserrat:Medium',sans-serif] leading-relaxed max-w-md mx-auto mb-6">
                Praktisi dengan <span className="font-['Montserrat:Bold',sans-serif] font-bold">10+ tahun pengalaman</span> membantu orangtua dan guru mengatasi <span className="font-['Montserrat:Bold',sans-serif] font-bold">kecanduan game, HP berlebihan, dan tantangan digital parenting</span>. Menghadirkan solusi berbasis psikologi untuk membangun keluarga yang sehat di era digital.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
                {/* Download CV Button - Outline Style */}
                <a 
                  href="https://s.id/profilkakmumu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-2 border-[#dac5a7] text-[#dac5a7] px-8 py-3 rounded-full font-['Montserrat:SemiBold',sans-serif] font-semibold text-[14px] hover:bg-[#dac5a7] hover:text-[#0a282e] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 11.25V14.0625C15.75 14.5106 15.5722 14.9403 15.2557 15.2557C14.9403 15.5722 14.5106 15.75 14.0625 15.75H3.9375C3.48995 15.75 3.06072 15.5722 2.74426 15.2557C2.42779 14.9403 2.25 14.5106 2.25 14.0625V11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.0625 7.3125L9 11.25L12.9375 7.3125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11.25V2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download CV
                </a>
                
                {/* Let's Talk Button - Filled Style */}
                <button 
                  onClick={() => scrollToSection('ruang-kolaborasi')}
                  className="bg-[#dac5a7] text-[#0a282e] px-8 py-3 rounded-full font-['Montserrat:SemiBold',sans-serif] font-semibold text-[14px] hover:bg-[#c9b396] transition-colors"
                >
                  Let's Talk!
                </button>
              </div>
            </div>
            
            {/* Mobile Logo Section - White background with text and marquee */}
            <div className="w-full mt-12">
              {/* White background */}
              <div className="bg-white rounded-t-[24px] px-4 py-6">
                {/* Text above logos */}
                <div className="mb-4">
                  <p className="font-['Montserrat:Bold',sans-serif] font-bold text-gray-700 text-[11px] leading-[16px] text-center">
                    Narasumber Parenting Digital, Kecanduan Gadget & Game - Dipercaya oleh institusi, sekolah & organisasi di 50+ kota di Indonesia
                  </p>
                </div>
                
                {/* Logo strip with marquee */}
                <div className="w-full h-[50px] overflow-hidden">
                  <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes marquee-mobile {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    .animate-marquee-mobile {
                      animation: marquee-mobile 30s linear infinite;
                    }
                    .animate-marquee-mobile:hover {
                      animation-play-state: paused;
                    }
                  `}} />
                  
                  <div className="flex items-center h-full">
                    <div className="flex items-center gap-[8px] animate-marquee-mobile">
                      {[...Array(3)].map((_, setIndex) => (
                        <div key={setIndex} className="flex items-center gap-[8px] shrink-0">
                          {/* Logo 1 - Bank Indonesia */}
                          <div className="h-[40px] w-[75px] relative shrink-0">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="Partner logo" className="absolute h-[131.03%] left-[-0.23%] max-w-none top-[-15.52%] w-[100.47%]" src={imgImage2313} />
                            </div>
                          </div>
                          {/* Logo 2 - BPS */}
                          <div className="size-[30px] relative shrink-0">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="Partner logo" className="absolute h-[100.08%] left-0 max-w-none top-[-0.04%] w-[397.22%]" src={imgImage508} />
                            </div>
                          </div>
                          {/* Logo 3 - Komdigi */}
                          <div className="h-[12px] w-[73px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2312} />
                          </div>
                          <div className="h-[29px] w-[40px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2311} />
                          </div>
                          <div className="size-[30px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2310} />
                          </div>
                          <div className="h-[22px] w-[63px] relative shrink-0">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="Partner logo" className="absolute h-full left-[1.73%] max-w-none top-0 w-[96.92%]" src={imgImage750} />
                            </div>
                          </div>
                          <div className="size-[35px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoDtSm} />
                          </div>
                          <div className="size-[37px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2317} />
                          </div>
                          <div className="h-[33px] w-[22px] relative shrink-0">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="Partner logo" className="absolute h-[90.23%] left-[-0.71%] max-w-none top-[4.88%] w-full" src={imgImage2320} />
                            </div>
                          </div>
                          <div className="h-[33px] w-[64px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2321} />
                          </div>
                          <div className="h-[19px] w-[55px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2033} />
                          </div>
                          <div className="size-[24px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2319} />
                          </div>
                          <div className="h-[21px] w-[63px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2314} />
                          </div>
                          <div className="h-[19px] w-[89px] relative shrink-0">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="Partner logo" className="absolute h-full left-[-0.91%] max-w-none top-0 w-[98.91%]" src={imgImage2315} />
                            </div>
                          </div>
                          <div className="h-[29px] w-[29px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2316} />
                          </div>
                          <div className="size-[24px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage184} />
                          </div>
                          <div className="h-[15px] w-[43px] relative shrink-0">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="Partner logo" className="absolute h-[327.24%] left-[-4.61%] max-w-none top-[-112.87%] w-[109.4%]" src={imgImage740} />
                            </div>
                          </div>
                          <div className="h-[29px] w-[40px] relative shrink-0">
                            <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2322} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Saya Section */}
      <section id="tentang-saya" className="bg-white py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[28px] md:text-[36px] lg:text-[48px] text-[#0a282e] mb-6">
              Tentang Saya
            </h1>
            
            {/* Timeline Horizontal Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.values(timelineData).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTimeline(item.id)}
                  className={`px-5 py-2.5 rounded-full font-['Montserrat:Medium',sans-serif] text-[14px] md:text-[15px] transition-all whitespace-nowrap ${
                    activeTimeline === item.id
                      ? 'bg-[#c94a4a] text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-[#0a282e] hover:bg-gray-200 hover:scale-102'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content: 2 Kolom */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Photo - COMPACT */}
            <div className="w-full md:w-[320px] flex-shrink-0">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback 
                  key={activeTimeline}
                  src={currentTimeline.image}
                  alt={currentTimeline.title}
                  className="w-full h-full object-cover object-center transition-opacity duration-500 animate-fadeIn"
                />
              </div>
            </div>

            {/* Right: Content - DYNAMIC */}
            <div className="flex-1">
              {/* Current timeline content dengan fade */}
              <div 
                key={`content-${activeTimeline}`}
                className="animate-fadeIn"
              >
                <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[22px] md:text-[26px] text-[#c94a4a] mb-4">
                  {currentTimeline.title}
                </h2>
                
                {/* Render konten langsung dari timelineData */}
                <div className="text-[16px] md:text-[18px] text-[#0a282e] leading-relaxed mb-6 text-justify">
                  {currentTimeline.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ruang Kolaborasi Section */}
      <RuangKolaborasi 
        collaborationTypes={collaborationTypes}
        selectedCollab={selectedCollab}
        setSelectedCollab={setSelectedCollab}
        scrollToSection={scrollToSection}
      />
      <div style={{ display: 'none' }}><section id="ruang-kolaborasi-old" className="min-h-screen bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          {/* Header */}
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[28px] md:text-[36px] lg:text-[48px] text-[#0a282e] mb-4">
              Ruang Kolaborasi
            </h1>
            <p className="text-[#0a282e]/70 text-[16px] md:text-[20px] font-['Montserrat:Medium',sans-serif] font-medium">
              Klik untuk melihat detail kolaborasi
            </p>
          </div>

          {/* Bento Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {collaborationTypes.map((collab, index) => {
              const Icon = collab.icon;
              const isExpanded = flippedCards[index];

              return (
                <div
                  key={index}
                  className={`
                    transition-all duration-500 ease-in-out
                    ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                    ${index === 1 ? 'md:col-span-1 md:row-span-1' : ''}
                    ${index === 2 ? 'md:col-span-1 md:row-span-1' : ''}
                    ${index === 3 ? 'md:col-span-3 md:row-span-1' : ''}
                    ${isExpanded ? 'md:col-span-3' : ''}
                  `}
                >
                  <div
                    onClick={() => toggleFlip(index)}
                    className="relative h-full min-h-[280px] rounded-3xl p-6 md:p-8 cursor-pointer overflow-hidden group transition-all duration-500 hover:shadow-2xl"
                    style={{
                      backgroundColor: isExpanded ? collab.iconBg : 'white',
                      border: `3px solid ${collab.borderColor}`,
                    }}
                  >
                    {/* Collapsed State */}
                    {!isExpanded && (
                      <div className="h-full flex flex-col justify-between">
                        <div>
                          {/* Icon */}
                          <div
                            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                            style={{ backgroundColor: collab.iconBg }}
                          >
                            <Icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: collab.borderColor }} strokeWidth={2} />
                          </div>

                          {/* Title */}
                          <h3 
                            className="font-['Montserrat:Bold',sans-serif] font-bold text-[20px] md:text-[24px] lg:text-[28px] mb-3 leading-tight"
                            style={{ color: collab.borderColor }}
                          >
                            {collab.title}
                          </h3>

                          {/* Short Description */}
                          <p className="text-[#0a282e]/70 text-[14px] md:text-[15px] font-['Montserrat:Medium',sans-serif] font-medium leading-relaxed">
                            {collab.description.split('.')[0]}.
                          </p>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 mt-4 font-['Montserrat:SemiBold',sans-serif] font-semibold text-[14px] md:text-[15px]" style={{ color: collab.borderColor }}>
                          Lihat Detail
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    )}

                    {/* Expanded State */}
                    {isExpanded && (
                      <div className="h-full">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div
                              className="w-16 h-16 rounded-2xl flex items-center justify-center"
                              style={{ backgroundColor: 'white' }}
                            >
                              <Icon className="w-8 h-8" style={{ color: collab.borderColor }} strokeWidth={2} />
                            </div>
                            <h3 
                              className="font-['Montserrat:Bold',sans-serif] font-bold text-[22px] md:text-[26px] leading-tight"
                              style={{ color: collab.borderColor }}
                            >
                              {collab.title}
                            </h3>
                          </div>
                          <button 
                            className="text-[#0a282e]/50 hover:text-[#0a282e] transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFlip(index);
                            }}
                          >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>

                        <p className="text-[#0a282e]/80 text-[14px] md:text-[15px] leading-relaxed mb-6 font-['Montserrat:Medium',sans-serif] font-medium">
                          {collab.description}
                        </p>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                          {/* For Narasumber - Show Topics by Category */}
                          {collab.topics && Object.entries(collab.topics).map(([category, items], idx) => (
                            <div key={idx} className="bg-white/80 rounded-2xl p-4">
                              <h4 className="font-['Montserrat:Bold',sans-serif] font-bold text-[14px] md:text-[15px] mb-3" style={{ color: collab.borderColor }}>
                                {category}
                              </h4>
                              <ul className="space-y-2">
                                {items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="flex items-start gap-2 text-[#0a282e]/70 text-[12px] md:text-[13px] font-['Montserrat:Medium',sans-serif] font-medium leading-tight">
                                    <span className="text-[8px] mt-1">●</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {/* For Program Manager - Show Clients */}
                          {collab.clients && (
                            <>
                              {Object.entries(collab.clients).map(([category, items], idx) => (
                                <div key={idx} className="bg-gradient-to-br from-white/95 to-white/80 rounded-3xl p-5 shadow-sm border border-white/50 backdrop-blur-sm">
                                  <div className="flex items-center gap-2 mb-4">
                                    <div 
                                      className="font-['Montserrat:Bold',sans-serif] font-bold text-[15px] md:text-[16px] px-6 py-2.5 rounded-full"
                                      style={{ 
                                        backgroundColor: collab.borderColor,
                                        color: 'white'
                                      }}
                                    >
                                      {category}
                                    </div>
                                  </div>
                                  <div className="space-y-6">
                                    {items.map((item, itemIdx) => (
                                      <div key={itemIdx} className="group">
                                        <div className="flex items-start gap-2.5 mb-3">
                                          <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: collab.borderColor }}></div>
                                          <span 
                                            className="text-[#0a282e] text-[13px] md:text-[14px] font-['Montserrat:Bold',sans-serif] font-bold leading-snug px-4 py-2 rounded-lg inline-block shadow-sm"
                                            style={{ backgroundColor: item.bgColor || '#F3F4F6' }}
                                          >
                                            {item.name}
                                          </span>
                                        </div>
                                        {item.links && item.links.length > 0 && (
                                          <div className="ml-4 space-y-3">
                                            {item.links.map((link, linkIdx) => (
                                              <div key={linkIdx}>
                                                {link.type === 'video' ? (
                                                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="block">
                                                      <div className="relative aspect-video bg-gray-100 group/video cursor-pointer">
                                                        <img
                                                          src={`https://img.youtube.com/vi/${link.url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^\/&?]+)/)?.[1]}/maxresdefault.jpg`}
                                                          alt="Video Thumbnail"
                                                          className="w-full h-full object-cover"
                                                          onError={(e) => {
                                                            e.currentTarget.src = `https://img.youtube.com/vi/${link.url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^\/&?]+)/)?.[1]}/hqdefault.jpg`;
                                                          }}
                                                        />
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/video:bg-black/30 transition-colors">
                                                          <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform group-hover/video:scale-110 transition-transform">
                                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="p-3 flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                          <Video className="w-4 h-4" style={{ color: collab.borderColor }} />
                                                          <span className="text-[12px] md:text-[13px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#0a282e]/70">{link.label}</span>
                                                        </div>
                                                        <ExternalLink className="w-3.5 h-3.5 text-[#0a282e]/40" />
                                                      </div>
                                                    </a>
                                                  </div>
                                                ) : (
                                                  <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="block">
                                                    <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-xl p-4 border border-blue-100/50 hover:border-blue-200 hover:shadow-md transition-all group/article">
                                                      <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                                          <FileText className="w-5 h-5" style={{ color: collab.borderColor }} />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                          <div className="text-[12px] md:text-[13px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#0a282e]/80 mb-0.5">{link.label}</div>
                                                          <div className="text-[10px] md:text-[11px] font-['Montserrat:Medium',sans-serif] text-[#0a282e]/50 truncate">{new URL(link.url).hostname}</div>
                                                        </div>
                                                        <ExternalLink className="w-4 h-4 text-[#0a282e]/30 group-hover/article:text-[#0a282e]/60 transition-colors flex-shrink-0" />
                                                      </div>
                                                    </div>
                                                  </a>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              
                              {collab.services && (
                                <div className="bg-gradient-to-br from-white/95 to-white/80 rounded-3xl p-5 shadow-sm border border-white/50 backdrop-blur-sm">
                                  <div className="flex items-center gap-2 mb-4">
                                    <div className="w-1 h-6 rounded-full" style={{ backgroundColor: collab.borderColor }}></div>
                                    <h4 className="font-['Montserrat:Bold',sans-serif] font-bold text-[15px] md:text-[16px]" style={{ color: collab.borderColor }}>
                                      {collab.servicesTitle || 'Services'}
                                    </h4>
                                  </div>
                                  <ul className="space-y-2.5">
                                    {collab.services.map((service, idx) => (
                                      <li key={idx} className="flex items-start gap-2.5 text-[#0a282e]/70 text-[12px] md:text-[13px] font-['Montserrat:Medium',sans-serif] font-medium leading-snug">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: collab.borderColor }}></div>
                                        {service}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </>
                          )}

                          {/* For Software Development & Creative Consultation - Show Services */}
                          {!collab.topics && !collab.clients && collab.services && (
                            <div className="bg-white/80 rounded-2xl p-4">
                              <h4 className="font-['Montserrat:Bold',sans-serif] font-bold text-[14px] md:text-[15px] mb-3" style={{ color: collab.borderColor }}>
                                Apa saja yang bisa saya bantu.
                              </h4>
                              <ul className="space-y-2">
                                {collab.services.map((service, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-[#0a282e]/70 text-[12px] md:text-[13px] font-['Montserrat:Medium',sans-serif] font-medium leading-tight">
                                    <span className="text-[8px] mt-1">●</span>
                                    {service}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-end">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToSection('kontak');
                            }}
                            className="px-8 py-3 rounded-xl font-['Montserrat:Bold',sans-serif] font-bold text-[14px] text-white transition-all hover:opacity-90 hover:scale-105"
                            style={{ backgroundColor: collab.borderColor }}
                          >
                            {collab.cta}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section></div>

      {/* Apresiasi dan Liputan Media Section */}
      <section id="karya" className="min-h-screen bg-[#0a282e] py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          {/* Header */}
          <div className="mb-12 md:mb-20 text-center">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#dac5a7]/20 blur-2xl rounded-full" />
                <div className="relative bg-gradient-to-br from-[#dac5a7] to-[#c9b396] p-3 md:p-4 rounded-2xl shadow-xl">
                  <Trophy className="w-8 h-8 md:w-10 md:h-10 text-[#0a282e]" />
                </div>
              </div>
            </div>
            
            <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[32px] md:text-[42px] lg:text-[52px] text-white mb-3 md:mb-4">
              Apresiasi dan Liputan Media
            </h1>
            <p className="text-white/80 text-[14px] md:text-[16px] lg:text-[18px] font-['Montserrat:Medium',sans-serif] max-w-3xl mx-auto mb-4 md:mb-6 px-4 leading-relaxed">
              Pengalaman menangani program parenting digital, kecanduan gadget, dan literasi digital di berbagai institusi. Dipercaya media nasional untuk membahas solusi kecanduan game, HP, dan tantangan digital parenting di Indonesia.
            </p>
            <div className="flex justify-center">
              <div className="w-[64px] h-[4px] bg-[#dac5a7] rounded-full" />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 md:mb-16 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 md:px-8 py-2.5 md:py-3 rounded-full font-['Montserrat:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#dac5a7] text-[#0a282e] shadow-lg scale-105'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/20 hover:border-white/40'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Awards Section - Compact Layout */}
          {(activeFilter === 'semua' || activeFilter === 'awards') && (
            <div className="mb-16 md:mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                
                {/* Semasa Kuliah */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-xl flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1706340674031-acaaf6e2144b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMHRyb3BoeSUyMGF3YXJkfGVufDF8fHx8MTc3MTM3NDU2Nnww&ixlib=rb-4.1.0&q=80&w=400"
                        alt="Semasa Kuliah"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[18px] md:text-[22px] text-white mb-0.5">
                        Semasa Kuliah
                      </h2>
                      <p className="text-white/60 text-[12px] md:text-[14px] font-['Montserrat:Medium',sans-serif]">
                        Teknik Informatika UNIKOM
                      </p>
                    </div>
                  </div>

                  {/* Photo Frame - Semasa Kuliah */}
                  <div className="mb-5">
                    <div className="relative w-full rounded-xl overflow-hidden border-2 border-white/20 shadow-xl">
                      <img 
                        src={imgKuliahPhoto}
                        alt="Semasa Kuliah - Kompetisi dan Aktivitas"
                        className="w-full h-[180px] md:h-[220px] object-cover"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {awards.filter(award => award.category === 'kuliah').map((award, idx) => (
                      <div
                        key={idx}
                        className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-[#dac5a7]/60 transition-all duration-300 hover:bg-white/15"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 bg-[#dac5a7]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#dac5a7]/30 transition-colors">
                            <Trophy className="w-4 h-4 text-[#dac5a7]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[13px] md:text-[14px] text-white leading-snug group-hover:text-[#dac5a7] transition-colors">
                              {award.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Semasa Menjadi Entrepreneur */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-xl flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1677640724372-adb865d29aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyJTIwYnVzaW5lc3MlMjBhd2FyZHN8ZW58MXx8fHwxNzcxMzc0NTcwfDA&ixlib=rb-4.1.0&q=80&w=400"
                        alt="Entrepreneur"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[18px] md:text-[22px] text-white mb-0.5">
                        Semasa Menjadi Entrepreneur
                      </h2>
                      <p className="text-white/60 text-[12px] md:text-[14px] font-['Montserrat:Medium',sans-serif]">
                        2014 - Sekarang
                      </p>
                    </div>
                  </div>

                  {/* Photo Frame - Semasa Menjadi Entrepreneur */}
                  <div className="mb-5">
                    <div className="relative w-full rounded-xl overflow-hidden border-2 border-white/30 shadow-xl">
                      <img 
                        src={imgEntrepreneurPhoto}
                        alt="Semasa Menjadi Entrepreneur - Startup Activities"
                        className="w-full h-[180px] md:h-[220px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Kakatu Awards - Compact */}
                  <div className="mb-5">
                    <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[15px] md:text-[18px] text-[#dac5a7] mb-3">
                      Awards with Kakatu (Parenting Startup)
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {awards.filter(award => award.category === 'kakatu').map((award, idx) => (
                        <div
                          key={idx}
                          className="group relative bg-[#1a4a54]/80 backdrop-blur-sm rounded-xl p-3.5 border border-[#2d6670]/60 hover:border-[#dac5a7]/60 transition-all duration-300 hover:bg-[#1a4a54]/90"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#dac5a7]/15 rounded-lg flex items-center justify-center group-hover:bg-[#dac5a7]/25 transition-all duration-300">
                              <Trophy className="w-4 h-4 text-[#dac5a7]" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[13px] md:text-[14px] text-white leading-snug group-hover:text-[#dac5a7] transition-colors duration-300">
                                {award.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fammi Awards - Compact */}
                  <div>
                    <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[15px] md:text-[18px] text-[#dac5a7] mb-3">
                      Awards with Fammi (Education Consultant)
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {awards.filter(award => award.category === 'fammi').map((award, idx) => (
                        <div
                          key={idx}
                          className="group relative bg-[#1a4a54]/80 backdrop-blur-sm rounded-xl p-3.5 border border-[#2d6670]/60 hover:border-[#dac5a7]/60 transition-all duration-300 hover:bg-[#1a4a54]/90"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#dac5a7]/15 rounded-lg flex items-center justify-center group-hover:bg-[#dac5a7]/25 transition-all duration-300">
                              <Trophy className="w-4 h-4 text-[#dac5a7]" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[13px] md:text-[14px] text-white leading-snug group-hover:text-[#dac5a7] transition-colors duration-300">
                                {award.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Media Section */}
          {(activeFilter === 'semua' || activeFilter === 'media') && (
            <div>
              {/* Video Liputan */}
              <div className="mb-12 md:mb-16">
                <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[24px] md:text-[32px] text-white mb-8 md:mb-10 text-center">
                  Liputan Video
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {mediaVideos.map((video) => (
                    <div
                      key={video.id}
                      className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-[#dac5a7]/60 transition-all duration-300 hover:scale-102"
                    >
                      {/* YouTube Embed - Simple without captcha */}
                      <div className="relative aspect-video bg-black">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                      {/* Video Info */}
                      <div className="p-5 md:p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="bg-white rounded-lg px-5 py-3 shadow-md">
                            <img 
                              src={video.logo}
                              alt={video.channel}
                              className={`object-contain ${video.channel === 'MNC TV' ? 'h-9 md:h-11' : 'h-7 md:h-8'}`}
                            />
                          </div>
                        </div>
                        <h3 className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[14px] md:text-[15px] text-white leading-snug group-hover:text-[#dac5a7] transition-colors">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Artikel Liputan */}
              <div>
                <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[24px] md:text-[32px] text-white mb-8 md:mb-10 text-center">
                  Liputan Artikel
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {mediaArticles.map((article) => (
                    <a
                      key={article.id}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-white/20 hover:border-[#dac5a7]/60 transition-all duration-300 hover:bg-white/15 hover:scale-102 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <div className="bg-white rounded-lg px-5 py-3 shadow-md group-hover:shadow-lg transition-shadow">
                          <img 
                            src={article.logo}
                            alt={article.publisher}
                            className={`object-contain ${article.publisher === 'Kumparan' ? 'h-9 md:h-11' : 'h-7 md:h-8'}`}
                          />
                        </div>
                      </div>
                      <h3 className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[15px] md:text-[16px] text-white leading-snug mb-3 group-hover:text-[#dac5a7] transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center text-white/60 text-[13px] md:text-[14px] font-['Montserrat:Medium',sans-serif] group-hover:text-white transition-colors">
                        <span>Baca selengkapnya</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Events & Kontak Section - Side by Side */}
      <section id="events" className="min-h-screen bg-[#0a282e] py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          {/* DESKTOP: 2 Columns Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
            
            {/* LEFT: Upcoming Events */}
            <div>
              <div className="mb-12 text-center lg:text-left">
                <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] text-white mb-4">
                  Upcoming Events
                </h1>
                <div className="w-[64px] h-[4px] bg-[#dac5a7] rounded-full mx-auto lg:mx-0 mb-8" />
                <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                  Bergabunglah dengan kegiatan mendatang untuk belajar dan berkembang bersama.
                </p>
              </div>

              {/* Events Stack with Perspective */}
              <div className="relative">
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={event.id}
                      id={`event-${event.id}`}
                      onClick={() => {
                        setSelectedEvent(event.id);
                        setShowEventDialog(true);
                      }}
                      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#dac5a7]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#dac5a7]/20 cursor-pointer"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Event Card Content */}
                      <div className="relative p-6 md:p-8">
                        <div className="flex gap-6">
                          {/* Date Badge */}
                          <div className="flex-shrink-0">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${event.color} flex flex-col items-center justify-center text-white shadow-lg`}>
                              <div className="text-[10px] font-['Montserrat:Bold',sans-serif] uppercase tracking-wider opacity-90">
                                {event.date}
                              </div>
                              <div className="text-[28px] font-['Montserrat:ExtraBold',sans-serif] leading-none">
                                {event.day}
                              </div>
                            </div>
                          </div>

                          {/* Event Info */}
                          <div className="flex-1 min-w-0">
                            {/* Category Badge */}
                            <div className="inline-block px-3 py-1 bg-[#dac5a7]/20 text-[#dac5a7] text-[11px] font-['Montserrat:SemiBold',sans-serif] rounded-full mb-3">
                              {event.category}
                            </div>

                            <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[18px] md:text-[20px] text-white mb-3 group-hover:text-[#dac5a7] transition-colors line-clamp-2">
                              {event.title}
                            </h3>

                            <p className="text-white/70 text-[14px] font-['Montserrat:Regular',sans-serif] mb-5 line-clamp-2 leading-relaxed">
                              {event.description}
                            </p>

                            {/* Days Remaining Badge */}
                            {(() => {
                              const daysLeft = calculateDaysRemaining(event.fullDate);
                              if (daysLeft > 0) {
                                return (
                                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-full mb-4">
                                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                                    <span className="text-amber-300 text-[12px] font-['Montserrat:Bold',sans-serif]">
                                      {daysLeft} hari lagi
                                    </span>
                                  </div>
                                );
                              }
                              return null;
                            })()}

                            {/* Details */}
                            <div className="space-y-2">
                              <div className="flex items-center text-white/60 text-[13px]">
                                <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                                <span className="font-['Montserrat:Medium',sans-serif]">{event.time}</span>
                              </div>
                              <div className="flex items-center text-white/60 text-[13px]">
                                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                                <span className="font-['Montserrat:Medium',sans-serif] truncate">{event.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action buttons - Bottom section dengan Pre-test dan Share */}
                        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                          {/* Pre-test button - Prominent CTA */}
                          <a
                            href={event.preTestUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl font-['Montserrat:Bold',sans-serif] font-bold text-[13px] md:text-[14px] transition-all hover:scale-[1.02] shadow-lg"
                          >
                            <ClipboardList className="w-4 h-4 md:w-5 md:h-5" />
                            <span>Isi Pre-Test</span>
                          </a>

                        </div>

                        {/* Click indicator for detail dialog */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center gap-2 text-[#dac5a7] text-[11px] font-['Montserrat:SemiBold',sans-serif] bg-[#0a282e]/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <span>Klik untuk detail</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Mari Berdiskusi (Kontak Form) */}
            <div id="kontak">
              <div className="mb-12 text-center lg:text-left">
                <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] text-white mb-4">
                  Mari Berdiskusi
                </h1>
                <div className="w-[64px] h-[4px] bg-[#dac5a7] rounded-full mx-auto lg:mx-0 mb-8" />
                <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                  Jika Anda tertarik mengundang sebagai narasumber, mendiskusikan program, atau menjajaki kolaborasi, silakan hubungi melalui formulir berikut.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#dac5a7]/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label 
                        htmlFor="nama" 
                        className="block text-white font-['Montserrat:SemiBold',sans-serif] text-[16px] md:text-[18px] mb-3"
                      >
                        Nama
                      </label>
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 border border-[#dac5a7]/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] focus:bg-white/15 transition-all text-[16px]"
                        placeholder="Nama lengkap Anda"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="institusi" 
                        className="block text-white font-['Montserrat:SemiBold',sans-serif] text-[16px] md:text-[18px] mb-3"
                      >
                        Institusi
                      </label>
                      <input
                        type="text"
                        id="institusi"
                        name="institusi"
                        value={formData.institusi}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 border border-[#dac5a7]/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] focus:bg-white/15 transition-all text-[16px]"
                        placeholder="Sekolah, organisasi, atau perusahaan"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="kebutuhan" 
                        className="block text-white font-['Montserrat:SemiBold',sans-serif] text-[16px] md:text-[18px] mb-3"
                      >
                        Kebutuhan / Rencana Kegiatan
                      </label>
                      <textarea
                        id="kebutuhan"
                        name="kebutuhan"
                        value={formData.kebutuhan}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-6 py-4 bg-white/10 border border-[#dac5a7]/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#dac5a7] focus:bg-white/15 transition-all resize-none text-[16px]"
                        placeholder="Ceritakan tentang kebutuhan atau rencana kegiatan Anda..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-[#dac5a7] hover:bg-[#c9b496] text-[#0a282e] rounded-xl font-['Montserrat:SemiBold',sans-serif] font-semibold text-[18px] transition-colors"
                    >
                      Kirim Pesan
                    </button>
                  </form>
              </div>

                  {/* Instagram Footer Link */}
              <div className="mt-12 text-center lg:text-left">
                <p className="text-white/60 text-[14px] md:text-[16px] mb-6">
                  Atau hubungi langsung melalui email atau media sosial
                </p>
                
                {/* Instagram Link */}
                <a 
                  href="https://instagram.com/mumuawaludin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-['Inter',sans-serif] font-semibold text-[15px] md:text-[16px] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Instagram className="w-5 h-5" />
                  Follow @mumuawaludin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Dialog */}
      {showEventDialog && selectedEvent && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setShowEventDialog(false)}
        >
          <div 
            className="bg-[#0a282e] rounded-3xl max-w-md w-full border border-[#dac5a7]/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const event = upcomingEvents.find(e => e.id === selectedEvent);
              if (!event) return null;

              return (
                <>
                  {/* Dialog Header */}
                  <div className="relative p-6 border-b border-white/10">
                    <button
                      onClick={() => setShowEventDialog(false)}
                      className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} flex flex-col items-center justify-center text-white shadow-lg flex-shrink-0`}>
                        <div className="text-[10px] font-['Montserrat:Bold',sans-serif] uppercase tracking-wider opacity-90">
                          {event.date}
                        </div>
                        <div className="text-[24px] font-['Montserrat:ExtraBold',sans-serif] leading-none">
                          {event.day}
                        </div>
                      </div>
                      
                      <div>
                        <div className="inline-block px-3 py-1 bg-[#dac5a7]/20 text-[#dac5a7] text-[11px] font-['Montserrat:SemiBold',sans-serif] rounded-full mb-2">
                          {event.category}
                        </div>
                        <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[20px] text-white leading-tight">
                          {event.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-white/70 text-[14px] font-['Montserrat:Regular',sans-serif] mb-5 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center text-white/60 text-[13px]">
                        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="font-['Montserrat:Medium',sans-serif]">{event.time}</span>
                      </div>
                      <div className="flex items-center text-white/60 text-[13px]">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="font-['Montserrat:Medium',sans-serif]">{event.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Dialog Actions */}
                  <div className="p-6 space-y-3">
                    <a
                      href={event.preTestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl font-['Montserrat:SemiBold',sans-serif] font-semibold text-[15px] transition-all hover:scale-[1.02]"
                    >
                      <ClipboardList className="w-5 h-5" />
                      Isi Pre-Test
                    </a>

                    {/* Download Worksheet - Only available on event day (D-Day) */}
                    {(() => {
                      const daysLeft = calculateDaysRemaining(event.fullDate);
                      if (daysLeft <= 0) {
                        return (
                          <a
                            href={event.worksheetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-['Montserrat:SemiBold',sans-serif] font-semibold text-[15px] transition-all hover:scale-[1.02] shadow-lg"
                          >
                            <Download className="w-5 h-5" />
                            Download Worksheet
                          </a>
                        );
                      }
                      return null;
                    })()}

                    {/* Post-Test - Disabled/Coming Soon */}
                    <div className="relative">
                      <button
                        disabled
                        className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gray-600/30 text-gray-400 rounded-xl font-['Montserrat:SemiBold',sans-serif] font-semibold text-[15px] cursor-not-allowed"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        Isi Post-Test
                      </button>
                      <span className="absolute top-2 right-3 text-[10px] font-['Montserrat:Bold',sans-serif] text-gray-500 bg-gray-700/50 px-2 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    </div>

                    {/* Event Detail - Disabled/Coming Soon */}
                    <div className="relative">
                      <button
                        disabled
                        className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gray-600/30 text-gray-400 rounded-xl font-['Montserrat:SemiBold',sans-serif] font-semibold text-[15px] cursor-not-allowed"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Lihat Event Lebih Detail
                      </button>
                      <span className="absolute top-2 right-3 text-[10px] font-['Montserrat:Bold',sans-serif] text-gray-500 bg-gray-700/50 px-2 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Floating Contact Button */}
      <FloatingContactButton onClick={() => scrollToSection('kontak')} />
    </div>
  );
}