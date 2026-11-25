import { useEffect, useMemo, useRef, useState } from 'react';
import BookingForm from '../components/BookingForm';
import CostSummary from '../components/CostSummary';
import EmptyState from '../components/EmptyState';
import { DISCOUNT_RATES, PAYMENT_METHODS } from '../utils/pricing';
import { isPastDate, isValidIndonesianPhone } from '../utils/validation';

const INITIAL_FORM_DATA = {
  fullName: '',
  phone: '',
  checkInDate: '',
  duration: '1',
  paymentMethod: PAYMENT_METHODS[0],
  notes: '',
  agreed: false,
};

export default function BookingPage({ kos, onSubmitBooking, onBack }) {
  void useState;
  void useEffect;
  void useMemo;
  void useRef;
  void DISCOUNT_RATES;
  void isPastDate;
  void isValidIndonesianPhone;
  void onSubmitBooking;

  // TODO 6 [form]: Buat satu state objek `formData` (nilai awal `INITIAL_FORM_DATA`)
  // dan satu handler generik `handleChange(event)` untuk seluruh field form (perhatikan input checkbox).
  // Hasil yang diharapkan: semua input di form booking (teks, tanggal, dropdown, catatan, checkbox) dapat diisi dan berubah nilainya.
  const formData = INITIAL_FORM_DATA;

  // TODO 7 [form]: Buat state `errors` (nilai awal `{}`) dan lengkapi validasi pada `handleSubmit`:
  // nama wajib diisi, HP 10–13 digit (helper `isValidIndonesianPhone`), tanggal masuk wajib dan tidak lampau (helper `isPastDate`), serta persetujuan wajib dicentang.
  // Jika semua valid, panggil `onSubmitBooking` dengan data booking baru.
  // Hasil yang diharapkan: submit form bermasalah menampilkan pesan error merah di bawah tiap field terkait; submit form valid menyimpan booking dan membuka Riwayat Booking.
  const errors = {};

  // TODO 12 [useRef]: Buat ref untuk field `fullName`, `phone`, `checkInDate`, dan `agreed` lalu kumpulkan dalam objek `fieldRefs`.
  // Fokuskan input `fullName` saat halaman booking dibuka, dan pindahkan fokus ke field error pertama saat validasi submit gagal.
  // Hasil yang diharapkan: membuka halaman booking langsung menaruh kursor di input Nama Lengkap; submit dengan field bermasalah memindahkan fokus otomatis ke field error pertama.
  const fieldRefs = {};

  // TODO 8 [derived state]: Hitung `costSummary` dari harga bulanan kos, durasi sewa, deposit,
  // dan tarif diskon pada `DISCOUNT_RATES` (opsional: bungkus dengan `useMemo`).
  // Hasil yang diharapkan: mengubah dropdown Durasi Sewa (1/3/6/12 bulan) langsung memperbarui subtotal, diskon, dan total pembayaran di panel Ringkasan Biaya.
  const costSummary = {
    monthlyPrice: kos ? kos.price : 0,
    duration: 1,
    subtotal: 0,
    deposit: kos ? kos.deposit : 0,
    discountRate: 0,
    discountAmount: 0,
    total: 0,
  };

  if (!kos) {
    return (
      <section className="page">
        <EmptyState
          title="Belum ada kos yang dipilih"
          description="Pilih kamar kos terlebih dahulu sebelum mengisi formulir pemesanan."
          actionLabel="Kembali ke Daftar Kos"
          onAction={onBack}
        />
      </section>
    );
  }

  const handleChange = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="page">
      <div className="page-nav-back">
        <button type="button" className="btn btn-ghost btn-sm" onClick={onBack}>
          ← Kembali ke Detail Kos
        </button>
      </div>

      <div className="page-header-simple">
        <h1 className="page-title">Formulir Booking Kos</h1>
        <p className="page-subtitle">
          Lengkapi data penyewa untuk memesan kamar di{' '}
          <strong>{kos.name}</strong>.
        </p>
      </div>

      <div className="booking-layout">
        <BookingForm
          formData={formData}
          errors={errors}
          fieldRefs={fieldRefs}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={onBack}
        />

        <CostSummary kos={kos} costSummary={costSummary} />
      </div>
    </section>
  );
}
