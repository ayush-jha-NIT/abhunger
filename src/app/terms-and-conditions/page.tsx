import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Important information about AB Hunger Station online menu, ordering and reservation requests.",
};

export default function TermsPage() {
  return (
    <main className="site-container mx-auto max-w-4xl px-5 py-14">
      <h1 className="mb-6 font-serif text-4xl font-bold">Terms &amp; Conditions</h1>
      <p>This website provides information about AB Hunger Station and prepares customer requests for the restaurant.</p>
      <h2 className="mb-2 mt-7 font-serif text-2xl font-semibold">Orders and payments</h2>
      <p>Checkout creates a prefilled WhatsApp inquiry, not a confirmed order. The customer must send the message, and the restaurant must accept it. Payment is coordinated directly with the restaurant through Cash or UPI; this website does not collect online payments.</p>
      <h2 className="mb-2 mt-7 font-serif text-2xl font-semibold">Menu and delivery</h2>
      <p>Menu items, availability, prices, delivery coverage, any delivery charges, and the final amount are subject to restaurant confirmation. Until the restaurant approves its menu, displayed prices are design-reference examples rather than a commercial offer.</p>
      <h2 className="mb-2 mt-7 font-serif text-2xl font-semibold">Bookings and events</h2>
      <p>Table and event forms send requests only. Availability, time, guest capacity, decoration options, costs, and booking acceptance require an explicit response from the restaurant.</p>
      <h2 className="mb-2 mt-7 font-serif text-2xl font-semibold">Changes and cancellations</h2>
      <p>Specific cancellation, refund, and modification arrangements must be confirmed directly with the restaurant before payment or acceptance. The site does not promise automatic refunds or instant confirmation.</p>
      <p className="mt-8">For further information, use the <Link className="underline" href="/contact">Contact page</Link>.</p>
      <p className="mt-8 text-sm text-neutral-600">The restaurant owner should review these terms before the public business launch.</p>
    </main>
  );
}
