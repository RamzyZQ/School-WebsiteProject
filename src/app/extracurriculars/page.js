import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";
import { extracurricularItems } from "@/data/schoolData";

export const metadata = {
  title: "Ekstrakurikuler",
  description: "Pilihan kegiatan pengembangan minat dan bakat siswa.",
};

export default function ExtracurricularsPage() {
  return (
    <>
      <PageHero
        eyebrow="Belajar di luar kelas"
        title="Temukan hal yang membuatmu bersemangat."
        description="Ruang untuk mencoba minat baru, mengembangkan bakat, dan membangun pertemanan yang positif."
      />
      <SectionContainer
        eyebrow="Minat dan bakat"
        title="Pilih kegiatanmu, tumbuh bersama."
        description="Contoh pilihan kegiatan berikut dapat disesuaikan dengan program ekstrakurikuler resmi sekolah."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {extracurricularItems.map((activity, index) => (
            <Reveal
              as="li"
              key={activity.name}
              delay={(index % 3) * 80}
              className="group rounded-3xl border border-slate-300 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-red-900/50 hover:shadow-xl hover:shadow-navy/5 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 font-mono text-sm font-semibold tracking-wide text-navy transition group-hover:bg-red-900 group-hover:text-white">
                  {activity.icon}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">{activity.category}</span>
              </div>
              <h2 className="mt-6 font-serif text-2xl text-navy">{activity.name}</h2>
              <p className="mt-3 text-sm leading-7">{activity.detail}</p>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
    </>
  );
}
