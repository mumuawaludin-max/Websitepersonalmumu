# 🔑 Cara Login Admin - Simple Guide

## ❌ Masalah Anda

Email: `mumuawaludin@gmail.com`
Error: **"Login failed"**

## ✅ Solusi Cepat (5 Menit)

### **Step 1: Buka Supabase**
1. Buka browser → https://supabase.com
2. Login dengan akun Anda
3. Pilih project website Kak Mumu

### **Step 2: Buat User Admin**
1. Klik **"Authentication"** di menu kiri
2. Klik **"Users"** (tab pertama)
3. Klik tombol **"Add user"** (hijau, pojok kanan atas)
4. Pilih **"Create new user"**

### **Step 3: Isi Form**
```
Email Address: mumuawaludin@gmail.com
Password: [buat password, contoh: KakMumu2026!]
☑️ Auto Confirm User ← CENTANG INI!
```

### **Step 4: Simpan**
Klik **"Create user"**

### **Step 5: Login**
1. Buka website Anda
2. Scroll ke section **Blog**
3. Klik **"Admin Panel"**
4. Login dengan:
   - Email: `mumuawaludin@gmail.com`
   - Password: [password yang Anda buat di Step 3]

---

## ✅ Berhasil!

Setelah login berhasil, Anda akan:
- Masuk ke dashboard admin
- Bisa create, edit, delete blog posts
- Token tersimpan otomatis (tidak perlu login lagi)

---

## 🚨 Jika Masih Error

### **Error: "Email atau password salah"**
→ Pastikan:
- Email exact: `mumuawaludin@gmail.com`
- Password sesuai yang dibuat
- User sudah dibuat di Supabase

### **Error: "Email belum dikonfirmasi"**
→ Fix:
1. Di Supabase: Authentication > Users
2. Klik user `mumuawaludin@gmail.com`
3. Pastikan ada centang hijau di **"Email Confirmed"**
4. Jika tidak, klik **"Confirm email"**

### **Error: "Network error"**
→ Periksa:
- Koneksi internet
- Browser console (F12) untuk error detail
- API URL di `/utils/supabase/info.tsx`

---

## 📝 Password Tips

**Gunakan password yang kuat:**
- Minimal 8 karakter
- Kombinasi huruf + angka + simbol
- Contoh: `KakMumu2026!`, `Parenting#2026`

**Simpan password dengan aman:**
- Gunakan password manager (LastPass, 1Password)
- Atau catat di tempat aman

---

## 🎯 Visual Steps

```
1. Supabase.com
   ↓
2. Login → Pilih Project
   ↓
3. Authentication → Users
   ↓
4. Add User → Create new user
   ↓
5. Isi email + password + centang "Auto Confirm"
   ↓
6. Create user
   ↓
7. Buka website → Admin Panel
   ↓
8. Login → SUCCESS! ✅
```

---

## 📞 Need Help?

**Check Console:**
1. Buka website
2. Tekan F12 (atau Ctrl+Shift+I)
3. Klik tab "Console"
4. Coba login lagi
5. Lihat error message yang muncul
6. Screenshot dan kirim ke developer

**Check di Supabase:**
1. Authentication > Users
2. Cari email Anda
3. Pastikan status = "confirmed"
4. Screenshot jika ada masalah

---

**Last Updated:** March 19, 2026
**Status:** Ready to Use ✅
