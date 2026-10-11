import NewsCard from "@/components/news/NewsCard";
import SectionContainer from "@/components/ui/SectionContainer";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { newsList, school } from "@/data/schoolData";

export const metadata = {
  title: "Berita",
};

export default function BeritaPage() {
  return (
    <>
      <PageHero eyebrow="Cerita dari sekolah" title={`Berita ${school.shortName}`} description="Kegiatan, prestasi, dan kabar terbaru dari warga sekolah." />

      <SectionContainer>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsList.map((news) => (
            <Reveal as="li" key={news.id} delay={Number(news.id) * 60}>
              <NewsCard news={news} />
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
    </>
  );
}
