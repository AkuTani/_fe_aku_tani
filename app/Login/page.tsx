import Image from "next/image";
import { ArrowRight, KeyRound, LockKeyhole, MapPin, MessagesSquare, ScanLine, Zap } from "lucide-react";

export default function Login() {
  return (
    <main className="min-h-screen bg-[#F5F5F3] flex items-center justify-center p-6">
      <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <section>
          <span className="inline-flex items-center gap-2 rounded-full border border-black px-4 py-1.5 text-[10px] font-semibold uppercase">
            <Zap size={14} /> Portal Petani Cerdas
          </span>

          <h1 className="mt-8 text-4xl font-semibold leading-snug">
            Tanam <span className="text-[#4B6B00]">tepat waktu</span>, panen hebat, tanaman sehat.
          </h1>
          <p className="mt-4 max-w-md text-sm">
            Foto daun untuk deteksi hama, dapatkan rekomendasi waktu tanam dari prakiraan cuaca BMKG,
            dan cari info tanaman dalam satu sentuhan.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border-t-4 border-[#4B6B00] bg-white p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E4F0C8] text-[#4B6B00]">
                <ScanLine />
              </div>
              <h3 className="mt-4 text-sm font-medium">Deteksi Hama AI Instan</h3>
              <p className="mt-2 text-xs text-gray-700">
                Identifikasi Hawar Daun Bakteri (Xanthomonas) dan Blas Padi seketika melalui kamera smartphone.
              </p>
            </div>

            <div className="rounded-2xl border-t-4 border-[#FFE45C] bg-white p-4">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0A0] text-2xl text-[#E6B800]">
                  C
                </div>
                <span className="flex items-center gap-1 text-[10px] text-[#4B6B00]">
                  <MapPin size={12} /> Tangerang Selatan
                </span>
              </div>
              <h3 className="mt-4 text-sm font-medium">Telemetri Mikroklimat</h3>
              <p className="mt-2 text-xs text-gray-700">
                Pantau suhu, kelembapan, dan kecepatan angin di lokasi lahanmu secara berkala dari data BMKG.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4 rounded-2xl bg-white p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C8F7DC]">
              <MessagesSquare />
            </div>
            <div>
              <h3 className="text-sm font-medium">Konsultasi dengan Tani AI</h3>
              <p className="mt-1 text-xs text-gray-700">
                Tanyakan apa saja seputar hama, perawatan, dan waktu tanam, lalu dapatkan jawaban langsung lewat chat.
              </p>
            </div>
          </div>
        </section>

        <section className="flex min-h-[640px] flex-col items-center rounded-3xl bg-white p-8 sm:p-12">
          <Image src="/logo.png" alt="Aku Tani" width={100} height={60} />

          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E4F0C8] px-4 py-1.5 text-[10px] font-semibold uppercase text-[#4B6B00]">
            <LockKeyhole size={14} /> Akses Portal Petani
          </span>

          <h2 className="mt-6 text-2xl font-semibold">Selamat datang kembali</h2>
          <p className="mt-2 max-w-xs text-center text-sm">
            Masuk untuk memantau diagnosa AI, dan waktu tanam yang ideal.
          </p>

          <form className="mt-8 flex w-full flex-1 flex-col">
            <label className="text-sm font-medium">Email / Username</label>
            <input
              type="text"
              placeholder="Masukan Alamat Email anda"
              className="mt-2 w-full rounded-lg bg-[#E4F0C8] px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#4B6B00]"
            />

            <label className="mt-5 text-sm font-medium">Kata Sandi</label>
            <div className="relative mt-2">
              <KeyRound size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                placeholder="Masukkan kata sandi anda"
                className="w-full rounded-lg bg-[#E4F0C8] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#4B6B00]"
              />
            </div>
            <a href="#" className="mt-2 self-end text-xs font-semibold text-[#4B6B00]">
              Lupa kata sandi?
            </a>

            <button
              type="submit"
              className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-[#4B6B00] py-3 text-sm font-medium text-white hover:bg-[#3d5700]"
            >
              Masuk ke Aku Tani <ArrowRight size={18} />
            </button>
            <p className="mt-4 text-center text-sm text-[#4B6B00]">
              Belum punya akun petani? <a href="#" className="font-bold">Daftar Sekarang</a>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}