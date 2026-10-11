"use client";

import { useState } from "react";
import ArrowUpRight from "@/components/ui/ArrowUpRight";

export default function ContactForm({ email }) {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Pertanyaan dari ${formData.get("name")}`;
    const body = [
      `Nama: ${formData.get("name")}`,
      `Email: ${formData.get("replyTo")}`,
      "",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMessage("Aplikasi email akan dibuka dengan pesan yang sudah disiapkan.");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-navy">Nama</label>
        <input
          id="contact-name"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-body/60 focus:border-navy focus:ring-2 focus:ring-navy/20"
          placeholder="Nama lengkap"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-navy">Email</label>
        <input
          id="contact-email"
          name="replyTo"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-body/60 focus:border-navy focus:ring-2 focus:ring-navy/20"
          placeholder="nama@email.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-navy">Pesan</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-body/60 focus:border-navy focus:ring-2 focus:ring-navy/20"
          placeholder="Apa yang ingin Anda tanyakan?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-navy-soft focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        Siapkan email <ArrowUpRight className="ml-2 h-4 w-4" />
      </button>
      <p aria-live="polite" className="min-h-5 text-sm text-slate-body">{message}</p>
      <p className="text-xs leading-5 text-slate-body/75">
        Formulir ini menyiapkan email di aplikasi email Anda; pesan tidak dikirim atau disimpan oleh situs.
      </p>
    </form>
  );
}
