export default function SearchInput({
  value,
  onChange,
  isSearching = false,
  placeholder = 'Cari nama kos, area (misal: Pogung, Seturan), atau fasilitas...',
}) {
  return (
    <div className="search-field">
      <label htmlFor="kos-search-input" className="sr-only">
        Cari kos berdasarkan nama, lokasi, atau fasilitas
      </label>

      <span className="search-icon" aria-hidden="true">
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M13.5 13.5L17.5 17.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <input
        id="kos-search-input"
        type="search"
        className="search-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />

      {isSearching && (
        <span className="search-status" role="status" aria-live="polite">
          Menyaring...
        </span>
      )}

      {value && (
        <button
          type="button"
          className="search-clear"
          onClick={() => onChange('')}
          aria-label="Hapus kata kunci pencarian"
        >
          ×
        </button>
      )}
    </div>
  );
}
