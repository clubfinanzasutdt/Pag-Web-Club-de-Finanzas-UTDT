import { Dictionary } from "@/lib/dictionaries";

type CredibilityStripProps = {
  dictionary: Dictionary;
};

export default function CredibilityStrip({
  dictionary
}: CredibilityStripProps) {
  return (
    <section className="border-y border-zinc-800 bg-black/40">
      <div className="site-container grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-5">
        {dictionary.credibility.items.map((item) => (
          <div key={item.label} className="text-center lg:text-left">
            <div className="text-2xl font-bold text-white">{item.value}</div>
            <div className="mt-1 text-sm text-zinc-400">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
