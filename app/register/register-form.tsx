"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  fetchDistricts,
  fetchProvinces,
  fetchRegencies,
  fetchVillages,
  type WilayahOption,
} from "@/lib/wilayah";
import {
  AlertCircleIcon,
  ArrowLeft,
  ArrowRight,
  CheckCircle2Icon,
  ChevronDown,
  KeyRound,
  LockKeyhole,
  MapPin,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldClass =
  "mt-2 w-full appearance-none rounded-xl bg-[#DCEEB8] px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#4B6B00]";

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  disabled,
  loading,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: WilayahOption[];
  placeholder: string;
  disabled?: boolean;
  loading?: boolean;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          disabled={disabled || loading}
          onChange={(event) => onChange(event.target.value)}
          className={`${fieldClass} pr-10 ${value ? "text-[#1A1A1A]" : "text-gray-400"} disabled:opacity-60`}
        >
          <option value="">{loading ? "Memuat..." : placeholder}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
      </div>
    </div>
  );
}

function Stepper({ step }: { step: 1 | 2 }) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between text-xs font-medium">
        <span
          className={`flex items-center gap-2 ${step >= 1 ? "text-[#4B6B00]" : "text-gray-400"}`}
        >
          {step > 1 ? (
            <CheckCircle2Icon size={16} />
          ) : (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4B6B00] text-[10px] text-white">
              1
            </span>
          )}
          Akun Dasar
        </span>
        <span
          className={`flex items-center gap-2 ${step === 2 ? "text-[#4B6B00]" : "text-gray-400"}`}
        >
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
              step === 2
                ? "bg-[#4B6B00] text-white"
                : "border border-gray-300 text-gray-400"
            }`}
          >
            2
          </span>
          Lokasi Lahan
        </span>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#E4F0C8]">
        <div
          className={`h-full rounded-full bg-[#4B6B00] transition-all ${
            step === 1 ? "w-1/2" : "w-full"
          }`}
        />
      </div>
    </div>
  );
}

export default function RegisterForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [provinceId, setProvinceId] = useState("");
  const [regencyId, setRegencyId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [villageId, setVillageId] = useState("");
  const [address, setAddress] = useState("");
  const [provinces, setProvinces] = useState<WilayahOption[]>([]);
  const [regencies, setRegencies] = useState<WilayahOption[]>([]);
  const [districts, setDistricts] = useState<WilayahOption[]>([]);
  const [villages, setVillages] = useState<WilayahOption[]>([]);
  const [loadingRegencies, setLoadingRegencies] = useState(false);
  const [loadingDistricts, setLoadingDistricts] = useState(false);
  const [loadingVillages, setLoadingVillages] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [adm4, setAdm4] = useState("");
  const [adm4Label, setAdm4Label] = useState("");

  useEffect(() => {
    fetchProvinces()
      .then(setProvinces)
      .catch(() => setError("Gagal memuat daftar provinsi."));
  }, []);

  useEffect(() => {
    if (!provinceId) {
      setRegencies([]);
      return;
    }
    setLoadingRegencies(true);
    fetchRegencies(provinceId)
      .then(setRegencies)
      .catch(() => setError("Gagal memuat kabupaten/kota."))
      .finally(() => setLoadingRegencies(false));
  }, [provinceId]);

  useEffect(() => {
    if (!regencyId) {
      setDistricts([]);
      return;
    }
    setLoadingDistricts(true);
    fetchDistricts(regencyId)
      .then(setDistricts)
      .catch(() => setError("Gagal memuat kecamatan."))
      .finally(() => setLoadingDistricts(false));
  }, [regencyId]);

  useEffect(() => {
    if (!districtId) {
      setVillages([]);
      return;
    }
    setLoadingVillages(true);
    fetchVillages(districtId)
      .then(setVillages)
      .catch(() => setError("Gagal memuat kelurahan/desa."))
      .finally(() => setLoadingVillages(false));
  }, [districtId]);

  function handleAccountSubmit(event: React.FormEvent<HTMLFormElement>) {
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
    setStep(2);
  }

  function handleLocationSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess("");

    if (!provinceId || !regencyId || !districtId || !villageId) {
      setError(
        "Pilih wilayah sampai kelurahan/desa untuk mendapatkan kode ADM4.",
      );
      return;
    }

    if (!adm4) {
      setError("Pilih kelurahan/desa untuk mendapatkan kode ADM4.");
      return;
    }

    setError("");
    setSuccess(`Kode ADM4 lahan Anda: ${adm4}`);
  }

  function changeProvince(value: string) {
    setProvinceId(value);
    setRegencyId("");
    setDistrictId("");
    setVillageId("");
    setAdm4("");
    setAdm4Label("");
  }

  function changeRegency(value: string) {
    setRegencyId(value);
    setDistrictId("");
    setVillageId("");
    setAdm4("");
    setAdm4Label("");
  }

  function changeDistrict(value: string) {
    setDistrictId(value);
    setVillageId("");
    setAdm4("");
    setAdm4Label("");
  }

  function changeVillage(value: string) {
    setVillageId(value);
    setAdm4(value);
    const wilayah = [
      regencies.find((item) => item.id === regencyId)?.name,
      districts.find((item) => item.id === districtId)?.name,
      villages.find((item) => item.id === value)?.name,
    ]
      .filter(Boolean)
      .join(" / ");
    setAdm4Label(wilayah);
    setError("");
  }

  return (
    <div className="flex w-full flex-1 flex-col">
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
          <LockKeyhole size={14} /> Langkah {step} dari 2
        </span>
      </div>

      <Stepper step={step} />

      {step === 1 ? (
        <form
          key="step-1"
          method="post"
          onSubmit={handleAccountSubmit}
          className="mt-8 flex w-full flex-1 flex-col"
          noValidate
        >
          <h1 className="text-center text-2xl font-semibold">
            Daftar akun Aku Tani
          </h1>
          <p className="mt-2 text-center text-sm leading-relaxed text-gray-600">
            Mulai pemantauan presisi lahan Anda secara gratis dalam hitungan
            menit.
          </p>

          <label htmlFor="username" className="mt-8 text-sm font-medium">
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
            className={fieldClass}
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
            className={fieldClass}
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

          <FormStatus error={error} success={success} />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-[#4B6B00] py-3.5 text-sm font-medium text-white hover:bg-[#3d5700]"
          >
            Lanjut ke Lokasi Lahan <ArrowRight size={18} />
          </motion.button>

          <p className="mt-4 text-center text-sm text-[#4B6B00]">
            Sudah punya akun AkuTani?{" "}
            <Link href="/login" className="font-bold">
              Masuk Sekarang
            </Link>
          </p>
        </form>
      ) : (
        <form
          key="step-2"
          method="post"
          onSubmit={handleLocationSubmit}
          className="mt-8 flex w-full flex-1 flex-col"
          noValidate
        >
          <h1 className="text-2xl font-semibold">
            Lengkapi Alamat & Lokasi Lahan
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Bantu kami menghubungkan telemetri mikroklimat dan data satelit
            cuaca BMKG presisi untuk lahan Anda.
          </p>

          <div className="mt-8">
            <SelectField
              id="province"
              label="Provinsi / Daerah"
              value={provinceId}
              onChange={changeProvince}
              options={provinces}
              placeholder="Pilih Provinsi (contoh: Jawa Barat, Jawa Timur)"
            />
          </div>

          <div className="mt-5">
            <SelectField
              id="regency"
              label="Kabupaten / Kota"
              value={regencyId}
              onChange={changeRegency}
              options={regencies}
              placeholder="Pilih Kabupaten / Kota (contoh: Kab. Cianjur)"
              disabled={!provinceId}
              loading={loadingRegencies}
            />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <SelectField
              id="district"
              label="Kecamatan"
              value={districtId}
              onChange={changeDistrict}
              options={districts}
              placeholder="Pilih Kecamatan"
              disabled={!regencyId}
              loading={loadingDistricts}
            />
            <SelectField
              id="village"
              label="Kelurahan / Desa"
              value={villageId}
              onChange={changeVillage}
              options={villages}
              placeholder="Pilih Desa"
              disabled={!districtId}
              loading={loadingVillages}
            />
          </div>

          <label htmlFor="address" className="mt-5 text-sm font-medium">
            Detail Alamat / Titik Koordinat Lahan{" "}
            <span className="font-normal text-gray-400">(Opsional)</span>
          </label>
          <div className="relative">
            <input
              id="address"
              name="address"
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Jl. Raya Pertanian No. 12 atau patokan lahan"
              className={`${fieldClass} pr-10`}
            />
            <MapPin
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#4B6B00]"
            />
          </div>

          {adm4 ? (
            <p className="mt-4 rounded-xl bg-[#E4F0C8] px-4 py-3 text-sm text-[#4B6B00]">
              Kode ADM4: <span className="font-semibold">{adm4}</span>
              {adm4Label ? (
                <span className="mt-1 block text-xs text-[#4B6B00]/80">
                  {adm4Label}
                </span>
              ) : null}
            </p>
          ) : null}

          <FormStatus error={error} success={success} />

          <motion.button
            type="submit"
            disabled={!adm4}
            whileHover={adm4 ? { scale: 1.02 } : undefined}
            whileTap={adm4 ? { scale: 0.98 } : undefined}
            className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-[#4B6B00] py-3.5 text-sm font-medium text-white hover:bg-[#3d5700] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Simpan & Masuk ke Dashboard <ArrowRight size={18} />
          </motion.button>

          <button
            type="button"
            onClick={() => {
              setError("");
              setSuccess("");
              setStep(1);
            }}
            className="mt-4 inline-flex items-center justify-center gap-2 text-sm text-gray-400"
          >
            <ArrowLeft size={14} /> Kembali ke Perubahan Akun
          </button>
        </form>
      )}
    </div>
  );
}

function FormStatus({ error, success }: { error: string; success: string }) {
  return (
    <AnimatePresence mode="wait">
      {error ? (
        <motion.div
          key="error"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mt-4"
          role="alert"
        >
          <Alert variant="destructive" className="max-w-full rounded-xl">
            <AlertCircleIcon />
            <AlertTitle>Daftar gagal</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </motion.div>
      ) : null}
      {success ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mt-4"
          role="status"
        >
          <Alert className="max-w-full">
            <CheckCircle2Icon />
            <AlertTitle>Lokasi lahan tersimpan</AlertTitle>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
