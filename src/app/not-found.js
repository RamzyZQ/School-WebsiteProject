import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6 sm:py-32">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
        404
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-4 leading-7 text-slate-body">
        Tautan yang Anda buka tidak tersedia. Kembali ke beranda atau daftar berita.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Ke Beranda</Button>
        <Button href="/berita" variant="outline">
          Lihat Berita
        </Button>
      </div>
    </div>
  );
}
