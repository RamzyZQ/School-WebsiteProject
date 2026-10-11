export const school = {
  name: "SMK Negeri 4 Kota Bekasi",
  shortName: "SMKN 4 Kota Bekasi",
  npsn: "20269981",
  address: "Jl. Gandaria, Kranggan Wetan, RT.001/RW.007, Jatirangga, Jatisampurna, Kota Bekasi 17434",
  city: "Kota Bekasi",
  email: "smknegeri4bekasi@gmail.com",
  phone: "(021) 2906 4472",
  whatsapp: "6288218904780",
  motto: "BERSATU",
  mottoFull: "Beriman, Santun, Terdepan, Unggul",
  mottoItems: [
    {
      letter: "Ber",
      word: "Beriman",
      description: "Menumbuhkan karakter religius, jujur, dan bertanggung jawab dalam setiap kegiatan belajar.",
    },
    {
      letter: "Sa",
      word: "Santun",
      description: "Membiasakan tata krama, menghargai perbedaan, dan menjaga keharmonisan warga sekolah.",
    },
    {
      letter: "T",
      word: "Terdepan",
      description: "Mendorong inovasi, penguasaan teknologi, dan daya saing lulusan di dunia kerja.",
    },
    {
      letter: "U",
      word: "Unggul",
      description: "Mengutamakan mutu pembelajaran, prestasi, dan layanan pendidikan yang terukur.",
    },
  ],
  greeting: {
    role: "Kepala Sekolah",
    name: "Elvi Desilia Fajarina, S.Pd., M.M.",
    message: "Selamat datang di SMK Negeri 4 Kota Bekasi. Kami berkomitmen menyiapkan generasi terampil yang beriman, santun, dan siap bersaing di dunia industri. Melalui pembelajaran berbasis praktik, kerja sama dengan dunia usaha, serta budaya BERSATU, setiap siswa didorong untuk unggul dalam kompetensi sekaligus berkarakter.",
  },
  history: "SMK Negeri 4 Kota Bekasi awalnya merupakan sekolah filial dari SMK Negeri 1 Kota Bekasi pada tahun pelajaran 2008/2009. Sekolah ini kemudian resmi berdiri mandiri pada 31 Desember 2010 berdasarkan Keputusan Wali Kota Bekasi No. 421/Kep.695-Disdik/III/2010. Berfokus pada pemenuhan standar industri di bidang teknologi, otomotif, dan media, SMKN 4 terus memperkuat fasilitas dan kemitraan. Hal ini dibuktikan dengan capaian persentase kelulusan 100% pada tahun pelajaran 2023/2024 serta kesiapan lulusan untuk langsung terjun ke dunia kerja atau melanjutkan pendidikan tinggi.",
  vision: "Menjadi SMK unggul, berkarakter, dan berdaya saing yang menghasilkan lulusan kompeten, berakhlak mulia, serta mampu beradaptasi dengan perkembangan industri dan teknologi.",
  missions: [
    "Menyelenggarakan pendidikan kejuruan yang berlandaskan iman, santun, dan profesionalitas.",
    "Mengembangkan kompetensi siswa sesuai kebutuhan dunia usaha dan dunia industri.",
    "Meningkatkan mutu guru, sarana praktik, dan tata kelola sekolah yang akuntabel.",
    "Membangun kemitraan strategis untuk magang, sertifikasi, dan penempatan kerja.",
    "Menumbuhkan budaya prestasi, kewirausahaan, dan kepedulian terhadap lingkungan.",
  ],
  majors: [
    {
      id: "tjkt",
      name: "Teknik Jaringan Komputer dan Telekomunikasi",
      shortName: "TJKT",
      description: "Membekali siswa merancang, merawat, dan mengamankan jaringan komputer, layanan infrastruktur digital, hingga teknologi telekomunikasi industri.",
    },
    {
      id: "tbsm",
      name: "Teknik dan Bisnis Sepeda Motor",
      shortName: "TBSM",
      description: "Mengembangkan keahlian servis, diagnosis kelistrikan, dan pengelolaan bengkel sepeda motor sesuai standar industri otomotif mutakhir.",
    },
    {
      id: "pspt",
      name: "Produksi dan Siaran Program Televisi",
      shortName: "PSPT",
      description: "Melatih produksi program televisi, manajemen kamera, editing, dan penyiaran agar siswa siap berkarya di industri media pertelevisian.",
    },
    {
      id: "pf",
      name: "Produksi Film",
      shortName: "PROFIL",
      description: "Mendalami sinematografi, penyuntingan video, penyutradaraan, dan penulisan naskah untuk menghasilkan tenaga ahli di industri konten kreatif.",
    },
  ],
};

export function getWhatsAppUrl(message) {
  return `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const newsList = [
  {
    id: "1",
    title: "SMKN 4 Kota Bekasi Gelar Job Fair Industri 2026",
    date: "12 September 2026",
    excerpt:
      "Puluhan mitra industri hadir menawarkan lowongan magang dan kerja bagi siswa tingkat akhir.",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    content:
      "SMK Negeri 4 Kota Bekasi menyelenggarakan Job Fair Industri 2026 di aula sekolah. Kegiatan ini mempertemukan siswa kelas XII dengan perwakilan perusahaan di bidang jaringan, otomotif, dan media. Selain wawancara on the spot, siswa juga mengikuti sesi penyusunan CV dan simulasi wawancara. Kepala sekolah menekankan bahwa job fair merupakan bagian dari komitmen sekolah menyalurkan lulusan ke dunia kerja. Beberapa mitra menjanjikan program magang berbayar yang dapat berlanjut menjadi ikatan kerja setelah kelulusan.",
  },
  {
    id: "2",
    title: "Siswa TKJ Juara Kompetisi Jaringan Tingkat Kota",
    date: "28 Agustus 2026",
    excerpt:
      "Tim Teknik Komputer Jaringan meraih juara pertama pada lomba konfigurasi jaringan se-Kota Bekasi.",
    imageUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80",
    content:
      "Tim TKJ SMKN 4 Kota Bekasi menjuarai kompetisi konfigurasi jaringan tingkat kota. Lomba mencakup perancangan topologi, pengaturan VLAN, serta troubleshooting dalam batas waktu tertentu. Para siswa menunjukkan ketelitian dan kerja sama yang rapi. Prestasi ini menjadi bukti bahwa pembelajaran praktik di laboratorium jaringan berjalan efektif. Sekolah merencanakan pembinaan intensif menuju kompetisi tingkat provinsi pada semester depan.",
  },
  {
    id: "3",
    title: "Bengkel TBSM Rampungkan Servis Motor Warga Sekitar",
    date: "10 Agustus 2026",
    excerpt:
      "Program pengabdian masyarakat jurusan TBSM membuka layanan servis sepeda motor bersubsidi.",
    imageUrl:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80",
    content:
      "Jurusan Teknik dan Bisnis Sepeda Motor menggelar servis motor murah bagi warga Jatirangga dan Kranggan Wetan. Siswa praktik mengganti oli, menyetel rem, dan memeriksa kelistrikan di bawah pengawasan guru produktif. Warga mengapresiasi layanan yang ramah dan transparan. Kegiatan ini melatih etos kerja sekaligus memperkuat hubungan sekolah dengan masyarakat. Hasil praktik kemudian dibahas di kelas sebagai bahan evaluasi kompetensi.",
  },
  {
    id: "4",
    title: "Studio Broadcasting Produksi Program Dokumenter Sekolah",
    date: "22 Juli 2026",
    excerpt:
      "Siswa broadcasting merilis dokumenter singkat tentang budaya BERSATU di lingkungan sekolah.",
    imageUrl:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80",
    content:
      "Siswa program keahlian Teknik Produksi dan Penyiaran Program Pertelevisian merilis dokumenter berjudul Jejak BERSATU. Produksi dikerjakan dari riset, pengambilan gambar, hingga penyuntingan di studio sekolah. Guru pembimbing menilai kualitas narasi dan komposisi gambar sudah mendekati standar industri lokal. Dokumenter tersebut ditayangkan pada upacara senin dan akan diunggah di kanal resmi sekolah. Proyek ini menjadi portofolio penting bagi siswa yang ingin magang di rumah produksi.",
  },
  {
    id: "5",
    title: "Kunjungan Industri ke Stasiun Televisi dan Data Center",
    date: "5 Juli 2026",
    excerpt:
      "Rombongan siswa jurusan Broadcasting dan TKJ belajar langsung di tempat kerja profesional.",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    content:
      "SMKN 4 Kota Bekasi membawa siswa Broadcasting dan TKJ berkunjung ke stasiun televisi serta pusat data mitra industri. Siswa melihat alur produksi siaran, ruang master control, dan prosedur keamanan jaringan. Diskusi dengan praktisi membantu siswa memetakan kompetensi yang masih perlu ditingkatkan. Kunjungan ditutup dengan penandatanganan niat kerja sama magang semester ganjil. Sekolah berharap pengalaman lapangan ini memperkaya pembelajaran di kelas dan bengkel.",
  },
  {
    id: "6",
    title: "Peringatan Hari Pendidikan Nasional dengan Tema BERSATU",
    date: "2 Mei 2026",
    excerpt:
      "Seluruh warga sekolah merayakan Hardiknas melalui apel, pameran karya, dan pentas seni.",
    imageUrl:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=80",
    content:
      "Peringatan Hari Pendidikan Nasional di SMKN 4 Kota Bekasi mengangkat tema BERSATU: Beriman, Santun, Terdepan, Unggul. Acara dimulai dengan apel pagi, dilanjutkan pameran karya siswa dari tiga jurusan, dan ditutup pentas seni. Orang tua dan mitra industri diundang melihat hasil praktik siswa. Momentum ini menegaskan bahwa prestasi akademik dan karakter berjalan beriringan. Panitia siswa dinilai mampu mengelola acara secara tertib dan mandiri.",
  },
];

export const galleryItems = [
  {
    title: "Kunjungan industri",
    category: "Pengalaman industri",
    imageUrl: "/Kunjungan-industri.png",
    alt: "Siswa SMKN 4 Kota Bekasi dalam kegiatan kunjungan industri",
  },
  {
    title: "Praktik teknologi komputer",
    category: "Pembelajaran",
    imageUrl: "/Lab-Komputer.png",
    alt: "Siswa mengikuti kegiatan praktik komputer",
  },
  {
    title: "Belajar di laboratorium",
    category: "Pembelajaran",
    imageUrl: "/Laboratorium.png",
    alt: "Siswa dan guru mengikuti kegiatan belajar di laboratorium",
  },
  {
    title: "Upacara dan kebersamaan",
    category: "Keseharian",
    imageUrl: "/Lapangan.png",
    alt: "Siswa berbaris mengikuti kegiatan sekolah di lapangan",
  },
  {
    title: "Aktivitas di lapangan sekolah",
    category: "Kegiatan sekolah",
    imageUrl: "/LapanganB.png",
    alt: "Siswa mengikuti kegiatan bersama di lapangan sekolah",
  },
  {
    title: "Produksi dan penyuntingan",
    category: "Karya siswa",
    imageUrl: "/Studio-Editing.png",
    alt: "Siswa belajar menggunakan komputer di studio editing",
  },
  {
    title: "Berbagi ilmu otomotif",
    category: "Teknik otomotif",
    imageUrl: "/tbsm.png",
    alt: "Siswa mengikuti kegiatan pembelajaran otomotif",
  },
  {
    title: "Praktik bengkel TBSM",
    category: "Praktik",
    imageUrl: "/tbsm1.png",
    alt: "Siswa belajar praktik sepeda motor di bengkel sekolah",
  },
];

export const teacherProfiles = [
  {
    name: "Nadia Pratama, S.Kom.",
    subject: "Teknik Komputer dan Jaringan",
    focus: "Jaringan & keamanan digital",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Bima Saputra, S.T.",
    subject: "Teknik dan Bisnis Sepeda Motor",
    focus: "Teknologi otomotif",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Dewi Lestari, S.Sn.",
    subject: "Produksi dan Siaran Program Televisi",
    focus: "Produksi media & penyiaran",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Rizky Ramadhan, M.Pd.",
    subject: "Produksi Film",
    focus: "Sinematografi & penceritaan",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
  },
];

export const achievementItems = [
  {
    year: "2025",
    title: "Kompetisi Keterampilan Jaringan",
    level: "Bidang teknologi",
    description: "Simulasi capaian siswa di bidang administrasi jaringan dan troubleshooting.",
    icon: "01",
  },
  {
    year: "2024",
    title: "Festival Film Pelajar",
    level: "Bidang kreativitas",
    description: "Simulasi pengakuan untuk karya film pendek dan kemampuan bercerita visual.",
    icon: "02",
  },
  {
    year: "2024",
    title: "Kompetisi Layanan Otomotif",
    level: "Bidang vokasi",
    description: "Simulasi penghargaan atas ketelitian diagnosis dan praktik servis kendaraan.",
    icon: "03",
  },
];

export const facilityItems = [
  {
    name: "Gedung Utama (27 Kelas)",
    detail: "Bangunan 3 lantai yang mencakup 27 ruang kelas belajar dengan fasilitas CCTV dan cakupan akses hotspot area.",
    imageUrl: "/tampak-depan.jpg",
    tag: "Infrastruktur",
  },
  {
    name: "Laboratorium Praktik TJKT & PSPT",
    detail: "Ruang praktik khusus jurusan ber-AC untuk mengembangkan keterampilan jaringan, sistem, dan penyiaran televisi.",
    imageUrl: "/Laboratorium.png",
    tag: "Teknologi",
  },
  {
    name: "Bengkel & Lab Kelistrikan TBSM",
    detail: "Area khusus untuk membongkar, mendiagnosis, dan merakit mesin serta kelistrikan kendaraan roda dua.",
    imageUrl: "/tbsm1.png",
    tag: "Praktik",
  },
  {
    name: "Kompleks Olahraga",
    detail: "Tiga area lapangan terbuka yang terdiri dari Lapangan Utama, Lapangan Olahraga, dan Lapangan Futsal terintegrasi.",
    imageUrl: "/LapanganB.png",
    tag: "Aktivitas",
  },
  {
    name: "Studio Editing",
    detail: "Ruang praktik untuk melatih penyuntingan video dan pengolahan karya audiovisual.",
    imageUrl: "/Studio-Editing.png",
    tag: "Produksi Media",
  },
];

export const extracurricularItems = [
  { name: "Pramuka", category: "Wajib", detail: "Membangun kepemimpinan, kemandirian, dan karakter kebangsaan.", icon: "01" },
  { name: "Futsal & Sepak Bola", category: "Olahraga", detail: "Pembinaan fisik, strategi, dan kerja sama tim di lapangan hijau.", icon: "02" },
  { name: "Paskibraka", category: "Kedisiplinan", detail: "Pelatihan baris-berbaris dan tanggung jawab pengibaran bendera.", icon: "03" },
  { name: "Programmer", category: "Teknologi", detail: "Eksplorasi bahasa pemrograman, algoritma, dan rekayasa perangkat lunak.", icon: "04" },
  { name: "Rohis", category: "Keagamaan", detail: "Pendalaman kerohanian Islam dan pembentukan akhlak mulia siswa.", icon: "05" },
  { name: "PMR", category: "Kesehatan", detail: "Pelatihan pertolongan pertama medis dan aksi kemanusiaan di sekolah.", icon: "06" },
  { name: "Pencak Silat & Taekwondo", category: "Bela Diri", detail: "Pelatihan ketangkasan fisik, pertahanan diri, dan kedisiplinan mental.", icon: "07" },
  { name: "Basket", category: "Olahraga", detail: "Mengasah ketangkasan, akurasi, dan kekompakan tim bola basket.", icon: "08" },
];

export function getNewsById(id) {
  return newsList.find((item) => item.id === String(id));
}
