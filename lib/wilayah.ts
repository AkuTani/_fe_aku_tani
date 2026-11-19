export type WilayahOption = {
  id: string;
  name: string;
};

const WILAYAH_BASE =
  "https://www.emsifa.com/api-wilayah-indonesia/api";

async function fetchWilayah(path: string): Promise<WilayahOption[]> {
  const response = await fetch(`${WILAYAH_BASE}/${path}`);
  if (!response.ok) {
    throw new Error("Gagal memuat data wilayah.");
  }
  return response.json();
}

export function fetchProvinces() {
  return fetchWilayah("provinces.json");
}

export function fetchRegencies(provinceId: string) {
  return fetchWilayah(`regencies/${provinceId}.json`);
}

export function fetchDistricts(regencyId: string) {
  return fetchWilayah(`districts/${regencyId}.json`);
}

export function fetchVillages(districtId: string) {
  return fetchWilayah(`villages/${districtId}.json`);
}

export function toAdm4(villageId: string) {
  const digits = villageId.replace(/\D/g, "").padStart(10, "0").slice(0, 10);
  return `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4, 6)}.${digits.slice(6)}`;
}
