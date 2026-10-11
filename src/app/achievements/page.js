import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";
import { achievementItems } from "@/data/schoolData";

export const metadata = {
  title: "Prestasi",
  description: "Capaian dan potensi siswa SMKN 4 Kota Bekasi.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ketekunan jadi capaian"
        title="Setiap langkah layak dirayakan."
        description="Ruang untuk mengapresiasi proses, ide, dan keterampilan yang terus diasah oleh para siswa."
      />
      <SectionContainer eyebrow="Jejak pencapaian" title="Bertumbuh dengan percaya diri.">
        <p className="mb-8 max-w-3xl rounded-2xl border border-gold-dark/20 bg-white px-5 py-4 text-sm leading-6 text-slate-body">
          Informasi berikut adalah contoh konten untuk desain halaman dan bukan daftar prestasi resmi sekolah.
        </p>
        <ol className="space-y-4">
          {achievementItems.map((achievement, index) => (
            <Reveal
              as="li"
              key={achievement.title}
              delay={index * 100}
              className="grid gap-5 rounded-3xl border border-slate-300 bg-white p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy font-serif text-xl text-gold">
                {achievement.icon}
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">
                  {achievement.year} · {achievement.level}
                </p>
                <h2 className="mt-2 font-serif text-2xl text-navy">{achievement.title}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-7">{achievement.description}</p>
              </div>
              <span aria-hidden="true" className="hidden font-serif text-4xl text-navy/10 sm:block">
                {achievement.year}
              </span>
            </Reveal>
          ))}
        </ol>
      </SectionContainer>
    </>
  );
}
