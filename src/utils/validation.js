/**
 * Mengembalikan tanggal hari ini dalam format YYYY-MM-DD berdasarkan zona waktu lokal.
 */
export function getTodayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Memeriksa apakah nomor HP terdiri dari 10 sampai 13 digit angka
 * (spasi dan tanda strip diabaikan sebelum pengecekan).
 */
export function isValidIndonesianPhone(phone) {
  if (typeof phone !== 'string') return false;
  const normalized = phone.replace(/[\s-]/g, '');
  return /^\d{10,13}$/.test(normalized);
}

/**
 * Memeriksa apakah tanggal (format YYYY-MM-DD) berada sebelum hari ini.
 */
export function isPastDate(dateString) {
  if (!dateString) return false;
  return dateString < getTodayDateString();
}
