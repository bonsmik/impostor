export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden px-6 pb-24 pt-10 text-zinc-900">
      <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(43,43,246,0.4)_0%,_rgba(255,79,216,0.22)_45%,_transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-72 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,215,255,0.35)_0%,_transparent_60%)] blur-3xl" />
      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-900 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)]">
            IM
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-600">
            Impostor
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-zinc-600 md:flex">
          <a href="#features" className="transition hover:text-zinc-900">
            Features
          </a>
          <a href="#creators" className="transition hover:text-zinc-900">
            Creators
          </a>
          <a href="#launch" className="transition hover:text-zinc-900">
            Launch
          </a>
        </nav>
        <button className="rounded-full bg-zinc-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-zinc-800">
          Join Waitlist
        </button>
      </header>

      <main className="relative mx-auto mt-16 flex w-full max-w-6xl flex-col gap-16">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
              The teen app that doesn’t feel like homework
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Build your vibe, share your world, stay legendary.
            </h1>
            <p className="max-w-xl text-lg text-zinc-600">
              Impostor is the social space for creative teens: drop clips, plan
              squad quests, and keep everything in one neon-smooth home base.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_20px_60px_-35px_rgba(0,0,0,0.7)] transition hover:-translate-y-0.5 hover:bg-zinc-800">
                Get the drop
              </button>
              <button className="rounded-full border border-white/70 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:bg-white">
                See the story
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              <span className="rounded-full bg-white px-4 py-2 shadow-[0_12px_40px_-30px_rgba(0,0,0,0.6)]">
                No ads
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-[0_12px_40px_-30px_rgba(0,0,0,0.6)]">
                Private squads
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-[0_12px_40px_-30px_rgba(0,0,0,0.6)]">
                Custom themes
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-10 h-24 w-24 rotate-12 rounded-3xl bg-zinc-900/90 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_50px_-30px_rgba(0,0,0,0.75)]">
              <div className="flex h-full items-center justify-center">
                Live
                <br />
                now
              </div>
            </div>
            <div className="rounded-[32px] border border-white/80 bg-white/80 p-6 shadow-[0_40px_120px_-70px_rgba(23,15,50,0.9)] backdrop-blur">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                <span>Squad stage</span>
                <span>8:45 PM</span>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Tonight
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-snug">
                    Glow room takeover
                  </h2>
                  <p className="mt-2 text-sm text-white/80">
                    Drop your clip, claim your badge, earn the crown.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Creator cards",
                    "Quest boards",
                    "DM vault",
                    "Hype meter",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white px-4 py-4 text-sm font-semibold text-zinc-700 shadow-[0_16px_40px_-34px_rgba(0,0,0,0.6)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-[32px] bg-white/80 p-8 shadow-[0_32px_90px_-70px_rgba(23,15,50,0.8)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Core features
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900">
              Everything you need to keep the energy up.
            </h2>
            <p className="mt-3 text-sm text-zinc-600">
              Modular rooms, theme packs, and a vibe engine that keeps every
              hangout fresh.
            </p>
            <div className="mt-6 grid gap-4 text-sm font-semibold text-zinc-700">
              {[
                "Glow-up profiles with streaks + badges",
                "Live reaction sliders for instant feedback",
                "Challenge drops that auto-score",
                "Pinned playlists for squad nights",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white px-4 py-4 shadow-[0_16px_40px_-34px_rgba(0,0,0,0.6)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[28px] border border-white/80 bg-gradient-to-br from-white via-white/90 to-white/60 p-8 shadow-[0_30px_90px_-70px_rgba(23,15,50,0.9)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Trust + safety
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-900">
                Built with teen-first controls.
              </h3>
              <p className="mt-3 text-sm text-zinc-600">
                Flexible privacy, guardian dashboards, and anti-drama features
                baked in.
              </p>
            </div>
            <div className="rounded-[28px] bg-zinc-900 p-8 text-white shadow-[0_30px_80px_-65px_rgba(0,0,0,0.9)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Launch stats
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {[
                  ["2.4M", "clips shared"],
                  ["18k", "creator squads"],
                  ["94%", "positive reactions"],
                ].map(([value, label]) => (
                  <div key={value}>
                    <p className="text-2xl font-semibold">{value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="creators"
          className="grid gap-6 rounded-[36px] border border-white/70 bg-white/80 p-10 shadow-[0_30px_90px_-70px_rgba(23,15,50,0.9)] backdrop-blur md:grid-cols-[1fr_1fr_auto]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Teen creators
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900">
              Built for the kids who build culture.
            </h2>
            <p className="mt-3 text-sm text-zinc-600">
              Spotlight drops, collab rooms, and custom badge kits for every
              squad.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["⚡", "Streak studio"],
              ["🎧", "Sound sync"],
              ["✨", "Creator vault"],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-700 shadow-[0_16px_40px_-34px_rgba(0,0,0,0.6)]"
              >
                <span className="text-lg">{icon}</span>
                {label}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-800 p-6 text-white shadow-[0_30px_90px_-70px_rgba(0,0,0,0.9)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Drop vibe
            </p>
            <p className="mt-4 text-2xl font-semibold">+32%</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              weekly engagement
            </p>
          </div>
        </section>

        <section
          id="launch"
          className="grid gap-8 rounded-[36px] bg-zinc-900 px-10 py-12 text-white shadow-[0_40px_120px_-80px_rgba(0,0,0,0.9)] lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Launch soon
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Bring your squad. Claim your handle. Be first.
            </h2>
            <p className="text-sm text-white/70">
              Reserve your spot for the drop. We’ll send an invite when your
              city opens.
            </p>
          </div>
          <form className="flex flex-col gap-3 rounded-3xl bg-white/10 p-6">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Email
            </label>
            <input
              type="email"
              placeholder="name@email.com"
              className="h-12 rounded-2xl border border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-white/50"
            />
            <button
              type="submit"
              className="mt-3 rounded-2xl bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-900 transition hover:-translate-y-0.5"
            >
              Join waitlist
            </button>
            <p className="text-xs text-white/60">
              No spam. Just launch updates.
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
