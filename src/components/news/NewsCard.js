import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "@/components/ui/ArrowUpRight";

export default function NewsCard({ news }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-[0_14px_40px_rgba(16,44,69,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(16,44,69,0.12)]">
      <div className="relative h-52 w-full overflow-hidden bg-cream">
        <Image
          src={news.imageUrl}
          alt={news.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-red-900/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-red-900">
            Berita sekolah
          </span>
          <time className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-body">
            {news.date}
          </time>
        </div>
        <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-navy">
          <Link
            href={`/berita/${news.id}`}
            className="rounded-sm transition-colors group-hover:text-red-900 hover:underline focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          >
            {news.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-body">
          {news.excerpt}
        </p>
        <Link
          href={`/berita/${news.id}`}
          className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-bold text-navy underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          Baca selengkapnya <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
