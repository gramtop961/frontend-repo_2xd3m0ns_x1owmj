export default function Footer(){
  return (
    <footer className="py-10 text-center text-slate-300/70">
      <p>Scan the QR on your table to open this menu. No app needed.</p>
      <p className="mt-2 text-xs">© {new Date().getFullYear()} Blaze Pizza</p>
    </footer>
  )
}
