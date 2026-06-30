import { useState, useEffect, useRef } from 'react';
import { Presentation, Code, Users, Lightbulb, Sparkles, ArrowRight, Trophy, Award, GraduationCap, Rocket, BookOpen, Megaphone, Star, ExternalLink, Video, FileText, Heart, Instagram, Calendar, Clock, MapPin, X, ClipboardList, CheckCircle2, Share2, Copy, Check, Download } from 'lucide-react';

// Set document title and meta for SEO
if (typeof document !== 'undefined') {
  document.title = 'Kak Mumu - Digital Parenting Mentor & IT Consultant';
  
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
import { AdminPanel } from './components/AdminPanel';
import { FloatingContactButton } from './components/FloatingContactButton';
import { CollabDialog } from './components/CollabDialog';

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
  const [showCollabDialog, setShowCollabDialog] = useState(false);

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
            <p className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Strategic Partnership</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Program Design</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Stakeholder Engagement</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Pentahelix Collaboration</span>
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
    design: {
      id: 'design',
      title: 'Creative Production',
      image: imgCreativeProduction,
      content: (
        <>
          <p className="mb-4">
            Di bidang Creative Production, saya mendalami <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">pitching dan business presentation, desain grafis, hingga UI/UX</strong>. Kemampuan ini saya gunakan untuk membantu ide dan pesan edukasi tersampaikan secara lebih jelas dan mudah dipahami.
          </p>
          <p className="mb-4">
            Selain desain, saya juga terbiasa memproduksi konten multimedia. Saya mengoperasikan tools seperti <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">OBS Studio</strong> untuk kebutuhan <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">streaming dan recording</strong>, serta mengelola proses produksi konten dari perencanaan hingga eksekusi. Pendekatan ini membantu mengemas gagasan yang kompleks menjadi visual dan konten yang komunikatif untuk berbagai kalangan.
          </p>
          <p className="mb-4">
            Bagi saya, visual bukan sekadar tampilan, tetapi <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">sarana untuk memperjelas makna dan mendorong pemahaman yang lebih baik</strong>.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Saya percaya bahwa kekuatan visual dan konten multimedia dapat memberikan sudut pandang baru, menyederhanakan kompleksitas, dan menggerakkan orang untuk bertindak. Dari desain hingga produksi video, setiap karya adalah jembatan antara ide dan pemahaman."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Graphic Design</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">UI/UX Design</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Content Production</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Video Streaming & Recording</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Business Presentation</span>
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
            Sebagai praktisi public speaking, saya telah terlibat dalam <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">ratusan sesi seminar dan pelatihan</strong> dengan fokus pada <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">pitching, storytelling, dan penyusunan narasi</strong> yang mendorong perubahan cara pandang.
          </p>
          <p className="mb-4">
            Bagi saya, public speaking bukan sekadar menyampaikan materi, tetapi <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">membangun koneksi yang bermakna dengan audiens</strong>. Setiap sesi adalah ruang dialog untuk menyentuh, mengajak berpikir, dan membuka kemungkinan sudut pandang baru melalui kata-kata yang relevan dan kontekstual.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "If you can speak, you can influence. If you can influence, you can change lives. Saya percaya bahwa public speaking bukan hanya tentang berbicara, tetapi tentang menciptakan koneksi yang bermakna dan meninggalkan jejak positif di hati pendengar."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Storytelling</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Pitching</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Workshop Facilitation</span>
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
            Saya mendampingi berbagai institusi dalam <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">mengoptimalkan proses kerja melalui pemanfaatan teknologi digital</strong> agar lebih efektif dan efisien.
          </p>
          <p className="mb-4">
            Pendampingan dilakukan sejak tahap awal, mulai dari <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">riset kebutuhan yang mendalam, penyusunan konsep dan prototyping, hingga perancangan solusi digital</strong> yang selaras dengan kebutuhan pengguna dan konteks organisasi. Pendekatan ini memastikan transformasi digital tidak sekadar mengganti alat, tetapi benar-benar memperbaiki cara kerja.
          </p>
          <p className="mb-4">
            Bagi saya, transformasi digital yang baik selalu berangkat dari <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">pemahaman masalah dan tujuan yang jelas</strong>.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Saya menaruh perhatian besar dengan transformasi digital karena percaya bahwa solusi yang tepat dapat mengubah cara kerja menjadi lebih bermakna, menghemat waktu, dan memberdayakan lebih banyak orang untuk fokus pada hal-hal yang benar-benar penting dan berdampak besar."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">EdTech Development</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">System Design</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Digital Strategy</span>
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
            Latar belakang pendidikan saya dimulai dari <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">Teknik Informatika</strong>, lalu dilanjutkan dengan lebih dari 10 tahun terlibat aktif dalam perancangan program pembelajaran dan pendekatan psikologi di berbagai konteks.
          </p>
          <p className="mb-4">
            Perjalanan tersebut membawa saya di tahun ini pada keputusan untuk melanjutkan kembali studi <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">Magister Psikologi Pendidikan</strong>. Kombinasi antara teknologi, psikologi, dan pendidikan ini memperluas cara pandang saya bahwa <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">proses belajar dan perilaku manusia tidak hanya terjadi di ruang kelas sekolah</strong>, tetapi juga relevan di lingkungan organisasi, korporasi, dan berbagai institusi lain selama di dalamnya terdapat proses pembelajaran dan interaksi manusia.
          </p>
          <p className="mb-4">
            Pendalaman teori dan praktik ini menjadi landasan bagi saya untuk merancang <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">intervensi, program, dan sistem pembelajaran yang lebih kontekstual dan berdampak</strong>.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Memperdalam pemahaman teoritis dan praktis adalah langkah untuk memberi manfaat yang lebih luas dan berkelanjutan."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Learning Theory</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Child Development</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Educational Research</span>
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
            Pernah mengalami <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">kecanduan game lebih dari 13 tahun</strong> dan bermain hingga <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">30 jam non-stop</strong>. Saya berhenti bukan karena nasihat, tetapi karena peristiwa besar dalam hidup yaitu <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">kehilangan kedua orang tua saat masa kuliah</strong> yang membuat saya mulai menata ulang arah hidup.
          </p>
          <p className="mb-4">
            Pengalaman tersebut membentuk cara pandang saya terhadap isu kecanduan digital, terutama pada anak dan remaja. Karena pernah berada di posisi itu, saya memahami betul rasa terjebak, penyangkalan, dan sulitnya keluar tanpa dukungan yang tepat. Pengalaman pribadi inilah yang kini menjadi <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">dasar empati dan pendekatan saya dalam setiap pendampingan</strong>.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Perubahan tidak dimulai dari menghakimi, tetapi dari memahami pengalaman manusia di balik perilakunya tersebut."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Psikologi Anak</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Digital Wellness</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Parenting</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Growth Mindset</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Kesehatan Mental</span>
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
            Sejak masa perkuliahan hingga saat ini, saya terlibat aktif dalam berbagai gerakan sosial yang berfokus pada anak, keluarga, dan pendidikan. Keterlibatan ini mencakup peran di <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">BERMA (Komunitas Pemerhati Yatim Piatu)</strong>, pengurus aktif <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">POKJA Bunda PAUD Kota Bandung</strong>, serta fasilitator <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">GAHARU Keluarga</strong> (Gerakan Pembaharu/Changemaker Keluarga) dari Ashoka.
          </p>
          <p className="mb-4">
            Selain itu, saya juga terlibat langsung sebagai <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">pengajar di wilayah terpencil dan komunitas dengan keterbatasan akses</strong>, serta melakukan <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">home visit untuk mendampingi remaja yang mengalami kecanduan game</strong>. Pengalaman ini mempertemukan saya dengan realitas lapangan yang beragam dan memperkuat keyakinan bahwa perubahan selalu dimulai dari kehadiran yang tulus dan konsisten.
          </p>
          <p className="mb-4">
            Bagi saya, aksi sosial bukan sekadar kegiatan sukarela, tetapi <strong className="font-['Plus_Jakarta_Sans',sans-serif] font-bold">ruang belajar untuk memahami manusia, konteks, dan kebutuhan nyata di sekitar kita</strong>.
          </p>
          <blockquote className="border-l-4 border-[#0a282e] pl-4 py-2 mb-4 italic text-[#0a282e]/80">
            "Setiap aksi sosial adalah kesempatan untuk hadir, belajar, dan memberi dampak nyata bagi sesama."
          </blockquote>
          <div className="mt-6">
            <p className="text-[13px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/60 mb-3 uppercase tracking-wide">
              Keahlian Terkait
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Social Facilitation</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Community Engagement</span>
              <span className="px-3 py-1.5 bg-[#0a282e]/5 text-[#0a282e] text-[13px] rounded-full font-['Plus_Jakarta_Sans',sans-serif]">Child & Family Advocacy</span>
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
      borderColor: '#0a282e', // brand deep teal
      iconBg: '#e7efed', // brand teal tint
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
      borderColor: '#a47148', // brand warm sienna
      iconBg: '#f3e9dc', // brand sand tint
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
      borderColor: '#1a5a66', // brand teal light
      iconBg: '#e4eff0', // brand teal tint
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
      borderColor: '#0f3a42', // brand teal mid
      iconBg: '#e7eeec', // brand teal tint
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
                className="text-[20px] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white"
              >
                Kak Mumu
              </button>
              
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollToSection('tentang-saya')}
                  className={`px-1.5 py-1 text-[11px] font-['Plus_Jakarta_Sans',sans-serif] font-medium ${
                    activeSection === 'tentang-saya' ? 'text-[#dac5a7]' : 'text-white/70'
                  }`}
                >
                  Tentang
                </button>
                <button
                  onClick={() => scrollToSection('karya')}
                  className={`px-1.5 py-1 text-[11px] font-['Plus_Jakarta_Sans',sans-serif] font-medium ${
                    activeSection === 'karya' ? 'text-[#dac5a7]' : 'text-white/70'
                  }`}
                >
                  Apresiasi
                </button>
                <button
                  onClick={() => setShowCollabDialog(true)}
                  className="bg-[#dac5a7] text-[#0a282e] px-3 py-1.5 rounded-full text-[11px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold whitespace-nowrap"
                >
                  Kolaborasi
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
                  className={`px-4 py-2 text-[15px] lg:text-[16px] font-['Plus_Jakarta_Sans',sans-serif] font-medium transition-colors hover:text-white whitespace-nowrap cursor-pointer ${
                    activeSection === 'tentang-saya' ? 'text-[#0a282e]' : 'text-[#d9c4a7]'
                  }`}
                >
                  Tentang Saya
                </button>
                <button 
                  ref={kolaborasiRef}
                  onClick={() => scrollToSection('ruang-kolaborasi')}
                  className={`px-4 py-2 text-[15px] lg:text-[16px] font-['Plus_Jakarta_Sans',sans-serif] font-medium transition-colors hover:text-white whitespace-nowrap cursor-pointer ${
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
                  className={`px-6 py-2 text-[24px] lg:text-[26px] xl:text-[28px] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold transition-all cursor-pointer ${
                    activeSection === 'home' ? 'text-[#0a282e]' : 'text-[#d9c4a7] hover:text-white'
                  }`}
                >
                  Kak Mumu
                </button>
              </div>

              {/* Right section */}
              <div className="flex items-center gap-5 lg:gap-7 xl:gap-9 z-20">
                <button
                  ref={karyaRef}
                  onClick={() => scrollToSection('karya')}
                  className={`px-2 py-2 text-[15px] lg:text-[16px] font-['Plus_Jakarta_Sans',sans-serif] font-medium transition-colors hover:text-white whitespace-nowrap cursor-pointer ${
                    activeSection === 'karya' ? 'text-[#0a282e]' : 'text-[#d9c4a7]'
                  }`}
                >
                  Apresiasi & Media
                </button>
                <button
                  onClick={() => setShowCollabDialog(true)}
                  className="inline-flex items-center gap-2 bg-[#dac5a7] hover:bg-[#edd9bc] text-[#0a282e] px-5 py-2.5 rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] lg:text-[15px] whitespace-nowrap transition-all hover:shadow-[0_6px_18px_rgba(218,197,167,0.35)] cursor-pointer"
                >
                  Mari Berkolaborasi
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
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-gray-700 text-[15px] lg:text-[16px] xl:text-[17px] leading-[24px] max-w-[1000px] mx-auto">
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
              
            </div>
            
            {/* Left Content - PARALLAX - RESPONSIVE */}
            <div
              className="absolute top-[95px] w-[min(400px,28%)] transition-transform duration-75"
              style={{
                left: 'max(55px, 4%)',
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              {/* Subtle credential badge */}
              <div className="mb-5 inline-flex items-center gap-2 bg-[#dac5a7]/12 border border-[#dac5a7]/20 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dac5a7]" />
                <span className="text-[#dac5a7]/80 text-[10px] font-medium tracking-widest uppercase">10+ Tahun · 50+ Kota</span>
              </div>

              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold leading-[1.05] text-[clamp(28px,2.8vw,41px)] text-white mb-1.5">
                Assalamu'alaikum<span className="text-[#dac5a7]">.</span>
              </p>

              <p className="font-medium leading-snug text-[#dac5a7] text-[clamp(13px,1.2vw,17px)] mb-5">
                Saya Muhamad Nur Awaludin
              </p>

              <div className="font-medium leading-[1.55] text-[clamp(13px,1.15vw,17px)] text-white/90 mb-6">
                <p>Narasumber & Trainer · Mentor</p>
                <p className="text-[#dac5a7]/80">Digital Parenting & Youth Learning</p>
                <p className="text-[#dac5a7]/80">IT Consultant · Product Designer</p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://s.id/profilkakmumu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#dac5a7] hover:bg-[#edd9bc] h-[50px] px-6 rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(218,197,167,0.35)] group cursor-pointer"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 18 18">
                    <g>
                      <path clipRule="evenodd" d={svgDownload.p39fea300} fill="#0E0E0E" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgDownload.p3baeb000} fill="#0E0E0E" fillRule="evenodd" />
                    </g>
                  </svg>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#0e0e0e] text-[14px]">Download CV</span>
                </a>
                <button
                  onClick={() => setSelectedCollab(0)}
                  className="inline-flex items-center justify-center gap-2 h-[50px] px-6 rounded-full border border-[#dac5a7]/40 text-[#dac5a7] hover:border-[#dac5a7] hover:bg-[#dac5a7]/10 transition-all duration-300 cursor-pointer"
                >
                  <Star className="w-4 h-4 flex-shrink-0" />
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px]">Lihat Rekam Jejak</span>
                </button>
              </div>
            </div>
            
            {/* Right Content - RESPONSIVE */}
            <div
              className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[1.6] text-[#dac5a7] text-[clamp(13px,1.05vw,15px)] top-[120px] w-[min(420px,31%)] space-y-3.5"
              style={{
                right: 'max(31px, 2%)'
              }}
            >
              <p>
                Kak Mumu membantu keluarga, sekolah, dan institusi menggunakan teknologi dengan lebih tepat:
                {' '}<span className="font-bold text-white">parenting digital, literasi digital, pendampingan anak dan remaja</span>,
                sampai perancangan <span className="font-bold text-white">aplikasi, website, dashboard, dan sistem</span> yang benar-benar digunakan di lapangan.
              </p>
              <p className="text-[#dac5a7]/80">
                Dalam <span className="font-bold text-[#dac5a7]">10+ tahun</span> terakhir, Kak Mumu terlibat dalam berbagai program edukasi dan pengembangan sistem digital untuk pemerintah, institusi pendidikan, perusahaan, sekolah, dan keluarga di <span className="font-bold text-[#dac5a7]">50+ kota Indonesia</span>.
              </p>
            </div>
          </div>

          {/* MOBILE HERO - Simple Version */}
          <div className="md:hidden relative w-full min-h-screen flex flex-col items-center justify-start px-6 pt-24 pb-0 text-center bg-[#0a282e]">
            <div className="mb-8 flex-1 flex flex-col justify-center">
              {/* Credential badge */}
              <div className="mb-5 inline-flex items-center justify-center gap-2 bg-[#dac5a7]/12 border border-[#dac5a7]/20 rounded-full px-4 py-1.5 mx-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dac5a7]" />
                <span className="text-[#dac5a7]/80 text-[10px] font-semibold tracking-widest uppercase">10+ Tahun · 50+ Kota</span>
              </div>

              <p className="text-[#dac5a7]/60 text-[11px] font-semibold tracking-widest uppercase mb-2">Assalamu'alaikum</p>
              <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[30px] text-white mb-1 leading-tight">
                Muhamad Nur Awaludin
              </h1>
              <div className="w-10 h-[3px] rounded-full bg-[#dac5a7] mx-auto my-4" />

              {/* Subtitle - Professional Roles */}
              <div className="mb-5">
                <p className="text-white/90 font-medium text-[13px] leading-[22px]">
                  Narasumber & Trainer · Mentor
                </p>
                <p className="text-[#dac5a7]/80 font-medium text-[13px] leading-[22px]">
                  Digital Parenting & Youth Learning
                </p>
                <p className="text-[#dac5a7]/80 font-medium text-[13px] leading-[22px]">
                  IT Consultant · Product Designer
                </p>
              </div>

              <p className="text-[#dac5a7]/70 text-[13px] leading-relaxed max-w-sm mx-auto mb-7">
                Membantu keluarga, sekolah, dan institusi menggunakan teknologi dengan lebih tepat: dari parenting digital, literasi digital, pendampingan anak dan remaja, sampai perancangan aplikasi, website, dashboard, dan sistem yang benar-benar dipakai di lapangan.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
                {/* Download CV Button */}
                <a
                  href="https://s.id/profilkakmumu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#dac5a7] text-[#0e0e0e] px-8 py-3 rounded-full font-semibold text-[14px] hover:bg-[#edd9bc] transition-all hover:shadow-[0_8px_24px_rgba(218,197,167,0.3)]"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 11.25V14.0625C15.75 14.5106 15.5722 14.9403 15.2557 15.2557C14.9403 15.5722 14.5106 15.75 14.0625 15.75H3.9375C3.48995 15.75 3.06072 15.5722 2.74426 15.2557C2.42779 14.9403 2.25 14.5106 2.25 14.0625V11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.0625 7.3125L9 11.25L12.9375 7.3125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11.25V2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download CV
                </a>

                {/* Let's Talk Button */}
                <button
                  onClick={() => scrollToSection('ruang-kolaborasi')}
                  className="border border-[#dac5a7]/40 text-[#dac5a7] px-8 py-3 rounded-full font-semibold text-[14px] hover:border-[#dac5a7] hover:text-white transition-colors"
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
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-gray-700 text-[11px] leading-[16px] text-center">
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
      <section id="tentang-saya" className="bg-[#fffcf8] section-block">
        <div className="section-wrap">
          {/* Header */}
          <div className="mb-10 md:mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]" />
              <span className="eyebrow text-[#0a282e]/50">Profil &amp; Perjalanan</span>
            </div>
            <h2 className="t-h1 text-[#0a282e] mb-4">
              Tentang Saya
            </h2>
            <p className="t-body text-[#0a282e]/60">
              Satu perjalanan, banyak peran. Pilih topik untuk melihat fokus dan pengalaman saya di setiap bidang.
            </p>
          </div>

          {/* Timeline Horizontal Pills */}
          <div className="flex flex-wrap gap-2.5 mb-10 md:mb-12">
            {Object.values(timelineData).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTimeline(item.id)}
                className={`px-5 py-2.5 rounded-full t-meta transition-all duration-300 whitespace-nowrap ${
                  activeTimeline === item.id
                    ? 'bg-[#0a282e] text-[#dac5a7] shadow-[0_6px_18px_rgba(10,40,46,0.18)]'
                    : 'bg-[#f3ebde] text-[#0a282e]/65 hover:bg-[#ede2d0] hover:text-[#0a282e]'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Content: 2 Kolom */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
            {/* Left: Photo */}
            <div className="w-full md:w-[340px] flex-shrink-0 md:sticky md:top-28">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,40,46,0.15)] border border-[#0a282e]/5">
                <ImageWithFallback
                  key={activeTimeline}
                  src={currentTimeline.image}
                  alt={currentTimeline.title}
                  className="w-full h-full object-cover object-center transition-opacity duration-500 animate-fadeIn"
                />
              </div>
            </div>

            {/* Right: Content - DYNAMIC */}
            <div className="flex-1 min-w-0">
              <div
                key={`content-${activeTimeline}`}
                className="animate-fadeIn"
              >
                <h3 className="t-h2 text-[#0a282e] mb-5">
                  {currentTimeline.title}
                </h3>
                <div className="t-body-lg text-[#0a282e]/80 [&_strong]:text-[#0a282e] [&_strong]:font-bold [&>*+*]:mt-4">
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

      {/* Apresiasi dan Liputan Media Section */}
      <section id="karya" className="bg-[#0a282e] section-block">
        <div className="section-wrap !max-w-[1320px]">
          {/* Header */}
          <div className="mb-12 md:mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]/40" />
              <span className="eyebrow text-[#dac5a7]/60">Rekam Jejak</span>
              <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]/40" />
            </div>
            <h2 className="t-h1 text-white mb-4">
              Apresiasi &amp; Liputan Media
            </h2>
            <p className="t-body text-white/55 max-w-2xl mx-auto">
              Pengalaman mendampingi institusi, pemerintah, dan keluarga di berbagai kota Indonesia. Dipercaya media nasional untuk membahas parenting digital, literasi teknologi, dan pendidikan anak.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-12 md:mb-16 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 md:px-7 py-2.5 rounded-full t-meta transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#dac5a7] text-[#0a282e] shadow-[0_6px_18px_rgba(218,197,167,0.25)]'
                    : 'bg-white/[0.06] text-white/70 hover:bg-white/[0.12] hover:text-white border border-white/10 hover:border-white/25'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* ===== AWARDS ===== */}
          {(activeFilter === 'semua' || activeFilter === 'awards') && (
            <div className="mb-14 md:mb-20">
              <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
                <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]/40" />
                <span className="eyebrow text-[#dac5a7]/60">Penghargaan</span>
                <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]/40" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
                {/* Era: Semasa Kuliah */}
                <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 md:p-7">
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#dac5a7]/15 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-[#dac5a7]" />
                    </div>
                    <div>
                      <h3 className="t-h3 text-white">Semasa Kuliah</h3>
                      <p className="t-meta font-normal text-white/50">Teknik Informatika UNIKOM</p>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden mb-5 border border-white/10">
                    <img
                      src={imgKuliahPhoto}
                      alt="Semasa Kuliah - Kompetisi dan Aktivitas"
                      className="w-full h-[190px] md:h-[210px] object-cover"
                    />
                  </div>

                  <div>
                    {awards.filter(award => award.category === 'kuliah').map((award, idx) => (
                      <div key={idx} className="flex items-start gap-3 py-2.5 border-t border-white/[0.06] first:border-t-0">
                        <Trophy className="w-4 h-4 text-[#dac5a7] mt-0.5 flex-shrink-0" />
                        <span className="t-meta font-normal text-white/80 leading-snug">{award.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Era: Semasa Menjadi Entrepreneur */}
                <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 md:p-7">
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#dac5a7]/15 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-[#dac5a7]" />
                    </div>
                    <div>
                      <h3 className="t-h3 text-white">Semasa Menjadi Entrepreneur</h3>
                      <p className="t-meta font-normal text-white/50">2014 - Sekarang</p>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden mb-6 border border-white/10">
                    <img
                      src={imgEntrepreneurPhoto}
                      alt="Semasa Menjadi Entrepreneur - Startup Activities"
                      className="w-full h-[190px] md:h-[210px] object-cover"
                    />
                  </div>

                  <p className="eyebrow text-[#dac5a7]/60 mb-1">Kakatu · Parenting Startup</p>
                  <div className="mb-6">
                    {awards.filter(award => award.category === 'kakatu').map((award, idx) => (
                      <div key={idx} className="flex items-start gap-3 py-2.5 border-t border-white/[0.06] first:border-t-0">
                        <Trophy className="w-4 h-4 text-[#dac5a7] mt-0.5 flex-shrink-0" />
                        <span className="t-meta font-normal text-white/80 leading-snug">{award.title}</span>
                      </div>
                    ))}
                  </div>

                  <p className="eyebrow text-[#dac5a7]/60 mb-1">Fammi · Education Consultant</p>
                  <div>
                    {awards.filter(award => award.category === 'fammi').map((award, idx) => (
                      <div key={idx} className="flex items-start gap-3 py-2.5 border-t border-white/[0.06] first:border-t-0">
                        <Trophy className="w-4 h-4 text-[#dac5a7] mt-0.5 flex-shrink-0" />
                        <span className="t-meta font-normal text-white/80 leading-snug">{award.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== MEDIA ===== */}
          {(activeFilter === 'semua' || activeFilter === 'media') && (
            <div>
              {/* Liputan Video */}
              <div className="mb-14 md:mb-20">
                <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
                  <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]/40" />
                  <span className="eyebrow text-[#dac5a7]/60">Liputan Video</span>
                  <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]/40" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {mediaVideos.map((video) => (
                    <div
                      key={video.id}
                      className="group bg-white/[0.04] rounded-2xl overflow-hidden border border-white/10 hover:border-[#dac5a7]/40 transition-all duration-300"
                    >
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
                      <div className="p-5">
                        <div className="inline-flex bg-white rounded-lg px-4 py-2.5 shadow-sm mb-3.5">
                          <img
                            src={video.logo}
                            alt={video.channel}
                            className={`object-contain ${video.channel === 'MNC TV' ? 'h-8 md:h-9' : 'h-6 md:h-7'}`}
                          />
                        </div>
                        <h4 className="t-h3 text-white leading-snug group-hover:text-[#dac5a7] transition-colors">
                          {video.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Liputan Artikel */}
              <div>
                <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
                  <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]/40" />
                  <span className="eyebrow text-[#dac5a7]/60">Liputan Artikel</span>
                  <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]/40" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {mediaArticles.map((article) => (
                    <a
                      key={article.id}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col bg-white/[0.04] rounded-2xl p-6 border border-white/10 hover:border-[#dac5a7]/40 hover:bg-white/[0.07] transition-all duration-300"
                    >
                      <div className="inline-flex self-start bg-white rounded-lg px-4 py-2.5 shadow-sm mb-4">
                        <img
                          src={article.logo}
                          alt={article.publisher}
                          className={`object-contain ${article.publisher === 'Kumparan' ? 'h-8 md:h-9' : 'h-6 md:h-7'}`}
                        />
                      </div>
                      <h4 className="t-h3 text-white leading-snug mb-4 flex-1 group-hover:text-[#dac5a7] transition-colors">
                        {article.title}
                      </h4>
                      <div className="flex items-center t-meta text-white/55 group-hover:text-[#dac5a7] transition-colors">
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

      {/* Floating WhatsApp Button */}
      <FloatingContactButton onClick={() => setShowCollabDialog(true)} />

      {/* Collaboration category picker -> WhatsApp */}
      <CollabDialog open={showCollabDialog} onClose={() => setShowCollabDialog(false)} />
    </div>
  );
}