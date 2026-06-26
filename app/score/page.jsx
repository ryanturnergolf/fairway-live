import Nav from '@/components/Nav';
import { holes } from '@/components/Data';

export default function Score() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Nav />
      <section className="mx-auto max-w-3xl px-5 py-8">
        <div className="mb-6 rounded-[2rem] bg-fairway-500 p-6 text-white">
          <p className="text-sm font-bold uppercase tracking-widest opacity-80">Player Scorecard</p>
          <h1 className="mt-2 text-3xl font-black">Dylan Fiveash</h1>
          <p className="mt-1 opacity-90">Bluffton University • Group 1 • Starting Hole 1</p>
        </div>
        <div className="rounded-[2rem] bg-white p-4 text-neutral-950">
          {holes.slice(0, 9).map((h, idx) => (
            <div key={h.hole} className="mb-3 flex items-center justify-between rounded-2xl border bg-[#f3f5f1] p-4">
              <div>
                <div className="text-sm font-bold text-neutral-500">Hole {h.hole} • Par {h.par} • {h.yards} yds</div>
                <div className="text-xl font-black">Score</div>
              </div>
              <div className="flex gap-2">
                {[h.par - 1, h.par, h.par + 1].map(score => (
                  <button key={score} className={`h-11 w-11 rounded-xl font-black ${score === h.par ? 'bg-fairway-500 text-white' : 'bg-white'}`}>{score}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
