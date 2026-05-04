import Image from 'next/image';

const APP_URL = 'https://app.dobble.com';

/* ─── Inline icon primitives ──────────────────────────────────────────────── */

function Check({ cls = 'h-5 w-5' }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Arrow({ cls = 'h-4 w-4' }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/* ─── Reusable atoms ──────────────────────────────────────────────────────── */

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-widest text-[#0091FF] uppercase">
      {children}
    </span>
  );
}

function FeatureRow({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-[#475569]">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E0F2FE] text-[#0091FF]">
            <Check cls="h-3 w-3" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─── Mock UI cards ──────────────────────────────────────────────────────── */

function SpendOverviewCard() {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-[#1E293B]">Spend Overview</p>
        <span className="rounded-full bg-[#DCFCE7] px-2.5 py-0.5 text-xs font-semibold text-[#166534]">This month</span>
      </div>
      <div className="mt-4 space-y-3">
        {[
          { label: 'Card spend', value: '₦28.4M', pct: 72, color: '#0091FF' },
          { label: 'Reimbursements', value: '₦6.2M', pct: 38, color: '#6366F1' },
          { label: 'Procurement', value: '₦14.9M', pct: 55, color: '#0EA5E9' },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between text-xs text-[#64748B]">
              <span>{item.label}</span>
              <span className="font-semibold text-[#0F172A]">{item.value}</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#F1F5F9]">
              <div className="h-1.5 rounded-full" style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          { label: 'Wallets', value: '12' },
          { label: 'Cards', value: '48' },
          { label: 'Vendors', value: '126' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-[#F8FAFC] px-3 py-3 text-center">
            <p className="text-base font-bold text-[#0F172A]">{s.value}</p>
            <p className="text-xs text-[#94A3B8]">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApprovalCard() {
  const items = [
    { title: 'Cloud infrastructure', amount: '₦1.2M', status: 'Approved', c: 'bg-[#DCFCE7] text-[#166534]' },
    { title: 'Marketing agency Q3', amount: '₦840K', status: 'In review', c: 'bg-[#FEF9C3] text-[#854D0E]' },
    { title: 'Security audit', amount: '₦320K', status: 'Pending', c: 'bg-[#F1F5F9] text-[#475569]' },
  ];
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-[#1E293B]">Approval inbox</p>
      <p className="text-xs text-[#94A3B8]">3 items require your attention</p>
      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <div key={item.title} className="flex items-center justify-between rounded-xl border border-[#F1F5F9] bg-[#FAFAFA] px-3 py-2.5">
            <div>
              <p className="text-xs font-medium text-[#1E293B]">{item.title}</p>
              <p className="text-xs text-[#64748B]">{item.amount}</p>
            </div>
            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${item.c}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VirtualCardMockup() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#0A0F1E] to-[#1E3A5F] p-6 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">Dobble</span>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-blue-200">Virtual</span>
      </div>
      <p className="mt-5 font-mono text-lg tracking-[0.25em] text-white/90">•••• •••• •••• 2471</p>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-xs text-blue-300">Card holder</p>
          <p className="text-sm font-semibold">Engineering Team</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-blue-300">Limit</p>
          <p className="text-sm font-semibold">₦500K / mo</p>
        </div>
      </div>
      <div className="mt-4 rounded-xl bg-white/10 px-4 py-3">
        <p className="text-xs text-blue-200">Active policy: Software vendors only · No cash withdrawals</p>
      </div>
    </div>
  );
}

function BudgetCard() {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-[#1E293B]">Budget tracker</p>
        <span className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-2 py-1 text-xs text-[#64748B]">May 2026</span>
      </div>
      <div className="mt-4 space-y-4">
        {[
          { dept: 'Engineering', used: 68, total: '₦4.8M', color: '#0091FF' },
          { dept: 'Marketing', used: 91, total: '₦2.1M', color: '#F97316' },
          { dept: 'Operations', used: 42, total: '₦1.6M', color: '#22C55E' },
        ].map((b) => (
          <div key={b.dept}>
            <div className="flex justify-between text-xs">
              <span className="font-medium text-[#1E293B]">{b.dept}</span>
              <span className="text-[#64748B]">{b.used}% of {b.total}</span>
            </div>
            <div className="mt-1 h-2 w-full rounded-full bg-[#F1F5F9]">
              <div className="h-2 rounded-full" style={{ width: `${b.used}%`, backgroundColor: b.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] antialiased">

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <div className="flex items-center gap-10">
            <a href="/">
              <Image src="/dobble-logo.svg" alt="Dobble" width={120} height={24} className="h-6 w-auto" />
            </a>
            <nav className="hidden items-center gap-8 text-sm font-medium text-[#475569] lg:flex">
              <a className="hover:text-[#0F172A] transition-colors" href="#platform">Platform</a>
              <a className="hover:text-[#0F172A] transition-colors" href="#procurement">Procurement</a>
              <a className="hover:text-[#0F172A] transition-colors" href="#cards">Cards &amp; Wallets</a>
              <a className="hover:text-[#0F172A] transition-colors" href="#budget">Budget</a>
              <a className="hover:text-[#0F172A] transition-colors" href="#vendors">Vendors</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a href={`${APP_URL}/sign-in`} className="hidden rounded-lg px-4 py-2 text-sm font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors md:inline-flex">
              Sign in
            </a>
            <a href={`${APP_URL}/sign-up`} className="rounded-lg bg-[#0091FF] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#007AD6] transition-colors">
              Get started
            </a>
          </div>
        </div>
      </header>

      <main>

        {/* Hero */}
        <section className="relative overflow-hidden bg-[#030B1A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,145,255,0.18),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(99,102,241,0.1),transparent)]" />
          <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-300">
              <span className="flex h-2 w-2 rounded-full bg-blue-400" />
              Trusted by fast-growing African enterprises
            </div>
            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
              The complete spend
              <span className="block bg-gradient-to-r from-[#0091FF] to-[#60A5FA] bg-clip-text text-transparent">
                management platform
              </span>
              for modern businesses
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
              Dobble combines corporate cards, expense management, procurement workflows,
              vendor hub, budgets, and real-time analytics — giving finance teams and employees
              one place to manage all business spending.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`${APP_URL}/sign-up`} className="flex items-center gap-2 rounded-xl bg-[#0091FF] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-[#007AD6] transition-colors">
                Start for free
                <Arrow cls="h-4 w-4" />
              </a>
              <a href={`${APP_URL}/sign-in`} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                Sign in to your account
              </a>
            </div>
            <p className="mt-8 text-xs text-slate-500">
              Trusted by finance teams at <span className="text-slate-300">100+</span> companies
            </p>
            <div className="mx-auto mt-16 max-w-5xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <SpendOverviewCard />
                  <ApprovalCard />
                  <div className="hidden lg:block">
                    <VirtualCardMockup />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: '₦10B+', label: 'In spend processed', sub: 'annually on platform' },
                { value: '99.9%', label: 'Platform uptime', sub: 'enterprise SLA' },
                { value: '3 min', label: 'Average approval time', sub: 'vs 3 days industry avg' },
                { value: '100+', label: 'Companies onboarded', sub: 'and growing' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <dd className="text-3xl font-bold text-[#0091FF]">{stat.value}</dd>
                  <dt className="mt-1 text-sm font-semibold text-[#1E293B]">{stat.label}</dt>
                  <p className="text-xs text-[#94A3B8]">{stat.sub}</p>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Platform overview */}
        <section id="platform" className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <Chip>The full platform</Chip>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
              Everything your finance team needs. In one product.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#475569]">
              Stop stitching together spreadsheets, email approvals, and separate tools.
              Dobble covers the entire business spend lifecycle from request to receipt.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '💳', title: 'Corporate Cards',
                desc: 'Issue virtual and physical cards with granular spend controls — per merchant, category, amount, or time window.',
                tags: ['Virtual cards', 'Physical cards', 'Spend limits', 'Card policies'],
              },
              {
                icon: '🏦', title: 'Company Wallet',
                desc: 'Fund a central wallet, enable bill payments, and track every outflow in real time across departments.',
                tags: ['Bill payments', 'Deposits', 'Balance tracking', 'Payout flows'],
              },
              {
                icon: '📋', title: 'Procurement',
                desc: 'Intake purchase requests, route multi-level approvals, generate POs, and run RFQs — all automated.',
                tags: ['Purchase orders', 'RFQ', 'Approval routing', 'Vendor quotes'],
              },
              {
                icon: '💰', title: 'Expense Management',
                desc: 'Track cash transactions, card expenses, and reimbursements with full audit trails and policy enforcement.',
                tags: ['Reimbursements', 'Cash advances', 'Receipt capture', 'Approvals'],
              },
              {
                icon: '📊', title: 'Budget Intelligence',
                desc: 'Set category and departmental budgets, separate by expense vs. procurement, and get real-time utilization alerts.',
                tags: ['Category budgets', 'Dept. budgets', 'Expense budgets', 'Procurement budgets'],
              },
              {
                icon: '🏢', title: 'Vendor Hub',
                desc: 'Onboard vendors, collect compliance documents, track contracts, and manage renewals in one place.',
                tags: ['Vendor profiles', 'KYC / compliance', 'Contract tracking', 'Risk scoring'],
              },
              {
                icon: '🧾', title: 'Invoicing',
                desc: 'Create and send invoices, track payment status, and reconcile with your budget automatically.',
                tags: ['Invoice creation', 'Payment tracking', 'Reconciliation'],
              },
              {
                icon: '📦', title: 'Inventory',
                desc: 'Track stock movements tied to purchase orders and keep procurement and inventory perfectly synced.',
                tags: ['Stock tracking', 'Movement logs', 'PO integration'],
              },
              {
                icon: '📈', title: 'Analytics & Reports',
                desc: 'Real-time dashboards, spend breakdowns by team, category, and vendor — and exportable reports for auditors.',
                tags: ['Spend dashboards', 'Department reports', 'Vendor analytics'],
              },
            ].map((feature) => (
              <div key={feature.title} className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all hover:border-[#0091FF]/30 hover:shadow-lg hover:shadow-blue-50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F9FF] text-2xl">{feature.icon}</div>
                <h3 className="mt-4 text-base font-semibold text-[#0F172A]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{feature.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {feature.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#F8FAFC] px-2.5 py-0.5 text-xs text-[#64748B] border border-[#E2E8F0]">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expense Management */}
        <section className="bg-[#F8FAFC] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <Chip>Expense management</Chip>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                  Every employee expense,<br />captured and approved.
                </h2>
                <p className="mt-4 text-lg text-[#475569]">
                  Whether it is a card swipe, a cash advance, or a reimbursement claim,
                  Dobble captures it, categorizes it, and routes it through your approval chain automatically.
                </p>
                <FeatureRow items={[
                  'Expense submission with photo receipt upload',
                  'Configurable approval chains by amount and department',
                  'Policy violation auto-flagging before approval',
                  'Cash advance requests with balance tracking',
                  'Reimbursement tracking with status updates',
                  'Full audit trail for every transaction',
                ]} />
                <div className="mt-8">
                  <a href={`${APP_URL}/sign-up`} className="inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors">
                    Try expense management <Arrow />
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#1E293B]">Recent expenses</p>
                    <span className="rounded-full bg-[#FEF9C3] px-2.5 py-0.5 text-xs font-semibold text-[#854D0E]">4 pending</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      { name: 'Adeola Okonkwo', type: 'Reimbursement', amount: '₦45,000', status: 'Approved', c: 'bg-[#DCFCE7] text-[#166534]' },
                      { name: 'Chukwuemeka F.', type: 'Cash advance', amount: '₦120,000', status: 'Pending', c: 'bg-[#FEF9C3] text-[#854D0E]' },
                      { name: 'Ngozi Ibe', type: 'Card expense', amount: '₦8,500', status: 'Approved', c: 'bg-[#DCFCE7] text-[#166534]' },
                      { name: 'Ibrahim Musa', type: 'Reimbursement', amount: '₦67,200', status: 'In review', c: 'bg-[#EFF6FF] text-[#1D4ED8]' },
                    ].map((row) => (
                      <div key={row.name} className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-3 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#0091FF] to-[#6366F1] text-xs font-bold text-white">
                            {row.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-[#1E293B]">{row.name}</p>
                            <p className="text-xs text-[#94A3B8]">{row.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold text-[#1E293B]">{row.amount}</span>
                          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${row.c}`}>{row.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[#FCA5A5]/40 bg-[#FFF7F7] p-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-base">🛡️</span>
                    <div>
                      <p className="text-xs font-semibold text-[#991B1B]">Policy violation detected</p>
                      <p className="mt-0.5 text-xs text-[#7F1D1D]">₦120,000 exceeds the ₦100,000 cash advance limit for this department. Request flagged for manager review.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Procurement */}
        <section id="procurement" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="order-2 lg:order-1 space-y-4">
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-[#1E293B]">Purchase request flow</p>
                  <div className="mt-4 space-y-3">
                    {[
                      { step: '1', label: 'Request submitted', by: 'Tunde Adeyemi', done: true },
                      { step: '2', label: 'Budget check', by: 'Auto-verified', done: true },
                      { step: '3', label: 'Manager approval', by: 'Sarah Johnson', done: true },
                      { step: '4', label: 'Finance approval', by: 'CFO review', done: false },
                      { step: '5', label: 'PO generated', by: 'Pending', done: false },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-3">
                        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${item.done ? 'bg-[#0091FF] text-white' : 'bg-[#F1F5F9] text-[#94A3B8]'}`}>
                          {item.done ? <Check cls="h-3.5 w-3.5" /> : item.step}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-[#1E293B]">{item.label}</p>
                          <p className="text-xs text-[#94A3B8]">{item.by}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm">
                    <p className="text-xs text-[#64748B]">Active RFQs</p>
                    <p className="mt-1 text-2xl font-bold text-[#0F172A]">14</p>
                    <p className="mt-1 text-xs text-[#22C55E]">3 quotes received today</p>
                  </div>
                  <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm">
                    <p className="text-xs text-[#64748B]">Open POs</p>
                    <p className="mt-1 text-2xl font-bold text-[#0F172A]">31</p>
                    <p className="mt-1 text-xs text-[#94A3B8]">₦82M total value</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Chip>Procurement</Chip>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                  Procurement that scales<br />with your organization.
                </h2>
                <p className="mt-4 text-lg text-[#475569]">
                  Automated intake, smart routing, competitive vendor quoting, and instant
                  PO generation — all tied to your budget so nothing gets approved that should not be.
                </p>
                <FeatureRow items={[
                  'Purchase requests with multi-level approval routing',
                  'Request for quotation (RFQ) sent to multiple vendors',
                  'Automated purchase order generation on approval',
                  'Budget-aware: blocks overspend at the source',
                  'Procurement vs. expense budget separation',
                  'Complete procurement audit trail',
                ]} />
                <div className="mt-8">
                  <a href={`${APP_URL}/sign-up`} className="inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors">
                    Explore procurement <Arrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards & Wallets */}
        <section id="cards" className="bg-[#030B1A] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <Chip>Cards and Wallets</Chip>
              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                Give every team spend power.<br />
                <span className="text-[#60A5FA]">Keep full control.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
                Issue corporate cards in minutes. Fund project wallets. Pay bills directly from
                your company wallet. Every naira tracked, every policy enforced.
              </p>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="space-y-4">
                <VirtualCardMockup />
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-sm font-semibold text-white">Card controls</p>
                  <div className="mt-3 space-y-2">
                    {['Spending limits per card', 'Merchant category rules', 'One-click freeze / unfreeze', 'Real-time transaction alerts'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check cls="h-3.5 w-3.5 text-blue-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">Company wallet</p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">₦24.8M</span>
                  <span className="text-sm text-slate-400">available</span>
                </div>
                <div className="mt-5 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Pending bills</p>
                  {[
                    { vendor: 'Azure Cloud', amount: '₦1.2M', due: 'Due May 10' },
                    { vendor: 'Office supplies', amount: '₦340K', due: 'Due May 15' },
                    { vendor: 'Logistics partner', amount: '₦820K', due: 'Due May 18' },
                  ].map((bill) => (
                    <div key={bill.vendor} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5">
                      <div>
                        <p className="text-xs font-medium text-white">{bill.vendor}</p>
                        <p className="text-xs text-slate-500">{bill.due}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-white">{bill.amount}</p>
                        <span className="mt-0.5 text-xs font-medium text-[#60A5FA]">Pay now</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  {[
                    { icon: '⚡', title: 'Instant card issuance', desc: 'Issue virtual cards in under 2 minutes. Physical cards shipped within 48 hours.' },
                    { icon: '🔒', title: 'Policy enforcement', desc: 'Set rules at card level. Every transaction checked against your spend policies automatically.' },
                    { icon: '💸', title: 'Bill payment from wallet', desc: 'Pay vendor invoices directly from your company wallet with a full payment audit trail.' },
                    { icon: '📡', title: 'Real-time visibility', desc: 'See every card swipe and wallet movement the moment it happens. No end-of-month surprises.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl">{item.icon}</div>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Intelligence */}
        <section id="budget" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <Chip>Budget Intelligence</Chip>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                  Separate budgets for<br />expenses and procurement.
                </h2>
                <p className="mt-4 text-lg text-[#475569]">
                  Create granular budgets by category and department. Separate expense budgets
                  from procurement budgets. Get utilization alerts before teams overspend.
                </p>
                <FeatureRow items={[
                  'Category budgets: Marketing, HR, Engineering',
                  'Departmental budget breakdown per category',
                  'Separate Expense vs. Procurement budget types',
                  'Real-time utilization percentages',
                  'Over-threshold alerts before approval',
                  'Organization-wide budget roll-up view',
                ]} />
              </div>
              <div className="space-y-4">
                <BudgetCard />
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm text-center">
                    <p className="text-2xl font-bold text-[#0091FF]">₦48.2M</p>
                    <p className="text-xs text-[#64748B] mt-1">Total budget allocated</p>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-[#F1F5F9]">
                      <div className="h-1.5 w-[64%] rounded-full bg-[#0091FF]" />
                    </div>
                    <p className="mt-1 text-xs text-[#94A3B8]">64% utilized</p>
                  </div>
                  <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm text-center">
                    <p className="text-2xl font-bold text-[#F97316]">3</p>
                    <p className="text-xs text-[#64748B] mt-1">Departments near limit</p>
                    <p className="mt-2 text-xs text-[#F97316]">Marketing at 91%</p>
                    <p className="text-xs text-[#F97316]">Review advised</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vendor Hub */}
        <section id="vendors" className="bg-[#F8FAFC] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-[#1E293B]">Vendor directory</p>
                  <div className="mt-4 space-y-2">
                    {[
                      { name: 'Zoho Corp', category: 'SaaS / Software', status: 'Active' },
                      { name: 'TechBridge Ltd', category: 'IT Services', status: 'Active' },
                      { name: 'PrintMax Nigeria', category: 'Office supplies', status: 'Pending KYC' },
                    ].map((v) => (
                      <div key={v.name} className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-3 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EFF6FF] text-sm font-bold text-[#0091FF]">{v.name.charAt(0)}</div>
                          <div>
                            <p className="text-xs font-medium text-[#1E293B]">{v.name}</p>
                            <p className="text-xs text-[#94A3B8]">{v.category}</p>
                          </div>
                        </div>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${v.status === 'Active' ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEF9C3] text-[#854D0E]'}`}>{v.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📄</span>
                    <div>
                      <p className="text-xs font-semibold text-[#1E293B]">Document compliance</p>
                      <p className="text-xs text-[#64748B]">CAC · Tax clearance · Bank details · Contracts</p>
                    </div>
                    <span className="ml-auto rounded-full bg-[#DCFCE7] px-2 py-0.5 text-xs font-semibold text-[#166534]">All verified</span>
                  </div>
                </div>
              </div>
              <div>
                <Chip>Vendor Hub</Chip>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                  Your vendor relationships,<br />fully under control.
                </h2>
                <p className="mt-4 text-lg text-[#475569]">
                  Centralize all vendor data, onboarding documents, and contract history.
                  Every procurement PO links back to a verified vendor record.
                </p>
                <FeatureRow items={[
                  'Vendor profile with all contact and banking details',
                  'Document collection: CAC, TIN, bank letters',
                  'Contract storage with renewal alerts',
                  'Risk classification and compliance scoring',
                  'Linked to procurement POs automatically',
                  'Vendor performance tracking over time',
                ]} />
              </div>
            </div>
          </div>
        </section>

        {/* Approval Workflows */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <Chip>Approval workflows</Chip>
              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[#0F172A]">
                Multi-level approvals that work the way your org does
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#475569]">
                Configure approval chains once. Let Dobble route every request automatically.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: '01', title: 'Submit', desc: 'Employee submits a request with all required fields — amount, purpose, receipt.' },
                { num: '02', title: 'Auto-check', desc: 'System checks against policies and budget before routing. Violations flagged instantly.' },
                { num: '03', title: 'Approval chain', desc: 'Routes through configured approvers — manager, finance, CFO — based on your rules.' },
                { num: '04', title: 'Execute', desc: 'On final approval, payment or PO or card is issued automatically. Zero manual steps.' },
              ].map((step) => (
                <div key={step.num} className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                  <span className="text-5xl font-black text-[#E2E8F0]">{step.num}</span>
                  <h3 className="mt-3 text-base font-semibold text-[#0F172A]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#64748B]">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: 'Expense approvals', icon: '💰' },
                  { label: 'Reimbursements', icon: '🔄' },
                  { label: 'Card requests', icon: '💳' },
                  { label: 'Procurement and POs', icon: '📋' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium text-[#1E293B]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Policies & Compliance */}
        <section className="bg-[#030B1A] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <Chip>Policies and Compliance</Chip>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Spend policy that enforces<br />
                  <span className="text-[#60A5FA]">itself automatically.</span>
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  Define once. Enforce everywhere. Whether it is a card swipe, a cash advance,
                  or a procurement request — Dobble checks every transaction against your policies before it can proceed.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Per-employee and per-department limits',
                    'Category-level restrictions (no alcohol, travel cap etc.)',
                    'Time-based rules (working hours only)',
                    'Flag, block, or auto-approve by rule type',
                    'Policy coverage report for auditors',
                    'Complete audit log with immutable records',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-[#60A5FA]">
                        <Check cls="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Policy rules</p>
                  <div className="mt-4 space-y-3">
                    {[
                      { rule: 'Cash advances > ₦100K', action: 'Requires CFO approval', type: 'FLAG' },
                      { rule: 'Card spend at bars/restaurants', action: 'Blocked entirely', type: 'BLOCK' },
                      { rule: 'Reimbursements > ₦50K', action: 'Auto-routes to Finance', type: 'FLAG' },
                      { rule: 'Procurement < ₦200K', action: 'Manager only', type: 'ALLOW' },
                    ].map((p) => (
                      <div key={p.rule} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5">
                        <div>
                          <p className="text-xs font-medium text-white">{p.rule}</p>
                          <p className="text-xs text-slate-500">{p.action}</p>
                        </div>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${p.type === 'BLOCK' ? 'bg-red-500/20 text-red-300' : p.type === 'FLAG' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-green-500/20 text-green-300'}`}>
                          {p.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                    <p className="text-2xl font-bold text-white">98%</p>
                    <p className="text-xs text-slate-400 mt-1">Policy coverage</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                    <p className="text-2xl font-bold text-white">0</p>
                    <p className="text-xs text-slate-400 mt-1">Compliance breaches this quarter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <Chip>What teams say</Chip>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A]">Trusted by finance leaders</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  quote: "We cut our approval cycle from 3 days to under 4 hours. The multi-level approval routing just works — we configured it once and never had to touch it again.",
                  name: 'Adaeze Obi', role: 'CFO, FinTechWorks Nigeria', initials: 'AO',
                },
                {
                  quote: "Dobble replaced four separate tools we were using for expenses, procurement, vendor management, and budgets. The consolidation alone saved us 20 hours per month.",
                  name: 'Emeka Nwosu', role: 'Head of Operations, Logistics Co.', initials: 'EN',
                },
                {
                  quote: "The policy enforcement is the standout feature. Our card policy violations dropped by 94% in the first month because Dobble blocks non-compliant transactions automatically.",
                  name: 'Funmi Adeyinka', role: 'Finance Manager, HealthBridge', initials: 'FA',
                },
              ].map((t) => (
                <div key={t.name} className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                  <div className="flex gap-0.5 text-[#F59E0B] text-lg">{'★★★★★'}</div>
                  <p className="mt-4 text-sm leading-relaxed text-[#475569]">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0091FF] to-[#6366F1] text-xs font-bold text-white">{t.initials}</div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">{t.name}</p>
                      <p className="text-xs text-[#94A3B8]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise */}
        <section className="bg-[#F8FAFC] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <Chip>Enterprise ready</Chip>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                  Built for organizations<br />that demand control.
                </h2>
                <p className="mt-4 text-lg text-[#475569]">
                  Whether you have 20 employees or 2,000, Dobble scales with you.
                  Multi-department, multi-entity, and fully auditable.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: '🏢', title: 'Multi-entity support', desc: 'Manage multiple business units from one account.' },
                    { icon: '🔐', title: 'Role-based access', desc: 'Finance, manager, employee, and admin roles.' },
                    { icon: '📋', title: 'Audit log', desc: 'Immutable audit trail for every action.' },
                    { icon: '⚙️', title: 'Team management', desc: 'Departments, groups, and permission sets.' },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                      <span className="text-xl">{item.icon}</span>
                      <p className="mt-2 text-sm font-semibold text-[#1E293B]">{item.title}</p>
                      <p className="mt-1 text-xs text-[#64748B]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold text-[#1E293B]">What is included</p>
                  <div className="mt-6 space-y-3">
                    {[
                      'Unlimited expense submissions',
                      'Corporate cards (virtual + physical)',
                      'Company wallet and bill payments',
                      'Procurement and PO workflows',
                      'RFQ and vendor quote management',
                      'Vendor hub and compliance tracking',
                      'Category and departmental budgets',
                      'Multi-level approval chains',
                      'Spend policies and guardrails',
                      'Invoicing and inventory management',
                      'Real-time analytics and reports',
                      'Full audit log',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-[#475569]">
                        <Check cls="h-4 w-4 text-[#0091FF] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href={`${APP_URL}/sign-up`} className="flex-1 rounded-xl bg-[#0091FF] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#007AD6] transition-colors">
                      Get started free
                    </a>
                    <a href="mailto:sales@dobble.com" className="flex-1 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-3 text-center text-sm font-semibold text-[#1E293B] hover:bg-[#F1F5F9] transition-colors">
                      Talk to sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#0091FF] py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ready to take control<br />of your company spend?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
              Join companies using Dobble to manage expenses, run procurement,
              and keep every naira accounted for — without the spreadsheet chaos.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`${APP_URL}/sign-up`} className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-[#0091FF] shadow-lg hover:bg-blue-50 transition-colors">
                Start for free today
                <Arrow cls="h-4 w-4" />
              </a>
              <a href={`${APP_URL}/sign-in`} className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
                Sign in to your account
              </a>
            </div>
            <p className="mt-6 text-sm text-blue-200">No credit card required · Free to start · Cancel anytime</p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0] bg-[#030B1A]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Image src="/dobble-logo.svg" alt="Dobble" width={100} height={20} className="h-6 w-auto brightness-0 invert" />
              <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs">
                The complete spend management platform for modern businesses.
                Cards, wallets, procurement, and budgets — all in one place.
              </p>
              <div className="mt-5 flex gap-3">
                <a href={`${APP_URL}/sign-up`} className="rounded-lg bg-[#0091FF] px-4 py-2 text-xs font-semibold text-white hover:bg-[#007AD6] transition-colors">Get started</a>
                <a href={`${APP_URL}/sign-in`} className="rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-white/5 transition-colors">Sign in</a>
              </div>
            </div>
            {[
              { heading: 'Platform', links: ['Expense management', 'Procurement', 'Corporate cards', 'Company wallet', 'Vendor hub', 'Budget intelligence'] },
              { heading: 'Company', links: ['About', 'Blog', 'Careers', 'Contact sales'] },
              { heading: 'Legal', links: ['Privacy policy', 'Terms of service', 'Security', 'Cookie policy'] },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{col.heading}</p>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
            <p className="text-xs text-slate-600">© {new Date().getFullYear()} Dobble Technologies Ltd. All rights reserved.</p>
            <p className="text-xs text-slate-600">Built for African businesses.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
