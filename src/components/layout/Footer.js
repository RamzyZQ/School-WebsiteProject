import Link from "next/link";
import Image from "next/image";
import { school } from "@/data/schoolData";
import ArrowUpRight from "@/components/ui/ArrowUpRight";

const footerLink =
  "rounded-sm text-white/70 transition-colors hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep";

const footerLinks = [
  ["Tentang", "/about"],
  ["Galeri", "/gallery"],
  ["Guru", "/teachers"],
  ["Prestasi", "/achievements"],
  ["Fasilitas", "/facilities"],
  ["Ekstrakurikuler", "/extracurriculars"],
  ["Berita", "/berita"],
  ["Kontak", "/contact"],
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1.5">
            <Image
              src="/SMKN_4_KOTA_BEKASI.png"
              alt="Lambang SMK Negeri 4 Kota Bekasi"
              width={96}
              height={96}
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Pendidikan untuk masa depan</p>
          <p className="mt-3 font-serif text-xl font-semibold">{school.name}</p>
          <p className="mt-2 text-sm font-medium text-gold">{school.motto} · {school.mottoFull}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            Ruang untuk tumbuh, menemukan minat, dan membangun keterampilan masa depan.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
            Identitas
          </p>
          <p className="mt-3 text-sm text-white/80">NPSN {school.npsn}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            {school.address}
          </p>
          <Link href="/contact" className={`mt-4 inline-flex items-center text-sm ${footerLink}`}>
          Lihat informasi kontak <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
            Tautan
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-2 text-sm">
            <li><Link href="/" className={footerLink}>Beranda</Link></li>
            {footerLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className={footerLink}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/45 sm:px-6">
          © 2026 {school.name}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
