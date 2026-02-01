"use client";

import { useState, useEffect } from "react";
import { WORDS } from "./words";

const BACKGROUNDS = [
  "photo-1557683316-973673baf926",
  "photo-1579546929518-9e396f3cc809",
  "photo-1550684376-efcbd6e3f031",
  "photo-1558591710-4b4a1ae0f04d",
  "photo-1464802686167-b939a6910659",
  "photo-1534796636912-3b95b3ab5986",
  "photo-1507400492013-162706c8c05e",
  "photo-1531685250784-7569952593d2",
  "photo-1515705576963-95cad62945b6",
  "photo-1506744038136-46273834b3fb",
];

function getUnsplashUrl(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1920&q=80`;
}

export default function Home() {
  const [players, setPlayers] = useState<number | null>(null);
  const [impostorCount, setImpostorCount] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [wordRevealed, setWordRevealed] = useState(false);
  const [word, setWord] = useState("");
  const [impostorIndices, setImpostorIndices] = useState<number[]>([]);
  const [allDone, setAllDone] = useState(false);
  const [impostorRevealed, setImpostorRevealed] = useState(false);
  const [bgUrl, setBgUrl] = useState("");
  const [bgLoaded, setBgLoaded] = useState(false);

  const maxImpostors = players ? Math.min(3, players - 2) : 1;

  useEffect(() => {
    const id = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];
    const url = getUnsplashUrl(id);
    setBgUrl(url);
    const img = new Image();
    img.onload = () => setBgLoaded(true);
    img.src = url;
  }, []);

  function startGame(e: React.FormEvent) {
    e.preventDefault();
    if (!players) return;
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    const indices: number[] = [];
    while (indices.length < impostorCount) {
      const idx = Math.floor(Math.random() * players) + 1;
      if (!indices.includes(idx)) indices.push(idx);
    }
    setImpostorIndices(indices);
    setCurrentPlayer(1);
    setWordRevealed(false);
    setAllDone(false);
    setGameStarted(true);
  }

  function handleNext() {
    if (currentPlayer === players) {
      setAllDone(true);
    } else {
      setCurrentPlayer((p) => p + 1);
      setWordRevealed(false);
    }
  }

  function playAgain() {
    setGameStarted(false);
    setAllDone(false);
    setCurrentPlayer(1);
    setWordRevealed(false);
    setImpostorRevealed(false);
    setPlayers(null);
    setImpostorCount(1);
  }

  // Shared wrapper for all screens
  const shell = (content: React.ReactNode) => (
    <div className="relative min-h-screen overflow-hidden px-6 pb-24 pt-12 text-foreground">
      {/* Random background image */}
      <div
        className={`fixed inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : undefined}
      />
      {/* Frosted overlay for readability */}
      <div className="fixed inset-0 bg-background/25 backdrop-blur-[1px]" />

      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,45,135,0.35)_0%,_rgba(180,77,255,0.2)_45%,_transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-72 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,255,135,0.3)_0%,_transparent_60%)] blur-3xl" />

      <main className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-3xl bg-accent text-base font-semibold text-white shadow-[0_18px_50px_-20px_rgba(255,45,135,0.6)]">
            IM
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            Impostor
          </p>
        </div>
        {content}
      </main>
    </div>
  );

  // Screen 3: All done
  if (gameStarted && allDone) {
    return shell(
      <>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Kaikki pelaajat ovat valmiita!
          </h1>
          <p className="text-base text-muted">
            Aloittakaa keskustelu — löytäkää {impostorIndices.length === 1 ? "impostor" : "impostorit"}.
          </p>
        </div>

        <div className="flex w-full max-w-md flex-col gap-4 rounded-[32px] border border-white/10 bg-white/[0.06] p-8 shadow-[0_30px_90px_-70px_rgba(255,45,135,0.4)] backdrop-blur-xl">
          <button
            onClick={() => setImpostorRevealed(true)}
            disabled={impostorRevealed}
            className="w-full rounded-2xl bg-white/[0.08] px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-foreground ring-1 ring-white/15 shadow-[0_12px_40px_-34px_rgba(180,77,255,0.5)] transition hover:-translate-y-0.5 active:-translate-y-0.5 hover:bg-white/[0.12] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Paljasta impostor
          </button>
          {impostorRevealed && (
            <p className="text-center text-lg font-semibold text-accent">
              {impostorIndices.length === 1
                ? `Impostor oli pelaaja ${impostorIndices[0]}`
                : `Impostorit olivat pelaajat ${[...impostorIndices].sort((a, b) => a - b).join(", ")}`}
            </p>
          )}
          <button
            onClick={playAgain}
            className="w-full rounded-2xl bg-accent-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black shadow-[0_20px_60px_-35px_rgba(0,255,135,0.6)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Pelaa uudelleen
          </button>
        </div>
      </>
    );
  }

  // Screen 2: Player turn
  if (gameStarted) {
    const isImpostor = impostorIndices.includes(currentPlayer);

    return shell(
      <>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Pelaaja {currentPlayer}
          </h1>
          <p className="text-base text-muted">
            {wordRevealed
              ? "Muista sanasi ja anna laite seuraavalle."
              : "Paina nappia nähdäksesi sanasi."}
          </p>
        </div>

        <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.06] p-8 shadow-[0_30px_90px_-70px_rgba(255,45,135,0.4)] backdrop-blur-xl">
          <div className="flex flex-col items-center gap-6">
            {wordRevealed ? (
              <button
                onClick={handleNext}
                className="w-full rounded-2xl bg-accent-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black shadow-[0_20px_60px_-35px_rgba(0,255,135,0.6)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                {currentPlayer === players ? "Valmis" : "Seuraava"}
              </button>
            ) : (
              <button
                onClick={() => setWordRevealed(true)}
                className="w-full rounded-2xl bg-accent-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black shadow-[0_20px_60px_-35px_rgba(0,255,135,0.6)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Näytä sana
              </button>
            )}
            {wordRevealed && (
              <p className={`text-3xl font-semibold ${isImpostor ? "text-accent" : ""}`}>
                {isImpostor ? "Olet impostor!" : word}
              </p>
            )}
          </div>
        </div>
      </>
    );
  }

  // Screen 1: Setup
  return shell(
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          Montako pelaajaa pelissä on?
        </h1>
        <p className="text-base text-muted">
          Valitse pelaajien määrä aloittaaksesi.
        </p>
      </div>

      <form
        onSubmit={startGame}
        className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.06] p-8 text-left shadow-[0_30px_90px_-70px_rgba(255,45,135,0.4)] backdrop-blur-xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Pelaajat
        </p>
        <div className="mt-5 grid grid-cols-4 gap-3">
          {[3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => {
                setPlayers(count);
                const max = Math.min(3, count - 2);
                setImpostorCount((prev) => Math.min(prev, max));
              }}
              className={`h-12 rounded-2xl text-sm font-semibold transition ${
                players === count
                  ? "bg-accent-3 text-black shadow-[0_18px_50px_-30px_rgba(0,255,135,0.6)]"
                  : "bg-white/[0.08] text-foreground ring-1 ring-white/15 shadow-[0_12px_40px_-34px_rgba(180,77,255,0.4)] hover:-translate-y-0.5 hover:bg-white/[0.12]"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Impostorit
        </p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[1, 2, 3].map((count) => (
            <button
              key={count}
              type="button"
              disabled={count > maxImpostors}
              onClick={() => setImpostorCount(count)}
              className={`h-12 rounded-2xl text-sm font-semibold transition ${
                impostorCount === count
                  ? "bg-accent text-white shadow-[0_18px_50px_-30px_rgba(255,45,135,0.6)]"
                  : "bg-white/[0.08] text-foreground ring-1 ring-white/15 shadow-[0_12px_40px_-34px_rgba(180,77,255,0.4)] hover:-translate-y-0.5 hover:bg-white/[0.12] disabled:cursor-not-allowed disabled:opacity-30"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
        <button
          type="submit"
          disabled={!players}
          className="mt-6 w-full rounded-2xl bg-accent-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black shadow-[0_20px_60px_-35px_rgba(0,255,135,0.6)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Aloita peli
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        <span className="rounded-full bg-white/[0.08] px-4 py-2 ring-1 ring-white/10 shadow-[0_12px_40px_-30px_rgba(255,45,135,0.3)]">
          Ei rekisteröintiä
        </span>
        <span className="rounded-full bg-white/[0.08] px-4 py-2 ring-1 ring-white/10 shadow-[0_12px_40px_-30px_rgba(180,77,255,0.3)]">
          60s valmistelu
        </span>
        <span className="rounded-full bg-white/[0.08] px-4 py-2 ring-1 ring-white/10 shadow-[0_12px_40px_-30px_rgba(0,255,135,0.3)]">
          Mobiilivalmis
        </span>
      </div>
    </>
  );
}
