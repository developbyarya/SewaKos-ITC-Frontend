export default function SkeletonCard() {
  return (
    <div className="kos-card skeleton-card" aria-hidden="true">
      <div className="skeleton-block skeleton-media" />
      <div className="kos-card-body">
        <div className="skeleton-row">
          <div className="skeleton-block skeleton-sm" />
          <div className="skeleton-block skeleton-xs" />
        </div>
        <div className="skeleton-block skeleton-title" />
        <div className="skeleton-block skeleton-text" />
        <div className="skeleton-chips">
          <div className="skeleton-block skeleton-chip" />
          <div className="skeleton-block skeleton-chip" />
          <div className="skeleton-block skeleton-chip" />
        </div>
        <div className="skeleton-footer">
          <div className="skeleton-block skeleton-price" />
          <div className="skeleton-block skeleton-btn" />
        </div>
      </div>
    </div>
  );
}
