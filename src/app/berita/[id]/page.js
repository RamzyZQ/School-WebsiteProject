import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { getNewsById, newsList, school } from "@/data/schoolData";

export function generateStaticParams() {
  return newsList.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const news = getNewsById(id);

  if (!news) {
    return { title: "Berita tidak ditemukan" };
  }

  return {
    title: news.title,
    description: news.excerpt,
  };
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const news = getNewsById(id);

  if (!news) {
    notFound();
  }

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark">
          Berita {school.shortName}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-5xl">
          {news.title}
        </h1>
        <time className="mt-5 block text-sm font-medium text-slate-body/70">{news.date}</time>
        <div className="relative mt-9 h-64 overflow-hidden rounded-2xl sm:h-[26rem]">
          <Image
            src={news.imageUrl}
            alt={news.title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
        <p className="mx-auto mt-9 max-w-3xl text-lg leading-8 text-slate-body/90">{news.content}</p>
        <div className="mt-10">
          <Button href="/berita" variant="outline">
            Kembali ke Berita
          </Button>
        </div>
      </div>
    </article>
  );
}
