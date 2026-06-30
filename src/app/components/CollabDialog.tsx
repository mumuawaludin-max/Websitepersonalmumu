import { X, Presentation, Megaphone, Code, Heart, ArrowRight } from 'lucide-react';
import { WA_CATEGORIES, waUrlForCategory } from '../lib/whatsapp';

interface CollabDialogProps {
  open: boolean;
  onClose: () => void;
}

const ICONS: Record<string, any> = {
  'Narasumber & Trainer': Presentation,
  'Program & Campaign Manager': Megaphone,
  'IT Consultant': Code,
  Mentoring: Heart,
};

export function CollabDialog({ open, onClose }: CollabDialogProps) {
  if (!open) return null;

  const handleSelect = (title: string) => {
    window.open(waUrlForCategory(title), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#fffcf8] rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 md:px-8 pt-7 pb-5 border-b border-[#0a282e]/8">
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#0a282e]/5 hover:bg-[#0a282e]/10 flex items-center justify-center transition-colors"
          >
            <X className="w-4.5 h-4.5 text-[#0a282e]" />
          </button>
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-7 h-[2px] rounded-full bg-[#dac5a7]" />
            <span className="eyebrow text-[#0a282e]/50">Mari Berkolaborasi</span>
          </div>
          <h3 className="t-h2 text-[#0a282e]">Ingin berkolaborasi seputar apa?</h3>
          <p className="t-meta font-normal text-[#0a282e]/55 mt-2">
            Pilih kategori, lalu Anda akan diarahkan ke WhatsApp dengan pesan yang sudah disiapkan.
          </p>
        </div>

        {/* Options */}
        <div className="p-4 md:p-5 space-y-2.5">
          {WA_CATEGORIES.map(({ title, desc }) => {
            const Icon = ICONS[title] || Presentation;
            return (
              <button
                key={title}
                onClick={() => handleSelect(title)}
                className="group w-full flex items-center gap-4 text-left p-3.5 md:p-4 rounded-2xl border border-[#0a282e]/10 hover:border-[#0a282e] hover:bg-[#0a282e]/[0.03] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0a282e]/5 group-hover:bg-[#0a282e] flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon className="w-5 h-5 text-[#0a282e] group-hover:text-[#dac5a7] transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="t-h3 text-[#0a282e]">{title}</p>
                  <p className="t-meta font-normal text-[#0a282e]/55">{desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#0a282e]/30 group-hover:text-[#0a282e] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
