"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function QuickBooking() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const checkIn = String(data.get("checkIn") || "");
    const checkOut = String(data.get("checkOut") || "");
    const guests = Number(data.get("guests") || 0);
    const phone = String(data.get("phone") || "");

    if (!checkIn || !checkOut || !data.get("roomType") || guests < 1 || phone.trim().length < 7) {
      setSuccess(false);
      setError("Please complete all required fields with a valid phone number.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setSuccess(false);
      setError("Check-out date must be after check-in date.");
      return;
    }

    setError("");
    setSuccess(true);
    event.currentTarget.reset();
  }

  return (
    <Container className="relative z-10 -mt-24">
      <form onSubmit={onSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-lift">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-cream text-accent">
            <Icon name="CalendarCheck" className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-primary">Quick Booking Inquiry</h2>
            <p className="text-sm text-muted">Demo form with frontend validation. Reception confirms final availability.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <Field label="Check-in date" name="checkIn" type="date" />
          <Field label="Check-out date" name="checkOut" type="date" />
          <Field label="Guests" name="guests" type="number" min="1" />
          <label className="grid gap-2 text-sm font-semibold text-secondary">
            Room type
            <select name="roomType" className="focus-ring h-12 rounded-md border border-slate-300 px-3 text-sm">
              <option value="">Select</option>
              <option>Standard Double Room</option>
              <option>Standard Triple Room</option>
              <option>Family Room</option>
              <option>2-Bedroom Unit</option>
              <option>4-Bedroom Unit</option>
            </select>
          </label>
          <Field label="Phone number" name="phone" type="tel" />
          <Button type="submit" className="self-end">
            Submit
          </Button>
        </div>
        {error ? <p className="mt-4 text-sm font-semibold text-red-600">{error}</p> : null}
        {success ? (
          <p className="mt-4 rounded-md bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">
            Thank you! Your booking inquiry has been received. Our reception team will contact you soon.
          </p>
        ) : null}
      </form>
    </Container>
  );
}

function Field(props: { label: string; name: string; type: string; min?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-secondary">
      {props.label}
      <input {...props} className="focus-ring h-12 rounded-md border border-slate-300 px-3 text-sm" />
    </label>
  );
}
