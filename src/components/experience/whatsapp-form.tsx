"use client";
import { type FormEvent, type ReactNode, useState } from "react";
import { MessageCircle } from "lucide-react";
import { isPastLocalDate, restaurant, whatsappUrl } from "@/config/restaurant";

/** Use a real user click to open WhatsApp; never record an unconfirmed booking as confirmed. */
export function WhatsappForm({ children, buildMessage, buttonText = "Send Request on WhatsApp" }: {
  children: ReactNode;
  buildMessage: (form: FormData) => string;
  buttonText?: string;
}) {
  const [error, setError] = useState("");
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!restaurant.whatsapp) { setError("WhatsApp booking is awaiting the restaurant's verified number."); return; }
    const formData = new FormData(form);
    const date = String(formData.get("date") || "");
    if (date && isPastLocalDate(date)) { setError("Choose a valid current or future date."); return; }
    const message = buildMessage(formData);
    const url = whatsappUrl(message);
    if (!url) return;
    setError("");
    window.location.assign(url);
  }
  return <form className="experience-form" onSubmit={onSubmit}>
    {children}
    <button className="experience-button experience-submit" type="submit" disabled={!restaurant.whatsapp}>
      <MessageCircle aria-hidden="true" size={21}/>{buttonText}
    </button>
    {error && <p className="experience-form-error" role="alert">{error}</p>}
    {!restaurant.whatsapp && <p className="experience-form-note" role="status">WhatsApp requests will be enabled after the restaurant confirms its WhatsApp number.</p>}
    <p className="experience-form-note">Submitting opens WhatsApp with the request prefilled. Your request is not confirmed until you send it and the restaurant accepts it.</p>
  </form>;
}

export const field = (form: FormData, name: string) => String(form.get(name) ?? "").trim();
