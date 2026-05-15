import { useState } from 'react';

export default function Kontak() {
  const [formData, setFormData] = useState({
    nama: '',
    institusi: '',
    kebutuhan: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ nama: '', institusi: '', kebutuhan: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a282e] pt-[100px]">
      <div className="max-w-[800px] mx-auto px-8 md:px-16 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[36px] md:text-[48px] text-white mb-4">
            Mari Berdiskusi
          </h1>
          <div className="w-[64px] h-[4px] bg-[#dac5a7] rounded-full mx-auto mb-8" />
          <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed">
            Jika Anda tertarik mengundang sebagai narasumber, mendiskusikan program, atau menjajaki kolaborasi, silakan hubungi melalui formulir berikut.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#dac5a7]/10">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#dac5a7] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0a282e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[24px] text-white mb-3">
                Pesan Terkirim
              </h3>
              <p className="text-white/70 text-[16px]">
                Terima kasih. Saya akan segera menghubungi Anda.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama */}
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

              {/* Institusi */}
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

              {/* Kebutuhan */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#dac5a7] hover:bg-[#c9b496] text-[#0a282e] rounded-xl font-['Montserrat:SemiBold',sans-serif] font-semibold text-[18px] transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-[14px] md:text-[16px]">
            Atau hubungi langsung melalui email atau media sosial
          </p>
        </div>
      </div>
    </div>
  );
}