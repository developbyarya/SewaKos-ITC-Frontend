import { DURATION_OPTIONS, PAYMENT_METHODS } from '../utils/pricing';

export default function BookingForm({
  formData,
  errors,
  fieldRefs = {},
  onChange,
  onSubmit,
  onCancel,
}) {
  return (
    <form className="booking-form" onSubmit={onSubmit} noValidate>
      <div className="form-section">
        <h2 className="form-section-title">Data Penyewa</h2>

        <div className="form-field">
          <label htmlFor="fullName" className="form-label">
            Nama Lengkap <span className="required-mark">*</span>
          </label>
          <input
            ref={fieldRefs.fullName}
            id="fullName"
            name="fullName"
            type="text"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            placeholder="Contoh: Arya Pratama"
            value={formData.fullName}
            onChange={onChange}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="form-error" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="phone" className="form-label">
            Nomor HP / WhatsApp <span className="required-mark">*</span>
          </label>
          <input
            ref={fieldRefs.phone}
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            placeholder="Contoh: 081234567890"
            value={formData.phone}
            onChange={onChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
          />
          {errors.phone ? (
            <p id="phone-error" className="form-error" role="alert">
              {errors.phone}
            </p>
          ) : (
            <p id="phone-hint" className="form-hint">
              Masukkan 10–13 digit angka tanpa tanda plus.
            </p>
          )}
        </div>
      </div>

      <div className="form-section">
        <h2 className="form-section-title">Rencana Sewa</h2>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="checkInDate" className="form-label">
              Tanggal Masuk <span className="required-mark">*</span>
            </label>
            <input
              ref={fieldRefs.checkInDate}
              id="checkInDate"
              name="checkInDate"
              type="date"
              className={`form-control ${errors.checkInDate ? 'is-invalid' : ''}`}
              value={formData.checkInDate}
              onChange={onChange}
              aria-invalid={Boolean(errors.checkInDate)}
              aria-describedby={
                errors.checkInDate ? 'checkInDate-error' : undefined
              }
            />
            {errors.checkInDate && (
              <p id="checkInDate-error" className="form-error" role="alert">
                {errors.checkInDate}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="duration" className="form-label">
              Durasi Sewa
            </label>
            <select
              id="duration"
              name="duration"
              className="form-control"
              value={formData.duration}
              onChange={onChange}
            >
              {DURATION_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.badge
                    ? `${option.label} (${option.badge})`
                    : option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="paymentMethod" className="form-label">
            Metode Pembayaran
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            className="form-control"
            value={formData.paymentMethod}
            onChange={onChange}
          >
            {PAYMENT_METHODS.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="notes" className="form-label">
            Catatan untuk Pengelola (Opsional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows="3"
            className="form-control"
            placeholder="Contoh: Perkiraan tiba pukul 15.00 WIB, membawa sepeda motor."
            value={formData.notes}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="form-section">
        <div className="checkbox-field">
          <input
            ref={fieldRefs.agreed}
            id="agreed"
            name="agreed"
            type="checkbox"
            className="checkbox-input"
            checked={formData.agreed}
            onChange={onChange}
            aria-invalid={Boolean(errors.agreed)}
            aria-describedby={errors.agreed ? 'agreed-error' : undefined}
          />
          <label htmlFor="agreed" className="checkbox-label">
            Saya telah membaca tata tertib kos dan menyetujui ketentuan pemesanan
            serta deposit keamanan.
          </label>
        </div>
        {errors.agreed && (
          <p id="agreed-error" className="form-error" role="alert">
            {errors.agreed}
          </p>
        )}
      </div>

      <div className="form-actions">
        <button type="button" className="btn btn-ghost" onClick={onCancel}>
          Batal
        </button>
        <button type="submit" className="btn btn-primary">
          Konfirmasi Booking
        </button>
      </div>
    </form>
  );
}
