export default function Navbar({
  activePage,
  favoritesCount,
  bookingsCount,
  onNavigate,
}) {
  const isListActive =
    activePage === 'list' || activePage === 'detail' || activePage === 'booking';

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <button
          type="button"
          className="brand"
          onClick={() => onNavigate('list')}
          aria-label="Kembali ke beranda Sewa Kos Yogyakarta"
        >
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 28 28" width="22" height="22" fill="none">
              <path
                d="M3 13.5L14 4.5L25 13.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 11.5V22.5H21.5V11.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="11.5"
                y="15"
                width="5"
                height="7.5"
                rx="1"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
          <span className="brand-text">
            <span className="brand-title">KosJogja</span>
            <span className="brand-subtitle">Sewa Kos Yogyakarta</span>
          </span>
        </button>

        <nav className="nav-links" aria-label="Navigasi utama">
          <button
            type="button"
            className={`nav-link ${isListActive ? 'is-active' : ''}`}
            onClick={() => onNavigate('list')}
            aria-current={isListActive ? 'page' : undefined}
          >
            <span>Daftar Kos</span>
          </button>

          <button
            type="button"
            className={`nav-link ${activePage === 'favorites' ? 'is-active' : ''}`}
            onClick={() => onNavigate('favorites')}
            aria-current={activePage === 'favorites' ? 'page' : undefined}
          >
            <span>Favorit</span>
            <span className="nav-badge" aria-label={`${favoritesCount} kos favorit`}>
              {favoritesCount}
            </span>
          </button>

          <button
            type="button"
            className={`nav-link ${activePage === 'history' ? 'is-active' : ''}`}
            onClick={() => onNavigate('history')}
            aria-current={activePage === 'history' ? 'page' : undefined}
          >
            <span>Riwayat Booking</span>
            <span className="nav-badge" aria-label={`${bookingsCount} riwayat booking`}>
              {bookingsCount}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
