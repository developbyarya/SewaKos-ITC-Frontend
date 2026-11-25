import KosCard from '../components/KosCard';
import EmptyState from '../components/EmptyState';
import SkeletonCard from '../components/SkeletonCard';

export default function FavoritesPage({
  kosList,
  loading,
  favorites,
  onToggleFavorite,
  onSelectKos,
  onExplore,
}) {
  const favoriteKosList = kosList.filter((kos) => favorites.includes(kos.id));

  return (
    <section className="page">
      <div className="page-header-simple">
        <h1 className="page-title">Kos Favorit</h1>
        <p className="page-subtitle">
          {favoriteKosList.length > 0
            ? `Kamu menyimpan ${favoriteKosList.length} kos untuk dibandingkan nanti.`
            : 'Simpan kos incaranmu dengan menekan ikon hati pada kartu kos.'}
        </p>
      </div>

      {loading ? (
        <div className="kos-grid" aria-busy="true">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : favoriteKosList.length === 0 ? (
        <EmptyState
          title="Belum ada kos favorit"
          description="Tekan ikon hati pada daftar kos agar kamu mudah membandingkan pilihan terbaikmu."
          actionLabel="Jelajahi Daftar Kos"
          onAction={onExplore}
        />
      ) : (
        <div className="kos-grid">
          {favoriteKosList.map((kos) => (
            <KosCard
              key={kos.id}
              kos={kos}
              isFavorite={favorites.includes(kos.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectKos}
            />
          ))}
        </div>
      )}
    </section>
  );
}
