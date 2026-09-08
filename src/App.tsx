import { useState } from "react";

const NAV_LINKS = ["How It Works", "Curriculum", "Pricing"];

const STATS = [
  { value: "500+", label: "students taught" },
  { value: "97%", label: "grade improvement" },
  { value: "6 yrs", label: "in business" },
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Free Assessment",
    body: "We start with a friendly 30-minute session to understand exactly where your child is and where they want to go.",
  },
  {
    num: "02",
    title: "Custom Learning Plan",
    body: "Every child gets a personalized roadmap built around their pace, learning style, and school curriculum.",
  },
  {
    num: "03",
    title: "Weekly 1-on-1 Sessions",
    body: "Live sessions with a dedicated tutor — online or in-person — focused on building real understanding, not memorization.",
  },
  {
    num: "04",
    title: "Track Progress Together",
    body: "Monthly parent updates with clear reports showing growth in every topic. You'll always know exactly how your child is doing.",
  },
];

const TOPICS = [
  { icon: "🔢", label: "Number Sense", grades: "K–2" },
  { icon: "➕", label: "Addition & Subtraction", grades: "K–3" },
  { icon: "✖️", label: "Multiplication & Division", grades: "2–4" },
  { icon: "½", label: "Fractions & Decimals", grades: "3–5" },
  { icon: "📐", label: "Geometry & Measurement", grades: "3–5" },
  { icon: "📊", label: "Word Problems", grades: "1–5" },
];


const PLANS = [
  {
    name: "Starter",
    price: "$89",
    period: "/mo",
    sessions: "4 sessions per month",
    features: ["45 min per session", "Progress tracking", "Email parent updates", "Free assessment included"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$159",
    period: "/mo",
    sessions: "8 sessions per month",
    features: ["60 min per session", "Priority scheduling", "Monthly parent calls", "Custom practice worksheets", "Free assessment included"],
    highlight: true,
  },
  {
    name: "Intensive",
    price: "$249",
    period: "/mo",
    sessions: "12 sessions per month",
    features: ["60 min per session", "Dedicated tutor", "Weekly parent updates", "Homework help access", "Test prep support", "Free assessment included"],
    highlight: false,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", grade: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <div className="min-h-full" style={{ background: "var(--color-bg)", color: "var(--color-ink)" }}>
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b"
        style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderColor: "var(--color-border)" }}
      >
        <a
          href="#"
          className="flex items-center gap-2"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--color-teal)", textDecoration: "none" }}
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "var(--color-teal)" }}
          >
            M
          </span>
          The Math Flow
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase().replace(/\s+/g, "-"))}
              className="text-sm font-medium transition-colors hover:opacity-60"
              style={{ color: "var(--color-ink)", background: "none", border: "none", cursor: "pointer" }}
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-opacity hover:opacity-90"
            style={{ background: "var(--color-teal)", color: "#fff" }}
          >
            Book Free Session
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-6 h-0.5 rounded" style={{ background: "var(--color-ink)" }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 text-xl font-semibold"
          style={{ background: "rgba(255,255,255,0.98)" }}
        >
          {[...NAV_LINKS, "Contact"].map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase().replace(/\s+/g, "-"))}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-ink)", fontFamily: "var(--font-display)", fontSize: 24 }}
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => { scrollTo("contact"); setMenuOpen(false); }}
            className="px-8 py-3 rounded-xl text-white font-semibold"
            style={{ background: "var(--color-teal)" }}
          >
            Book Free Session
          </button>
        </div>
      )}

      {/* HERO */}
      <section className="px-6 md:px-12 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
              style={{ background: "var(--color-amber-light)", color: "var(--color-amber)" }}
            >
              Elementary Math Tutoring · Grades K–5
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
            >
              Math that
              <br />
              <em style={{ color: "var(--color-teal)", fontStyle: "italic" }}>clicks</em> — for
              <br />
              every child.
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--color-muted)", maxWidth: 440 }}>
              The Math Flow helps K–5 students build real confidence in math through patient 1-on-1 tutoring that meets them exactly where they are.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="px-7 py-4 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--color-teal)", fontFamily: "var(--font-body)" }}
              >
                Book a Free Assessment
              </button>
              <button
                onClick={() => scrollTo("how-it-works")}
                className="px-7 py-4 rounded-xl font-semibold border transition-colors hover:border-teal-600"
                style={{ border: "2px solid var(--color-border)", color: "var(--color-ink)", fontFamily: "var(--font-body)" }}
              >
                See how it works →
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -top-4 -right-4 w-72 h-72 rounded-full opacity-20"
              style={{ background: "var(--color-teal)" }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full opacity-10"
              style={{ background: "var(--color-amber)" }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: 420 }}>
              <img
                src="https://images.unsplash.com/photo-1758612898788-38a249839c1d?w=700&h=840&fit=crop&auto=format"
                alt="Smiling child studying math at a desk"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl px-5 py-4"
                style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌟</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--color-ink)" }}>
                      "I finally get fractions!"
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                      — Emma, Grade 4 student
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "var(--color-teal)" }} className="py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                {s.value}
              </div>
              <div className="text-sm opacity-75">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="px-6 md:px-12 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
              style={{ background: "var(--color-teal-light)", color: "var(--color-teal)" }}
            >
              The Process
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
            >
              Simple, structured,<br />
              <em style={{ color: "var(--color-teal)", fontStyle: "italic" }}>effective.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.num}
                className="flex gap-5 p-7 rounded-2xl border transition-shadow hover:shadow-md"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="text-2xl font-bold shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: "var(--color-teal-light)",
                    color: "var(--color-teal)",
                    fontSize: 14,
                    letterSpacing: "0.05em",
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    className="font-semibold text-lg mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section
        id="curriculum"
        className="px-6 md:px-12 py-24"
        style={{ background: "var(--color-teal-light)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
              style={{ background: "white", color: "var(--color-teal)" }}
            >
              What We Teach
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
            >
              Every topic, every grade.
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--color-muted)" }}>
              We cover the full K–5 math curriculum — aligned to Common Core and state standards.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TOPICS.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-4 rounded-xl p-5 border bg-white"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span className="text-2xl">{t.icon}</span>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "var(--color-ink)" }}>
                    {t.label}
                  </div>
                  <div
                    className="text-xs mt-0.5 font-medium"
                    style={{ color: "var(--color-teal)" }}
                  >
                    Grades {t.grades}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-4 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--color-teal)" }}
            >
              Ask about your child's grade
            </button>
          </div>
        </div>
      </section>


      {/* PHOTO BREAK */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1400&h=600&fit=crop&auto=format&crop=center"
          alt="Teacher working with students in a bright classroom"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(26,122,110,0.75)" }}
        >
          <div className="text-center text-white px-4">
            <p
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "Every child can love math."
            </p>
            <p className="text-base opacity-80">— The Math Flow team</p>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <section id="pricing" className="px-6 md:px-12 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
              style={{ background: "var(--color-teal-light)", color: "var(--color-teal)" }}
            >
              Pricing
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
            >
              Simple plans,
              <br />
              <em style={{ color: "var(--color-teal)", fontStyle: "italic" }}>no surprises.</em>
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--color-muted)" }}>
              All plans include a free assessment session. Cancel anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-7 border flex flex-col gap-5 transition-shadow hover:shadow-lg"
                style={{
                  borderColor: plan.highlight ? "var(--color-teal)" : "var(--color-border)",
                  background: plan.highlight ? "var(--color-teal)" : "#fff",
                  color: plan.highlight ? "#fff" : "var(--color-ink)",
                  borderWidth: plan.highlight ? 2 : 1,
                  position: "relative",
                }}
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full"
                    style={{ background: "var(--color-amber)", color: "white" }}
                  >
                    Most Popular
                  </span>
                )}
                <div>
                  <div
                    className="font-semibold text-sm mb-3 uppercase tracking-widest"
                    style={{ opacity: 0.7 }}
                  >
                    {plan.name}
                  </div>
                  <div className="flex items-end gap-1 mb-1">
                    <span
                      className="text-4xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm mb-1.5" style={{ opacity: 0.6 }}>{plan.period}</span>
                  </div>
                  <div className="text-sm" style={{ opacity: 0.7 }}>{plan.sessions}</div>
                </div>
                <ul className="flex flex-col gap-2.5 text-sm flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span style={{ color: plan.highlight ? "var(--color-amber)" : "var(--color-teal)" }}>✓</span>
                      <span style={{ opacity: 0.85 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{
                    background: plan.highlight ? "white" : "var(--color-teal)",
                    color: plan.highlight ? "var(--color-teal)" : "white",
                  }}
                >
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contact"
        className="px-6 md:px-12 py-24"
        style={{ background: "var(--color-teal-light)" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
              style={{ background: "white", color: "var(--color-teal)" }}
            >
              Get Started
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
            >
              Book your free
              <br />
              <em style={{ color: "var(--color-teal)", fontStyle: "italic" }}>assessment session.</em>
            </h2>
            <p style={{ color: "var(--color-muted)" }}>
              No commitment, no pressure. Just a warm conversation about your child's math journey.
            </p>
          </div>

          {submitted ? (
            <div
              className="rounded-2xl p-10 text-center border bg-white"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-teal)" }}
              >
                We'll be in touch soon!
              </h3>
              <p style={{ color: "var(--color-muted)" }}>
                Thank you for reaching out. A member of our team will contact you within one business day to schedule your free session.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 border bg-white flex flex-col gap-5"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                    Parent name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Sarah Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                    className="rounded-lg px-4 py-3 text-sm border outline-none transition-shadow"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-teal)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="sarah@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                    className="rounded-lg px-4 py-3 text-sm border outline-none transition-shadow"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-teal)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                  Child's grade
                </label>
                <select
                  required
                  value={formData.grade}
                  onChange={(e) => setFormData((f) => ({ ...f, grade: e.target.value }))}
                  className="rounded-lg px-4 py-3 text-sm border outline-none"
                  style={{ borderColor: "var(--color-border)", color: formData.grade ? "var(--color-ink)" : "var(--color-muted)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-teal)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                >
                  <option value="" disabled>Select a grade…</option>
                  {["Kindergarten", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"].map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                  Tell us about your child's math experience{" "}
                  <span style={{ color: "var(--color-muted)", fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g. Struggles with multiplication, loses confidence during tests…"
                  value={formData.message}
                  onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                  className="rounded-lg px-4 py-3 text-sm border outline-none resize-none"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-teal)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--color-teal)", fontFamily: "var(--font-body)" }}
              >
                Book My Free Session →
              </button>
              <p className="text-center text-xs" style={{ color: "var(--color-muted)" }}>
                We respond within 1 business day. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 md:px-12 py-10 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div
            className="font-bold text-lg"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-teal)" }}
          >
            The Math Flow
          </div>
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            © 2024 The Math Flow. Empowering young mathematicians.
          </p>
          <div className="flex gap-6 text-sm" style={{ color: "var(--color-muted)" }}>
            <a href="#" className="hover:underline" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
            <a href="#" className="hover:underline" style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
            <a href="mailto:hello@themathflow.com" className="hover:underline" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
