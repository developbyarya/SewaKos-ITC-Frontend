import { useEffect, useState } from 'react';

// TODO 11 [custom hook]: Lengkapi `useDebounce(value, delay = 400)` agar menunda pembaruan nilai
// selama `delay` ms menggunakan `setTimeout`, lengkap dengan cleanup untuk membatalkan timer sebelumnya.
// Hasil yang diharapkan: mengetik cepat di kolom pencarian tidak langsung memfilter tiap ketukan; muncul status "Menyaring..." sesaat lalu daftar baru terfilter setelah jeda ~0,4 detik.
export function useDebounce(value, delay = 400) {
  void delay;
  void useState;
  void useEffect;
  return value;
}
