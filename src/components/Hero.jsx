import { Pizza } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(600px_circle_at_20%_20%,#ef4444_0,transparent_60%),radial-gradient(600px_circle_at_80%_0%,#f59e0b_0,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center justify-center rounded-2xl bg-white/10 border border-white/20 p-3 mb-6 backdrop-blur">
          <Pizza className="w-7 h-7 text-orange-300" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Blaze Pizza Menu
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto">
          Freshly baked, cheesy goodness. Scan the QR on your table or order at the counter.
        </p>
      </div>
    </section>
  );
}
