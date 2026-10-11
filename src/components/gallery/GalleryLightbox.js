"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ direction }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-5 w-5 ${direction === "previous" ? "rotate-90" : "-rotate-90"}`}
      fill="none"
    >
      <path d="m5.5 7.5 4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GalleryLightbox({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const isOpen = activeIndex !== null;
  const activeItem = isOpen ? items[activeIndex] : null;

  function close() {
    setActiveIndex(null);
  }

  function showPrevious() {
    setActiveIndex((index) => (index + items.length - 1) % items.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % items.length);
  }

  useEffect(() => {
    if (!isOpen) {
      triggerRef.current?.focus();
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index + items.length - 1) % items.length);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % items.length);
      }

      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements?.length) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, items.length]);

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li
            key={item.title}
            className={`group relative overflow-hidden rounded-3xl bg-navy ${
              index % 3 === 0 ? "h-[26rem]" : "h-[21rem]"
            }`}
          >
            <button
              type="button"
              aria-label={`Perbesar foto: ${item.title}`}
              className="absolute inset-0 z-10 h-full w-full rounded-3xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActiveIndex(index);
              }}
            >
              <span className="sr-only">Buka foto {item.title}</span>
            </button>
            <Image
              src={item.imageUrl}
              alt={item.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">{item.category}</p>
              <h2 className="mt-2 font-serif text-2xl text-white">{item.title}</h2>
              <p className="mt-2 text-xs font-medium text-white/75">Klik untuk melihat foto</p>
            </div>
          </li>
        ))}
      </ul>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm sm:p-8"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Foto: ${activeItem.title}`}
            className="relative flex h-[82dvh] max-h-[900px] w-full max-w-6xl flex-col"
          >
            <div className="mb-3 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
                  {activeItem.category} · {activeIndex + 1} / {items.length}
                </p>
                <h2 className="mt-1 font-serif text-xl sm:text-2xl">{activeItem.title}</h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label="Tutup foto"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {items.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Foto sebelumnya"
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-4"
                >
                  <ChevronIcon direction="previous" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Foto berikutnya"
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-4"
                >
                  <ChevronIcon direction="next" />
                </button>
              </>
            ) : null}
          </section>
        </div>
      ) : null}
    </>
  );
}
