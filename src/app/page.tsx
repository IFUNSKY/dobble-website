import Image from 'next/image';

export default function Home() {
  const appBaseUrl = 'https://app.dobblehq.com';
  const signInUrl = `${appBaseUrl}/sign-in`;
  const signUpUrl = `${appBaseUrl}/sign-up`;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <header className="border-b border-[#E2E8F0] bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <Image
              src="/dobble-logo.svg"
              alt="Dobble"
              width={140}
              height={28}
              className="h-7 w-auto"
            />
          </div>
          <nav className="hidden items-center gap-8 text-sm text-[#475569] md:flex">
            <a className="hover:text-[#0F172A]" href="#features">Features</a>
            <a className="hover:text-[#0F172A]" href="#procurement">Procurement</a>
            <a className="hover:text-[#0F172A]" href="#cards">Cards & Wallets</a>
            <a className="hover:text-[#0F172A]" href="#vendors">Vendors</a>
            <a className="hover:text-[#0F172A]" href="#pricing">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-[#CBD5F5] px-4 py-2 text-sm font-medium text-[#1E293B] hover:border-[#94A3B8] md:inline-flex">
              Talk to sales
            </button>
            <a
              href={signUpUrl}
              className="rounded-full bg-[#168FEA] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1179C6]"
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#E0F2FE,transparent_45%)]" />
          <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0369A1]">
                Modern finance ops
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
                The business expense and procurement platform built for scale.
              </h1>
              <p className="mt-4 text-lg text-[#475569]">
                Dobble combines corporate cards, wallets, and procurement workflows so teams can
                buy faster, stay compliant, and manage vendors end-to-end in one place.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={signInUrl}
                  className="rounded-full bg-[#168FEA] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1179C6]"
                >
                  Launch the platform
                </a>
                <button className="rounded-full border border-[#CBD5F5] px-6 py-3 text-sm font-semibold text-[#1E293B] hover:border-[#94A3B8]">
                  Book a demo
                </button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-[#64748B]">
                <div>
                  <p className="text-xl font-semibold text-[#0F172A]">4.9/5</p>
                  <p>Average CSAT</p>
                </div>
                <div className="h-8 w-px bg-[#E2E8F0]" />
                <div>
                  <p className="text-xl font-semibold text-[#0F172A]">2x</p>
                  <p>Faster approvals</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#1E293B]">Spend overview</p>
                <div className="mt-4 grid gap-4">
                  {[
                    { label: "Card spend", value: "$284,210", change: "+12%" },
                    { label: "Procurement", value: "$142,900", change: "+6%" },
                    { label: "Vendors", value: "126 active", change: "+18" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl border border-[#E2E8F0] px-4 py-3"
                    >
                      <div>
                        <p className="text-xs text-[#64748B]">{item.label}</p>
                        <p className="text-lg font-semibold text-[#0F172A]">{item.value}</p>
                      </div>
                      <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-semibold text-[#166534]">
                        {item.change}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#E0F2FE] px-4 py-3">
                    <p className="text-xs text-[#0369A1]">Wallets</p>
                    <p className="text-base font-semibold text-[#0F172A]">12 active</p>
                  </div>
                  <div className="rounded-xl bg-[#FEF3C7] px-4 py-3">
                    <p className="text-xs text-[#92400E]">Approvals</p>
                    <p className="text-base font-semibold text-[#0F172A]">6 pending</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-[#E2E8F0] bg-white p-4">
                <p className="text-xs font-semibold text-[#64748B]">Compliance guardrails</p>
                <div className="mt-3 flex items-center justify-between text-sm text-[#1E293B]">
                  <span>Policy coverage</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-[#E2E8F0]">
                  <div className="h-2 w-[78%] rounded-full bg-[#168FEA]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#168FEA]">
                Why Dobble
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#0F172A]">
                Expenses, procurement, and vendor management in one workflow.
              </h2>
              <p className="mt-4 text-base text-[#475569]">
                Ramp-like controls for spend, plus procurement workflows for vendor onboarding,
                approvals, and POs. All with real-time visibility, cards, and wallet controls.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Instant cards", desc: "Issue cards with category, amount, and vendor rules." },
                { title: "Wallets", desc: "Fund project wallets and track usage by team." },
                { title: "Procurement", desc: "Intake requests, auto-route approvals, create POs." },
                { title: "Vendor hub", desc: "Onboard vendors, track compliance, and manage risk." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
                  <h3 className="text-base font-semibold text-[#0F172A]">{feature.title}</h3>
                  <p className="mt-2 text-sm text-[#64748B]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="procurement" className="bg-white">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2">
            <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#1E293B]">Purchase requests</p>
                <div className="mt-4 space-y-3">
                  {[
                    { title: "Security vendor renewal", status: "In review" },
                    { title: "Marketing agency", status: "Approved" },
                    { title: "Cloud hosting increase", status: "Needs info" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center justify-between rounded-xl border border-[#E2E8F0] px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-[#0F172A]">{item.title}</p>
                        <p className="text-xs text-[#64748B]">$24,000 • Quarterly</p>
                      </div>
                      <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold text-[#0369A1]">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#168FEA]">
                Procurement workflows
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#0F172A]">
                Build approvals that scale with your organization.
              </h2>
              <p className="mt-4 text-base text-[#475569]">
                Automate intake, route approvals by cost center, and convert requests into
                purchase orders instantly. Every request is tied to budgets and spend policies.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#475569]">
                {[
                  "Multi-level approval rules",
                  "Budget-aware procurement",
                  "Custom request forms",
                  "Real-time vendor collaboration",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#168FEA]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="cards" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#168FEA]">
                Cards + wallets
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#0F172A]">
                Give every team instant spend power with full control.
              </h2>
              <p className="mt-4 text-base text-[#475569]">
                Issue virtual or physical cards, fund wallets for projects, and enforce
                policy-based controls at the point of purchase.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  { title: "Dynamic spend limits", desc: "Set limits per card, wallet, or vendor." },
                  { title: "Receipt capture", desc: "Automate receipts and match them to expenses." },
                  { title: "Real-time alerts", desc: "Instant notifications for policy violations." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
                    <p className="text-base font-semibold text-[#0F172A]">{item.title}</p>
                    <p className="mt-2 text-sm text-[#64748B]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#E2E8F0] bg-[#0F172A] p-6 text-white">
              <div className="rounded-2xl bg-[#1E293B] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#94A3B8]">Dobble card</p>
                <p className="mt-4 text-2xl font-semibold">•••• 2471</p>
                <div className="mt-6 flex items-center justify-between text-sm text-[#CBD5F5]">
                  <span>Engineering Wallet</span>
                  <span>Exp. 12/28</span>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-sm font-semibold">Wallet policy</p>
                <p className="mt-2 text-sm text-[#CBD5F5]">Only software vendors • $12,000 monthly cap</p>
              </div>
            </div>
          </div>
        </section>

        <section id="vendors" className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="rounded-3xl border border-[#E2E8F0] bg-[#F1F5F9] p-6">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#1E293B]">Vendor onboarding</p>
                  <div className="mt-4 space-y-3">
                    {[
                      "Collect W-9 and KYC",
                      "Approve contracts",
                      "Track risk & compliance",
                      "Monitor renewal dates",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-[#475569]">
                        <span className="h-2 w-2 rounded-full bg-[#168FEA]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#168FEA]">
                  Vendor hub
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-[#0F172A]">
                  Procurement needs vendors. Dobble brings them in.
                </h2>
                <p className="mt-4 text-base text-[#475569]">
                  Centralize vendor profiles, negotiate pricing, and keep compliance documents
                  current. Every approval flows into a vendor record, so finance and procurement
                  stay aligned.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#1E293B]">
                  {[
                    "Vendor profiles",
                    "Risk scoring",
                    "Contract storage",
                    "Renewal alerts",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-[#E2E8F0] bg-[#0F172A] px-8 py-12 text-white md:px-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
                  Launch Dobble
                </p>
                <h2 className="mt-4 text-3xl font-semibold">A unified platform for spend control.</h2>
                <p className="mt-4 text-base text-[#CBD5F5]">
                  Start with cards and expenses, expand into procurement workflows, and manage
                  vendors with confidence. We’ll help you design the best rollout strategy.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6">
                <p className="text-sm text-[#CBD5F5]">Enterprise readiness</p>
                <ul className="mt-4 space-y-3 text-sm text-white">
                  {[
                    "Custom approval chains",
                    "Multi-entity support",
                    "ERP and accounting integrations",
                    "Dedicated success team",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0F172A]">
                  Contact sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E2E8F0] bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold">Dobble</p>
            <p className="text-xs text-[#64748B]">Expense & Procurement Management</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[#64748B]">
            <a className="hover:text-[#0F172A]" href="#features">Platform</a>
            <a className="hover:text-[#0F172A]" href="#procurement">Procurement</a>
            <a className="hover:text-[#0F172A]" href="#vendors">Vendors</a>
            <a className="hover:text-[#0F172A]" href="#pricing">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
