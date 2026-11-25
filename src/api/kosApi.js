// Ubah nilai flag ini menjadi `true` untuk menguji tampilan ErrorState dan tombol "Coba lagi".
export const SIMULATE_ERROR = false;

const NETWORK_DELAY_MS = 800;

/**
 * Data contoh terbatas (4 kos) yang dipakai sementara pada starter code
 * sebelum mahasiswa mengerjakan TODO 5 (fetch data asli dari public/data/kos.json).
 */
export const PREVIEW_KOS = [
  {
    id: 'kos-01',
    name: 'Kos Griya Merapi Putra',
    type: 'putra',
    area: 'Pogung, Sleman',
    address: 'Jl. Pogung Baru Blok C No. 14, Sinduadi, Mlati, Sleman',
    distanceToCampus: '5 menit ke UGM',
    price: 850000,
    deposit: 300000,
    roomSize: '3 x 3,5 m',
    availableRooms: 3,
    rating: 4.7,
    ownerName: 'Pak Hendro Wijaya',
    description:
      'Kos tenang di lingkungan mahasiswa Pogung dengan sirkulasi udara baik dan akses mudah ke warung makan serta fotokopi. Cocok untuk mahasiswa yang mengutamakan suasana belajar kondusif.',
    facilities: [
      'Wi-Fi',
      'Kamar Mandi Dalam',
      'Kasur & Lemari',
      'Meja Belajar',
      'Parkir Motor',
      'Dapur Bersama',
    ],
    rules: [
      'Jam bertamu maksimal pukul 22.00 WIB',
      'Dilarang membawa tamu lawan jenis ke dalam kamar',
      'Menjaga ketenangan setelah pukul 23.00 WIB',
      'Listrik sudah termasuk untuk pemakaian wajar',
    ],
    illustration: {
      variant: 'pavilion',
      accentColor: '#0F6E56',
      secondaryColor: '#D5EDE5',
    },
  },
  {
    id: 'kos-02',
    name: 'Kos Kirana Residence Putri',
    type: 'putri',
    area: 'Seturan, Sleman',
    address: 'Jl. Seturan Raya Gg. Kenanga No. 8, Caturtunggal, Depok, Sleman',
    distanceToCampus: '4 menit ke UPN & YKPN',
    price: 1450000,
    deposit: 500000,
    roomSize: '3,5 x 4 m',
    availableRooms: 2,
    rating: 4.9,
    ownerName: 'Ibu Ratna Kusuma',
    description:
      'Hunian putri modern dengan pencahayaan alami maksimal, halaman belakang rindang, dan pengawasan CCTV 24 jam. Dekat minimarket, kafe belajar, dan halte Trans Jogja.',
    facilities: [
      'Wi-Fi',
      'AC',
      'Kamar Mandi Dalam',
      'Water Heater',
      'Kasur & Lemari',
      'Meja Belajar',
      'CCTV 24 Jam',
      'Kulkas Bersama',
    ],
    rules: [
      'Khusus mahasiswi atau karyawati',
      'Akses gerbang menggunakan kartu pintar',
      'Tamu pria hanya diperbolehkan di ruang tamu',
      'Dilarang memelihara hewan peliharaan',
    ],
    illustration: {
      variant: 'studio',
      accentColor: '#9D3A64',
      secondaryColor: '#F8E1EC',
    },
  },
  {
    id: 'kos-03',
    name: 'Kos Omah Teduh Campur',
    type: 'campur',
    area: 'Demangan, Sleman',
    address: 'Jl. Demangan Baru No. 27, Caturtunggal, Depok, Sleman',
    distanceToCampus: '6 menit ke Sanata Dharma & UNY',
    price: 1850000,
    deposit: 500000,
    roomSize: '4 x 4 m',
    availableRooms: 2,
    rating: 4.8,
    ownerName: 'Pak Bimo Santoso',
    description:
      'Kos bernuansa tropis minimalis dengan balkon pribadi di setiap kamar dan area komunal untuk diskusi kelompok. Lantai putra dan putri dipisah secara rapi.',
    facilities: [
      'Wi-Fi',
      'AC',
      'Kamar Mandi Dalam',
      'Water Heater',
      'Kasur & Lemari',
      'Balkon Pribadi',
      'CCTV 24 Jam',
      'Parkir Motor',
      'Parkir Mobil',
    ],
    rules: [
      'Wajib lapor identitas ke pengelola saat check-in',
      'Tamu menginap wajib izin tertulis dari pengelola',
      'Dilarang merokok di dalam kamar',
      'Menjaga kebersihan area komunal bersama',
    ],
    illustration: {
      variant: 'courtyard',
      accentColor: '#5B3EA8',
      secondaryColor: '#ECE6FA',
    },
  },
  {
    id: 'kos-04',
    name: 'Kos Sinar Fajar Ekonomis',
    type: 'putra',
    area: 'Karangmalang, Sleman',
    address: 'Jl. Karangmalang Blok A No. 5, Caturtunggal, Depok, Sleman',
    distanceToCampus: '3 menit jalan kaki ke UNY',
    price: 550000,
    deposit: 200000,
    roomSize: '3 x 3 m',
    availableRooms: 4,
    rating: 4.4,
    ownerName: 'Pak Slamet Raharjo',
    description:
      'Pilihan hemat untuk mahasiswa baru dengan lokasi sangat dekat kampus UNY dan banyak warung makan terjangkau. Lingkungan kekeluargaan dan pemilik tinggal di sebelah bangunan kos.',
    facilities: [
      'Wi-Fi',
      'Kasur & Lemari',
      'Parkir Motor',
      'Dapur Bersama',
      'Jemuran Luas',
    ],
    rules: [
      'Kamar mandi luar dibersihkan rutin tiap pagi',
      'Jam malam gerbang pukul 23.00 WIB (tersedia kunci duplikat)',
      'Dilarang memasak dengan kompor gas di dalam kamar',
    ],
    illustration: {
      variant: 'joglo',
      accentColor: '#B46A1A',
      secondaryColor: '#FBF0DE',
    },
  },
];

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Mengambil daftar kos dari public/data/kos.json dengan jeda buatan 800 ms
 * agar state loading terlihat jelas saat praktikum.
 */
export async function fetchKosList(options = {}) {
  const shouldSimulateError =
    options.simulateError !== undefined ? options.simulateError : SIMULATE_ERROR;

  await wait(NETWORK_DELAY_MS);

  if (shouldSimulateError) {
    throw new Error(
      'Gagal mengambil data kos dari server. Periksa koneksi Anda lalu coba lagi.'
    );
  }

  const response = await fetch('/data/kos.json');
  if (!response.ok) {
    throw new Error(`Terjadi kesalahan saat memuat data kos (HTTP ${response.status}).`);
  }

  const data = await response.json();
  return data;
}
