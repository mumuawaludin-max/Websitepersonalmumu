import { useState, useRef } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Video, MessageCircle, ExternalLink, FileText, Star, Check, Target, Users, Sparkles, Calendar, MapPin } from 'lucide-react';
import { eventsByYear, yearGradients } from './EventListData';
import { waUrlForCategory } from '../lib/whatsapp';

interface CollaborationType {
  title: string;
  icon: any;
  description: string;
  borderColor: string;
  iconBg: string;
  cta: string;
  topics?: { [key: string]: string[] };
  clients?: { [key: string]: Array<{ name: string; bgColor?: string; links: Array<{ type: string; url: string; label: string }> }> };
  services?: string[];
  servicesTitle?: string;
  mentoringTargetAge?: string;
  mentoringIssues?: Array<{ category: string; problems: string[] }>;
  mentoringProcess?: {
    title: string;
    description: string;
    steps: Array<{ title: string; detail: string; note: string; features: string[] }>;
  };
  mentoringOutcomes?: string[];
  mentoringTestimonials?: Array<{ name: string; age: number; context: string; quote: string; rating: string; format: string }>;
  whyDifferent?: {
    title: string;
    points: Array<{ label: string; text: string }>;
  };
}

interface RuangKolaborasiProps {
  collaborationTypes: CollaborationType[];
  selectedCollab: number | null;
  setSelectedCollab: (index: number | null) => void;
  scrollToSection: (section: string) => void;
}

export function RuangKolaborasi({ 
  collaborationTypes, 
  selectedCollab, 
  setSelectedCollab,
  scrollToSection 
}: RuangKolaborasiProps) {
  const [showVideoPortfolio, setShowVideoPortfolio] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [showEventList, setShowEventList] = useState(false);
  const testimoniRef = useRef<HTMLDivElement>(null);
  const modalTestimoniRef = useRef<HTMLDivElement>(null);

  const scrollToTestimoni = () => {
    if (testimoniRef.current) {
      testimoniRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Buka collapsible testimoni jika belum terbuka
      setTimeout(() => {
        setShowTestimonials(true);
      }, 500);
    }
  };

  const scrollToModalTestimoni = () => {
    if (modalTestimoniRef.current) {
      modalTestimoniRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Buka collapsible testimoni jika belum terbuka
      setTimeout(() => {
        setShowTestimonials(true);
      }, 300);
    }
  };

  return (
    <section id="ruang-kolaborasi" className="bg-[#fffcf8] section-block" style={{ borderTop: '1px solid #f0e8da' }}>
      <div className="section-wrap">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]" />
            <span className="eyebrow text-[#0a282e]/45">Kolaborasi</span>
            <div className="w-8 h-[2px] rounded-full bg-[#dac5a7]" />
          </div>
          <h2 className="t-h1 text-[#0a282e] mb-4">
            Ruang Kolaborasi
          </h2>
          <p className="t-body text-[#0a282e]/55 max-w-xl mx-auto">
            Eksplorasi berbagai bentuk kolaborasi yang bisa kita wujudkan bersama
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collaborationTypes.map((collab, index) => {
            const Icon = collab.icon;

            return (
              <div
                key={index}
                onClick={() => setSelectedCollab(index)}
                className="group relative bg-white rounded-3xl p-8 md:p-10 cursor-pointer transition-all duration-500 hover:shadow-[0_16px_48px_rgba(10,40,46,0.10)] hover:-translate-y-1.5 border border-[#f0e8da] hover:border-[#dac5a7]/60"
                style={{
                  boxShadow: '0 2px 16px rgba(10,40,46,0.05)',
                }}
              >
                {/* Icon Circle dengan gradient */}
                <div className="relative mb-6">
                  <div 
                    className="absolute inset-0 opacity-20 blur-2xl rounded-full"
                    style={{ backgroundColor: collab.borderColor }}
                  />
                  <div
                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: `linear-gradient(135deg, ${collab.iconBg} 0%, ${collab.borderColor}15 100%)`,
                      boxShadow: `0 10px 25px ${collab.borderColor}25`
                    }}
                  >
                    <Icon className="w-10 h-10 md:w-12 md:h-12" style={{ color: collab.borderColor }} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] md:text-[26px] mb-4 leading-tight transition-colors"
                  style={{ color: collab.borderColor }}
                >
                  {collab.title}
                </h3>

                {/* Description */}
                <p className="text-[#0a282e]/70 text-[14px] md:text-[15px] leading-relaxed mb-6 font-['Plus_Jakarta_Sans',sans-serif] font-medium">
                  {collab.description.split('.')[0]}.
                </p>

                {/* CTA dengan arrow animation */}
                <div className="flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] group-hover:gap-3 transition-all" style={{ color: collab.borderColor }}>
                  Lihat Detail
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>

                {/* Decorative element */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-bl-full"
                  style={{ backgroundColor: collab.borderColor }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL POPUP */}
      {selectedCollab !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => {
            setSelectedCollab(null);
            setShowVideoPortfolio(false);
            setShowTestimonials(false);
          }}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const collab = collaborationTypes[selectedCollab];
              const Icon = collab.icon;

              return (
                <>
                  {/* Header Modal */}
                  <div className="sticky top-0 z-10 bg-white border-b border-[#0a282e]/8 px-6 md:px-10 py-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: collab.iconBg }}
                        >
                          <Icon className="w-7 h-7" style={{ color: collab.borderColor }} strokeWidth={2} />
                        </div>
                        <h2 
                          className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] md:text-[28px]"
                          style={{ color: collab.borderColor }}
                        >
                          {collab.title}
                        </h2>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedCollab(null);
                          setShowVideoPortfolio(false);
                          setShowTestimonials(false);
                        }}
                        className="w-10 h-10 rounded-full bg-[#0a282e]/8 hover:bg-[#0a282e]/15 flex items-center justify-center transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Body Modal */}
                  <div className="px-6 md:px-10 py-8">
                    {/* Description */}
                    <p className="text-[#0a282e]/80 text-[15px] md:text-[16px] leading-relaxed mb-8 font-['Plus_Jakarta_Sans',sans-serif] font-medium">
                      {collab.description}
                    </p>

                    {/* MENTORING SPECIFIC CONTENT - REDESIGNED */}
                    {collab.mentoringIssues && (
                      <>
                        {/* "Why Different" Section - Lead with differentiation */}
                        {collab.whyDifferent && (
                          <div className="mb-8 bg-gradient-to-br from-[#f5ede1] via-[#f0e7d8] to-[#fffcf8] rounded-3xl p-6 md:p-8 border-2 border-[#dac5a7] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#dac5a7]/30 to-transparent rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: collab.iconBg }}>
                                  <Sparkles className="w-6 h-6" style={{ color: collab.borderColor }} />
                                </div>
                                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] md:text-[24px]" style={{ color: collab.borderColor }}>
                                  {collab.whyDifferent.title}
                                </h3>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                {collab.whyDifferent.points.map((point, idx) => (
                                  <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-[#0a282e]/8">
                                    <div className="flex items-start gap-3">
                                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: collab.borderColor }}></div>
                                      <div>
                                        <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[15px] mb-2" style={{ color: collab.borderColor }}>
                                          {point.label}
                                        </h4>
                                        <p className="text-[#0a282e]/70 text-[13px] md:text-[14px] font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
                                          {point.text}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Issues Section - Categorized */}
                        <div className="mb-8">
                          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] md:text-[22px] mb-3 text-[#0a282e]">
                            Siapa yang cocok dengan program ini?
                          </h3>
                          <p className="text-[#0a282e]/60 text-[14px] md:text-[15px] mb-6 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
                            Program ini dirancang untuk anak dan remaja <span className="font-bold" style={{ color: collab.borderColor }}>usia {collab.mentoringTargetAge}</span> yang sedang menghadapi tantangan seperti:
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                            {collab.mentoringIssues.map((issue, idx) => (
                              <div key={idx} className="bg-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all">
                                <div className="flex items-center gap-2 mb-4">
                                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[18px]" style={{ backgroundColor: collab.iconBg }}>
                                    <Target className="w-4 h-4" style={{ color: collab.borderColor }} />
                                  </div>
                                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[15px] text-[#0a282e]">
                                    {issue.category}
                                  </h4>
                                </div>
                                <ul className="space-y-2.5">
                                  {issue.problems.map((problem, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-2 text-[#0a282e]/70 text-[12px] md:text-[13px] font-['Plus_Jakarta_Sans',sans-serif] leading-snug">
                                      <span style={{ color: collab.borderColor }} className="mt-0.5">•</span>
                                      <span>{problem}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Process Section - Visual Timeline */}
                        {collab.mentoringProcess && (
                          <div className="mb-8 bg-gradient-to-br from-[#f5ede1] to-[#fffcf8] rounded-3xl p-6 md:p-8 border-2 border-[#0a282e]/8">
                            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] md:text-[22px] mb-3 text-[#0a282e]">
                              {collab.mentoringProcess.title}
                            </h3>
                            <p className="text-[#0a282e]/60 text-[13px] md:text-[14px] mb-6 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
                              {collab.mentoringProcess.description}
                            </p>
                            <div className="space-y-5 md:space-y-6">
                              {collab.mentoringProcess.steps.map((step, idx) => (
                                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-[#0a282e]/8">
                                  <div className="flex gap-4">
                                    <div className="flex flex-col items-center flex-shrink-0">
                                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[16px]" style={{ backgroundColor: collab.borderColor }}>
                                        {idx + 1}
                                      </div>
                                      {idx < collab.mentoringProcess.steps.length - 1 && (
                                        <div className="w-0.5 h-full min-h-[60px] bg-gradient-to-b from-[#dac5a7] to-transparent mt-2"></div>
                                      )}
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] mb-2 text-[#0a282e]">
                                        {step.title}
                                      </h4>
                                      <div className="flex items-center gap-2 mb-3">
                                        <span className="text-[12px] md:text-[13px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold px-3 py-1 rounded-full bg-[#0a282e]/8" style={{ color: collab.borderColor }}>
                                          {step.detail}
                                        </span>
                                      </div>
                                      <p className="text-[#0a282e]/60 text-[12px] md:text-[13px] mb-3 font-['Plus_Jakarta_Sans',sans-serif] italic leading-relaxed">
                                        {step.note}
                                      </p>
                                      <ul className="space-y-2">
                                        {step.features.map((feature, fIdx) => (
                                          <li key={fIdx} className="flex items-start gap-2 text-[#0a282e]/70 text-[12px] md:text-[13px] font-['Plus_Jakarta_Sans',sans-serif] leading-snug">
                                            <Check className="w-3.5 h-3.5 text-[#0a282e] mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Outcomes Section - Results focused */}
                        {collab.mentoringOutcomes && (
                          <div className="mb-8 bg-gradient-to-br from-[#f5ede1] to-[#fffcf8] rounded-3xl p-6 md:p-8 border-2 border-[#0a282e]/8">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: collab.iconBg }}>
                                <Target className="w-6 h-6" style={{ color: collab.borderColor }} />
                              </div>
                              <div>
                                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] md:text-[22px] text-[#0a282e]">
                                  Apa yang akan mereka dapatkan?
                                </h3>
                                <p className="text-[#0a282e]/60 text-[13px] md:text-[14px] font-['Plus_Jakarta_Sans',sans-serif]">
                                  Outcome yang bisa diharapkan dari program ini
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {collab.mentoringOutcomes.map((outcome, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#0a282e]/8">
                                  <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: collab.iconBg }}>
                                    <Check className="w-3.5 h-3.5" style={{ color: collab.borderColor }} />
                                  </div>
                                  <span className="text-[#0a282e]/80 text-[13px] md:text-[14px] font-['Plus_Jakarta_Sans',sans-serif] leading-snug">
                                    {outcome}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Testimonials Section - Social Proof */}
                        {collab.mentoringTestimonials && (
                          <div className="mb-8">
                            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] md:text-[22px] mb-6 text-[#0a282e]">
                              Kata mereka yang sudah mengikuti program ini
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                              {collab.mentoringTestimonials.map((testimonial, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-[#f5ede1] to-[#fffcf8] rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 relative">
                                  <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[14px]" style={{ backgroundColor: collab.borderColor }}>
                                        {testimonial.name[0]}
                                      </div>
                                      <div>
                                        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[15px] text-[#0a282e]">
                                          {testimonial.name}, {testimonial.age} tahun
                                        </p>
                                        <p className="text-[11px] md:text-[12px] text-[#0a282e]/60 font-['Plus_Jakarta_Sans',sans-serif]">
                                          {testimonial.context}
                                        </p>
                                      </div>
                                    </div>
                                    <span className="text-[11px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold px-2 py-1 rounded-full bg-white/70 text-[#0a282e]/60">
                                      {testimonial.format}
                                    </span>
                                  </div>
                                  <p className="text-[#0a282e]/70 text-[13px] md:text-[14px] font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed mb-4 italic">
                                    "{testimonial.quote}"
                                  </p>
                                  <div className="flex items-center justify-between pt-4 border-t border-[#dac5a7]">
                                    <div className="flex items-center gap-1">
                                      {[...Array(5)].map((_, starIdx) => (
                                        <svg key={starIdx} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: collab.borderColor }}>
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                      ))}
                                      <span className="ml-2 text-[12px] text-[#0a282e]/50 font-['Plus_Jakarta_Sans',sans-serif]">Rating</span>
                                    </div>
                                    <span className="text-[20px] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold" style={{ color: collab.borderColor }}>
                                      {testimonial.rating}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {/* HIGHLIGHT BOX - HANYA UNTUK NARASUMBER */}
                    {selectedCollab === 0 && (
                      <div className="mb-8 bg-gradient-to-br from-[#f5ede1] via-white to-[#fffcf8] rounded-2xl border-2 border-[#0a282e]/8 overflow-hidden">
                        {/* Header dengan stats */}
                        <div className="bg-gradient-to-r from-[#0a282e] to-[#1a5a66] p-4 md:p-6 text-white">
                          <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Star className="w-5 h-5 md:w-6 md:h-6 fill-white text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[20px] mb-1 leading-tight">
                                Pengalaman & Track Record
                              </h3>
                              <p className="text-[11px] md:text-[13px] text-white/90 font-['Plus_Jakarta_Sans',sans-serif] leading-snug">
                                Berpengalaman 10+ tahun mengisi berbagai sesi edukasi dari Sumatera hingga Papua
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 md:gap-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowEventList(true);
                              }}
                              className="bg-white/10 rounded-lg md:rounded-xl p-3 md:p-4 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer group relative overflow-hidden border-2 border-white/20 hover:border-white/40"
                            >
                              <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 text-white/40 group-hover:text-white/80 transition-colors">
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                              <div className="relative">
                                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] md:text-[28px] mb-0.5 leading-none">200+</div>
                                <div className="text-[10px] md:text-[13px] text-white/90 leading-tight mb-1">Seminar & Pelatihan</div>
                                <div className="text-[9px] md:text-[10px] text-white/70 font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-tight">Klik untuk detail</div>
                              </div>
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                scrollToModalTestimoni();
                              }}
                              className="bg-white/10 rounded-lg md:rounded-xl p-3 md:p-4 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer group relative overflow-hidden border-2 border-white/20 hover:border-white/40"
                            >
                              <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 text-white/40 group-hover:text-white/80 transition-colors">
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                              <div className="relative">
                                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] md:text-[28px] mb-0.5 leading-none">95%</div>
                                <div className="text-[10px] md:text-[13px] text-white/90 leading-tight mb-1">Kepuasan Peserta</div>
                                <div className="text-[9px] md:text-[10px] text-white/70 font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-tight">Klik lihat testimoni</div>
                              </div>
                            </button>
                          </div>
                        </div>

                        {/* Metode Penyelenggaraan */}
                        <div className="p-4 md:p-6">
                          <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-3 md:mb-4">
                            Metode Penyelenggaraan
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                            {['Interaktif', 'Fun', 'Collaborative Learning', 'Offline / Online', 'Understanding By Design', 'Reflektif'].map((label, idx) => (
                              <div
                                key={idx}
                                className="group flex items-center gap-2.5 bg-white rounded-xl p-2.5 md:p-3 border border-[#0a282e]/8 hover:border-[#dac5a7] transition-all"
                              >
                                <div className="w-2 h-2 rounded-full bg-[#dac5a7] flex-shrink-0" />
                                <span className="text-[11px] md:text-[13px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#0a282e] leading-tight">
                                  {label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content Details dalam Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                      {/* For Narasumber - Show Topics by Category */}
                      {collab.topics && Object.entries(collab.topics).map(([category, items], idx) => (
                        <div key={idx} className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 border border-[#0a282e]/8">
                          <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] mb-4" style={{ color: collab.borderColor }}>
                            {category}
                          </h4>
                          <ul className="space-y-2.5">
                            {items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2.5 text-[#0a282e]/75 text-[13px] md:text-[14px] font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-snug">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: collab.borderColor }} />
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
                            <div key={idx} className="bg-gradient-to-br from-white to-[#fffcf8] rounded-3xl p-6 border border-white/80 shadow-sm backdrop-blur-sm">
                              <div className="flex items-center gap-2.5 mb-5">
                                <div className="w-1 h-7 rounded-full" style={{ backgroundColor: collab.borderColor }}></div>
                                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] md:text-[17px]" style={{ color: collab.borderColor }}>
                                  {category}
                                </h4>
                              </div>
                              <div className="space-y-6">
                                {items.map((item, itemIdx) => (
                                  <div key={itemIdx} className="group">
                                    <div className="flex items-start gap-2.5 mb-3">
                                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: collab.borderColor }}></div>
                                      <span className="text-[#0a282e]/80 text-[14px] md:text-[15px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-snug">
                                        {item.name}
                                      </span>
                                    </div>
                                    {item.links && item.links.length > 0 && (
                                      <div className="ml-4 space-y-3">
                                        {item.links.map((link, linkIdx) => (
                                          <div key={linkIdx}>
                                            {link.type === 'video' ? (
                                              <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-xl overflow-hidden border border-[#0a282e]/8 shadow-sm hover:shadow-lg transition-all">
                                                <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="block">
                                                  <div className="relative aspect-video bg-[#0a282e]/8 group/video cursor-pointer">
                                                    <img
                                                      src={`https://img.youtube.com/vi/${link.url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^\/&?]+)/)?.[1]}/maxresdefault.jpg`}
                                                      alt="Video Thumbnail"
                                                      className="w-full h-full object-cover"
                                                      onError={(e) => {
                                                        e.currentTarget.src = `https://img.youtube.com/vi/${link.url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^\/&?]+)/)?.[1]}/hqdefault.jpg`;
                                                      }}
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/video:bg-black/30 transition-colors">
                                                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform group-hover/video:scale-110 transition-transform">
                                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="p-4 flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                      <Video className="w-4 h-4" style={{ color: collab.borderColor }} />
                                                      <span className="text-[13px] md:text-[14px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#0a282e]/70">{link.label}</span>
                                                    </div>
                                                    <ExternalLink className="w-4 h-4 text-[#0a282e]/40" />
                                                  </div>
                                                </a>
                                              </div>
                                            ) : (
                                              <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="block">
                                                <div className="bg-gradient-to-r from-[#f5ede1] to-[#fffcf8] rounded-xl p-4 border border-[#0a282e]/8 hover:border-[#dac5a7] hover:shadow-md transition-all group/article">
                                                  <div className="flex items-center gap-3">
                                                    <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                                      <FileText className="w-5 h-5" style={{ color: collab.borderColor }} />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                      <div className="text-[13px] md:text-[14px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#0a282e]/80 mb-1">{link.label}</div>
                                                      <div className="text-[11px] md:text-[12px] font-['Plus_Jakarta_Sans',sans-serif] text-[#0a282e]/50 truncate">{new URL(link.url).hostname}</div>
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
                            <div className="bg-gradient-to-br from-white to-[#fffcf8] rounded-3xl p-6 border border-white/80 shadow-sm backdrop-blur-sm">
                              <div className="flex items-center gap-2.5 mb-5">
                                <div className="w-1 h-7 rounded-full" style={{ backgroundColor: collab.borderColor }}></div>
                                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] md:text-[17px]" style={{ color: collab.borderColor }}>
                                  {collab.servicesTitle || 'Services'}
                                </h4>
                              </div>
                              <ul className="space-y-3">
                                {collab.services.map((service, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5 text-[#0a282e]/75 text-[13px] md:text-[14px] font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-snug">
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
                        <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 border border-[#0a282e]/8 md:col-span-2 lg:col-span-3">
                          <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] mb-4" style={{ color: collab.borderColor }}>
                            Apa saja yang bisa saya bantu.
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                            {collab.services.map((service, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-[#0a282e]/75 text-[13px] md:text-[14px] font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-snug">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: collab.borderColor }} />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* VIDEO PORTFOLIO BUTTON - HANYA UNTUK NARASUMBER/TRAINER/MENTOR - SEBELUM CTA */}
                    {selectedCollab === 0 && (
                      <div className="mb-10">
                        {/* Collapsible Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowVideoPortfolio(!showVideoPortfolio);
                          }}
                          className="w-full bg-gradient-to-r from-[#0a282e] to-[#1a5a66] hover:from-[#1a5a66] hover:to-[#0a282e] text-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                <Video className="w-6 h-6" />
                              </div>
                              <div className="text-left">
                                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] md:text-[18px] mb-1">
                                  Portfolio Video
                                </h3>
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] md:text-[14px] text-white/80">
                                  Lihat dokumentasi video seminar dan workshop yang sudah dilakukan
                                </p>
                              </div>
                            </div>
                            <div className="ml-4">
                              {showVideoPortfolio ? (
                                <ChevronUp className="w-6 h-6" />
                              ) : (
                                <ChevronDown className="w-6 h-6" />
                              )}
                            </div>
                          </div>
                        </button>

                        {/* Expandable Video Content */}
                        {showVideoPortfolio && (
                          <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                            {/* Video 1 */}
                            <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl overflow-hidden border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="aspect-[9/16] max-h-[400px] bg-[#0a282e]/8">
                                  <iframe
                                    src="https://www.instagram.com/reel/DPfW7TQkx9X/embed"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                  />
                                </div>
                                <div className="p-6 flex flex-col justify-center">
                                  <div className="inline-flex items-center gap-2 text-[#0a282e] bg-[#0a282e]/8 px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
                                    <span className="w-2 h-2 bg-[#0a282e] rounded-full animate-pulse" />
                                    Instagram Reel
                                  </div>
                                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#0a282e] mb-2">
                                    Edukasi Changemaker di Sekolah
                                  </h4>
                                  <p className="text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
                                    Sesi inspiring untuk siswa, guru, dan orangtua tentang bagaimana menjadi agen perubahan di era digital. Membangun mindset positif dan actionable skills untuk membuat dampak nyata.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Video 2 */}
                            <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl overflow-hidden border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="aspect-[9/16] max-h-[400px] bg-[#0a282e]/8">
                                  <iframe
                                    src="https://www.instagram.com/reel/DCbxsxCPSLK/embed"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                  />
                                </div>
                                <div className="p-6 flex flex-col justify-center">
                                  <div className="inline-flex items-center gap-2 text-[#0a282e] bg-[#0a282e]/8 px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
                                    <span className="w-2 h-2 bg-[#0a282e] rounded-full animate-pulse" />
                                    Instagram Reel
                                  </div>
                                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#0a282e] mb-2">
                                    Seminar Komunikasi Efektif
                                  </h4>
                                  <p className="text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
                                    Workshop praktis tentang teknik komunikasi yang powerful untuk membangun relasi yang lebih baik dengan anak, rekan kerja, dan komunitas.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Video 3 - YouTube */}
                            <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl overflow-hidden border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all">
                              <div className="p-4">
                                <div className="inline-flex items-center gap-2 text-[#0a282e] bg-[#0a282e]/8 px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
                                  <span className="w-2 h-2 bg-[#0a282e] rounded-full animate-pulse" />
                                  YouTube
                                </div>
                                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#0a282e] mb-2">
                                  Memahami Diri dan Mengelola Emosi
                                </h4>
                                <p className="text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed mb-4">
                                  Deep dive session tentang self-awareness dan emotional intelligence. Pelajari cara mengenali pola emosi, memahami trigger, dan teknik praktis mengelola emosi untuk well-being yang lebih baik.
                                </p>
                              </div>
                              <div className="aspect-video bg-[#0a282e]/8">
                                <iframe
                                  src="https://www.youtube.com/embed/fQqpG5YQDPY?start=2783"
                                  className="w-full h-full"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                />
                              </div>
                            </div>

                            {/* Video 4 */}
                            <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl overflow-hidden border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="aspect-[9/16] max-h-[400px] bg-[#0a282e]/8">
                                  <iframe
                                    src="https://www.instagram.com/reel/DA-vr-lxOlU/embed"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                  />
                                </div>
                                <div className="p-6 flex flex-col justify-center">
                                  <div className="inline-flex items-center gap-2 text-[#0a282e] bg-[#0a282e]/8 px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
                                    <span className="w-2 h-2 bg-[#0a282e] rounded-full animate-pulse" />
                                    Instagram Reel
                                  </div>
                                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#0a282e] mb-2">
                                    Kesehatan Mental di Era Digital
                                  </h4>
                                  <p className="text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
                                    Mengatasi anxiety, burnout, dan stress di tengah tuntutan digital. Strategi praktis untuk menjaga keseimbangan mental health dalam kehidupan sehari-hari.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Video 5 */}
                            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl overflow-hidden border-2 border-amber-100 hover:border-amber-200 transition-all">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="aspect-[9/16] max-h-[400px] bg-[#0a282e]/8">
                                  <iframe
                                    src="https://www.instagram.com/p/C2a_jAwSQEm/embed"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                  />
                                </div>
                                <div className="p-6 flex flex-col justify-center">
                                  <div className="inline-flex items-center gap-2 text-amber-700 bg-amber-100 px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                                    Instagram Post
                                  </div>
                                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#0a282e] mb-2">
                                    Design Thinking for Innovation
                                  </h4>
                                  <p className="text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
                                    Workshop interaktif tentang metodologi design thinking. Belajar empathize, define, ideate, prototype, dan test untuk menciptakan solusi inovatif yang human-centered.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Video 6 */}
                            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl overflow-hidden border-2 border-emerald-100 hover:border-emerald-200 transition-all">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="aspect-[9/16] max-h-[400px] mx-auto bg-[#0a282e]/8" style={{ maxWidth: '400px' }}>
                                  <iframe
                                    src="https://www.instagram.com/reel/DLUx7wiTOO9/embed"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                  />
                                </div>
                                <div className="p-6 flex flex-col justify-center">
                                  <div className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    Instagram Reel
                                  </div>
                                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#0a282e] mb-2">
                                    Growth Mindset & Wellbeing
                                  </h4>
                                  <p className="text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
                                    Mengembangkan pola pikir berkembang untuk mencapai potensi maksimal. Kombinasi mindset transformation dengan praktik wellbeing untuk kehidupan yang lebih bermakna dan produktif.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* TESTIMONIALS BUTTON - HANYA UNTUK NARASUMBER/TRAINER/MENTOR - SEBELUM CTA */}
                    {selectedCollab === 0 && (
                      <div ref={modalTestimoniRef} className="mb-10">
                        {/* Collapsible Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowTestimonials(!showTestimonials);
                          }}
                          className="w-full bg-gradient-to-r from-[#0a282e] to-[#1a5a66] hover:from-[#1a5a66] hover:to-[#0a282e] text-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                <MessageCircle className="w-6 h-6" />
                              </div>
                              <div className="text-left">
                                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] md:text-[18px] mb-1">
                                  Testimoni Peserta
                                </h3>
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] md:text-[14px] text-white/80">
                                  Lihat apa kata peserta tentang pengalaman mengikuti sesi bersama saya
                                </p>
                              </div>
                            </div>
                            <div className="ml-4">
                              {showTestimonials ? (
                                <ChevronUp className="w-6 h-6" />
                              ) : (
                                <ChevronDown className="w-6 h-6" />
                              )}
                            </div>
                          </div>
                        </button>

                        {/* Expandable Testimonials Content */}
                        {showTestimonials && (
                          <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                            {/* PARENTS TESTIMONIALS */}
                            <div className="mb-6">
                              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] md:text-[20px] text-[#0a282e] mb-4 flex items-center gap-2">
                                Parents Testimonials
                              </h4>
                              
                              <div className="grid md:grid-cols-2 gap-4">
                                {/* Testimonial Parents 1 */}
                                <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all hover:shadow-lg group">
                                  <div className="flex gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a282e] to-[#1a5a66] flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform">"</div>
                                    <div>
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a282e]/8 text-[#0a282e] text-xs font-semibold mb-2">
                                        Testimoni Parents
                                      </div>
                                      <div className="flex gap-0.5 mb-2">
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                      </div>
                                      <p className="text-[13px] md:text-[14px] text-[#0a282e]/80 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed italic">
                                        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">Sangat interaktif, seru gaya pembawaannya, sesuai realita.</span> Tema dan materinya sesuai dengan realita sehari-hari, dan <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">pembahasan materinya sangat solutif.</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-13 pt-3 border-t border-[#0a282e]/8">
                                    <p className="text-xs md:text-[13px] text-[#0a282e]/60 font-['Plus_Jakarta_Sans',sans-serif] font-semibold">
                                      Orangtua Kelas 5C - SD An Nahl Islamic School
                                    </p>
                                  </div>
                                </div>

                                {/* Testimonial Parents 2 */}
                                <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all hover:shadow-lg group">
                                  <div className="flex gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a282e] to-[#1a5a66] flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform">"</div>
                                    <div>
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a282e]/8 text-[#0a282e] text-xs font-semibold mb-2">
                                        Testimoni Parents
                                      </div>
                                      <div className="flex gap-0.5 mb-2">
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                      </div>
                                      <p className="text-[13px] md:text-[14px] text-[#0a282e]/80 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed italic">
                                        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">Satu-satunya workshop yang pernah diikuti, nggak ngebosenin.</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-13 pt-3 border-t border-[#0a282e]/8">
                                    <p className="text-xs md:text-[13px] text-[#0a282e]/60 font-['Plus_Jakarta_Sans',sans-serif] font-semibold">
                                      Orangtua Kelas 3B - SD An Nahl Islamic School
                                    </p>
                                  </div>
                                </div>

                                {/* Testimonial Parents 3 */}
                                <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all hover:shadow-lg group">
                                  <div className="flex gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a282e] to-[#1a5a66] flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform">"</div>
                                    <div>
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a282e]/8 text-[#0a282e] text-xs font-semibold mb-2">
                                        Testimoni Parents
                                      </div>
                                      <div className="flex gap-0.5 mb-2">
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                      </div>
                                      <p className="text-[13px] md:text-[14px] text-[#0a282e]/80 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed italic">
                                        Dengan mengikuti parenting Kak Mumu, <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">perasaan jadi lebih lega dan merasa beban berkurang</span>, karena materinya <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">benar-benar yang kami alami sehari-hari.</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-13 pt-3 border-t border-[#0a282e]/8">
                                    <p className="text-xs md:text-[13px] text-[#0a282e]/60 font-['Plus_Jakarta_Sans',sans-serif] font-semibold">
                                      Orangtua SMP Al Muslim Tambun
                                    </p>
                                  </div>
                                </div>

                                {/* Testimonial Parents 4 */}
                                <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all hover:shadow-lg group">
                                  <div className="flex gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a282e] to-[#1a5a66] flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform">"</div>
                                    <div>
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a282e]/8 text-[#0a282e] text-xs font-semibold mb-2">
                                        Testimoni Parents
                                      </div>
                                      <div className="flex gap-0.5 mb-2">
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                      </div>
                                      <p className="text-[13px] md:text-[14px] text-[#0a282e]/80 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed italic">
                                        Kak Mumu itu <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">komunikatif, interaktif, dan solutif</span>. <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">Membuka pemahaman baru tentang bagaimana cara memahami sifat anak.</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-13 pt-3 border-t border-[#0a282e]/8">
                                    <p className="text-xs md:text-[13px] text-[#0a282e]/60 font-['Plus_Jakarta_Sans',sans-serif] font-semibold">
                                      Orangtua Kelas 7 - MTs Yanuri
                                    </p>
                                  </div>
                                </div>

                                {/* Testimonial Parents 5 */}
                                <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all hover:shadow-lg group md:col-span-2">
                                  <div className="flex gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a282e] to-[#1a5a66] flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform">"</div>
                                    <div>
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a282e]/8 text-[#0a282e] text-xs font-semibold mb-2">
                                        Testimoni Parents
                                      </div>
                                      <div className="flex gap-0.5 mb-2">
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                      </div>
                                      <p className="text-[13px] md:text-[14px] text-[#0a282e]/80 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed italic">
                                        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">Penjelasan dan penyampaiannya sangat logis</span> dan <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">menjadi masukan yang bagus untuk kami para orang tua.</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-13 pt-3 border-t border-[#0a282e]/8">
                                    <p className="text-xs md:text-[13px] text-[#0a282e]/60 font-['Plus_Jakarta_Sans',sans-serif] font-semibold">
                                      Orangtua Kelas 6 - SD Manaaratul Islami
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* TEACHERS TESTIMONIALS */}
                            <div>
                              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] md:text-[20px] text-[#0a282e] mb-4 flex items-center gap-2">
                                Teachers Testimonials
                              </h4>
                              
                              <div className="grid md:grid-cols-2 gap-4">
                                {/* Testimonial Teachers 1 */}
                                <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all hover:shadow-lg group md:col-span-2">
                                  <div className="flex gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a282e] to-red-500 flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform">"</div>
                                    <div>
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a282e]/8 text-[#0a282e] text-xs font-semibold mb-2">
                                        Testimoni Teachers
                                      </div>
                                      <div className="flex gap-0.5 mb-2">
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                      </div>
                                      <p className="text-[13px] md:text-[14px] text-[#0a282e]/80 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed italic">
                                        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">Lebih menghargai diri sendiri.</span> Dalam penyampaian, <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">Kak Mumu tidak menghakimi sama sekali.</span> Apalagi pada sesi ketika saya tidak bisa menjawab pertanyaan tentang komunikasi asertif, karena: pertanyaan yang diajukan sangat relate dengan diri saya, dan kebanyakan tidak diberi kesempatan untuk menyampaikan pendapat pribadi mengenai sesuatu yang sudah diberikan oleh atasan. <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">Pikiran jadi lebih positif, lebih 'up', tahu cara mengontrol stres, dan tahu cara mengatasi emosi.</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-13 pt-3 border-t border-[#0a282e]/8">
                                    <p className="text-xs md:text-[13px] text-[#0a282e]/60 font-['Plus_Jakarta_Sans',sans-serif] font-semibold">
                                      Guru di TK Assalaam Bandung
                                    </p>
                                  </div>
                                </div>

                                {/* Testimonial Teachers 2 */}
                                <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-5 md:p-6 border-2 border-orange-100 hover:border-orange-200 transition-all hover:shadow-lg group">
                                  <div className="flex gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform">"</div>
                                    <div>
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                                        Testimoni Teachers
                                      </div>
                                      <div className="flex gap-0.5 mb-2">
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                      </div>
                                      <p className="text-[13px] md:text-[14px] text-[#0a282e]/80 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed italic">
                                        Kak Mumu <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">memberikan penjelasan serta contoh nyata yang sangat related dengan kondisi saat ini</span>, bahkan kondisi masa lalu yang dialami pendengar. Beliau juga <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">menyampaikan solusi konkret</span> sehingga dapat tergambar oleh pendengar apa yang harus dilakukan.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-13 pt-3 border-t border-orange-100">
                                    <p className="text-xs md:text-[13px] text-[#0a282e]/60 font-['Plus_Jakarta_Sans',sans-serif] font-semibold">
                                      Orangtua di SD Mutiara Bunda Bandung
                                    </p>
                                  </div>
                                </div>

                                {/* Testimonial Teachers 3 */}
                                <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-5 md:p-6 border-2 border-amber-100 hover:border-amber-200 transition-all hover:shadow-lg group">
                                  <div className="flex gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-[#1a5a66] flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform">"</div>
                                    <div>
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-2">
                                        Testimoni Teachers
                                      </div>
                                      <div className="flex gap-0.5 mb-2">
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                      </div>
                                      <p className="text-[13px] md:text-[14px] text-[#0a282e]/80 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed italic">
                                        Alhamdulillah, <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">Kak Mumu menjelaskannya dengan sangat detail</span> dan juga <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">memberikan beberapa gambaran sebagai contoh</span>. Menurut saya pribadi, <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">penjelasan dari Kak Mumu mudah diterima dan dipahami.</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-13 pt-3 border-t border-amber-100">
                                    <p className="text-xs md:text-[13px] text-[#0a282e]/60 font-['Plus_Jakarta_Sans',sans-serif] font-semibold">
                                      Guru Cubbyhouse Daycare
                                    </p>
                                  </div>
                                </div>

                                {/* Testimonial Teachers 4 */}
                                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-5 md:p-6 border-2 border-emerald-100 hover:border-emerald-200 transition-all hover:shadow-lg group md:col-span-2">
                                  <div className="flex gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-[#1a5a66] flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform">"</div>
                                    <div>
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-2">
                                        Testimoni Teachers
                                      </div>
                                      <div className="flex gap-0.5 mb-2">
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                        <Star className="w-3.5 h-3.5 fill-[#dac5a7] text-[#dac5a7]" />
                                      </div>
                                      <p className="text-[13px] md:text-[14px] text-[#0a282e]/80 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed italic">
                                        Saya merasa paparan yang disampaikan oleh Kak Mumu <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">amat sangat bermanfaat dan relate dengan keadaan saat ini</span>. Hal ini <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0a282e] not-italic">membuat saya merasa terbantu mengenai bagaimana cara menangani dan memvalidasi perasaan peserta didik dengan tepat dan baik</span>, sehingga mereka tidak merasa dihakimi oleh gurunya, karena kita juga tidak tahu bagaimana kondisi ananda di rumah.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-13 pt-3 border-t border-emerald-100">
                                    <p className="text-xs md:text-[13px] text-[#0a282e]/60 font-['Plus_Jakarta_Sans',sans-serif] font-semibold">
                                      Guru di SD Emiisc Jakarta
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* CTA Button - opens WhatsApp with a template for this category */}
                    <div className="flex justify-center">
                      <a
                        href={waUrlForCategory(collab.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-white transition-all hover:opacity-90 hover:scale-105 shadow-lg"
                        style={{ backgroundColor: collab.borderColor }}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        {collab.cta}
                      </a>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* EVENT LIST MODAL */}
      {showEventList && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowEventList(false)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-[#0a282e] to-[#1a5a66] px-4 md:px-10 py-5 md:py-6 rounded-t-3xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <Calendar className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] md:text-[28px] text-white leading-tight">
                      Narasumber di 200+ Seminar & Kelas Edukasi
                    </h2>
                    <p className="text-[11px] md:text-[14px] text-white/80 font-['Plus_Jakarta_Sans',sans-serif] mt-0.5 md:mt-1">
                      Sejak Tahun 2013
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowEventList(false)}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body Modal - Event List */}
            <div className="px-4 md:px-10 py-6 md:py-8">
              {/* 2026 Events */}
              {eventsByYear[2026] && (
                <div className="mb-10">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${yearGradients[2026].gradient} text-white rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] md:text-[18px] mb-6`}>
                    <Calendar className="w-4 h-4" /> 2026
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    {eventsByYear[2026].map((event, idx) => (
                      <div 
                        key={idx}
                        className={`bg-gradient-to-br ${event.gradient} rounded-xl md:rounded-2xl p-4 md:p-6 border-2 ${event.border} transition-all`}
                      >
                        <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[16px] text-[#0a282e] mb-2 md:mb-3 leading-snug">
                          {event.title}
                        </h4>
                        <p className="text-[12px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed flex items-start gap-1.5"><MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#dac5a7]" /> {event.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2025 Events */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0a282e] to-[#1a5a66] text-white rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] md:text-[18px] mb-6">
                  <Calendar className="w-4 h-4" /> 2025
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  {/* Event 1 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[16px] text-[#0a282e] mb-2 md:mb-3 group-hover:text-[#1a5a66] transition-colors leading-snug">
                      Seminar parenting: membangun karakter changemaker di sekolah dan di rumah
                    </h4>
                    <p className="text-[12px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed flex items-start gap-1.5"><MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#dac5a7]" /> SD An Nahl, SD Manaaratul Iman, Hayat School, MTs Yanuri
                    </p>
                  </div>

                  {/* Event 2 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[16px] text-[#0a282e] mb-2 md:mb-3 group-hover:text-[#1a5a66] transition-colors leading-snug">
                      Seminar parenting: membangun koneksi emosional dengan remaja
                    </h4>
                    <p className="text-[12px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed flex items-start gap-1.5"><MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#dac5a7]" /> SMPIT Al Muslim Tambun
                    </p>
                  </div>

                  {/* Event 3 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[16px] text-[#0a282e] mb-2 md:mb-3 group-hover:text-[#1a5a66] transition-colors leading-snug">
                      Startup workshop: value proposition dan customer journey map
                    </h4>
                    <p className="text-[12px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed flex items-start gap-1.5"><MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#dac5a7]" /> Bandung Techno Park Telkom University
                    </p>
                  </div>

                  {/* Event 4 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[16px] text-[#0a282e] mb-2 md:mb-3 group-hover:text-[#1a5a66] transition-colors leading-snug">
                      Seminar parenting mempersiapkan masa depan anak kita: kolaborasi sekolah, orangtua, dan komunitas dalam memahami realita perubahan dan pengasuhan di abad 21
                    </h4>
                    <p className="text-[12px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed flex items-start gap-1.5"><MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#dac5a7]" /> Ashoka Indonesia
                    </p>
                  </div>

                  {/* Event 5 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[16px] text-[#0a282e] mb-2 md:mb-3 group-hover:text-[#1a5a66] transition-colors leading-snug">
                      Seminar parenting: anak hebat, orangtua terlibat membangun 7 kebiasaan baik
                    </h4>
                    <p className="text-[12px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed flex items-start gap-1.5"><MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#dac5a7]" /> TK Kartika Bandung
                    </p>
                  </div>

                  {/* Event 6 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[16px] text-[#0a282e] mb-2 md:mb-3 group-hover:text-[#1a5a66] transition-colors leading-snug">
                      Seminar parenting: tantangan mendidik Gen Alpha untuk membangun lingkungan ramah masa depan anak
                    </h4>
                    <p className="text-[12px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed flex items-start gap-1.5"><MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#dac5a7]" /> SDIT Insan Rabbani Majalengka
                    </p>
                  </div>

                  {/* Event 7 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[16px] text-[#0a282e] mb-2 md:mb-3 group-hover:text-[#1a5a66] transition-colors leading-snug">
                      Mengelola stress orangtua dengan memahami 7 jenis kelelahan
                    </h4>
                    <p className="text-[12px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed flex items-start gap-1.5"><MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#dac5a7]" /> SD An Nahl, TK Growing Star, KB TK Istiqamah
                    </p>
                  </div>
                </div>
              </div>

              {/* 2024 Events */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0a282e] to-[#1a5a66] text-white rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] md:text-[18px] mb-6">
                  <Calendar className="w-4 h-4" /> 2024
                </div>
                
                <div className="space-y-4">
                  {/* Event 1 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting anti bullying: aman di sekolah, nyaman di rumah
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />SD Islam Al-Ikhlas Cipete Jakarta
                    </p>
                  </div>

                  {/* Event 2 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Menyambut ramadhan dengan memahami diri dan mengelola emosi
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />Daarut Tauhiid Bandung
                    </p>
                  </div>

                  {/* Event 3 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Parenting Akbar diikuti kepala sekolah dan komite orangtua dari ratusan PAUD di Kota Bandung: Strategi mengelola konflik pada anak usia dini
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />Dinas Pendidikan Kota Bandung
                    </p>
                  </div>

                  {/* Event 4 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting: strategi mengelola konflik pada anak usia dini
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />TK Lab UPI Bandung, SPS Eco Pesantren Daarut Tauhiid & TK Mulya Insani Cilegon
                    </p>
                  </div>

                  {/* Event 5 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting spesial hari ayah: "Menjadi Ayah Ibu Harmonis, Strategi jitu atasi 7 kelelahan orangtua dan bangun komunikasi lewat komunikasi BATIK (Baik, Tegas dan Efektif)"
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />Parenting Community Majalengka
                    </p>
                  </div>

                  {/* Event 6 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting: Bersama wujudkan sekolah nyaman dan aman
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />Sekolah Rimba Indonesia
                    </p>
                  </div>

                  {/* Event 7 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting komunikasi dalam keluarga: jembatan membangun rasa
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />Yayasan Pendidikan Assalaam Jayapura Papua
                    </p>
                  </div>

                  {/* Event 8 */}
                  <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-5 md:p-6 border-2 border-orange-100 hover:border-orange-300 transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Pelatihan: strategi guru mengelola 7 jenis kelelahan sehari-hari
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />SMP Hikmah Teladan, PGTK Anak Ceria, TK Istiqamah, SDN 261 Margahayu Kota Bandung
                    </p>
                  </div>

                  {/* Event 9 */}
                  <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-5 md:p-6 border-2 border-amber-100 hover:border-amber-300 transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting strategi parenting anti bullying
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />Baitul Quran Daarut Tauhiid
                    </p>
                  </div>

                  {/* Event 10 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Workshop metode design thinking untuk pembelajaran
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />SMP Salman Al Farisi, SMP Hikmah Teladan
                    </p>
                  </div>

                  {/* Event 11 */}
                  <div className="bg-gradient-to-br from-lime-50 to-white rounded-2xl p-5 md:p-6 border-2 border-lime-100 hover:border-lime-300 transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seni praktis mengelola stress sebagai orangtua
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />MI Yanuri
                    </p>
                  </div>

                  {/* Event 12 */}
                  <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-5 md:p-6 border-2 border-emerald-100 hover:border-emerald-300 transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting: optimalisasi partnership untuk membentuk generasi unggul
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />TK Assalaam Bandung
                    </p>
                  </div>
                </div>
              </div>

              {/* 2023 Events */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0a282e] to-[#1a5a66] text-white rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] md:text-[18px] mb-6">
                  <Calendar className="w-4 h-4" /> 2023
                </div>
                
                <div className="space-y-4">
                  {/* Event 1 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting 4M: Memahami diri untuk memahami anak
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />SD Mutiara Bunda
                    </p>
                  </div>

                  {/* Event 2 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting 4M: Memahami diri untuk memahami anak
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />DP3AP2KB Provinsi Sumatera Barat
                    </p>
                  </div>

                  {/* Event 3 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Parenting Akhir Tahun: Melindungi anak dari bahaya cyber crime
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />Dinas Pendidikan Kota Bandung
                    </p>
                  </div>

                  {/* Event 4 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting bersama mewujudukan sekolah zero bullying
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />Yayasan Pendidikan Amal Mulia Depok
                    </p>
                  </div>

                  {/* Event 5 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar edukasi remaja: play with purpose, pakai gadget dengan bijak
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />SMPN 24 Bandung
                    </p>
                  </div>

                  {/* Event 6 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting: kenali virus merah jambu dan beri anak rambu-rambu
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />SDIT Daarul Maza Depok
                    </p>
                  </div>

                  {/* Event 7 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting internet CERIA: Cerdas dalam penggunaan, Empati dalam bersikap, Ramah dari cyberbully, Inklusif untuk semua anak, Aman dari pornografi dan eksploitasi
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />DP3AP2KB Provinsi Sumatera Barat
                    </p>
                  </div>

                  {/* Event 8 */}
                  <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-5 md:p-6 border-2 border-orange-100 hover:border-orange-300 transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Seminar parenting orangtua berpijar: Bersama dampingi peduli proses belajar anak
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />Pijar Belajar Telkom Indonesia dan Fammi
                    </p>
                  </div>

                  {/* Event 9 */}
                  <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-5 md:p-6 border-2 border-amber-100 hover:border-amber-300 transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Roadshow seminar pendidikan seputar Guru TERAMPIL: Terlatih, Aktif dan Tampil ke 10 kota di Indonesia
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />KEMDIKBUDRISTEK dan Fammi
                    </p>
                  </div>

                  {/* Event 10 */}
                  <div className="bg-gradient-to-br from-[#f5ede1] to-white rounded-2xl p-5 md:p-6 border-2 border-[#0a282e]/8 hover:border-[#dac5a7] transition-all group">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] md:text-[16px] text-[#0a282e] mb-2 group-hover:text-[#1a5a66] transition-colors">
                      Communication skill for startup founders
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5 text-[#dac5a7]" />Bandung Techno Park Telkom University
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022-2013 Events - Organized by Year */}
              {Object.entries(eventsByYear).reverse().filter(([year]) => parseInt(year) !== 2026).map(([year, events]) => {
                const yearNum = parseInt(year);
                const yearStyle = yearGradients[yearNum];
                
                return (
                  <div key={year} className="mb-10">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${yearStyle.gradient} text-white rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] md:text-[18px] mb-6`}>
                      <Calendar className="w-4 h-4" /> {year}
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      {events.map((event, idx) => (
                        <div 
                          key={idx}
                          className={`bg-gradient-to-br ${event.gradient} rounded-xl md:rounded-2xl p-4 md:p-6 border-2 ${event.border} transition-all`}
                        >
                          <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] md:text-[16px] text-[#0a282e] mb-2 md:mb-3 leading-snug">
                            {event.title}
                          </h4>
                          <p className="text-[12px] md:text-[14px] text-[#0a282e]/70 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed flex items-start gap-1.5"><MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#dac5a7]" /> {event.location}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* More Events Notice */}
              <div className="text-center py-4 md:py-6">
                <div className="inline-flex items-center gap-2.5 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-[#f5ede1] rounded-xl md:rounded-2xl border border-[#dac5a7]">
                  <Sparkles className="w-5 h-5 text-[#0a282e] flex-shrink-0" />
                  <p className="text-[12px] md:text-[15px] text-[#0a282e] font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-tight">
                    Dan masih banyak kegiatan lainnya yang belum tercantum di sini
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}