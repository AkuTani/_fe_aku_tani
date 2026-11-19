import { MessagesSquare, ScanLine, Zap } from "lucide-react";
import type { Metadata } from "next";
import {
  MotionItem,
  MotionSection,
  MotionStagger,
} from "../components/auth-motion";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
  title: "Daftar | Aku Tani",
  description: "Daftar akun portal petani Aku Tani.",
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-start justify-center bg-[#F5F5F3] px-6 py-10 text-[#1A1A1A] lg:items-center">
      <div className="grid w-full max-w-[1000px] items-center gap-12 lg:grid-cols-[minmax(0,480px)_1fr]">
        <MotionSection
          immediate
          className="flex min-h-[600px] flex-col rounded-[32px] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:px-10"
        >
          <RegisterForm />
        </MotionSection>

        <MotionSection
          from="right"
          delay={0.08}
          className="max-w-xl lg:justify-self-end"
        >
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

          <MotionStagger className="mt-8 space-y-4">
            <MotionItem className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E4F0C8] text-[#4B6B00]">
                <ScanLine size={22} />
              </div>
              <div>
                <h3 className="text-sm font-medium">Prediksi</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  Prediksi cuaca hari ini dan besok, dengan data terbaru dari
                  BMKG.
                </p>
              </div>
            </MotionItem>

            <MotionItem className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF0A0] text-lg font-semibold text-[#E6B800]">
                C
              </div>
              <div>
                <h3 className="text-sm font-medium">Telemetri Mikroklimat</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  Pantau suhu, kelembapan, dan kecepatan angin di lokasi lahanmu
                  secara berkala dari data BMKG.
                </p>
              </div>
            </MotionItem>

            <MotionItem className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C8F7DC] text-[#1F8A5B]">
                <MessagesSquare size={22} />
              </div>
              <div>
                <h3 className="text-sm font-medium">Gunakan Berkala</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  Dapat digunakakan setiap hari untuk memantau kondisi lahan
                  anda. Serta dapatkan rekomendasi waktu tanam kembali dari
                  prakiraan cuaca BMKG.
                </p>
              </div>
            </MotionItem>
          </MotionStagger>
        </MotionSection>
      </div>
    </main>
  );
}
