export const DURATION_OPTIONS = [
  { value: 1, label: '1 Bulan', badge: '' },
  { value: 3, label: '3 Bulan', badge: 'Diskon 5%' },
  { value: 6, label: '6 Bulan', badge: 'Diskon 10%' },
  { value: 12, label: '12 Bulan', badge: 'Diskon 15%' },
];

export const DISCOUNT_RATES = {
  1: 0,
  3: 0.05,
  6: 0.1,
  12: 0.15,
};

export const PAYMENT_METHODS = [
  'Transfer Bank (BCA / BNI / Mandiri)',
  'QRIS',
  'E-Wallet (GoPay / OVO / DANA)',
  'Bayar di Tempat saat Check-in',
];
