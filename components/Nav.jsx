import Link from 'next/link';
import { Flag } from 'lucide-react';

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-fairway-500 text-white">
            <Flag size={21} />
          </div>
          <div>
            <div className="text-lg font-black tracking-tight">FairwayLive</div>
            <div className="text-xs text-neutral-400">College golf scoring</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          <Link href="/leaderboard" className="hover:text-white">Leaderboard</Link>
          <Link href="/score" className="hover:text-white">Player App</Link>
          <Link href="/admin" className="hover:text-white">Admin</Link>
          <Link href="/login" className="rounded-full bg-white px-4 py-2 font-semibold text-neutral-950 hover:bg-fairway-100">Login</Link>
        </nav>
      </div>
    </header>
  );
}
