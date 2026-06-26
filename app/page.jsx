import Link from 'next/link';
import Nav from '@/components/Nav';
import { ArrowRight, BarChart3, ShieldCheck, Smartphone, Trophy, Users, Wifi } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f5f1]">
      <Nav />
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,164,71,.35),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,.12),transparent_25%)]" />
        <div className="grain absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-fairway-500/40 bg-fairway-500/10 px-4 py-2 text-sm text-fairway-100">
              Live scoring built for college golf tournaments
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Modern live scoring for every college golf event.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              FairwayLive gives players a fast mobile scorecard, coaches a powerful tournament dashboard, and parents a polished live leaderboard experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/leaderboard" className="inline-flex items-center gap-2 rounded-full bg-fairway-500 px-6 py-3 font-bold text-white hover:bg-fairway-600">
                View live demo <ArrowRight size={18} />
              </Link>
              <Link href="/admin" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold text-white hover:bg-white/10">
                Open admin dashboard
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-soft backdrop-blur">
            <div className="rounded-[1.5rem] bg-[#f3f5f1] p-5 text-neutral-950">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-fairway-700">Live Team Board</p>
                  <h3 className="text-2xl font-black">DAM Invitational</h3>
                </div>
                <div className="rounded-full bg-fairway-100 px-3 py-1 text-sm font-bold text-fairway-700">LIVE</div>
              </div>
              {['Bluffton University', 'Heidelberg', 'Ohio Northern', 'Capital'].map((team, idx) => (
                <div key={team} className="mb-3 flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950 text-xs font-black text-white">{idx + 1}</div>
                    <div>
                      <div className="font-extrabold">{team}</div>
                      <div className="text-sm text-neutral-500">Thru {15 - idx}</div>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-fairway-700">+{4 + idx * 3}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-16 md:grid-cols-3">
        {[
          [Smartphone, 'Player scoring app', 'Simple hole-by-hole score entry that works on any phone.'],
          [BarChart3, 'Live leaderboards', 'Team and individual standings update as scores come in.'],
          [ShieldCheck, 'Admin control', 'Override scores, manage pairings, logos, tee times, and yardages.'],
          [Users, 'College team scoring', 'Built for 4-count-5, multi-day events, and college formats.'],
          [Wifi, 'Real-time ready', 'Designed for live syncing and offline score recovery.'],
          [Trophy, 'Event-ready results', 'Clean final standings for coaches, parents, and athletic departments.'],
        ].map(([Icon, title, text]) => (
          <div key={title} className="score-card p-7">
            <Icon className="mb-5 text-fairway-600" size={32} />
            <h3 className="text-xl font-black">{title}</h3>
            <p className="mt-3 text-neutral-600">{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
