import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[80vh] flex-col justify-center pt-24">
      <p className="label">Error 404</p>
      <h1 className="display mt-6 text-[clamp(3rem,10vw,8rem)]">
        No market for <span className="display-i text-lime">this page.</span>
      </h1>
      <p className="mt-6 max-w-md text-paper-dim">The page you were looking for doesn’t exist, or has moved.</p>
      <Link href="/" className="btn-solid mt-10 self-start">
        Back to the homepage <span aria-hidden>→</span>
      </Link>
    </section>
  );
}
