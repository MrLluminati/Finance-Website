const marketCards = [
  { name: "Nifty 50", value: "Demo 22,450.00", change: "+0.42%" },
  { name: "Sensex", value: "Demo 73,850.00", change: "+0.38%" },
  { name: "Bank Nifty", value: "Demo 48,900.00", change: "-0.12%" }
];

const tools = ["SIP Calculator", "CAGR Calculator", "EMI Calculator"];

const companies = [
  "Reliance Industries",
  "TCS",
  "HDFC Bank",
  "Infosys",
  "ITC"
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">
              Finance Intelligence
            </p>
            <h1 className="text-xl font-bold text-brand-navy">Finance Website</h1>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#markets">Markets</a>
            <a href="#learn">Learn</a>
            <a href="#tools">Tools</a>
            <a href="#stocks">Stocks</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-brand-blue">
            Trust-first finance platform · MVP foundation
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-brand-navy md:text-6xl">
            Understand markets without noise, hype, or shortcuts.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A clean financial intelligence platform for market explainers,
            company pages, calculators, and beginner-friendly investing education.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-brand-navy px-6 py-3 text-center text-sm font-semibold text-white shadow-soft"
              href="#tools"
            >
              Explore tools
            </a>
            <a
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-brand-navy"
              href="#learn"
            >
              Start learning
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-brand-navy">Market snapshot</h3>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              Demo data
            </span>
          </div>
          <div className="space-y-4">
            {marketCards.map((item) => (
              <div
                className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
                key={item.name}
              >
                <div>
                  <p className="font-semibold text-brand-navy">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.value}</p>
                </div>
                <p
                  className={
                    item.change.startsWith("+")
                      ? "font-semibold text-green-600"
                      : "font-semibold text-red-600"
                  }
                >
                  {item.change}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">
            This starter build uses sample data only. Real-time market data will
            require proper licensing before commercial use.
          </p>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Tools
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-navy">
              Practical finance calculators
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {tools.map((tool) => (
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft" key={tool}>
              <h3 className="text-lg font-bold text-brand-navy">{tool}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Planned Phase 1 tool with clear formulas, validation, and
                non-advisory explanations.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="stocks" className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
          Stocks
        </p>
        <h2 className="mt-2 text-3xl font-bold text-brand-navy">
          Company profiles to build first
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {companies.map((company) => (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-brand-navy" key={company}>
              {company}
            </div>
          ))}
        </div>
      </section>

      <section id="learn" className="mx-auto max-w-7xl px-6 py-10 pb-16">
        <div className="rounded-3xl bg-brand-navy p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
            Trust policy
          </p>
          <h2 className="mt-3 text-3xl font-bold">Education before recommendation.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-200">
            This platform will focus on source-backed explanations, transparent
            disclaimers, and beginner-friendly financial literacy. It will not
            publish buy, sell, hold, or target-price calls without proper legal
            and regulatory review.
          </p>
        </div>
      </section>
    </main>
  );
}
