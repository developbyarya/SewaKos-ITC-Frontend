import { useMemo, useState } from 'react';
import SearchInput from '../components/SearchInput';
import FilterBar from '../components/FilterBar';
import KosCard from '../components/KosCard';
import SkeletonCard from '../components/SkeletonCard';
import ErrorState from '../components/ErrorState';
import EmptyState from '../components/EmptyState';
import { useDebounce } from '../hooks/useDebounce';

const INITIAL_FILTERS = {
  type: 'all',
  minPrice: '',
  maxPrice: '',
  sortBy: 'default',
};

export default function KosListPage({
  kosList,
  loading,
  error,
  favorites,
  onToggleFavorite,
  onSelectKos,
  onRetry,
}) {
  void useState;
  void useMemo;

  // TODO 2 [useState]: Buat state `searchQuery` (string kosong) dan state objek `filters`
  // dari `INITIAL_FILTERS`, lalu lengkapi `handleSearchChange`, `handleFilterChange`, dan `handleResetFilters`.
  // Hasil yang diharapkan: mengetik di kolom pencarian dan mengubah pilihan di FilterBar menampilkan nilai terbaru, serta tombol "Reset Filter" mengembalikannya ke awal.
  const searchQuery = '';
  const filters = INITIAL_FILTERS;

  const handleSearchChange = () => {};

  const handleFilterChange = () => {};

  const handleResetFilters = () => {};

  const debouncedSearch = useDebounce(searchQuery, 400);

  // TODO 4 [derived state]: Hitung `filteredKos` langsung dari `kosList`, `debouncedSearch`, dan `filters`
  // tanpa membuat state tambahan. Saring berdasarkan kata kunci, tipe kos, serta rentang harga,
  // lalu urutkan berdasarkan `sortBy` tanpa mengubah array `kosList` asli.
  // Hasil yang diharapkan: daftar kartu kos langsung tersaring dan terurut sesuai pencarian dan filter yang aktif.
  const filteredKos = kosList;

  const hasActiveFilters = Boolean(
    searchQuery.trim() ||
      filters.type !== 'all' ||
      filters.minPrice !== '' ||
      filters.maxPrice !== '' ||
      filters.sortBy !== 'default'
  );

  const isSearching = searchQuery !== debouncedSearch;

  return (
    <section className="page">
      <div className="page-hero">
        <div>
          <p className="page-eyebrow">Yogyakarta &amp; Sekitarnya</p>
          <h1 className="page-title">Cari Kos Nyaman Dekat Kampus</h1>
          <p className="page-subtitle">
            Bandingkan harga, fasilitas, dan lokasi kos putra, putri, maupun
            campur tanpa ribet.
          </p>
        </div>

        <SearchInput
          value={searchQuery}
          onChange={handleSearchChange}
          isSearching={isSearching}
        />
      </div>

      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {loading ? (
        <div className="kos-grid" aria-busy="true" aria-label="Memuat daftar kos">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : error ? (
        <ErrorState message={error} onRetry={onRetry} />
      ) : filteredKos.length === 0 ? (
        <EmptyState
          title="Tidak ada kos yang cocok"
          description="Coba ubah kata kunci pencarian atau longgarkan rentang harga dan tipe kos."
          actionLabel={hasActiveFilters ? 'Reset Semua Filter' : undefined}
          onAction={hasActiveFilters ? handleResetFilters : undefined}
        />
      ) : (
        <>
          <div className="results-bar">
            <p className="results-count" role="status" aria-live="polite">
              Menampilkan <strong>{filteredKos.length}</strong> dari{' '}
              <strong>{kosList.length}</strong> kos tersedia
            </p>
          </div>

          <div className="kos-grid">
            {filteredKos.map((kos) => (
              <KosCard
                key={kos.id}
                kos={kos}
                isFavorite={favorites.includes(kos.id)}
                onToggleFavorite={onToggleFavorite}
                onSelect={onSelectKos}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
