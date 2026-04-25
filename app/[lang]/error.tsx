"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="section-shell">
      <div className="site-container">
        <div className="surface-card max-w-2xl p-8">
          <span className="section-eyebrow">Error</span>
          <h1 className="mt-4 text-3xl font-semibold text-white">
            Something went wrong while loading this page.
          </h1>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            {error.message || "Unexpected application error."}
          </p>
          <button
            type="button"
            onClick={reset}
            className="primary-button mt-6"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
