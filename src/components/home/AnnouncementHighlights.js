import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import WhatsAppIcon from "@/components/contact/WhatsAppIcon";
import { getWhatsAppUrl } from "@/data/schoolData";

const highlights = [
  {
    eyebrow: "Informasi calon siswa",
    title: "Mencari informasi PPDB?",
    description: "Tanyakan jadwal, persyaratan, dan alur pendaftaran resmi langsung kepada sekolah.",
    message: "Halo SMKN 4 Kota Bekasi, saya ingin bertanya tentang informasi PPDB.",
    action: "Tanya PPDB",
  },
  {
    eyebrow: "Untuk dunia usaha & industri",
    title: "Buka peluang kemitraan.",
    description: "Diskusikan praktik kerja, penyelarasan kompetensi, atau peluang kolaborasi lainnya.",
    message: "Halo SMKN 4 Kota Bekasi, saya ingin berdiskusi tentang peluang kemitraan.",
    action: "Diskusikan kemitraan",
  },
];

export default function AnnouncementHighlights() {
  return (
    <section aria-label="Informasi PPDB dan kemitraan" className="bg-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
        {highlights.map((highlight, index) => (
          <Reveal
            as="article"
            key={highlight.title}
            delay={index * 100}
            className="rounded-3xl border border-slate-300 bg-slate-50 p-6 sm:p-8"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-900">
              {highlight.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-2xl text-navy sm:text-3xl">
              {highlight.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-body">
              {highlight.description}
            </p>
            <Link
              href={getWhatsAppUrl(highlight.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#15803d] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#166534] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#15803d]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {highlight.action}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
