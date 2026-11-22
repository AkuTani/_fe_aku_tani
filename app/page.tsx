import Link from "next/link";
import {
  ArrowRight,
  CloudSun,
  Compass,
  Droplets,
  Globe2,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Search,
  ScanLine,
  Wind,
  Zap,
} from "lucide-react";

const crops = [
  {
    name: "Kangkung",
    tag: "Mudah implementasi",
    description:
      "Kangkung (Ipomoea aquatica) adalah tumbuhan yang termasuk jenis sayur...",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=320&q=85",
    imageLabel: "Sayuran kangkung segar",
  },
  {
    name: "Cabai",
    tag: "Tahan hama",
    description:
      "Cabai adalah buah dan tumbuhan anggota genus Capsicum. Buahnya dapat digolongkan sebagai...",
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=320&q=85",
    imageLabel: "Cabai merah segar",
  },
  {
    name: "Pakcoy",
    tag: "Panen cepat",
    description:
      "Pakcoi atau bok choy merupakan jenis sayuran yang populer. Sayuran yang dikenal pula sebagai...",
    image:
      "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=320&q=85",
    imageLabel: "Pakcoy yang siap dipanen",
  },
];

const photoStyle = (image: string) => ({
  backgroundImage: `url("${image}")`,
});



export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9F6] px-4 pb-10 text-gray-900 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <nav
          aria-label="Navigasi utama"
          className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm sm:mt-6 sm:px-6"
        >
          <Link
            href="/"
            className="relative flex h-10 w-10 items-center transition-all duration-200 hover:-translate-y-0.5"
          >
            <img
              src="/logo.png"
              alt="AkuTani Logo"
              className="h-10 w-auto origin-left scale-150 object-contain"
            />
          </Link>

          <div className="order-3 flex w-full items-center justify-center gap-2 sm:order-none sm:w-auto">
            <Link
              href="/"
              aria-current="page"
              className="flex items-center gap-2 rounded-full bg-[#E4F0C2] px-4 py-2 text-sm font-medium text-[#435E19] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d9e9ae]"
            >
              <LayoutGrid aria-hidden="true" className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="#recommendations"
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-lime-300 hover:bg-lime-50"
            >
              <Search aria-hidden="true" className="h-4 w-4" />
              Cari Bibit
            </Link>
            <Link
              href="/Login"
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-lime-300 hover:bg-lime-50"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Chat dengan AI
            </Link>
          </div>

          <Link
            href="/Login"
            aria-label="Buka profil Pak John Doe"
            className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center ring-2 ring-white transition-all duration-200 hover:-translate-y-0.5"
            style={photoStyle("/friend.jpg")}
          />
        </nav>

        <header className="mb-6 mt-8 sm:mb-7 sm:mt-9">
           <p className="flex items-center gap-2 text-xs text-gray-500">
             <span className="h-1.5 w-1.5 rounded-full bg-[#7C9C3C]" />
           Pantauan cuaca aktif
         </p>
    <h1
      className="mt-1 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl"
      style={{ WebkitTextStroke: "0.2px currentColor" }}
   >
      Selamat Pagi, Pak John Doe!
    </h1>
  </header>

        <section
          aria-label="Cuaca dan fitur pertanian"
          className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5"
        >
          <article
            id="weather"
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 sm:p-5 lg:col-span-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FDE047] text-amber-900">
                  <CloudSun aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-semibold-full text-gray-900">
                    Cuaca cerah berawan
                  </h2>
                  <p className="text-sm text-gray-500">
                    Evapotranspirasi tinggi siang ini
                  </p>
                </div>
              </div>
              <p className="shrink-0 text-3xl font-semibold-full tracking-tight">
                31°
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 divide-x divide-lime-300/60 rounded-xl bg-[#EBF4D3] px-2 py-4 text-center">
              <div className="flex flex-col items-center gap-1">
                <Droplets
                  aria-hidden="true"
                  className="h-4 w-4 text-[#7C9C3C]"
                />
                <span className="text-xs text-[#6A842C]">Kelembapan</span>
                <strong className="text-base leading-5">68%</strong>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Wind aria-hidden="true" className="h-4 w-4 text-[#7C9C3C]" />
                <span className="text-xs text-[#6A842C]">Angin</span>
                <strong className="text-base leading-5">12 km/j</strong>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Globe2
                  aria-hidden="true"
                  className="h-4 w-4 text-[#7C9C3C]"
                />
                <span className="text-xs text-[#6A842C]">Negara</span>
                <strong className="text-base leading-5">IDN</strong>
              </div>
            </div>
          </article>

          <Link
            href="/Login"
            className="group relative rounded-2xl border border-gray-200 border-t-4 border-t-[#7B9633] bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5 lg:col-span-3"
          >
            <ArrowRight
              aria-hidden="true"
              className="absolute right-4 top-4 h-4 w-4 text-gray-700 transition-transform group-hover:translate-x-1"
            />
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EBF4D3] p-3 text-lime-800">
              <ScanLine aria-hidden="true" className="h-6 w-6" />
            </span>
            <h2 className="heading-bold-crisp mt-4 font-bold tracking-tight text-gray-900">
              Deteksi Hama AI Instan
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-gray-500">
              Identifikasi Hawar Daun Bakteri (Xanthomonas) dan Blas Padi
              seketika melalui kamera smartphone.
            </p>
          </Link>

          <Link
            href="#weather"
            className="group relative rounded-2xl border border-gray-200 border-t-4 border-t-amber-300 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5 lg:col-span-3"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-400">
                <span className="text-xl font-semibold">C</span>
              </span>
              <div className="flex flex-col items-end gap-2">
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 text-gray-700 transition-transform group-hover:translate-x-1"
                />
                <span className="flex items-center gap-1 text-xs text-amber-600">
                  <MapPin aria-hidden="true" className="h-3 w-3" />
                  Tangerang Selatan
                </span>
              </div>
            </div>
            <h2 className="heading-bold-crisp mt-4 font-bold tracking-tight text-gray-900">
              Telemetri Mikroklimat
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-gray-500">
              Pantau suhu, kelembapan, dan kecepatan angin di lokasi lahanmu
              secara berkala dari data BMKG.
            </p>
          </Link>
        </section>

        <section id="recommendations" className="mt-8 sm:mt-10">
          <h2 className="mb-4 flex items-center gap-2 font-semibold-full tracking-tight text-gray-800">
            <Compass aria-hidden="true" className="h-4 w-4 text-[#6A842C]" />
            Rekomendasi Tanaman Saat Ini
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {crops.map((crop) => (
              <Link
                key={crop.name}
                href="/Login"
                className="group relative flex min-w-0 items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:gap-5 sm:p-5"
              >
                <div
                  role="img"
                  aria-label={crop.imageLabel}
                  className="h-20 w-20 shrink-0 rounded-xl bg-[#EBF4D3] bg-cover bg-center sm:h-24 sm:w-24"
                  style={photoStyle(crop.image)}
                />
                <div className="min-w-0 pr-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-lime-700">
                    {crop.tag}
                  </p>
                  <h3 className="heading-bold-crisp mt-1 font-bold tracking-tight text-gray-900">
                    {crop.name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
                    {crop.description}
                  </p>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  className="absolute right-4 top-4 h-4 w-4 shrink-0 text-[#6A842C] transition-transform group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
    </section>

        <section
          aria-label="Mulai menggunakan fitur AkuTani"
          className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
        >
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#7A9632] to-[#566D1E] p-6 text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5">
            <div>
              <span className="flex w-fit items-center gap-1.5 rounded-full bg-amber-200 px-3 py-1 text-[10px]  text-amber-950">
                <Zap aria-hidden="true" className="h-3 w-3" />
                AI DIAGNOSTIK DAUN
              </span>
              <h2 className="heading-bold-crisp mt-4 text-xl font-bold tracking-tight">
                Cari Tanamanmu Sekarang
              </h2>
              <p className="mt-1 text-xs text-lime-100">
                Cari tanaman yang ingin kamu tanam sekarang, prediksi
                pertumbuhannya
              </p>
            </div>
            <Link
              href="/Login"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#FDE047] py-3 font-semibold-full tracking-tight text-gray-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              <Search aria-hidden="true" className="h-4 w-4" />
              Scan tanamanmu sekarang
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-r from-[#F9B826] via-[#FCD34D] to-[#FEF3C7] p-6 text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5">
            <div>
              <span className="flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px]  text-gray-800 shadow-sm">
                <Zap aria-hidden="true" className="h-3 w-3" />
                INTEGRATION AI CHAT
              </span>
              <h2 className="heading-bold-crisp mt-4 text-xl font-bold tracking-tight">
                Chat dengan AI sekarang
              </h2>
              <p className="mt-1 max-w-md text-xs text-gray-800">
                Tanya apa saja soal tanamanmu, mulai dari cara menanam,
                pemupukan, sampai penanganan hama. Jawaban cepat, kapan pun kamu
                butuh.
              </p>
            </div>
            <Link
              href="/Login"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 font-semibold-full tracking-tight text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Chat sekarang
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
