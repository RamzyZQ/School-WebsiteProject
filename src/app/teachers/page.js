import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";
import { teacherProfiles } from "@/data/schoolData";

export const metadata = {
  title: "Guru",
  description: "Kenali pendamping belajar dan bidang keahlian di SMKN 4 Kota Bekasi.",
};

export default function TeachersPage() {
  return (
    <>
      <PageHero
        eyebrow="Orang di balik pembelajaran"
        title="Belajar bersama para ahli."
        description="Para pendidik mendampingi siswa menghubungkan teori dengan praktik dan menemukan kekuatan masing-masing."
      />
      <SectionContainer
        eyebrow="Tim pengajar"
        title="Pendamping di setiap langkah."
        description="Profil dan foto berikut merupakan data contoh untuk ilustrasi tampilan, bukan profil resmi tenaga pendidik."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teacherProfiles.map((teacher, index) => (
            <Reveal
              as="li"
              key={teacher.name}
              delay={index * 80}
              className="overflow-hidden rounded-3xl border border-slate-300 bg-white"
            >
              <div className="relative h-64 bg-cream">
                <Image
                  src={teacher.imageUrl}
                  alt={`Foto ilustrasi ${teacher.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">{teacher.focus}</p>
                <h2 className="mt-2 font-serif text-xl text-navy">{teacher.name}</h2>
                <p className="mt-2 text-sm leading-6">{teacher.subject}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
    </>
  );
}
