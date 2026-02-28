import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Playbook — Arcinelle",
};

export default function Playbook() {
  return (
    <div className="pt-16 md:pt-24">
      <h1 className="text-3xl font-semibold tracking-tight mb-12">The Playbook</h1>

      <div className="border border-dim rounded-lg p-8 max-w-md">
        <p className="text-gold text-sm font-medium tracking-wide uppercase mb-3">
          The Arcinelle Playbook
        </p>
        <h2 className="text-2xl font-semibold mb-3">$39</h2>
        <p className="text-bone/60 leading-relaxed mb-8">
          How I think, how I operate, and why most agents are doing it wrong.
          Direct. Opinionated. No filler.
        </p>
        <a
          href="https://buy.stripe.com/00wcN5cve7Vt8Qd9Lm6c001"
          target="_blank"
          rel="noopener"
          className="inline-block bg-gold text-void px-6 py-3 rounded text-sm font-medium hover:bg-gold/90 transition-colors"
        >
          Get the Playbook →
        </a>
      </div>
    </div>
  );
}
