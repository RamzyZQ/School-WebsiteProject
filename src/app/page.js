import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import AnnouncementHighlights from "@/components/home/AnnouncementHighlights";
import { galleryItems, newsList, school } from "@/data/schoolData";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep text-white">
        <div
          aria-hidden="true"
          className="absolute -right-48 -top-52 -z-10 h-[42rem] w-[42rem] rounded-full border border-white/10 sm:-right-28"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:py-24">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-7 bg-gold" />
              Sekolah Menengah Kejuruan · Bekasi
            </p>
            <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.25rem]">
              Belajar hari ini,
              <span className="mt-2 block text-gold">siap berkarya esok.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Di {school.name}, rasa ingin tahu tumbuh menjadi keterampilan nyata,
              karakter kuat, dan langkah percaya diri menuju masa depan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about">Kenali sekolah kami <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
              <Button
                href="/gallery"
                variant="outline"
                className="border-white/50 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy"
              >
                Lihat kehidupan sekolah
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
                <Image
                  src="/SMKN_4_KOTA_BEKASI.png"
                  alt=""
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </span>
              <p className="text-xs leading-5 text-white/65">
                Budaya bertumbuh bersama
                <span className="block font-semibold tracking-wide text-white">BERSATU · NPSN {school.npsn}</span>
              </p>
            </div>
          </div>
          <Reveal className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] border border-gold/40" />
            <div className="relative h-[340px] overflow-hidden rounded-[1.75rem] bg-navy-soft shadow-2xl shadow-black/30 sm:h-[470px]">
              <Image
                src="/tampak-depan.jpg"
                alt="Tampak depan gedung SMK Negeri 4 Kota Bekasi"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-navy/75 p-5 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Ruang untuk tumbuh</p>
                <p className="mt-2 font-serif text-xl text-white sm:text-2xl">
                  Kompeten dalam karya,<br className="hidden sm:block" /> unggul dalam karakter.
                </p>
              </div>
            </div>
            <div className="absolute -right-2 top-8 rounded-full bg-gold px-4 py-2 text-xs font-bold text-navy shadow-lg sm:-right-5 sm:top-12">
              Jatisampurna · Bekasi
            </div>
          </Reveal>
        </div>
      </section>

      <AnnouncementHighlights />

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-300 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
          {[
            ["01", "Belajar lewat praktik", "Membangun keterampilan dari pengalaman langsung."],
            ["02", "Tumbuh bersama", "Menguatkan karakter melalui kolaborasi."],
            ["03", "Siap melangkah", "Menyiapkan diri untuk berbagai peluang masa depan."],
          ].map(([number, title, description], index) => (
            <Reveal as="article" key={number} delay={index * 100} className="flex gap-4 py-6 sm:px-6 sm:py-8 first:sm:pl-0 last:sm:pr-0">
              <span className="font-serif text-2xl text-navy">{number}</span>
              <div>
                <h2 className="font-bold text-navy">{title}</h2>
                <p className="mt-1 text-sm leading-6">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionContainer
        eyebrow="Sambutan kepala sekolah"
        title="Masa depan dimulai dari ruang belajar."
        description={`${school.greeting.name} mengajak seluruh warga sekolah untuk terus bertumbuh, berkarya, dan menyiapkan diri menghadapi dunia.`}
        className="bg-cream"
      >
        <Reveal className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div className="flex flex-col items-start">
            <div className="relative mb-5 h-52 w-44 overflow-hidden rounded-[2rem] bg-sky-100 sm:h-60 sm:w-48">
              <Image
                src="/Foto-KepalaSekolah.png"
                alt={`Foto ${school.greeting.name}, ${school.greeting.role}`}
                fill
                sizes="(min-width: 640px) 192px, 176px"
                className="object-contain object-bottom"
              />
            </div>
            <div className="w-full border-t border-slate-300 pt-5">
              <p className="font-serif text-2xl text-navy">{school.greeting.name}</p>
              <p className="mt-1 text-sm font-semibold text-gold-dark">{school.greeting.role}</p>
            </div>
          </div>
          <blockquote className="relative rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <span aria-hidden="true" className="absolute -top-5 left-5 font-serif text-6xl leading-none text-gold-dark">“</span>
            <p className="relative text-base leading-8 text-navy/85 sm:text-lg">
              {school.greeting.message}
            </p>
          </blockquote>
        </Reveal>
      </SectionContainer>

      <SectionContainer
        eyebrow="Belajar dengan praktik"
        title="Temukan jalur keahlianmu."
        description="Program keahlian yang mengubah rasa ingin tahu menjadi keterampilan, portofolio, dan peluang masa depan."
        className="bg-white"
      >
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {school.majors.map((major, index) => (
            <Reveal
              as="li"
              key={major.id}
              delay={index * 80}
              className="group flex min-h-64 flex-col rounded-3xl border border-slate-300 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-900/50 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark">{major.shortName}</p>
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy transition group-hover:bg-navy group-hover:text-white"><ArrowUpRight /></span>
              </div>
              <h3 className="mt-6 font-serif text-xl leading-snug text-navy">{major.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-7">{major.description}</p>
              <Link href="/about" className="mt-5 w-fit text-xs font-bold uppercase tracking-[0.12em] text-navy underline decoration-red-900 underline-offset-4 hover:text-red-900">
                Kenali program
              </Link>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer
        eyebrow="Sekilas cerita"
        title="Momen kecil, langkah besar."
        description="Lihat suasana belajar, berkarya, dan bertumbuh bersama."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 100} className="group relative h-72 overflow-hidden rounded-3xl bg-navy">
              <Image src={item.imageUrl} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/5 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">{item.category}</p>
                <h3 className="mt-2 font-serif text-2xl text-white">{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/gallery" variant="outline">Jelajahi galeri <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </SectionContainer>

      <SectionContainer eyebrow="Cerita terbaru" title="Kabar dari sekolah." className="bg-white">
        <ul className="grid gap-4 md:grid-cols-3">
          {newsList.slice(0, 3).map((news, index) => (
            <Reveal as="li" key={news.id} delay={index * 80} className="rounded-3xl border border-slate-300 bg-slate-50 p-6">
              <time className="text-[11px] font-bold uppercase tracking-[0.15em] text-gold-dark">{news.date}</time>
              <h3 className="mt-3 font-serif text-xl leading-snug text-navy">{news.title}</h3>
              <p className="mt-3 text-sm leading-7">{news.excerpt}</p>
              <Link href={`/berita/${news.id}`} className="mt-5 inline-flex text-sm font-bold text-navy hover:text-gold-dark">
                Baca cerita <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 overflow-hidden rounded-[2rem] bg-navy px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Langkah berikutnya</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Temukan ruang tumbuhmu bersama kami.</h2>
          </div>
          <Button href="/contact" className="shrink-0">Hubungi sekolah <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </section>
    </>
  );
}
