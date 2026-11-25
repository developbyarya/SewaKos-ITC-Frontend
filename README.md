# KosJogja — Praktikum React: Aplikasi Sewa Kos

Selamat datang di studi kasus **Sewa Kos Yogyakarta**!  
Proyek ini dirancang khusus untuk praktikum React tingkat dasar hingga menengah. Seluruh komponen antarmuka (HTML/JSX dan CSS) sudah selesai dan responsif—tugas kamu adalah menghidupkan interaksinya menggunakan **state, forms, effects, custom hooks, dan refs**.

---

## Tujuan Pembelajaran

Setelah menyelesaikan proyek ini, kamu diharapkan memahami dan mampu mempraktikkan:

1. **`useState`**: state primitif, state objek, state array (immutable update), dan *derived state*
2. **Controlled Form**: satu state objek + satu handler generik, serta validasi saat submit
3. **`useEffect`**: fetch data asinkron dengan loading/error state, pembaruan `document.title`, sinkronisasi `localStorage`, dan fungsi *cleanup*
4. **Custom Hooks**: membuat dan memakai `useLocalStorage` dan `useDebounce`
5. **`useRef` & `useMemo`**: autofocus input, fokus ke field error pertama, dan kalkulasi turunan

---

## Cara Install & Menjalankan

Pastikan **Node.js** (disarankan v18 atau lebih baru) sudah terpasang.

```bash
# 1. Install seluruh dependensi
npm install

# 2. Jalankan server pengembangan
npm run dev
```

Buka URL yang tampil di terminal (biasanya `http://localhost:5173`).

---

## Gambaran Fitur Aplikasi

1. **Daftar Kos**: menampilkan kartu kos sekitar Yogyakarta (nama, area, harga/bulan, tipe Putra/Putri/Campur, fasilitas, tombol favorit), kolom pencarian dengan *debounce*, filter tipe & rentang harga, serta pengurutan termurah/termahal.
2. **Detail Kos**: informasi lengkap kamar, daftar fasilitas, tata tertib, tombol simpan favorit, dan tombol **Pesan Sekarang**.
3. **Form Booking**: input nama lengkap, nomor HP, tanggal masuk, durasi sewa (1/3/6/12 bulan), metode pembayaran, catatan, persetujuan tata tertib, validasi per field, serta panel **Ringkasan Biaya** otomatis (harga × durasi + deposit − diskon durasi).
4. **Favorit**: kumpulan kos yang ditandai hati dan tetap tersimpan meski browser di-refresh.
5. **Riwayat Booking**: daftar pemesanan yang sudah dikirim dan tersimpan di `localStorage`.
6. **UI States**: *loading skeleton* (~800 ms), *empty state*, dan *error state* lengkap dengan tombol **Coba lagi**.

---

## Struktur Proyek

```text
.
├─ public/data/kos.json      # Data 14 kos fiktif sekitar Yogyakarta
├─ src/
│  ├─ api/kosApi.js          # Fungsi fetchKosList() + flag SIMULATE_ERROR
│  ├─ components/            # Komponen UI murni (JANGAN diubah)
│  ├─ pages/                 # Halaman container (tempat mengisi TODO)
│  ├─ hooks/                 # Custom hooks: useLocalStorage & useDebounce (TODO)
│  ├─ utils/                 # Helper format rupiah, tanggal, harga, validasi (sudah siap)
│  ├─ App.jsx                # Komponen utama & navigasi halaman (TODO)
│  └─ index.css              # Styling lengkap (JANGAN diubah)
├─ README.md
└─ TODO_CHECKLIST.md         # Daftar perilaku yang bisa diuji di browser
```

---

## Aturan Pengerjaan

1. **Hanya edit file yang memiliki komentar `// TODO`** yaitu:
   - `src/App.jsx` (TODO 1, 3, 5, 9, 10)
   - `src/pages/KosListPage.jsx` (TODO 2, 4)
   - `src/pages/BookingPage.jsx` (TODO 6, 7, 8, 12)
   - `src/hooks/useLocalStorage.js` (TODO 10)
   - `src/hooks/useDebounce.js` (TODO 11)
2. **Jangan mengubah file di `src/components/`, `src/utils/`, maupun `src/index.css`.**
3. **Jangan menambahkan library baru** (seperti `react-router-dom`, `react-hook-form`, dll.).
4. Kerjakan TODO secara berurutan dari **TODO 1 sampai TODO 12** (dari mudah ke sulit).
5. Gunakan [TODO_CHECKLIST.md](./TODO_CHECKLIST.md) untuk memverifikasi setiap hasil langsung di browser.

### Menguji Error State (TODO 5)

Untuk memastikan tampilan error dan tombol **Coba lagi** bekerja, buka `src/api/kosApi.js` lalu ubah sementara:

```js
export const SIMULATE_ERROR = true;
```

Setelah selesai menguji, kembalikan ke `false`.

---

## Ringkasan 12 TODO

| # | Konsep | File | Tugas Singkat |
|---|---|---|---|
| 1 | `useState` | `src/App.jsx` | State halaman aktif (`page`) dan kos terpilih (`selectedKosId`) untuk navigasi |
| 2 | `useState` | `src/pages/KosListPage.jsx` | State pencarian (`searchQuery`) dan filter (`filters`) yang terhubung ke `SearchInput` & `FilterBar` |
| 3 | `useState` | `src/App.jsx` | State `favorites` dan toggle favorit tanpa mutasi array langsung |
| 4 | Derived state | `src/pages/KosListPage.jsx` | Hitung `filteredKos` (cari, filter, urutkan) langsung dari state |
| 5 | `useEffect` | `src/App.jsx` | Fetch data kos dari `fetchKosList()` dengan state `loading`, `error`, dan retry |
| 6 | Form | `src/pages/BookingPage.jsx` | Controlled inputs untuk semua field booking (1 state objek + 1 handler generik) |
| 7 | Form | `src/pages/BookingPage.jsx` | Validasi saat submit & tampilkan pesan error per field |
| 8 | Derived state | `src/pages/BookingPage.jsx` | Hitung ringkasan biaya (`subtotal`, `deposit`, `discount`, `total`) |
| 9 | `useEffect` | `src/App.jsx` | Perbarui `document.title` sesuai halaman aktif, jumlah favorit, atau nama kos |
| 10 | Custom hook | `src/hooks/useLocalStorage.js` & `src/App.jsx` | Lengkapi `useLocalStorage` lalu pakai untuk `favorites` dan `bookings` |
| 11 | Custom hook + cleanup | `src/hooks/useDebounce.js` | Lengkapi `useDebounce` dengan `setTimeout` dan cleanup `clearTimeout` |
| 12 | `useRef` | `src/pages/BookingPage.jsx` | Autofocus field nama saat halaman booking dibuka & fokus ke field error pertama saat validasi gagal |

---

## Cara Pindah Branch Checkpoint

Jika kamu tertinggal di tengah sesi praktikum, tersedia branch *checkpoint* kumulatif:

| Branch | Isi |
|---|---|
| `main` | Starter awal (seluruh TODO 1–12 masih berupa stub) |
| `step-1` | TODO 1–3 selesai |
| `step-2` | TODO 1–5 selesai |
| `step-3` | TODO 1–8 selesai |
| `step-4` | TODO 1–12 selesai |
| `debug` | Versi latihan *debugging* (mengandung 3 bug yang perlu dicari & diperbaiki) |

Sebelum berpindah branch, simpan dulu pekerjaanmu agar tidak hilang:

```bash
# Simpan perubahan sementara (opsional)
git stash

# Pindah ke checkpoint yang diinginkan, misalnya step-2
git checkout step-2
```

Untuk kembali ke starter awal:

```bash
git checkout main
```
