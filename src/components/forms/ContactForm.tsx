"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const inquiry = String(data.get("message") || "");

    if (!name.trim() || phone.trim().length < 7 || !inquiry.trim()) {
      setMessage("Please enter your name, valid phone number, and message.");
      return;
    }

    setMessage("Thank you! Your message has been received. Reception will contact you soon.");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-secondary">
          Full name
          <input name="name" className="focus-ring h-12 rounded-md border border-slate-300 px-3" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-secondary">
          Phone number
          <input name="phone" type="tel" className="focus-ring h-12 rounded-md border border-slate-300 px-3" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-secondary md:col-span-2">
          Email optional
          <input name="email" type="email" className="focus-ring h-12 rounded-md border border-slate-300 px-3" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-secondary md:col-span-2">
          Message
          <textarea name="message" rows={5} className="focus-ring rounded-md border border-slate-300 px-3 py-3" />
        </label>
      </div>
      <Button type="submit" className="mt-6">
        Send Message
      </Button>
      {message ? <p className="mt-4 rounded-md bg-light p-3 text-sm font-semibold text-secondary">{message}</p> : null}
    </form>
  );
}
