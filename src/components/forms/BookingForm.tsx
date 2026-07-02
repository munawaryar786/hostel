"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type Errors = Record<string, string>;

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Errors = {};
    const required = ["fullName", "phone", "checkIn", "checkOut", "guests", "roomType", "rooms"];

    required.forEach((field) => {
      if (!String(data.get(field) || "").trim()) nextErrors[field] = "This field is required.";
    });

    if (String(data.get("phone") || "").trim().length < 7) nextErrors.phone = "Enter a valid phone number.";
    if (Number(data.get("guests") || 0) < 1) nextErrors.guests = "Guests must be at least 1.";
    if (Number(data.get("rooms") || 0) < 1) nextErrors.rooms = "Rooms must be at least 1.";
    if (data.get("checkIn") && data.get("checkOut") && new Date(String(data.get("checkOut"))) <= new Date(String(data.get("checkIn")))) {
      nextErrors.checkOut = "Check-out date must be after check-in date.";
    }
    if (!data.get("consent")) nextErrors.consent = "Please agree to be contacted by reception.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
      form.reset();
    } else {
      setSuccess(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <div className={compact ? "grid gap-4 md:grid-cols-2" : "grid gap-4 md:grid-cols-2"}>
        <Field label="Full name" name="fullName" error={errors.fullName} />
        <Field label="Phone number" name="phone" type="tel" error={errors.phone} />
        {!compact ? <Field label="Email optional" name="email" type="email" /> : null}
        <Field label="Check-in date" name="checkIn" type="date" error={errors.checkIn} />
        <Field label="Check-out date" name="checkOut" type="date" error={errors.checkOut} />
        <Field label="Number of guests" name="guests" type="number" min="1" error={errors.guests} />
        <label className="grid gap-2 text-sm font-semibold text-secondary">
          Room type
          <select name="roomType" className="focus-ring h-12 rounded-md border border-slate-300 px-3">
            <option value="">Select room</option>
            <option>Standard Double Room</option>
            <option>Standard Triple Room</option>
            <option>Family Room</option>
            <option>2-Bedroom Unit</option>
            <option>4-Bedroom Unit</option>
          </select>
          {errors.roomType ? <span className="text-xs text-red-600">{errors.roomType}</span> : null}
        </label>
        <Field label="Number of rooms" name="rooms" type="number" min="1" error={errors.rooms} />
        {!compact ? <Field label="Arrival time optional" name="arrivalTime" type="time" /> : null}
        <label className="grid gap-2 text-sm font-semibold text-secondary md:col-span-2">
          Special request
          <textarea name="request" rows={4} className="focus-ring rounded-md border border-slate-300 px-3 py-3" />
        </label>
        <label className="flex gap-3 text-sm font-semibold text-secondary md:col-span-2">
          <input name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-accent" />
          I agree to be contacted by reception about this demo booking inquiry.
        </label>
        {errors.consent ? <span className="text-xs text-red-600 md:col-span-2">{errors.consent}</span> : null}
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        Send Booking Inquiry
      </Button>
      {success ? (
        <p className="mt-4 rounded-md bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">
          Thank you! Your booking inquiry has been received. Our reception team will contact you soon.
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, name, type = "text", min, error }: { label: string; name: string; type?: string; min?: string; error?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-secondary">
      {label}
      <input name={name} type={type} min={min} className="focus-ring h-12 rounded-md border border-slate-300 px-3" />
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
