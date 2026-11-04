import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-start justify-center px-6">
      <h1 className="font-serif text-4xl font-bold">Page not found</h1>
      <p className="mt-3 leading-relaxed">This page has not been published yet.</p>
      <Link className="mt-6 font-semibold text-brand-orange underline" href="/">
        Return home
      </Link>
    </main>
  );
}
