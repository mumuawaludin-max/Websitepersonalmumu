# 🔐 Fix Admin Login - Step by Step

## ❌ Masalah: "Login failed" terus menerus

**Penyebab:** User admin belum dibuat di Supabase Auth

**Email yang digunakan:** `mumuawaludin@gmail.com`

---

## ✅ Solusi: Buat Admin User di Supabase

### **Cara 1: Via Supabase Dashboard (RECOMMENDED)**

#### **Step 1: Buka Supabase Dashboard**
1. Login ke https://supabase.com
2. Pilih project Anda
3. Klik menu **"Authentication"** di sidebar kiri
4. Klik tab **"Users"**

#### **Step 2: Buat User Baru**
1. Klik tombol **"Add user"** (tombol hijau di kanan atas)
2. Pilih **"Create new user"**
3. Isi form:
   ```
   Email: mumuawaludin@gmail.com
   Password: [password yang kuat, misalnya: Admin123!@#]
   Auto Confirm User: ✅ CENTANG INI (PENTING!)
   ```
4. Klik **"Create user"**

#### **Step 3: Login ke Admin Panel**
1. Buka website Anda
2. Scroll ke section **Blog**
3. Klik tombol **"Admin Panel"**
4. Login dengan:
   ```
   Email: mumuawaludin@gmail.com
   Password: [password yang Anda buat di step 2]
   ```

---

### **Cara 2: Via SQL Editor (Advanced)**

#### **Step 1: Buka SQL Editor**
1. Di Supabase Dashboard, klik **"SQL Editor"** di sidebar
2. Klik **"New query"**

#### **Step 2: Jalankan SQL**
```sql
-- Buat admin user dengan email confirmation otomatis
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  confirmation_token,
  recovery_token,
  email_change_token_new,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  confirmation_sent_at
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'mumuawaludin@gmail.com',
  crypt('Admin123!@#', gen_salt('bf')), -- Ganti password sesuai keinginan
  NOW(),
  '',
  '',
  '',
  NOW(),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{"name":"Kak Mumu"}',
  FALSE,
  NOW()
);
```

3. Klik **"Run"**
4. Jika berhasil, Anda akan lihat message: **"Success. No rows returned"**

**⚠️ IMPORTANT:** Ganti `'Admin123!@#'` dengan password yang Anda inginkan!

---

### **Cara 3: Via Server API (Programmatic)**

Buat file test script untuk create user:

```typescript
// create-admin.ts
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_SERVICE_KEY = 'YOUR_SERVICE_ROLE_KEY';

async function createAdmin() {
  const response = await fetch(
    `${SUPABASE_URL}/auth/v1/admin/users`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
      body: JSON.stringify({
        email: 'mumuawaludin@gmail.com',
        password: 'Admin123!@#',
        email_confirm: true,
        user_metadata: {
          name: 'Kak Mumu',
          role: 'admin',
        },
      }),
    }
  );

  const data = await response.json();
  console.log('User created:', data);
}

createAdmin();
```

---

## 🔍 Verifikasi User Sudah Dibuat

### **Check di Supabase Dashboard:**
1. Buka **Authentication > Users**
2. Cari email `mumuawaludin@gmail.com`
3. Pastikan:
   - ✅ Status: **confirmed**
   - ✅ Email Confirmed At: **ada tanggal**
   - ✅ Last Sign In: **akan terisi setelah login pertama**

### **Check via SQL:**
```sql
SELECT 
  id,
  email,
  email_confirmed_at,
  created_at,
  last_sign_in_at
FROM auth.users 
WHERE email = 'mumuawaludin@gmail.com';
```

---

## 🐛 Debugging Login Issues

### **Issue 1: "Login failed" - Invalid credentials**

**Kemungkinan:**
- Password salah
- User belum dibuat
- Email typo

**Fix:**
1. Pastikan user sudah dibuat di Supabase
2. Pastikan email exact match (case sensitive)
3. Reset password via dashboard jika lupa

### **Issue 2: "Login failed" - Email not confirmed**

**Kemungkinan:**
- `email_confirmed_at` masih NULL

**Fix:**
1. Di Supabase Dashboard > Authentication > Users
2. Klik user yang bermasalah
3. Klik **"Send confirmation email"**
4. ATAU set manual via SQL:
```sql
UPDATE auth.users 
SET email_confirmed_at = NOW() 
WHERE email = 'mumuawaludin@gmail.com';
```

### **Issue 3: Network error**

**Kemungkinan:**
- Server Supabase down
- API URL salah
- CORS issue

**Fix:**
1. Check console browser (F12)
2. Lihat error message detail
3. Pastikan `projectId` di `/utils/supabase/info.tsx` benar

### **Issue 4: "Unauthorized" setelah login**

**Kemungkinan:**
- Token expired
- Token tidak valid

**Fix:**
```javascript
// Clear localStorage dan login ulang
localStorage.removeItem('adminToken');
// Refresh page dan login lagi
```

---

## 📝 Password Requirements

**Recommended Password:**
- Minimal 8 karakter
- Kombinasi huruf besar & kecil
- Angka
- Karakter spesial (!@#$%^&*)

**Contoh Strong Password:**
- `KakMumu2026!`
- `Admin@Mumu123`
- `Parenting#Digital99`

---

## 🔐 Security Best Practices

### **After First Login:**

1. **Ganti Password:**
   - Buka Supabase Dashboard
   - Authentication > Users
   - Click user email
   - Click **"Send password reset email"**

2. **Enable MFA (Optional):**
   - Di Supabase: Authentication > Settings
   - Enable Multi-Factor Authentication

3. **Set Password Policy:**
   - Di Supabase: Authentication > Policies
   - Set minimum password strength

---

## 🎯 Quick Fix Checklist

- [ ] User sudah dibuat di Supabase Auth
- [ ] Email: `mumuawaludin@gmail.com` (exact)
- [ ] Password sudah di-set
- [ ] Email confirmed (`email_confirmed_at` NOT NULL)
- [ ] Password memenuhi requirements
- [ ] Browser console tidak ada error
- [ ] LocalStorage di-clear (jika perlu)
- [ ] Try login dengan credential yang benar

---

## 💡 Tips

### **Simpan Credentials Dengan Aman:**
```
Email: mumuawaludin@gmail.com
Password: [simpan di password manager]
Created: [tanggal dibuat]
Last Changed: [tanggal terakhir ganti password]
```

### **Test Login:**
1. Buka incognito/private window
2. Login ke admin panel
3. Jika berhasil, clear cache di browser normal
4. Login lagi di browser normal

---

## 📞 Still Not Working?

### **Collect Debug Info:**

1. **Browser Console (F12):**
   ```
   - Copy semua error message
   - Copy network request yang failed
   ```

2. **Network Tab:**
   ```
   - Check POST request ke /admin/login
   - Lihat response body
   - Copy error detail
   ```

3. **Supabase Logs:**
   ```
   - Buka Supabase Dashboard
   - Settings > Logs
   - Filter: Authentication
   - Copy error jika ada
   ```

### **Common Error Messages:**

```
"Invalid credentials" → User tidak ada atau password salah
"Email not confirmed" → Set email_confirmed_at
"User not found" → Buat user dulu
"Network error" → Check internet / API URL
"Unauthorized" → Token expired, login ulang
```

---

## ✅ Success Indicators

Setelah login berhasil, Anda akan:
- ✅ Diarahkan ke halaman admin dashboard
- ✅ Melihat list blog posts (kosong jika belum ada)
- ✅ Bisa klik "Create New Blog"
- ✅ Token tersimpan di localStorage
- ✅ Tidak perlu login lagi saat refresh page

---

**Created:** March 19, 2026
**Last Updated:** March 19, 2026
**Status:** Ready to Use
