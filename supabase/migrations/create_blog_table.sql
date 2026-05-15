-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT DEFAULT 'Muhamad Nur Awaludin (Kak Mumu)',
  author_id UUID,
  published_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  tags TEXT[] DEFAULT '{}',
  cover_image TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  views INTEGER DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT[]
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);
CREATE INDEX IF NOT EXISTS idx_blogs_published_date ON blogs(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_tags ON blogs USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_blogs_author_id ON blogs(author_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blogs_updated_at BEFORE UPDATE ON blogs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published blogs
CREATE POLICY "Public can view published blogs"
  ON blogs FOR SELECT
  USING (status = 'published');

-- Policy: Authenticated users can do everything
CREATE POLICY "Authenticated users can manage blogs"
  ON blogs FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Grant permissions
GRANT SELECT ON blogs TO anon;
GRANT ALL ON blogs TO authenticated;
GRANT ALL ON blogs TO service_role;

-- Insert sample blog post (optional)
INSERT INTO blogs (title, slug, content, excerpt, tags, cover_image, status, published_date)
VALUES (
  '5 Strategi Efektif Mengatasi Kecanduan Gadget pada Anak',
  '5-strategi-mengatasi-kecanduan-gadget-anak',
  E'# Kecanduan Gadget pada Anak: Tantangan Orangtua Modern\n\nDi era digital ini, hampir setiap orangtua menghadapi tantangan yang sama: anak yang sulit lepas dari gadget. Mulai dari game online, media sosial, hingga video YouTube yang tak ada habisnya.\n\n## Mengapa Kecanduan Gadget Berbahaya?\n\nKecanduan gadget bukan hanya soal waktu yang terbuang. Dampaknya meliputi:\n- Gangguan tidur dan kesehatan mata\n- Penurunan kemampuan sosial\n- Masalah konsentrasi dan prestasi belajar\n- Risiko cyberbullying dan konten tidak pantas\n\n## 5 Strategi yang Terbukti Efektif:\n\n### 1. Tetapkan Aturan Screen Time yang Jelas\n\nBuat kesepakatan bersama anak tentang kapan dan berapa lama boleh menggunakan gadget. Gunakan teknik BATIK (Baik, Tegas, dan Efektif) dalam menyampaikannya.\n\n**Contoh aturan:**\n- Maksimal 2 jam per hari untuk usia 7-12 tahun\n- Tidak boleh gadget 1 jam sebelum tidur\n- Zona bebas gadget: meja makan dan kamar tidur\n\n### 2. Jadilah Role Model yang Baik\n\nAnak adalah peniru ulung. Jika orangtua sendiri tidak bisa lepas dari HP, bagaimana anak bisa mengerti?\n\n**Action plan:**\n- Simpan HP saat quality time dengan anak\n- Tunjukkan aktivitas offline yang menyenangkan\n- Ceritakan manfaat hidup tanpa gadget berlebihan\n\n### 3. Sediakan Alternatif Kegiatan Menarik\n\nAnak kecanduan gadget sering karena tidak ada kegiatan lain yang menarik.\n\n**Ide aktivitas:**\n- Olahraga bersama (bersepeda, badminton, berenang)\n- Hobi kreatif (melukis, memasak, berkebun)\n- Board games atau permainan tradisional\n- Quality time: ngobrol, jalan-jalan, makan bersama\n\n### 4. Gunakan Parental Control dengan Bijak\n\nTeknologi bisa membantu membatasi akses, tapi jangan jadikan satu-satunya solusi.\n\n**Tools yang bisa digunakan:**\n- Google Family Link (Android)\n- Screen Time (iOS)\n- Aplikasi filter konten\n- Router dengan time limit\n\n**PENTING:** Parental control harus disertai komunikasi. Jelaskan WHY, bukan hanya melarang.\n\n### 5. Bangun Komunikasi Terbuka\n\nIni yang paling penting: buat anak merasa aman untuk bercerita tentang aktivitas digitalnya.\n\n**Cara membangun komunikasi:**\n- Tanyakan tentang game atau video favoritnya\n- Jangan langsung men-judge atau marah\n- Diskusikan konten yang mereka lihat\n- Jadilah teman diskusi, bukan polisi\n\n## Kesimpulan\n\nMengatasi kecanduan gadget bukan tentang melarang total, tapi tentang mengajarkan keseimbangan. Prosesnya membutuhkan waktu, kesabaran, dan konsistensi.\n\nYang terpenting: **mulai dari diri sendiri sebagai orangtua**. Anak tidak akan mendengarkan apa yang kita katakan, tapi mereka akan meniru apa yang kita lakukan.\n\n---\n\n**Butuh pendampingan lebih lanjut tentang parenting digital?**\n\nSaya menyediakan:\n- Seminar & workshop parenting digital\n- Konsultasi personal untuk orangtua\n- Program pendampingan anak yang mengalami kecanduan gadget\n\nHubungi saya di Instagram [@mumuawaludin](https://instagram.com/mumuawaludin) atau scroll ke section Kontak di website ini.\n\n#ParentingDigital #KecanduanGadget #TipsOrangtua #DigitalParenting',
  'Panduan lengkap untuk orangtua modern dalam mengatasi kecanduan gadget pada anak. 5 strategi praktis yang terbukti efektif, dari screen time management hingga membangun komunikasi yang sehat.',
  ARRAY['Parenting Digital', 'Kecanduan Gadget', 'Tips Orangtua', 'Screen Time', 'Komunikasi Keluarga'],
  'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=1200',
  'published',
  NOW()
) ON CONFLICT (slug) DO NOTHING;

-- Add another sample
INSERT INTO blogs (title, slug, content, excerpt, tags, cover_image, status, published_date)
VALUES (
  'Mengenal Teknik Komunikasi BATIK untuk Keluarga Harmonis',
  'teknik-komunikasi-batik-keluarga',
  E'# Teknik Komunikasi BATIK: Baik, Tegas, dan Efektif\n\nKomunikasi adalah kunci keharmonisan keluarga. Namun, tidak semua orangtua tahu cara berkomunikasi yang efektif dengan anak. Di sinilah teknik BATIK berperan.\n\n## Apa itu Teknik BATIK?\n\nBATIK adalah singkatan dari:\n- **B**aik: Menyampaikan dengan bahasa yang santun\n- **T**egas: Jelas dan konsisten dalam aturan\n- **I**nformatif: Memberikan penjelasan, bukan hanya perintah\n- **K**onsisten: Menerapkan aturan secara berkelanjutan\n\n## Mengapa BATIK Penting?\n\nBanyak konflik keluarga terjadi bukan karena isinya, tapi cara penyampaiannya. Anak sering tidak mendengarkan bukan karena bandel, tapi karena merasa tidak dihargai.\n\n## Cara Menerapkan BATIK:\n\n### 1. BAIK: Pilih Kata yang Santun\n\n❌ **Salah:** "Kamu itu pemalas! Kamar berantakan terus!"\n✅ **Benar:** "Nak, tolong rapikan kamarmu ya. Kamar yang rapi bikin pikiran juga lebih tenang."\n\n### 2. TEGAS: Jelas dan Konsisten\n\n❌ **Salah:** "Jangan main game terus lah!" (tapi tidak ada aturan jelas)\n✅ **Benar:** "Waktu main game maksimal 1 jam per hari setelah PR selesai. Ini aturan kita bersama ya."\n\n### 3. INFORMATIF: Berikan Alasan\n\n❌ **Salah:** "Pokoknya tidak boleh!"\n✅ **Benar:** "Ibu tidak mengizinkan karena konten itu tidak sesuai dengan usia kamu dan bisa mempengaruhi cara berpikir."\n\n### 4. KONSISTEN: Terapkan Terus Menerus\n\nIni yang paling sulit. Jangan sesekali ketat, sesekali longgar. Anak butuh kepastian.\n\n## Latihan Praktis\n\n**Skenario:** Anak tidak mau berhenti bermain game saat waktunya makan.\n\n**Pendekatan BATIK:**\n1. **Baik:** "Nak, waktunya makan. Mama sudah masak makanan favoritmu lho."\n2. **Tegas:** "Game di-pause dulu ya. Ini kesepakatan kita: game harus berhenti saat waktu makan."\n3. **Informatif:** "Kenapa harus berhenti? Karena waktu makan itu waktu kita berkumpul dan berbagi cerita."\n4. **Konsisten:** Setiap hari terapkan aturan yang sama.\n\n## Tips Sukses\n\n- **Jangan emosional:** Tarik napas dulu sebelum bicara\n- **Dengarkan anak:** Beri kesempatan mereka menyampaikan pendapat\n- **Evaluasi rutin:** Diskusikan bersama apakah aturan masih relevan\n- **Apresiasi kepatuhan:** Puji saat anak mengikuti aturan\n\n## Kesimpulan\n\nTeknik BATIK bukan tentang mengontrol anak, tapi tentang membangun komunikasi yang sehat dan saling menghargai. Butuh latihan dan konsistensi, tapi hasilnya sangat worth it!\n\n---\n\nIngin workshop tentang komunikasi keluarga? Hubungi saya untuk seminar di sekolah atau komunitas Anda.\n\nFollow Instagram [@mumuawaludin](https://instagram.com/mumuawaludin) untuk tips parenting lainnya!',
  'Pelajari teknik komunikasi BATIK (Baik, Tegas, Informatif, Konsisten) untuk membangun hubungan yang lebih harmonis dengan anak. Panduan praktis dengan contoh kasus nyata.',
  ARRAY['Komunikasi Keluarga', 'Tips Parenting', 'Teknik BATIK', 'Parenting Indonesia'],
  'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200',
  'published',
  NOW()
) ON CONFLICT (slug) DO NOTHING;
