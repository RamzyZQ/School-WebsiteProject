import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";
import { facilityItems } from "@/data/schoolData";

export const metadata = {
  title: "Fasilitas",
  description: "Kenali fasilitas belajar dan ruang praktik di SMKN 4 Kota Bekasi.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ruang yang mendukung ide"
        title="Belajar dengan mencoba langsung."
        description="Lingkungan belajar yang dirancang untuk mendorong eksplorasi, kolaborasi, dan pengalaman praktik."
      />
      <SectionContainer
        eyebrow="Jelajahi ruang belajar"
        title="Dari teori menuju praktik."
        description="Foto pada halaman ini berasal dari dokumentasi sekolah yang tersedia."
      >
        <ul className="grid gap-5 md:grid-cols-2">
          {facilityItems.map((facility, index) => (
            <Reveal
              as="li"
              key={facility.name}
              delay={(index % 2) * 100}
              className="group overflow-hidden rounded-3xl border border-slate-300 bg-white"
            >
              <div className="relative h-64 overflow-hidden bg-cream">
                <Image
                  src={facility.imageUrl}
                  alt={`Foto ilustrasi ${facility.name}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-navy backdrop-blur">
                  {facility.tag}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <h2 className="font-serif text-2xl text-navy">{facility.name}</h2>
                <p className="mt-3 text-sm leading-7">{facility.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
    </>
  );
}
