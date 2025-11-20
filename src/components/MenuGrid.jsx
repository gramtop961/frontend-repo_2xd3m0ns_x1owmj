import { useState } from "react";

const PIZZAS = [
  {
    id: "margherita",
    name: "Margherita",
    desc: "San Marzano tomatoes, fresh mozzarella, basil",
    price: 299,
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    desc: "Tons of pepperoni, mozzarella, oregano",
    price: 349,
    img: "https://images.unsplash.com/photo-1548365328-9f547fb095a0?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "veggie",
    name: "Garden Veggie",
    desc: "Bell peppers, olives, onions, mushrooms",
    price: 329,
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "bbq",
    name: "BBQ Chicken",
    desc: "Smoky BBQ sauce, chicken, red onions, cilantro",
    price: 379,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "four-cheese",
    name: "Four Cheese",
    desc: "Mozzarella, cheddar, parmesan, gorgonzola",
    price: 359,
    img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "tandoori-paneer",
    name: "Tandoori Paneer",
    desc: "Spiced paneer, capsicum, onions, mint chutney drizzle",
    price: 369,
    badge: "Chef's Special",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
  }
];

function formatINR(paisa) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(paisa);
}

export default function MenuGrid() {
  const [query, setQuery] = useState("");
  const filtered = PIZZAS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="relative py-6">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Menu</h2>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search pizzas..."
            className="w-full md:w-80 rounded-xl bg-white/10 border border-white/20 px-4 py-2 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <article key={item.id} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur hover:border-orange-400/40 transition">
              <div className="relative">
                <img src={item.img} alt={item.name} className="h-48 w-full object-cover" />
                {item.badge && (
                  <span className="absolute top-3 left-3 text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <span className="text-orange-300 font-bold">{formatINR(item.price)}</span>
                </div>
                <p className="mt-1 text-slate-300/80 text-sm">{item.desc}</p>
                <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white py-2 font-medium hover:opacity-90">
                  Add to Order
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
