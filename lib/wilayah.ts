export type WilayahOption = {
  id: string;
  name: string;
};

type WilayahLevel = "provinces" | "regencies" | "districts" | "villages";

async function fetchWilayah(
  level: WilayahLevel,
  parent?: string,
): Promise<WilayahOption[]> {
  const params = new URLSearchParams({ level });
  if (parent) {
    params.set("parent", parent);
  }

  const response = await fetch(`/api/wilayah?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Gagal memuat data wilayah.");
  }

  const payload = (await response.json()) as { data?: WilayahOption[] };
  return payload.data ?? [];
}

export function fetchProvinces() {
  return fetchWilayah("provinces");
}

export function fetchRegencies(provinceCode: string) {
  return fetchWilayah("regencies", provinceCode);
}

export function fetchDistricts(regencyCode: string) {
  return fetchWilayah("districts", regencyCode);
}

export function fetchVillages(districtCode: string) {
  return fetchWilayah("villages", districtCode);
}
