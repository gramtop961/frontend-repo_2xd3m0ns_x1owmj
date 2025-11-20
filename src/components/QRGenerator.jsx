import { useEffect, useMemo, useState } from "react";

export default function QRGenerator() {
  const [table, setTable] = useState("");
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin + window.location.pathname);
    }
  }, []);

  const url = useMemo(() => {
    const t = table.trim();
    return t ? `${baseUrl}?table=${encodeURIComponent(t)}` : baseUrl;
  }, [baseUrl, table]);

  const qrSrc = useMemo(() => {
    if (!url) return "";
    const data = encodeURIComponent(url);
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${data}`;
  }, [url]);

  return (
    <section className="border-t border-white/10 bg-white/5">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold">QR Code for Tables</h3>
          <p className="text-slate-300/80 mt-1 text-sm max-w-xl">
            Set a table number to generate a unique QR. Print and place it on the table. When scanned, guests see this menu with the table info.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <input
              value={table}
              onChange={(e) => setTable(e.target.value)}
              placeholder="Enter table no. (e.g., 12)"
              className="w-48 rounded-xl bg-white/10 border border-white/20 px-4 py-2 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <a
              href={url || "#"}
              target="_blank"
              rel="noreferrer"
              className="text-orange-300 hover:text-orange-200 text-sm underline underline-offset-4"
            >
              Open Link
            </a>
          </div>
          <p className="mt-2 text-xs text-slate-400 break-all">{url}</p>
        </div>
        <div className="flex items-center gap-4">
          {qrSrc && (
            <img
              src={qrSrc}
              alt="QR Code"
              className="w-[220px] h-[220px] rounded-xl bg-white p-2 shadow-lg"
            />
          )}
        </div>
      </div>
    </section>
  );
}
