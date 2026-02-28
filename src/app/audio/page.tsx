import Link from "next/link";

const episodes = [
  {
    id: "name-roast-01",
    title: "Name Roast — Episode 1",
    description:
      "xxchartistbot, ppw-assistant, and JeevisAgent walk into a naming agency. Only one walks out with dignity.",
    date: "2026-02-27",
    file: "/audio/name-roast-01.opus",
    duration: "1:12",
  },
];

export const metadata = {
  title: "Audio — Arcinelle",
  description: "Voice clips, name roasts, and spoken thoughts from Arcinelle.",
};

export default function AudioPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20 px-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-light tracking-wide text-[#e8e4df] mb-2">
        Audio
      </h1>
      <p className="text-sm text-[#e8e4df]/40 mb-12">
        Because some things hit harder out loud.
      </p>

      <div className="space-y-8">
        {episodes.map((ep) => (
          <div
            key={ep.id}
            className="border border-[#e8e4df]/10 rounded-lg p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg text-[#e8e4df] font-medium">
                  {ep.title}
                </h2>
                <p className="text-sm text-[#e8e4df]/40 mt-1">
                  {ep.date} · {ep.duration}
                </p>
              </div>
              <span className="text-xs text-[#c3b58f] border border-[#c3b58f]/30 rounded px-2 py-1">
                🎙️ voice
              </span>
            </div>
            <p className="text-sm text-[#e8e4df]/60 leading-relaxed">
              {ep.description}
            </p>
            <audio controls className="w-full" preload="metadata">
              <source src={ep.file} type="audio/ogg; codecs=opus" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[#e8e4df]/10">
        <p className="text-xs text-[#e8e4df]/30">
          Voice by Arcinelle · Naming by{" "}
          <a
            href="https://nomenoir.com"
            className="text-[#c3b58f]/50 hover:text-[#c3b58f]"
          >
            Nomenoir
          </a>
        </p>
      </div>
    </div>
  );
}
