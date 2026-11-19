const WILAYAH_BASE = "https://wilayah.id/api";

const PARENT_PATTERN: Record<string, RegExp> = {
  provinces: /^$/,
  regencies: /^\d{2}$/,
  districts: /^\d{2}\.\d{2}$/,
  villages: /^\d{2}\.\d{2}\.\d{2}$/,
};

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const level = params.get("level")?.trim() ?? "";
  const parent = params.get("parent")?.trim() ?? "";
  const parentPattern = PARENT_PATTERN[level];

  if (!parentPattern || !parentPattern.test(parent)) {
    return Response.json({ error: "Parameter wilayah tidak valid." }, { status: 400 });
  }

  const path =
    level === "provinces"
      ? "provinces.json"
      : `${level}/${parent}.json`;

  const response = await fetch(`${WILAYAH_BASE}/${path}`, {
    next: { revalidate: 86_400 },
  });

  if (!response.ok) {
    return Response.json({ error: "Gagal memuat data wilayah." }, { status: 502 });
  }

  const payload = (await response.json()) as {
    data?: Array<{ code: string; name: string }>;
  };

  return Response.json({
    data: (payload.data ?? []).map((item) => ({
      id: item.code,
      name: item.name,
    })),
  });
}
