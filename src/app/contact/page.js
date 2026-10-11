import Link from "next/link";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import ContactForm from "@/components/contact/ContactForm";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";
import WhatsAppIcon from "@/components/contact/WhatsAppIcon";
import { getWhatsAppUrl, school } from "@/data/schoolData";

export const metadata = {
  title: "Kontak",
  description: `Informasi kontak ${school.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kami siap menyambut Anda"
        title="Mari mulai percakapan."
        description="Hubungi sekolah untuk bertanya, berkunjung, atau mengenal lebih dekat kegiatan belajar kami."
      />
      <SectionContainer eyebrow="Hubungi sekolah" title="Kami senang mendengar dari Anda.">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-4">
            <article className="rounded-3xl bg-navy p-6 text-white sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Alamat</p>
              <h2 className="mt-3 font-serif text-2xl">Kunjungi kami</h2>
              <p className="mt-3 text-sm leading-7 text-white/75">{school.address}</p>
            </article>
            <article className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-dark">Informasi</p>
              <h2 className="mt-3 font-serif text-2xl text-navy">Hubungi langsung</h2>
              <div className="mt-4 space-y-3 text-sm">
                <p>
                  <span className="mr-2 font-semibold text-navy">Email</span>
                  <a className="underline decoration-gold-dark underline-offset-4" href={`mailto:${school.email}`}>{school.email}</a>
                </p>
                <p>
                  <span className="mr-2 font-semibold text-navy">Telepon</span>
                  <a className="underline decoration-gold-dark underline-offset-4" href={`tel:${school.phone.replace(/[^\d+]/g, "")}`}>{school.phone}</a>
                </p>
                <p><span className="mr-2 font-semibold text-navy">NPSN</span>{school.npsn}</p>
              </div>
              <Link
                href={getWhatsAppUrl("Halo SMKN 4 Kota Bekasi, saya ingin bertanya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#15803d] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#166534] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#15803d]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat melalui WhatsApp
              </Link>
              <Link
                href={`https://maps.app.goo.gl/fSMsJJ5dh14347H59`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex w-fit items-center text-sm font-bold text-navy hover:text-red-900"
              >
                Buka peta <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </article>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl border border-slate-300 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl text-navy">Kirim pertanyaan</h2>
            <p className="mb-6 mt-2 text-sm leading-6">Isi formulir berikut untuk menyiapkan pesan melalui aplikasi email Anda.</p>
            <ContactForm email={school.email} />
          </Reveal>
        </div>
      </SectionContainer>
    </>
  );
}
