import {
  LockKeyhole,
  MapPin,
  MessagesSquare,
  ScanLine,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import LoginForm from "./login-form";

export const metadata: Metadata = {
  title: "Masuk | Aku Tani",
  description: "Masuk ke portal petani Aku Tani.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F5F3] px-6 py-10 text-[#1A1A1A]">
      <div className="grid w-full max-w-[1100px] items-center gap-12 lg:grid-cols-[1fr_minmax(0,480px)]">
        <section className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/80 px-4 py-1.5 text-[10px] font-semibold tracking-wide uppercase">
            <Zap size={14} /> Portal Petani Cerdas
          </span>

          <h1 className="mt-8 text-4xl font-semibold leading-[1.2] tracking-tight sm:text-[42px]">
            Tanam <span className="text-[#4B6B00]">tepat waktu</span>, panen
            hebat, tanaman sehat.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600">
            Foto daun untuk deteksi hama, dapatkan rekomendasi waktu tanam dari
            prakiraan cuaca BMKG, dan cari info tanaman dalam satu sentuhan.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-black/5 border-t-4 border-t-[#4B6B00] bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E4F0C8] text-[#4B6B00]">
                <ScanLine size={22} />
              </div>
              <h2 className="mt-4 text-sm font-medium">Deteksi Hama AI Instan</h2>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Identifikasi Hawar Daun Bakteri (Xanthomonas) dan Blas Padi
                seketika melalui kamera smartphone.
              </p>
            </article>

            <article className="rounded-2xl border border-black/5 border-t-4 border-t-[#FFE45C] bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0A0] text-lg font-semibold text-[#E6B800]">
                  C
                </div>
                <span className="flex items-center gap-1 text-[10px] text-[#4B6B00]">
                  <MapPin size={12} /> Tangerang Selatan
                </span>
              </div>
              <h2 className="mt-4 text-sm font-medium">Telemetri Mikroklimat</h2>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Pantau suhu, kelembapan, dan kecepatan angin di lokasi lahanmu
                secara berkala dari data BMKG.
              </p>
            </article>
          </div>

          <article className="mt-4 flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C8F7DC] text-[#1F8A5B]">
              <MessagesSquare size={22} />
            </div>
            <div>
              <h2 className="text-sm font-medium">Konsultasi dengan Tani AI</h2>
              <p className="mt-1 text-xs leading-relaxed text-gray-600">
                Tanyakan apa saja seputar hama, perawatan, dan waktu tanam, lalu
                dapatkan jawaban langsung lewat chat.
              </p>
            </div>
          </article>
        </section>

        <section className="flex min-h-[680px] flex-col items-center rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:px-12">
          <Image
            src="/logo.png"
            alt="Aku Tani"
            width={220}
            height={220}
            priority
            className="h-20 w-auto object-contain"
          />

          <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#E4F0C8] px-4 py-1.5 text-[10px] font-semibold tracking-wide text-[#4B6B00] uppercase">
            <LockKeyhole size={14} /> Akses Portal Petani
          </span>

          <h2 className="mt-6 text-2xl font-semibold">Selamat datang kembali</h2>
          <p className="mt-2 max-w-xs text-center text-sm leading-relaxed text-gray-600">
            Masuk untuk memantau diagnosa AI, dan waktu tanam yang ideal.
          </p>

          <LoginForm />
        </section>
      </div>
    </main>
  );
}
