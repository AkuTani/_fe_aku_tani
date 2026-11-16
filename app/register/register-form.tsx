"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircleIcon,
  ArrowRight,
  CheckCircle2Icon,
  KeyRound,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess("");

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();

    if (!trimmedUsername || !trimmedEmail || !password || !confirmPassword) {
      setError("Semua kolom wajib diisi.");
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setError("Format email tidak valid.");
      return;
    }

    if (password.length < 8) {
      setError("Kata sandi minimal 8 karakter.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Konfirmasi kata sandi tidak sama.");
      return;
    }

    setError("");
    setSuccess("Pendaftaran sudah diterima.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full flex-1 flex-col"
      noValidate
    >
      <label htmlFor="username" className="text-sm font-medium">
        Username
      </label>
      <input
        id="username"
        name="username"
        type="text"
        autoComplete="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Buat username anda"
        className="mt-2 w-full rounded-xl bg-[#DCEEB8] px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#4B6B00]"
      />

      <label htmlFor="email" className="mt-5 text-sm font-medium">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Masukan Alamat Email anda"
        className="mt-2 w-full rounded-xl bg-[#DCEEB8] px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#4B6B00]"
      />

      <label htmlFor="password" className="mt-5 text-sm font-medium">
        Kata Sandi
      </label>
      <div className="relative mt-2">
        <KeyRound
          size={16}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Masukkan kata sandi anda"
          className="w-full rounded-xl bg-[#DCEEB8] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#4B6B00]"
        />
      </div>

      <label htmlFor="confirmPassword" className="mt-5 text-sm font-medium">
        Konfirmasi Kata Sandi
      </label>
      <div className="relative mt-2">
        <KeyRound
          size={16}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="Konfirmasi ulang sandi anda"
          className="w-full rounded-xl bg-[#DCEEB8] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#4B6B00]"
        />
      </div>

      <AnimatePresence mode="wait">
        {error ? (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-4 text-sm text-red-600 rounded-xl"
            role="alert"
          >
            <Alert variant="destructive" className="max-w-full rounded-xl">
              <AlertCircleIcon />
              <AlertTitle>Daftar gagal</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </motion.p>
        ) : null}
        {success ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-4 text-sm text-[#4B6B00]"
            role="status"
          >
            <Alert className="max-w-full">
              <CheckCircle2Icon />
              <AlertTitle>Daftar AkuTani Berhasil</AlertTitle>
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          </motion.p>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-14 md:mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-[#4B6B00] py-3.5 text-sm font-medium text-white hover:bg-[#3d5700]"
      >
        Daftar Aku Tani <ArrowRight size={18} />
      </motion.button>

      <p className="mt-4 text-center text-sm text-[#4B6B00]">
        Sudah punya akun AkuTani?{" "}
        <Link href="/login" className="font-bold">
          Masuk Sekarang
        </Link>
      </p>
    </form>
  );
}
