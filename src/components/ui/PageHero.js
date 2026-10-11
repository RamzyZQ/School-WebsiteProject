import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ArrowUpRight from "@/components/ui/ArrowUpRight";

export default function PageHero({ eyebrow, title, description, image, imageAlt }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/10 sm:-right-24"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.72fr] lg:gap-16 lg:py-24">
        <Reveal>
          <p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-7 bg-gold" />
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.06] tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            {description}
          </p>
        </Reveal>
        {image ? (
          <Reveal className="relative">
            <div className="absolute -inset-2 rotate-2 rounded-[1.75rem] border border-gold/40" />
            <div className="relative h-56 overflow-hidden rounded-[1.5rem] bg-navy-soft sm:h-72">
              <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <Link
              href="/contact"
              className="absolute -bottom-4 left-4 inline-flex items-center rounded-full bg-navy px-5 py-3 text-xs font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-navy-deep"
            >
              Kenali sekolah kami <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
