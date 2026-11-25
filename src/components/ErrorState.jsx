export default function ErrorState({
  message = 'Gagal memuat data kos. Silakan coba beberapa saat lagi.',
  onRetry,
}) {
  return (
    <div className="state-box state-box--error" role="alert">
      <div className="state-icon state-icon--error" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="44" height="44" fill="none">
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2" />
          <path
            d="M24 15V26"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="24" cy="32.5" r="1.6" fill="currentColor" />
        </svg>
      </div>
      <h2 className="state-title">Data Kos Tidak Dapat Dimuat</h2>
      <p className="state-description">{message}</p>
      <button type="button" className="btn btn-primary" onClick={onRetry}>
        Coba lagi
      </button>
    </div>
  );
}
