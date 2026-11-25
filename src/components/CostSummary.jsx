import KosIllustration from './KosIllustration';
import { formatRupiah, getKosTypeLabel } from '../utils/format';

export default function CostSummary({ kos, costSummary }) {
  const discountPercent = Math.round((costSummary.discountRate || 0) * 100);

  return (
    <aside className="cost-summary" aria-label="Ringkasan biaya sewa">
      <div className="cost-summary-header">
        <div className="cost-summary-thumb">
          <KosIllustration
            illustration={kos.illustration}
            area={kos.area}
            size="mini"
          />
        </div>
        <div>
          <span className={`type-badge type-badge--${kos.type}`}>
            {getKosTypeLabel(kos.type)}
          </span>
          <h3 className="cost-summary-name">{kos.name}</h3>
          <p className="cost-summary-area">{kos.area}</p>
        </div>
      </div>

      <hr className="divider" />

      <h4 className="cost-summary-title">Ringkasan Biaya</h4>

      <dl className="cost-list">
        <div className="cost-row">
          <dt>
            Sewa ({formatRupiah(costSummary.monthlyPrice)} × {costSummary.duration}{' '}
            bln)
          </dt>
          <dd>{formatRupiah(costSummary.subtotal)}</dd>
        </div>

        <div className="cost-row">
          <dt>Deposit Keamanan (dikembalikan)</dt>
          <dd>{formatRupiah(costSummary.deposit)}</dd>
        </div>

        <div className="cost-row cost-row--discount">
          <dt>
            Diskon Durasi {discountPercent > 0 ? `(${discountPercent}%)` : ''}
          </dt>
          <dd>
            {costSummary.discountAmount > 0
              ? `- ${formatRupiah(costSummary.discountAmount)}`
              : formatRupiah(0)}
          </dd>
        </div>
      </dl>

      <hr className="divider" />

      <div className="cost-total">
        <span>Total Pembayaran</span>
        <strong>{formatRupiah(costSummary.total)}</strong>
      </div>

      <p className="cost-note">
        Sewa minimal 3 bulan mendapat diskon 5%, 6 bulan diskon 10%, dan 12 bulan
        diskon 15%.
      </p>
    </aside>
  );
}
