export default function FilterBar({
  filters,
  onFilterChange,
  onReset,
  hasActiveFilters,
}) {
  return (
    <section className="filter-bar" aria-label="Filter dan urutkan daftar kos">
      <div className="filter-grid">
        <div className="filter-group">
          <label htmlFor="filter-type" className="filter-label">
            Tipe Kos
          </label>
          <select
            id="filter-type"
            className="filter-control"
            value={filters.type}
            onChange={(event) => onFilterChange('type', event.target.value)}
          >
            <option value="all">Semua Tipe</option>
            <option value="putra">Putra</option>
            <option value="putri">Putri</option>
            <option value="campur">Campur</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filter-min-price" className="filter-label">
            Harga Minimal (Rp)
          </label>
          <input
            id="filter-min-price"
            type="number"
            min="0"
            step="50000"
            className="filter-control"
            placeholder="Contoh: 500000"
            value={filters.minPrice}
            onChange={(event) => onFilterChange('minPrice', event.target.value)}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filter-max-price" className="filter-label">
            Harga Maksimal (Rp)
          </label>
          <input
            id="filter-max-price"
            type="number"
            min="0"
            step="50000"
            className="filter-control"
            placeholder="Contoh: 2000000"
            value={filters.maxPrice}
            onChange={(event) => onFilterChange('maxPrice', event.target.value)}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filter-sort" className="filter-label">
            Urutkan Harga
          </label>
          <select
            id="filter-sort"
            className="filter-control"
            value={filters.sortBy}
            onChange={(event) => onFilterChange('sortBy', event.target.value)}
          >
            <option value="default">Rekomendasi</option>
            <option value="price-asc">Termurah ke Termahal</option>
            <option value="price-desc">Termahal ke Termurah</option>
          </select>
        </div>
      </div>

      <div className="filter-actions">
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={onReset}
          disabled={!hasActiveFilters}
        >
          Reset Filter
        </button>
      </div>
    </section>
  );
}
