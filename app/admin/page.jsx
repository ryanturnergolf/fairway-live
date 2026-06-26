import Nav from '@/components/Nav';
import { holes } from '@/components/Data';
import { CalendarDays, Clock, Edit3, Flag, Image, Users } from 'lucide-react';

export default function Admin() {
  const items = [
    ['Event Details', 'DAM Invitational, course, dates, rounds, format', CalendarDays],
    ['Teams & Logos', 'Upload logos and manage school details', Image],
    ['Players', 'Rosters, individuals, player PINs', Users],
    ['Pairings', 'Tee times, starting holes, shotgun starts', Clock],
    ['Course Setup', 'Par, yardage, handicap by hole', Flag],
    ['Score Overrides', 'Adjust scores with a full audit log', Edit3],
  ];
  return (
    <main className="min-h-screen bg-[#f3f5f1]">
      <Nav />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold uppercase tracking-widest text-fairway-700">Tournament Admin</p>
            <h1 className="text-4xl font-black">Control Center</h1>
          </div>
          <button className="rounded-full bg-neutral-950 px-5 py-3 font-bold text-white">Publish Event</button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map(([title, text, Icon]) => (
            <div key={title} className="score-card p-6">
              <Icon className="mb-4 text-fairway-600" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 score-card overflow-hidden">
          <div className="border-b p-6"><h2 className="text-2xl font-black">Course Yardages</h2></div>
          <div className="grid grid-cols-2 gap-px bg-neutral-200 md:grid-cols-6">
            {holes.map(h => (
              <div key={h.hole} className="bg-white p-4">
                <div className="text-sm font-bold text-neutral-500">Hole {h.hole}</div>
                <div className="mt-1 text-xl font-black">Par {h.par}</div>
                <div className="text-fairway-700">{h.yards} yds</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
