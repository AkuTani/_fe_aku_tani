"use client";

import { ArrowRight, KeyRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess("");

    const emailOrUsername = identifier.trim();
    if (!emailOrUsername || !password) {
      setError("Email/username dan kata sandi wajib diisi.");
      return;
    }

    setError("");
    setSuccess("Data login sudah diterima.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full flex-1 flex-col"
      noValidate
    >
      <label htmlFor="identifier" className="text-sm font-medium">
        Email / Username
      </label>
      <input
        id="identifier"
        name="identifier"
        type="text"
        autoComplete="username"
        value={identifier}
        onChange={(event) => setIdentifier(event.target.value)}
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
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Masukkan kata sandi anda"
          className="w-full rounded-xl bg-[#DCEEB8] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#4B6B00]"
        />
      </div>

      <button
        type="button"
        className="mt-2 self-end text-xs font-semibold text-[#4B6B00]"
      >
        Lupa kata sandi?
      </button>

      {error ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
      {success ? (
        <p className="mt-4 text-sm text-[#4B6B00]" role="status">
          {success}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-[#4B6B00] py-3.5 text-sm font-medium text-white hover:bg-[#3d5700]"
      >
        Masuk ke Aku Tani <ArrowRight size={18} />
      </button>

      <p className="mt-4 text-center text-sm text-[#4B6B00]">
        Belum punya akun petani?{" "}
        <Link href="/register" className="font-bold">
          Daftar Sekarang
        </Link>
      </p>
    </form>
  );
}
