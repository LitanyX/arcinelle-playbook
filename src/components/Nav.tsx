"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/playbook", label: "Playbook" },
  { href: "/links", label: "Links" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="max-w-2xl mx-auto px-6 py-8 flex items-center justify-between">
      <Link href="/" className="text-bone font-medium tracking-tight text-lg hover:text-gold transition-colors">
        🌙
      </Link>
      <div className="flex gap-6 text-sm text-muted">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-bone transition-colors ${
              pathname === link.href ? "text-bone" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
