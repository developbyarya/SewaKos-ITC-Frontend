import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import KosListPage from './pages/KosListPage';
import KosDetailPage from './pages/KosDetailPage';
import BookingPage from './pages/BookingPage';
import FavoritesPage from './pages/FavoritesPage';
import HistoryPage from './pages/HistoryPage';
import { fetchKosList, PREVIEW_KOS } from './api/kosApi';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  // Referensi import agar siap dipakai saat mengerjakan TODO di bawah
  void useEffect;
  void fetchKosList;
  void useLocalStorage;

  // TODO 1 [useState]: Buat state `page` (nilai awal 'list') untuk halaman aktif
  // dan `selectedKosId` (nilai awal null) untuk id kos yang sedang dipilih,
  // lalu lengkapi `handleNavigate`, `handleSelectKos`, dan `handleStartBooking`.
  // Hasil yang diharapkan: klik menu di Navbar berpindah halaman, klik kartu kos membuka Detail Kos, dan klik "Pesan Sekarang" membuka Formulir Booking.
  const page = 'list';
  const selectedKosId = null;

  // TODO 3 [useState]: Buat state `favorites` berupa array id kos (nilai awal `[]`),
  // lalu lengkapi `handleToggleFavorite(kosId)` untuk menambah atau menghapus id tanpa memutasi array secara langsung.
  // Hasil yang diharapkan: klik ikon hati pada kartu kos mengubah warnanya menjadi merah, badge Favorit di Navbar berubah, dan kos tampil di halaman Favorit.
  const favorites = [];

  // TODO 10 [custom hook]: Setelah melengkapi `src/hooks/useLocalStorage.js`,
  // ganti state `favorites` (dari TODO 3) dan `bookings` di bawah agar menggunakan `useLocalStorage`.
  // Hasil yang diharapkan: refresh browser tidak menghapus daftar favorit maupun riwayat booking.
  const [bookings, setBookings] = useState([]);

  // TODO 5 [useEffect]: Ganti stub `PREVIEW_KOS` dengan state `kosList`, `loading`, `error`, dan pemicu retry.
  // Panggil `fetchKosList()` di dalam `useEffect` saat komponen pertama kali tampil (dan saat `handleRetryFetch` dipanggil).
  // Hasil yang diharapkan: muncul 6 kartu skeleton selama ~0,8 detik lalu tampil 14 kos; jika `SIMULATE_ERROR = true` di `kosApi.js`, muncul tampilan error dengan tombol "Coba lagi".
  const kosList = PREVIEW_KOS;
  const loading = false;
  const error = null;

  const selectedKos =
    kosList.find((item) => item.id === selectedKosId) || null;

  // TODO 9 [useEffect]: Perbarui `document.title` sesuai halaman aktif, nama kos yang dibuka, atau jumlah favorit/riwayat booking.
  // Hasil yang diharapkan: judul tab browser otomatis berubah saat berpindah antar halaman atau saat jumlah favorit/booking berubah.

  const handleNavigate = () => {};

  const handleSelectKos = () => {};

  const handleStartBooking = () => {};

  const handleToggleFavorite = () => {};

  const handleRetryFetch = () => {};

  const handleAddBooking = (newBooking) => {
    setBookings((prev) => [newBooking, ...prev]);
    handleNavigate('history');
  };

  return (
    <div className="app-shell">
      <Navbar
        activePage={page}
        favoritesCount={favorites.length}
        bookingsCount={bookings.length}
        onNavigate={handleNavigate}
      />

      <main className="main-content">
        <div className="container">
          {page === 'list' && (
            <KosListPage
              kosList={kosList}
              loading={loading}
              error={error}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectKos={handleSelectKos}
              onRetry={handleRetryFetch}
            />
          )}

          {page === 'detail' && (
            <KosDetailPage
              kos={selectedKos}
              isFavorite={
                selectedKos ? favorites.includes(selectedKos.id) : false
              }
              onToggleFavorite={handleToggleFavorite}
              onStartBooking={handleStartBooking}
              onBack={() => handleNavigate('list')}
            />
          )}

          {page === 'booking' && (
            <BookingPage
              kos={selectedKos}
              onSubmitBooking={handleAddBooking}
              onBack={() =>
                selectedKos
                  ? handleSelectKos(selectedKos.id)
                  : handleNavigate('list')
              }
            />
          )}

          {page === 'favorites' && (
            <FavoritesPage
              kosList={kosList}
              loading={loading}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectKos={handleSelectKos}
              onExplore={() => handleNavigate('list')}
            />
          )}

          {page === 'history' && (
            <HistoryPage
              bookings={bookings}
              onSelectKos={handleSelectKos}
              onExplore={() => handleNavigate('list')}
            />
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            <strong>KosJogja</strong> — Studi Kasus Praktikum React (State,
            Forms, Effects &amp; Custom Hooks)
          </p>
          <p className="footer-note">
            Data kos bersifat fiktif untuk keperluan pembelajaran.
          </p>
        </div>
      </footer>
    </div>
  );
}
