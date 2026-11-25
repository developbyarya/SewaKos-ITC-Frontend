import { useEffect, useState } from 'react';

// TODO 10 [custom hook]: Lengkapi `useLocalStorage(key, initialValue)` agar membaca nilai awal
// dari `localStorage` secara aman (pakai try/catch) dan menyinkronkan setiap perubahan nilai kembali ke `localStorage`.
// Setelah selesai, gunakan hook ini di `src/App.jsx` untuk state `favorites` dan `bookings`.
// Hasil yang diharapkan: setelah menambah favorit atau membuat booking lalu me-refresh halaman, data tetap tersimpan.
export function useLocalStorage(key, initialValue) {
  void key;
  void useEffect;
  const [storedValue, setStoredValue] = useState(initialValue);
  return [storedValue, setStoredValue];
}
