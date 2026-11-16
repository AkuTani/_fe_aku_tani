import {
  LockKeyhole,
  MessagesSquare,
  ScanLine,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
  title: "Daftar | Aku Tani",
  description: "Daftar akun portal petani Aku Tani.",
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F5F3] px-6 py-10 text-[#1A1A1A]">
      <div className="grid w-full max-w-[1100px] items-center gap-12 lg:grid-cols-[minmax(0,480px)_1fr]">
        <section className="flex min-h-[720px] flex-col rounded-[32px] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:px-10">
          <div className="flex items-center justify-between gap-4">
            <Image
              src="/logo.png"
              alt="Aku Tani"
              width={220}
              height={220}
              priority
              className="h-14 w-auto object-contain"
            />
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#E4F0C8] px-4 py-1.5 text-[10px] font-semibold tracking-wide text-[#4B6B00] uppercase">
              <LockKeyhole size={14} /> Akses Portal Petani
            </span>
          </div>

          <h1 className="mt-8 text-center text-2xl font-semibold">
            Daftar akun Aku Tani
          </h1>
          <p className="mt-2 text-center text-sm leading-relaxed text-gray-600">
            Mulai pemantauan presisi lahan Anda secara gratis dalam hitungan
            menit.
          </p>

          <RegisterForm />
        </section>

        <section className="max-w-xl lg:justify-self-end">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/80 px-4 py-1.5 text-[10px] font-semibold tracking-wide uppercase">
            <Zap size={14} /> Portal Mandiri Petani Cerdas
          </span>

          <h2 className="mt-8 text-4xl font-semibold leading-[1.2] tracking-tight sm:text-[42px]">
            Bergabung Bersama 50.000+ Petani Modern Nusantara.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600">
            Kurangi risiko gagal panen dengan deteksi hama berbasis AI,
            rekomendasi waktu tanam dari prakiraan cuaca BMKG, dan konsultasi
            langsung bersama Tani AI.
          </p>

          <div className="mt-8 space-y-4">
            <article className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E4F0C8] text-[#4B6B00]">
                <ScanLine size={22} />
              </div>
              <div>
                <h3 className="text-sm font-medium">Deteksi Hama AI Instan</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  Identifikasi Hawar Daun Bakteri (Xanthomonas) dan Blas Padi
                  seketika melalui kamera smartphone.
                </p>
              </div>
            </article>

            <article className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF0A0] text-lg font-semibold text-[#E6B800]">
                C
              </div>
              <div>
                <h3 className="text-sm font-medium">Telemetri Mikroklimat</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  Pantau suhu, kelembapan, dan kecepatan angin di lokasi
                  lahanmu secara berkala dari data BMKG.
                </p>
              </div>
            </article>

            <article className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C8F7DC] text-[#1F8A5B]">
                <MessagesSquare size={22} />
              </div>
              <div>
                <h3 className="text-sm font-medium">Konsultasi dengan Tani AI</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  Tanyakan apa saja seputar hama, perawatan, dan waktu tanam,
                  lalu dapatkan jawaban langsung lewat chat.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
