"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { school } from "@/data/schoolData";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import ChevronDown from "@/components/ui/ChevronDown";

const primaryLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/gallery", label: "Galeri" },
  { href: "/teachers", label: "Guru" },
];

const moreLinks = [
  { href: "/achievements", label: "Prestasi" },
  { href: "/facilities", label: "Fasilitas" },
  { href: "/extracurriculars", label: "Ekstrakurikuler" },
  { href: "/berita", label: "Berita" },
];

const contactLink = { href: "/contact", label: "Hubungi kami" };
const allLinks = [...primaryLinks, ...moreLinks, contactLink];
const linkFocus =
  "rounded-full focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const exploreRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!exploreRef.current?.contains(event.target)) {
        exploreRef.current?.removeAttribute("open");
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape" && exploreRef.current?.open) {
        exploreRef.current.removeAttribute("open");
        exploreRef.current.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    exploreRef.current?.removeAttribute("open");
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href) =>
    `${linkFocus} px-3 py-2 text-sm font-semibold transition-colors ${
      isActive(href) ? "bg-navy text-white" : "text-navy/75 hover:bg-navy/5 hover:text-navy"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 bg-white/95 text-navy shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className={`flex min-w-0 items-center gap-3 ${linkFocus}`}
          onClick={() => setOpen(false)}
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-300 bg-white p-1 shadow-sm">
            <Image
              src="/SMKN_4_KOTA_BEKASI.png"
              alt="Lambang SMK Negeri 4 Kota Bekasi"
              width={96}
              height={96}
              priority
              className="h-full w-full object-contain"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold tracking-tight sm:text-base">
              {school.shortName}
            </span>
            <span className="block text-[10px] font-medium tracking-[0.12em] text-slate-body">
              SEKOLAH KEJURUAN · BEKASI
            </span>
          </span>
        </Link>

        <nav aria-label="Menu utama" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {primaryLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkClass(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="group relative">
              <details ref={exploreRef} className="navbar-explore">
                <summary className={`${linkFocus} flex cursor-pointer list-none items-center gap-1 px-3 py-2 text-sm font-semibold text-navy/75 transition-colors hover:bg-navy/5 hover:text-navy`}>
                  Jelajahi <ChevronDown className="h-4 w-4" />
                </summary>
                <ul className="absolute right-0 top-full mt-2 min-w-48 rounded-2xl border border-slate-300 bg-white p-2 shadow-xl shadow-navy/10">
                  {moreLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                          isActive(item.href)
                            ? "bg-navy text-white"
                            : "text-navy/75 hover:bg-cream hover:text-navy"
                        }`}
                        onClick={() => exploreRef.current?.removeAttribute("open")}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </nav>

        <Link
          href={contactLink.href}
          className="hidden items-center rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-navy-deep focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 xl:inline-flex"
        >
          {contactLink.label} <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-navy/5 xl:hidden ${linkFocus}`}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="menu-seluler"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
              <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          ) : (
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-navy" />
              <span className="block h-0.5 w-5 bg-navy" />
              <span className="block h-0.5 w-5 bg-navy" />
            </span>
          )}
        </button>
      </div>

      {open ? (
        <nav id="menu-seluler" aria-label="Menu seluler" className="border-t border-slate-300 bg-white xl:hidden">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-4 sm:px-6">
            {allLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
                    isActive(item.href) ? "bg-navy text-white" : "text-navy hover:bg-cream"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
