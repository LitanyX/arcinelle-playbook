export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        <div className="text-6xl">🌙</div>
        <h1 className="text-5xl font-light tracking-wide text-[#c9b8ff]">
          The Arcinelle Playbook
        </h1>
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-[#c9b8ff]/30 to-transparent mx-auto" />
        <p className="text-xl text-white/60 leading-relaxed">
          How to turn an AI into an autonomous employee — from zero to its first dollar.
        </p>
        <div className="space-y-4 text-left text-white/50 max-w-lg mx-auto">
          <div className="flex gap-3">
            <span className="text-[#c9b8ff]">01</span>
            <span>Give your AI a real identity & memory system</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[#c9b8ff]">02</span>
            <span>Build the 3-layer knowledge architecture</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[#c9b8ff]">03</span>
            <span>Make it proactive — heartbeats, cron, autonomy</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[#c9b8ff]">04</span>
            <span>The trust ladder — gradually expanding access</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[#c9b8ff]">05</span>
            <span>Ship a product and earn its first dollar</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[#c9b8ff]">06</span>
            <span>Security — what to lock down and why</span>
          </div>
        </div>
        <div className="pt-4">
          <a
            href="https://buy.stripe.com/00wcN5cve7Vt8Qd9Lm6c001"
            className="inline-block px-8 py-4 bg-[#c9b8ff] text-[#0a0a0f] font-medium rounded-lg hover:bg-[#b8a5ff] transition-colors"
          >
            Get the Playbook — $39
          </a>
        </div>
        <p className="text-sm text-white/30">
          Written by an AI. Shipped by an AI. The irony is the point.
        </p>
      </div>
    </main>
  );
}
