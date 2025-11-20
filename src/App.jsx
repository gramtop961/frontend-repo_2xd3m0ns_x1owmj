import Hero from "./components/Hero";
import MenuGrid from "./components/MenuGrid";
import Footer from "./components/Footer";
import QRGenerator from "./components/QRGenerator";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(249,115,22,0.25),transparent_60%),radial-gradient(800px_400px_at_110%_10%,rgba(244,63,94,0.25),transparent_60%)]" />
      <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/40 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <span className="font-black tracking-tight text-xl">Blaze Pizza</span>
          <span className="text-sm text-slate-300/80">Open 11am – 11pm</span>
        </div>
      </header>
      <main>
        <Hero />
        <MenuGrid />
        <QRGenerator />
      </main>
      <Footer />
    </div>
  );
}

export default App
