# 📸 Panduan Foto Profil Speakers & Moderator

## 📁 Lokasi File Foto
Semua foto profil harus disimpan di folder: `src/assets/`

## 📋 Daftar File Foto yang Diperlukan

### 🎤 **MODERATOR DAY 1**
- **File**: `asnan-purba.png`
- **Nama**: Asnan Purba, Lc., M.Pd.I., QWP., CWC.
- **Status**: ✅ Sudah ditampilkan

### 👥 **SPEAKERS DAY 1**

#### 1. **Yudil Chatim**
- **File**: `yudil-chatim.png`
- **Nama**: YUDIL CHATIM, SKM, M.ED.
- **Posisi**: Education & Cultural Attaché Indonesia-China
- **Status**: ✅ Sudah ditampilkan

#### 2. **International Baccalaureate**
- **File**: `ib-logo.png`
- **Nama**: INTERNATIONAL BACCALAUREATE
- **Catatan**: Logo IB resmi
- **Status**: ✅ Sudah ditampilkan

#### 3. **Prof. Muhammad Zuhdi**
- **File**: `muhammad-zuhdi.png`
- **Nama**: PROF. MUHAMMAD ZUHDI M.ED., PH.D.
- **Posisi**: Islamic Education Scholar
- **Status**: ✅ Sudah ditampilkan

#### 4. **Prof. Dr. Fariza**
- **File**: `fariza-md-sham.png`
- **Nama**: PROF. DATO' DR. FARIZA MD SHAM FASC
- **Posisi**: Islamic Psychology Expert - UKM
- **Status**: ✅ Sudah ditampilkan

---

### 🎤 **MODERATOR DAY 2**
- **File**: `supangat.png`
- **Nama**: Dr. Supangat, M.A.
- **Posisi**: Trainer Nasional & Pengelola Sekolah Islam
- **Status**: ⏳ Siap ditampilkan (perlu foto)

### 👥 **SPEAKERS DAY 2**

#### 1. **Putra Asga Elevri**
- **File**: `putra-asga-elevri.png`
- **Nama**: PUTRA ASGA ELEVRI, S.SI., M.SI.
- **Posisi**: Direktur Guru Pendidikan Menengah - Kemendikbudristek
- **Status**: ⏳ Siap ditampilkan (perlu foto)

#### 2. **Prof. Maila Dinia Husni Rahiem**
- **File**: `maila-dinia-husni-rahiem.png`
- **Nama**: PROF. MAILA DINIA HUSNI RAHIEM, M.A., PH.D.
- **Posisi**: Guru Besar UIN Jakarta - Top 2% Scientists Worldwide
- **Status**: ⏳ Siap ditampilkan (perlu foto)

#### 3. **Prof. Taufik Kasturi**
- **File**: `taufik-kasturi.png`
- **Nama**: PROF. TAUFIK KASTURI, M.SI., PH.D.
- **Posisi**: Guru Besar Psikologi UMS - Psikologi Islam
- **Status**: ⏳ Siap ditampilkan (perlu foto)

## 📐 Spesifikasi Foto

### **Ukuran & Format**
- **Format**: JPG atau PNG
- **Rasio**: 1:1 (persegi)
- **Ukuran minimum**: 200x200 pixels
- **Ukuran maksimum**: 800x800 pixels

### **Kualitas Foto**
- **Resolusi**: Minimal 72 DPI
- **Orientasi**: Portrait (foto wajah)
- **Background**: Preferably clean/professional
- **Lighting**: Well-lit, clear facial features

## 🔄 Cara Menambah Foto Baru

### **Langkah 1: Simpan Foto**
1. Simpan foto di folder `src/assets/`
2. Gunakan nama file sesuai daftar di atas
3. Pastikan format JPG atau PNG

### **Langkah 2: Update Import di Speakers.jsx**
1. Buka file `src/components/Speakers.jsx`
2. Uncomment import line untuk foto yang sudah ditambahkan
3. Update function `getSpeakerImage()` untuk mengembalikan foto yang sesuai

### **Langkah 3: Update Data (Opsional)**
Jika ingin menambah speakers baru:
1. Buka file `src/data.json`
2. Tambahkan data speaker baru dengan field `image`
3. Format: `"image": "./src/assets/nama-file.jpg"`

## 🎨 Tampilan di Website

### **Moderator**
- **Ukuran**: 128x128px (Large)
- **Style**: Circular dengan border gradient
- **Badge**: "MODERATOR" label

### **Speakers**
- **Ukuran**: 112x112px (Medium-Large)
- **Style**: Circular dengan border solid
- **Layout**: Grid 2 kolom
- **Badge Sesi**: Khusus Day 3 menampilkan topik sesi

## 🔧 Fallback System

Jika foto tidak ditemukan atau gagal dimuat:
- **Moderator**: Icon microphone dengan background gradient
- **Speakers**: Icon person dengan background gradient
- **Automatic**: Sistem otomatis beralih ke icon jika foto error

## 📝 Catatan Penting

1. **Nama File**: Harus persis sama dengan yang ada di data.json
2. **Case Sensitive**: Perhatikan huruf besar/kecil
3. **Path**: Selalu gunakan `/src/assets/` di awal path
4. **Testing**: Refresh browser setelah menambah foto baru

## 🚀 Status Implementasi

- ✅ **Sistem foto profil**: Sudah siap
- ✅ **Fallback system**: Sudah aktif
- ✅ **Responsive design**: Sudah optimal
- ✅ **Foto Day 1**: Semua sudah ditampilkan (5 orang)
- ✅ **Data Day 2**: Sudah siap (4 orang)
- ⏳ **Foto Day 2**: Perlu ditambahkan (4 file foto)
- ✅ **Import system**: Sudah diaktifkan untuk semua hari
- ✅ **Data Day 3**: Sudah siap (3 orang, tanpa moderator)

## 📋 **Foto yang Masih Diperlukan:**

### **Day 2 (4 foto):**
1. `supangat.png` - Dr. Supangat, M.A.
2. `putra-asga-elevri.png` - Putra Asga Elevri, S.Si., M.Si.
3. `maila-dinia-husni-rahiem.png` - Prof. Maila Dinia Husni Rahiem
4. `taufik-kasturi.png` - Prof. Taufik Kasturi

### **Day 3 (3 foto):**
1. `muhammad-abduh-tuasikal.png` - Dr. K.H. Muhammad Abduh Tuasikal
2. `abdullah-roy.png` - Dr. Abdullah Roy, M.A.
3. `ammi-nur-baits.png` - Ustadz Ammi Nur Baits

---

### 👥 **SPEAKERS DAY 3** (Tanpa Moderator)

#### 1. **Dr. K.H. Muhammad Abduh Tuasikal**
- **File**: `muhammad-abduh-tuasikal.png`
- **Nama**: DR. K.H. MUHAMMAD ABDUH TUASIKAL, S.T., M.SC.
- **Posisi**: Pendiri Pesantren Darus Sholihin & CEO Rumaysho.com
- **Sesi**: "Gen-Z Bermanfaat: Pendidikan Islam Sebagai Fondasi"
- **Status**: ⏳ Siap ditampilkan (perlu foto)

#### 2. **Dr. Abdullah Roy**
- **File**: `abdullah-roy.png`
- **Nama**: DR. ABDULLAH ROY, M.A.
- **Posisi**: Pendiri HSI & Ketua STIT Riyadhussholihiin Pandeglang
- **Sesi**: "Menjadi Teladan Terbaik: Pentingnya Perilaku Orang Tua dalam Pendidikan Anak"
- **Status**: ⏳ Siap ditampilkan (perlu foto)

#### 3. **Ustadz Ammi Nur Baits**
- **File**: `ammi-nur-baits.png`
- **Nama**: USTADZ AMMI NUR BAITS, S.T., B.A.
- **Posisi**: Pendiri WITAMA & Founder ANB Academy
- **Sesi**: "Belajar Cara Nabi Belajar: Tadabbur, Tafakkur, Tazakkur"
- **Status**: ⏳ Siap ditampilkan (perlu foto)

## 🔧 Cara Menambah Foto Speaker Lain

### **Contoh untuk Yudil Chatim:**
1. **Simpan foto** sebagai `yudil-chatim.jpg` di `src/assets/`
2. **Uncomment import** di `src/components/Speakers.jsx`:
   ```javascript
   import yudilChatimImg from '../assets/yudil-chatim.jpg';
   ```
3. **Update function getSpeakerImage()**:
   ```javascript
   const getSpeakerImage = (speakerName) => {
     if (speakerName.includes('YUDIL CHATIM')) {
       return yudilChatimImg;
     }
     return null;
   };
   ```

### **Ulangi langkah yang sama** untuk speaker lainnya dengan mengganti nama file dan variabel yang sesuai.

---

**💡 Tips**: Untuk hasil terbaik, gunakan foto dengan background putih atau transparan, dan pastikan wajah terlihat jelas di tengah foto.
