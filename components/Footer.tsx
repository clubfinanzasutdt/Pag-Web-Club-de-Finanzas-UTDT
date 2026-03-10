import { Instagram, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import { clubLinks } from "@/content/links";

type FooterProps = {
  dictionary: Dictionary;
};

export default function Footer({ dictionary }: FooterProps) {
  const socialLinks = [
    {
      href: clubLinks.instagram,
      label: dictionary.common.instagram,
      icon: Instagram
    },
    {
      href: clubLinks.linkedin,
      label: dictionary.common.linkedin,
      icon: Linkedin
    },
    {
      href: clubLinks.x,
      label: dictionary.common.x,
      icon: Twitter
    },
    {
      href: clubLinks.email,
      label: dictionary.common.email,
      icon: Mail
    },
    {
      href: clubLinks.whatsapp,
      label: dictionary.common.whatsapp,
      icon: MessageCircle
    }
  ];

  return (
    <footer className="relative z-10 border-t border-zinc-800 bg-black/60">
      <div className="site-container flex flex-col gap-8 py-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-lg font-semibold text-white">
            {dictionary.site.name}
          </div>
          <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-400">
            {dictionary.footer.tagline}
          </p>
          <p className="mt-4 text-xs text-zinc-500">
            © 2026 {dictionary.site.name}
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 hover:border-zinc-700 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="text-xs text-zinc-500">{dictionary.footer.builtWith}</div>
        </div>
      </div>
    </footer>
  );
}
