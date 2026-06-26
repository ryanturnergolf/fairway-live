import Nav from '@/components/Nav';
import { players, teams } from '@/components/Data';

export default function Leaderboard() {
  return (
    <main className="min-h-screen bg-[#f3f5f1]">
      <Nav />
      <section className="bg-neutral-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-widest text-fairway-500">Live Scoring</p>
          <h1 className="mt-2 text-4xl font-black">2026 DAM Invitational</h1>
          <p className="mt-2 text-neutral-400">Sycamore Springs Golf Course • Round 1 • Team Stroke Play</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_.9fr]">
        <div className="score-card overflow-hidden">
          <div className="border-b bg-white p-6">
            <h2 className="text-2xl font-black">Team Leaderboard</h2>
          </div>
          <div className="divide-y">
            {teams.map((team) => (
              <div key={team.name} className="grid grid-cols-[50px_1fr_70px_70px_70px] items-center gap-3 p-5 hover:bg-fairway-50">
                <div className="text-xl font-black">{team.place}</div>
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${team.color} text-xs font-black text-white`}>{team.logo}</div>
                  <div>
                    <div className="font-black">{team.name}</div>
                    <div className="text-sm text-neutral-500">Counting 4 of 5</div>
                  </div>
                </div>
                <div className="text-right font-bold">{team.today}</div>
                <div className="text-right text-xl font-black text-fairway-700">{team.total}</div>
                <div className="text-right text-sm text-neutral-500">{team.thru}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="score-card overflow-hidden">
          <div className="border-b bg-white p-6">
            <h2 className="text-2xl font-black">Individual Leaderboard</h2>
          </div>
          <div className="divide-y">
            {players.map((player) => (
              <div key={player.name} className="grid grid-cols-[42px_1fr_60px_60px] items-center gap-3 p-5 hover:bg-fairway-50">
                <div className="font-black">{player.place}</div>
                <div>
                  <div className="font-black">{player.name}</div>
                  <div className="text-sm text-neutral-500">{player.team} • Thru {player.thru}</div>
                </div>
                <div className="text-right font-bold">{player.score}</div>
                <div className="text-right text-xl font-black text-fairway-700">{player.total}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
