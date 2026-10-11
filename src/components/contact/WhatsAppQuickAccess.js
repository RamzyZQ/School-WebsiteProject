import Link from "next/link";
import { getWhatsAppUrl } from "@/data/schoolData";
import WhatsAppIcon from "@/components/contact/WhatsAppIcon";

export default function WhatsAppQuickAccess() {
  return (
    <Link
      href={getWhatsAppUrl("Halo SMKN 4 Kota Bekasi, saya ingin bertanya.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp SMKN 4 Kota Bekasi"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#15803d] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-1 hover:bg-[#166534] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#15803d] sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>WhatsApp</span>
    </Link>
  );
}
