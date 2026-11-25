import KosIllustration from '../components/KosIllustration';
import EmptyState from '../components/EmptyState';
import { formatRupiah, getKosTypeLabel } from '../utils/format';

export default function KosDetailPage({
  kos,
  isFavorite,
  onToggleFavorite,
  onStartBooking,
  onBack,
}) {
  if (!kos) {
    return (
      <section className="page">
        <EmptyState
          title="Detail kos tidak tersedia"
          description="Pilih salah satu kos dari daftar untuk melihat informasi lengkapnya."
          actionLabel="Kembali ke Daftar Kos"
          onAction={onBack}
        />
      </section>
    );
  }

  return (
    <section className="page">
      <div className="page-nav-back">
        <button type="button" className="btn btn-ghost btn-sm" onClick={onBack}>
          ← Kembali ke Daftar Kos
        </button>
      </div>

      <div className="detail-layout">
        <div className="detail-main">
          <div className="detail-media">
            <KosIllustration
              illustration={kos.illustration}
              area={kos.area}
              size="detail"
            />
          </div>

          <div className="detail-card">
            <div className="detail-badges">
              <span className={`type-badge type-badge--${kos.type}`}>
                Kos {getKosTypeLabel(kos.type)}
              </span>
              <span className="meta-pill">★ {kos.rating.toFixed(1)}</span>
              <span className="meta-pill">Ukuran {kos.roomSize}</span>
              <span className="meta-pill">{kos.distanceToCampus}</span>
            </div>

            <h1 className="detail-title">{kos.name}</h1>
            <p className="detail-address">{kos.address}</p>
            <p className="detail-owner">Pengelola: {kos.ownerName}</p>

            <hr className="divider" />

            <div className="detail-section">
              <h2 className="detail-section-title">Tentang Kos</h2>
              <p className="detail-description">{kos.description}</p>
            </div>

            <div className="detail-section">
              <h2 className="detail-section-title">
                Fasilitas ({kos.facilities.length})
              </h2>
              <ul className="detail-facilities">
                {kos.facilities.map((facility) => (
                  <li key={facility} className="detail-facility-item">
                    <span className="check-dot" aria-hidden="true">
                      ✓
                    </span>
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h2 className="detail-section-title">Tata Tertib Kos</h2>
              <ul className="detail-rules">
                {kos.rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <aside className="detail-sidebar" aria-label="Informasi harga dan pemesanan">
          <div className="booking-cta-card">
            <p className="cta-label">Harga Sewa</p>
            <div className="cta-price">
              <strong>{formatRupiah(kos.price)}</strong>
              <span>/ bulan</span>
            </div>

            <div className="cta-info-list">
              <div className="cta-info-row">
                <span>Deposit keamanan</span>
                <strong>{formatRupiah(kos.deposit)}</strong>
              </div>
              <div className="cta-info-row">
                <span>Ketersediaan</span>
                <strong className="availability-text">
                  Tersisa {kos.availableRooms} kamar
                </strong>
              </div>
              <div className="cta-info-row">
                <span>Diskon sewa panjang</span>
                <strong>Hingga 15%</strong>
              </div>
            </div>

            <div className="cta-actions">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => onStartBooking(kos.id)}
              >
                Pesan Sekarang
              </button>

              <button
                type="button"
                className={`btn btn-secondary btn-block ${
                  isFavorite ? 'is-favorite-action' : ''
                }`}
                onClick={() => onToggleFavorite(kos.id)}
                aria-pressed={isFavorite}
              >
                {isFavorite ? '♥ Tersimpan di Favorit' : '♡ Simpan ke Favorit'}
              </button>
            </div>

            <p className="cta-footnote">
              Deposit dikembalikan penuh saat masa sewa selesai sesuai ketentuan.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
