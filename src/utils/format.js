/**
 * Format angka menjadi mata uang Rupiah (contoh: 850000 -> "Rp 850.000").
 */
export function formatRupiah(amount) {
  const numericAmount = Number(amount) || 0;
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericAmount);
}

/**
 * Format string tanggal YYYY-MM-DD menjadi tanggal Indonesia (contoh: "12 Agustus 2026").
 */
export function formatDate(dateString) {
  if (!dateString) return '-';
  const parts = dateString.split('-');
  if (parts.length !== 3) return dateString;

  const year = Number(parts[0]);
  const month = Number(parts[1]) - 1;
  const day = Number(parts[2]);
  const date = new Date(year, month, day);

  if (Number.isNaN(date.getTime())) return dateString;

  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Format ISO timestamp menjadi tanggal dan waktu singkat Indonesia.
 */
export function formatDateTime(isoString) {
  if (!isoString) return '-';
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return isoString;

  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

/**
 * Mengubah kode tipe kos menjadi label berbahasa Indonesia.
 */
export function getKosTypeLabel(type) {
  const labels = {
    putra: 'Putra',
    putri: 'Putri',
    campur: 'Campur',
  };
  return labels[type] || type;
}
