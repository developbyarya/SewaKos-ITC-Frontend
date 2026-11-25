import KosIllustration from './KosIllustration';
import { formatRupiah, getKosTypeLabel } from '../utils/format';

export default function KosCard({
  kos,
  isFavorite,
  onToggleFavorite,
  onSelect,
}) {
  const visibleFacilities = kos.facilities.slice(0, 4);
  const remainingFacilitiesCount = Math.max(0, kos.facilities.length - 4);

  return (
    <article className="kos-card">
      <div className="kos-card-media">
        <button
          type="button"
          className="kos-card-media-trigger"
          onClick={() => onSelect(kos.id)}
          aria-label={`Lihat detail ${kos.name}`}
        >
          <KosIllustration
            illustration={kos.illustration}
            area={kos.area}
            size="card"
          />
        </button>

        <span className={`type-badge type-badge--${kos.type}`}>
          {getKosTypeLabel(kos.type)}
        </span>

        <button
          type="button"
          className={`favorite-btn ${isFavorite ? 'is-favorite' : ''}`}
          onClick={() => onToggleFavorite(kos.id)}
          aria-label={
            isFavorite
              ? `Hapus ${kos.name} dari favorit`
              : `Tambahkan ${kos.name} ke favorit`
          }
          aria-pressed={isFavorite}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path
              d="M12 20.4C12 20.4 4 15.2 4 9.2C4 6.6 6 4.6 8.5 4.6C10.1 4.6 11.4 5.4 12 6.6C12.6 5.4 13.9 4.6 15.5 4.6C18 4.6 20 6.6 20 9.2C20 15.2 12 20.4 12 20.4Z"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={isFavorite ? 'currentColor' : 'none'}
            />
          </svg>
        </button>
      </div>

      <div className="kos-card-body">
        <div className="kos-card-meta">
          <span className="kos-distance">{kos.distanceToCampus}</span>
          <span className="kos-rating" aria-label={`Rating ${kos.rating} dari 5`}>
            ★ {kos.rating.toFixed(1)}
          </span>
        </div>

        <h3 className="kos-card-title">
          <button
            type="button"
            className="kos-card-title-btn"
            onClick={() => onSelect(kos.id)}
          >
            {kos.name}
          </button>
        </h3>

        <p className="kos-card-address">{kos.address}</p>

        <ul className="facility-chips" aria-label="Fasilitas utama">
          {visibleFacilities.map((facility) => (
            <li key={facility} className="facility-chip">
              {facility}
            </li>
          ))}
          {remainingFacilitiesCount > 0 && (
            <li className="facility-chip facility-chip--more">
              +{remainingFacilitiesCount} lainnya
            </li>
          )}
        </ul>

        <div className="kos-card-footer">
          <div className="kos-price">
            <span className="kos-price-value">{formatRupiah(kos.price)}</span>
            <span className="kos-price-unit">/ bulan</span>
          </div>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onSelect(kos.id)}
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </article>
  );
}
