import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import PageHero from "@/components/ui/PageHero";
import SectionContainer from "@/components/ui/SectionContainer";
import { galleryItems } from "@/data/schoolData";

export const metadata = {
  title: "Galeri",
  description: "Galeri momen belajar, berkarya, dan bertumbuh di SMKN 4 Kota Bekasi.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Cerita dalam gambar"
        title="Momen belajar, karya, dan kebersamaan."
        description="Sekilas tentang ruang dan pengalaman yang menemani perjalanan belajar, melalui dokumentasi yang ditambahkan dari sekolah."
      />
      <SectionContainer eyebrow="Album sekolah" title="Potongan cerita kami.">
        <GalleryLightbox items={galleryItems} />
      </SectionContainer>
    </>
  );
}
