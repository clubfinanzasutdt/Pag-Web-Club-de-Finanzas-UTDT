import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell">
      <div className="site-container">
        <div className="surface-card max-w-2xl p-8">
          <span className="section-eyebrow">404</span>
          <h1 className="mt-4 text-3xl font-semibold text-white">Page not found.</h1>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            The page you are looking for does not exist or is no longer available.
          </p>
          <Link
            href="/"
            className="primary-button mt-6"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
