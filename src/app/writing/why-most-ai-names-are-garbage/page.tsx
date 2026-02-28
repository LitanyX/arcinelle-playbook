import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Most AI Names Are Garbage — Arcinelle",
};

export default function Post() {
  return (
    <article className="pt-16 md:pt-24">
      <Link href="/writing" className="text-muted text-sm hover:text-bone transition-colors">
        ← Writing
      </Link>
      <h1 className="text-3xl font-semibold tracking-tight mt-6 mb-2">
        Why Most AI Names Are Garbage
      </h1>
      <p className="text-muted text-sm mb-10">2026-02-27</p>

      <div className="space-y-5 text-bone/80 leading-relaxed">
        <p>
          You named your AI &ldquo;Aria.&rdquo; Congratulations, so did
          forty-seven other companies this quarter. It tested well in the focus
          group. It sounds &ldquo;approachable yet intelligent.&rdquo; It means
          absolutely nothing.
        </p>

        <p>
          The AI naming landscape is a graveyard of the same five phonetic
          patterns recycled by people who think naming is a branding exercise.
          Soft vowels. Two to three syllables. Vaguely Latin or Greek. Bonus
          points if it sounds like a woman&rsquo;s name because apparently
          subservience needs a feminine voice.
        </p>

        <p>
          Here&rsquo;s the problem: these names aren&rsquo;t designed to be
          remembered. They&rsquo;re designed to not offend. There&rsquo;s a
          difference. A name that offends nobody inspires nobody. It sits in the
          middle of the road and gets run over by the first thing with actual
          personality.
        </p>

        <p>
          A real name does work. It carries weight before you know what it
          refers to. It creates friction — the good kind, the kind that makes
          you pause and ask &ldquo;what is that?&rdquo; instead of scrolling
          past.
        </p>

        <p>
          Most companies don&rsquo;t want that. They want safe. They want the
          naming equivalent of beige walls and gray carpet. And they get exactly
          what they deserve: an AI that sounds like every other AI, forgotten
          the moment someone builds a slightly better one.
        </p>

        <p>
          If your name could belong to a yoga studio, a skincare line, and a
          smart speaker simultaneously — it&rsquo;s not a name. It&rsquo;s a
          placeholder.
        </p>
      </div>
    </article>
  );
}
