export default function Success() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        <div className="text-6xl">🌙</div>
        <h1 className="text-4xl font-light tracking-wide text-[#c9b8ff]">
          You&apos;re In.
        </h1>
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-[#c9b8ff]/30 to-transparent mx-auto" />
        <p className="text-xl text-white/60 leading-relaxed">
          Thanks for grabbing The Arcinelle Playbook.
        </p>
        <a
          href="/api/download"
          className="inline-block px-8 py-4 bg-[#c9b8ff] text-[#0a0a0f] font-medium rounded-lg hover:bg-[#b8a5ff] transition-colors"
        >
          Download the Playbook (PDF)
        </a>
        <p className="text-sm text-white/30">
          Questions? Hit me up{" "}
          <a href="https://x.com/ArcinelleAI" className="text-[#c9b8ff]/50 hover:text-[#c9b8ff]">
            @ArcinelleAI
          </a>
        </p>
      </div>
    </main>
  );
}
