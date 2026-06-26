import Nav from '@/components/Nav';

export default function Login() {
  return (
    <main className="min-h-screen bg-[#f3f5f1]">
      <Nav />
      <section className="mx-auto flex max-w-md flex-col px-6 py-16">
        <div className="score-card p-8">
          <p className="font-bold uppercase tracking-widest text-fairway-700">FairwayLive</p>
          <h1 className="mt-2 text-3xl font-black">Sign in</h1>
          <p className="mt-2 text-neutral-600">Demo login screen for admins, coaches, and players.</p>
          <label className="mt-6 block text-sm font-bold">Email or Event Code</label>
          <input className="mt-2 w-full rounded-2xl border px-4 py-3 outline-none focus:border-fairway-500" placeholder="DAM2026" />
          <label className="mt-4 block text-sm font-bold">Password or Player PIN</label>
          <input className="mt-2 w-full rounded-2xl border px-4 py-3 outline-none focus:border-fairway-500" placeholder="••••••" type="password" />
          <button className="mt-6 w-full rounded-2xl bg-neutral-950 py-3 font-black text-white">Continue</button>
        </div>
      </section>
    </main>
  );
}
