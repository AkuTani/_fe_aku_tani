import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-green-50">
      <h1 className="text-4xl font-bold text-green-700">AkuTani</h1>
      <p className="text-gray-600">Platform pertanian untuk petani Indonesia</p>
      <button className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
        Mulai
      </button>
    </main>
  );
}