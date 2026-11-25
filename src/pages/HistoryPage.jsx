import EmptyState from '../components/EmptyState';
import {
  formatDate,
  formatDateTime,
  formatRupiah,
  getKosTypeLabel,
} from '../utils/format';

export default function HistoryPage({ bookings, onSelectKos, onExplore }) {
  return (
    <section className="page">
      <div className="page-header-simple">
        <h1 className="page-title">Riwayat Booking</h1>
        <p className="page-subtitle">
          {bookings.length > 0
            ? `Terdapat ${bookings.length} pemesanan kamar yang tercatat.`
            : 'Semua pemesanan kos yang berhasil kamu buat akan muncul di sini.'}
        </p>
      </div>

      {bookings.length === 0 ? (
        <EmptyState
          title="Belum ada riwayat booking"
          description="Pilih kos yang sesuai kebutuhanmu lalu selesaikan formulir booking untuk mencatat pesanan."
          actionLabel="Cari Kos Sekarang"
          onAction={onExplore}
        />
      ) : (
        <div className="history-list">
          {bookings.map((booking) => (
            <article key={booking.id} className="history-card">
              <div className="history-card-top">
                <div>
                  <div className="history-meta-row">
                    <span className="booking-code">{booking.id}</span>
                    <span className={`type-badge type-badge--${booking.kosType}`}>
                      {getKosTypeLabel(booking.kosType)}
                    </span>
                    <span className="status-pill">Terkonfirmasi</span>
                  </div>
                  <h2 className="history-kos-name">
                    <button
                      type="button"
                      className="kos-card-title-btn"
                      onClick={() => onSelectKos(booking.kosId)}
                    >
                      {booking.kosName}
                    </button>
                  </h2>
                  <p className="history-kos-area">{booking.kosArea}</p>
                </div>

                <div className="history-total">
                  <span className="history-total-label">Total Pembayaran</span>
                  <strong className="history-total-value">
                    {formatRupiah(booking.costSummary.total)}
                  </strong>
                  <span className="history-timestamp">
                    Dibuat {formatDateTime(booking.createdAt)}
                  </span>
                </div>
              </div>

              <hr className="divider" />

              <dl className="history-details">
                <div>
                  <dt>Penyewa</dt>
                  <dd>{booking.fullName}</dd>
                </div>
                <div>
                  <dt>Nomor HP</dt>
                  <dd>{booking.phone}</dd>
                </div>
                <div>
                  <dt>Tanggal Masuk</dt>
                  <dd>{formatDate(booking.checkInDate)}</dd>
                </div>
                <div>
                  <dt>Durasi Sewa</dt>
                  <dd>{booking.duration} Bulan</dd>
                </div>
                <div>
                  <dt>Metode Bayar</dt>
                  <dd>{booking.paymentMethod}</dd>
                </div>
                {booking.notes && (
                  <div className="history-notes">
                    <dt>Catatan</dt>
                    <dd>{booking.notes}</dd>
                  </div>
                )}
              </dl>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
