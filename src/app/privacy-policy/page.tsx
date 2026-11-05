import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AB Hunger Station website handles cart selections and WhatsApp inquiries.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="site-container mx-auto max-w-4xl px-5 py-14">
      <h1 className="mb-6 font-serif text-4xl font-bold">Privacy Policy</h1>
      <p className="mb-5">This website helps customers browse café information, build an order, and prepare inquiries to send through WhatsApp.</p>
      <h2 className="mb-2 mt-7 font-serif text-2xl font-semibold">Information you provide</h2>
      <p>When you complete a contact, booking, or checkout form, the details are used to create a WhatsApp message. The message is not sent until you take the final action in WhatsApp. WhatsApp processes messages under its own privacy policy.</p>
      <h2 className="mb-2 mt-7 font-serif text-2xl font-semibold">Shopping cart</h2>
      <p>Cart item identifiers and quantities are stored in your browser’s local storage so your selections remain available when you return. This website does not require an account to browse the menu.</p>
      <h2 className="mb-2 mt-7 font-serif text-2xl font-semibold">Third-party services</h2>
      <p>Opening WhatsApp, social links, or Google Maps transfers you to those services. Their privacy practices are separate from this website.</p>
      <h2 className="mb-2 mt-7 font-serif text-2xl font-semibold">Questions</h2>
      <p>Use the <Link className="underline" href="/contact">Contact page</Link> to reach the restaurant through its verified contact channel when available.</p>
      <p className="mt-8 text-sm text-neutral-600">This notice describes the website’s current implemented features; it should be reviewed by the restaurant owner before public business launch.</p>
    </main>
  );
}
