# Checklist Verifikasi Perilaku — Sewa Kos

Centang setiap item setelah kamu memverifikasi perilakunya langsung di browser. Urutan di bawah mengikuti alur pengerjaan **TODO 1 sampai TODO 12**.

---

## Tahap 1 — State Dasar & Navigasi (TODO 1–3)

- [ ] **TODO 1 (Navigasi):** Klik tab **Daftar Kos**, **Favorit**, dan **Riwayat Booking** di Navbar berpindah halaman dan menandai tab yang aktif.
- [ ] **TODO 1 (Detail & Booking):** Klik kartu kos (atau tombol **Lihat Detail**) membuka halaman **Detail Kos** yang sesuai; klik **Pesan Sekarang** membuka halaman **Formulir Booking**; tombol **← Kembali** berfungsi.
- [ ] **TODO 2 (Filter & Search input):** Mengetik di kolom pencarian dan mengubah dropdown **Tipe Kos**, **Harga Minimal**, **Harga Maksimal**, serta **Urutkan Harga** menampilkan nilai yang dipilih.
- [ ] **TODO 2 (Reset):** Klik tombol **Reset Filter** mengembalikan kolom pencarian dan semua filter ke nilai awal.
- [ ] **TODO 3 (Favorit):** Klik ikon hati pada kartu kos mengubah warnanya menjadi merah, jumlah di badge menu **Favorit** di Navbar bertambah/berkurang, dan kos tersebut muncul di halaman **Favorit**.
- [ ] **TODO 3 (Sinkronisasi Detail):** Tombol favorit di halaman **Detail Kos** ikut berubah dan tetap sinkron dengan daftar kos.

---

## Tahap 2 — Derived State & Fetch Data (TODO 4–5)

- [ ] **TODO 4 (Pencarian):** Mengetik kata kunci seperti `Pogung`, `Seturan`, atau `AC` menyaring daftar kos yang relevan.
- [ ] **TODO 4 (Filter tipe & harga):** Memilih tipe `Putri` hanya menampilkan kos putri; mengisi harga minimal `1000000` dan maksimal `2000000` hanya menampilkan kos pada rentang tersebut.
- [ ] **TODO 4 (Sort):** Memilih **Termurah ke Termahal** atau **Termahal ke Termurah** mengurutkan kartu dengan benar tanpa merusak urutan default saat di-reset.
- [ ] **TODO 4 (Empty state):** Jika kombinasi pencarian/filter tidak menghasilkan kos apa pun, muncul tampilan **Tidak ada kos yang cocok** beserta tombol reset.
- [ ] **TODO 5 (Loading skeleton):** Saat halaman pertama kali dimuat, muncul 6 kartu *skeleton* selama sekitar 0,8 detik, lalu tampil 14 kos dari `public/data/kos.json`.
- [ ] **TODO 5 (Error & Coba lagi):** Saat `SIMULATE_ERROR = true` di `src/api/kosApi.js`, muncul tampilan error beserta tombol **Coba lagi**; setelah flag dikembalikan ke `false` lalu tombol **Coba lagi** diklik, 14 kos berhasil dimuat.

---

## Tahap 3 — Controlled Form, Validasi & Ringkasan Biaya (TODO 6–8)

- [ ] **TODO 6 (Controlled inputs):** Seluruh input form booking (nama lengkap, nomor HP, tanggal masuk, durasi sewa, metode pembayaran, catatan, dan checkbox persetujuan) dapat diisi dan berubah nilainya.
- [ ] **TODO 7 (Validasi nama kosong):** Submit form dengan nama kosong menampilkan pesan error di bawah field **Nama Lengkap**.
- [ ] **TODO 7 (Validasi nomor HP):** Mengisi nomor HP kurang dari 10 digit, lebih dari 13 digit, atau mengandung huruf menampilkan pesan error di bawah field **Nomor HP**.
- [ ] **TODO 7 (Validasi tanggal lampau):** Memilih tanggal masuk sebelum hari ini (atau membiarkannya kosong) menampilkan pesan error di bawah field **Tanggal Masuk**.
- [ ] **TODO 7 (Validasi persetujuan):** Submit tanpa mencentang checkbox persetujuan menampilkan pesan error di bawah checkbox.
- [ ] **TODO 7 (Submit sukses):** Mengisi semua field dengan valid lalu klik **Konfirmasi Booking** menyimpan pesanan, menambah angka badge **Riwayat Booking**, dan berpindah ke halaman **Riwayat Booking** yang menampilkan pesanan baru.
- [ ] **TODO 8 (Ringkasan biaya):** Mengubah **Durasi Sewa** (1, 3, 6, 12 bulan) langsung memperbarui **Subtotal**, **Diskon Durasi** (0%, 5%, 10%, 15%), dan **Total Pembayaran** (`subtotal + deposit - diskon`) di panel Ringkasan Biaya.

---

## Tahap 4 — Effects, Custom Hooks & Refs (TODO 9–12)

- [ ] **TODO 9 (`document.title`):** Judul tab browser berubah otomatis saat berada di Daftar Kos, Detail Kos (`<Nama Kos> - Sewa Kos`), Booking (`Booking <Nama Kos> - Sewa Kos`), Favorit (`Favorit (N) - Sewa Kos`), dan Riwayat Booking (`Riwayat Booking (N) - Sewa Kos`).
- [ ] **TODO 10 (Persistensi `localStorage`):** Menandai beberapa kos sebagai favorit dan membuat minimal 1 booking, lalu menekan **Refresh (F5)** di browser — daftar favorit dan riwayat booking **tidak hilang**.
- [ ] **TODO 11 (Debounce pencarian):** Mengetik cepat di kolom pencarian tidak langsung memfilter di setiap huruf; muncul indikator **Menyaring...** sesaat, lalu daftar kos baru berubah setelah berhenti mengetik ~0,4 detik.
- [ ] **TODO 12 (Autofocus booking):** Saat halaman **Formulir Booking** dibuka, kursor otomatis aktif di input **Nama Lengkap** tanpa perlu diklik.
- [ ] **TODO 12 (Fokus ke field error pertama):** Submit form dengan nama sudah terisi tetapi nomor HP tidak valid memindahkan fokus kursor otomatis ke field **Nomor HP**; jika nama kosong, fokus pindah ke **Nama Lengkap**.
