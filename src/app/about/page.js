import SectionContainer from "@/components/ui/SectionContainer";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { school } from "@/data/schoolData";

export const metadata = {
  title: "Tentang",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Profil sekolah"
        title={`Tentang ${school.shortName}`}
        description={`NPSN ${school.npsn} · ${school.address}`}
        image="/tampak-depan.jpg"
        imageAlt="Gedung SMK Negeri 4 Kota Bekasi"
      />

      <SectionContainer eyebrow="Sejarah" title="Jejak pendidikan kejuruan" className="bg-white">
        <Reveal className="max-w-3xl rounded-3xl bg-cream p-7 text-lg leading-8 text-slate-body/90 sm:p-9">{school.history}</Reveal>
      </SectionContainer>

      <SectionContainer eyebrow="Arah Sekolah" title="Visi dan Misi">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal as="article" className="rounded-3xl bg-navy p-7 text-white shadow-xl shadow-navy/10 sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">Tujuan kami</p>
            <h3 className="mt-4 font-serif text-2xl font-semibold">Visi</h3>
            <p className="mt-4 leading-8 text-white/80">{school.vision}</p>
          </Reveal>
          <Reveal as="article" delay={100} className="rounded-3xl border border-slate-300 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark">Cara kami melangkah</p>
            <h3 className="mt-4 font-serif text-2xl font-semibold text-navy">Misi</h3>
            <ol className="mt-5 space-y-4">
              {school.missions.map((item, index) => (
                <li key={item} className="flex gap-4 leading-7">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream text-xs font-bold text-navy">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </SectionContainer>

      <SectionContainer
        eyebrow="Budaya sekolah"
        title={`Nilai dalam ${school.motto}.`}
        description={school.mottoFull}
        className="bg-cream"
      >
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {school.mottoItems.map((item, index) => (
            <Reveal as="li" key={item.word} delay={index * 80} className="flex gap-5 rounded-3xl border border-slate-300 bg-white p-6 shadow-sm">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy font-serif text-2xl font-semibold text-gold"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">{item.letter} · BERSATU</p>
                <h3 className="mt-1 font-serif text-xl font-semibold text-navy">{item.word}</h3>
                <p className="mt-2 text-sm leading-7">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
    </>
  );
}
