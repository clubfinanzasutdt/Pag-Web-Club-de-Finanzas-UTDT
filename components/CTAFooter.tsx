import {
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Mic,
  Twitter
} from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import { clubLinks } from "@/content/links";

type CTAFooterProps = {
  dictionary: Dictionary;
};

export default function CTAFooter({ dictionary }: CTAFooterProps) {
  const links = [
    {
      href: clubLinks.whatsapp,
      label: dictionary.common.whatsapp,
      icon: MessageCircle,
      className:
        "border-cyan-500/20 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/15"
    },
    {
      href: clubLinks.instagram,
      label: dictionary.common.instagram,
      icon: Instagram,
      className:
        "border-pink-500/20 bg-pink-500/10 text-pink-200 hover:bg-pink-500/15"
    },
    {
      href: clubLinks.linkedin,
      label: dictionary.common.linkedin,
      icon: Linkedin,
      className:
        "border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10"
    },
    {
      href: clubLinks.x,
      label: dictionary.common.x,
      icon: Twitter,
      className:
        "border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10"
    },
    {
      href: clubLinks.email,
      label: dictionary.common.email,
      icon: Mail,
      className:
        "border-amber-500/20 bg-amber-500/10 text-amber-200 hover:bg-amber-500/15"
    },
    {
      href: clubLinks.suggestSpeaker,
      label: dictionary.common.suggestSpeaker,
      icon: Mic,
      className:
        "border-purple-500/20 bg-purple-500/10 text-purple-200 hover:bg-purple-500/15"
    }
  ];

  return (
    <section className="section-shell pt-0">
      <div className="site-container">
        <div className="glass-card overflow-hidden p-8 sm:p-10">
          <div className="max-w-3xl">
            <span className="section-eyebrow">
              {dictionary.ctaFooter.linksHeading}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {dictionary.ctaFooter.heading}
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">
              {dictionary.ctaFooter.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-4 text-sm font-semibold ${link.className}`}
                >
                  <Icon className="h-5 w-5" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
