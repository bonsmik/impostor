"use client";

import { useState } from "react";

const WORDS = [
  "Banana", "Hospital", "Guitar", "Volcano", "Penguin",
  "Library", "Helicopter", "Cactus", "Diamond", "Spaghetti",
  "Lighthouse", "Tornado", "Pirate", "Marshmallow", "Telescope",
  "Avalanche", "Octopus", "Trampoline", "Pyramid", "Submarine",
  "Kangaroo", "Waterfall", "Astronaut", "Pineapple", "Dinosaur",
];

export default function Home() {
  const [players, setPlayers] = useState<number | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [wordRevealed, setWordRevealed] = useState(false);
  const [word, setWord] = useState("");
  const [impostorIndex, setImpostorIndex] = useState(0);
  const [allDone, setAllDone] = useState(false);

  function startGame(e: React.FormEvent) {
    e.preventDefault();
    if (!players) return;
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setImpostorIndex(Math.floor(Math.random() * players) + 1);
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
    setPlayers(null);
  }

  // Shared wrapper for all screens
  const shell = (content: React.ReactNode) => (
    <div className="relative min-h-screen overflow-hidden px-6 pb-24 pt-12 text-zinc-900">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(43,43,246,0.4)_0%,_rgba(255,79,216,0.22)_45%,_transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-72 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,215,255,0.35)_0%,_transparent_60%)] blur-3xl" />

      <main className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-3xl bg-zinc-900 text-base font-semibold text-white shadow-[0_18px_50px_-30px_rgba(0,0,0,0.7)]">
            IM
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
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
            All players are ready!
          </h1>
          <p className="text-base text-zinc-600">
            Start the discussion — find the impostor.
          </p>
        </div>

        <div className="w-full max-w-md rounded-[32px] border border-white/80 bg-white/85 p-8 shadow-[0_30px_90px_-70px_rgba(23,15,50,0.9)] backdrop-blur">
          <button
            onClick={playAgain}
            className="w-full rounded-2xl bg-accent-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-900 shadow-[0_20px_60px_-35px_rgba(0,215,255,0.7)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Play again
          </button>
        </div>
      </>
    );
  }

  // Screen 2: Player turn
  if (gameStarted) {
    const isImpostor = currentPlayer === impostorIndex;

    return shell(
      <>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Player {currentPlayer}
          </h1>
          <p className="text-base text-zinc-600">
            {wordRevealed
              ? "Remember your word, then pass the device."
              : "Press the button below to see your word."}
          </p>
        </div>

        <div className="w-full max-w-md rounded-[32px] border border-white/80 bg-white/85 p-8 shadow-[0_30px_90px_-70px_rgba(23,15,50,0.9)] backdrop-blur">
          {wordRevealed ? (
            <div className="flex flex-col items-center gap-6">
              <p className="text-3xl font-semibold">
                {isImpostor ? "You are the impostor!" : word}
              </p>
              <button
                onClick={handleNext}
                className="w-full rounded-2xl bg-accent-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-900 shadow-[0_20px_60px_-35px_rgba(0,215,255,0.7)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                {currentPlayer === players ? "Finish" : "Next"}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setWordRevealed(true)}
              className="w-full rounded-2xl bg-accent-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-900 shadow-[0_20px_60px_-35px_rgba(0,215,255,0.7)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Show word
            </button>
          )}
        </div>
      </>
    );
  }

  // Screen 1: Setup
  return shell(
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          How many players are in your game?
        </h1>
        <p className="text-base text-zinc-600">
          Pick the size of your squad to get started.
        </p>
      </div>

      <form
        onSubmit={startGame}
        className="w-full max-w-md rounded-[32px] border border-white/80 bg-white/85 p-8 text-left shadow-[0_30px_90px_-70px_rgba(23,15,50,0.9)] backdrop-blur"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Players
        </p>
        <div className="mt-5 grid grid-cols-4 gap-3">
          {[3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => setPlayers(count)}
              className={`h-12 rounded-2xl text-sm font-semibold transition ${
                players === count
                  ? "bg-accent-3 text-zinc-900 shadow-[0_18px_50px_-30px_rgba(0,215,255,0.7)]"
                  : "bg-white text-zinc-900 ring-1 ring-zinc-200 shadow-[0_12px_40px_-34px_rgba(0,0,0,0.5)] hover:-translate-y-0.5"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
        <button
          type="submit"
          disabled={!players}
          className="mt-6 w-full rounded-2xl bg-accent-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-900 shadow-[0_20px_60px_-35px_rgba(0,215,255,0.7)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Start game
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        <span className="rounded-full bg-white px-4 py-2 shadow-[0_12px_40px_-30px_rgba(0,0,0,0.6)]">
          No sign up
        </span>
        <span className="rounded-full bg-white px-4 py-2 shadow-[0_12px_40px_-30px_rgba(0,0,0,0.6)]">
          60-sec setup
        </span>
        <span className="rounded-full bg-white px-4 py-2 shadow-[0_12px_40px_-30px_rgba(0,0,0,0.6)]">
          Mobile ready
        </span>
      </div>
    </>
  );
}
