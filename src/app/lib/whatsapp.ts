// Central WhatsApp configuration so every contact point on the site
// uses the same number and consistent message templates.

export const WA_NUMBER = '6281224201860';

// General message used by the floating button.
export const WA_GENERAL_MESSAGE =
  "Assalamu'alaikum Kak Mumu. Saya ingin berdiskusi mengenai kemungkinan kerja sama. Mohon informasinya lebih lanjut. Terima kasih.";

// Category-specific templates, keyed by the collaboration card title.
export const WA_TEMPLATES: Record<string, string> = {
  'Narasumber & Trainer':
    "Assalamu'alaikum Kak Mumu. Saya tertarik mengundang Kak Mumu sebagai Narasumber / Trainer. Berikut detail rencana kegiatan kami:\n\n" +
    '- Nama / Institusi: \n' +
    '- Tema / Topik: \n' +
    '- Tanggal & Lokasi: \n' +
    '- Perkiraan jumlah peserta: \n\n' +
    'Mohon informasi ketersediaan dan ketentuannya. Terima kasih.',

  'Program & Campaign Manager':
    "Assalamu'alaikum Kak Mumu. Saya tertarik bekerja sama untuk Program & Campaign (literasi digital / parenting / anti kecanduan gadget). Berikut gambaran kebutuhan kami:\n\n" +
    '- Nama / Institusi: \n' +
    '- Tujuan program: \n' +
    '- Target audiens: \n' +
    '- Perkiraan timeline: \n\n' +
    'Mohon arahan untuk langkah selanjutnya. Terima kasih.',

  'IT Consultant':
    "Assalamu'alaikum Kak Mumu. Saya tertarik berkonsultasi untuk kebutuhan IT / pengembangan sistem (aplikasi / website / dashboard). Berikut detailnya:\n\n" +
    '- Nama / Institusi: \n' +
    '- Kebutuhan / masalah yang ingin diselesaikan: \n' +
    '- Target waktu: \n\n' +
    'Mohon informasi proses dan estimasinya. Terima kasih.',

  Mentoring:
    "Assalamu'alaikum Kak Mumu. Saya tertarik dengan program Mentoring (pendampingan kecanduan gadget / game pada anak & remaja). Berikut detailnya:\n\n" +
    '- Nama: \n' +
    '- Usia anak / remaja: \n' +
    '- Keluhan / kondisi saat ini: \n\n' +
    'Mohon informasi mengenai alur dan jadwalnya. Terima kasih.',
};

// Collaboration categories shown in the picker dialog before redirecting.
export const WA_CATEGORIES: Array<{ title: string; desc: string }> = [
  { title: 'Narasumber & Trainer', desc: 'Undang sebagai pembicara atau trainer' },
  { title: 'Program & Campaign Manager', desc: 'Kelola program & kampanye digital' },
  { title: 'IT Consultant', desc: 'Bangun aplikasi, website, dashboard, sistem' },
  { title: 'Mentoring', desc: 'Pendampingan anak & remaja' },
];

// Build a wa.me URL from a message.
export function buildWaUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Resolve the right message for a collaboration category (falls back to general).
export function waUrlForCategory(title: string): string {
  const message = WA_TEMPLATES[title] || WA_GENERAL_MESSAGE;
  return buildWaUrl(message);
}

// Open WhatsApp in a new tab.
export function openWhatsApp(message: string): void {
  if (typeof window !== 'undefined') {
    window.open(buildWaUrl(message), '_blank', 'noopener,noreferrer');
  }
}
