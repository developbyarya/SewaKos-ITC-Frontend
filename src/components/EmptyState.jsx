export default function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}) {
  return (
    <div className="state-box" role="status">
      <div className="state-icon" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="44" height="44" fill="none">
          <rect
            x="8"
            y="14"
            width="32"
            height="24"
            rx="4"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M15 14V11C15 9.3 16.3 8 18 8H30C31.7 8 33 9.3 33 11V14"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M18 26H30"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h2 className="state-title">{title}</h2>
      <p className="state-description">{description}</p>
      {actionLabel && onAction && (
        <button type="button" className="btn btn-primary" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
