import { useState } from "react";

const C = {
  heading: "#A10019",
  teal: "#00A0A6",
  tealLight: "#e6f7f8",
  tealMid: "#b3e6e8",
  black: "#111111",
  gray: "#555555",
  grayLight: "#999999",
  grayBorder: "#d8d8d8",
  grayBg: "#f2f2f2",
  bgSoft: "#f7f7f8",
  white: "#ffffff",
  gold: "#C97D00",
  goldLight: "#fff8e6",
};

const modules = [
  {
    num: "01", title: "Intention", color: C.heading,
    tagline: "Know yourself before you build anything.",
    lessons: [
      { num: "1.1", title: "Personal Identity: The Power of Identity", status: "available", tokens: 45 },
      { num: "1.2", title: "Vision & Purpose: Why You're Building", status: "coming", tokens: 40 },
      { num: "1.3", title: "Mindset: The Entrepreneur Within", status: "coming", tokens: 35 },
    ]
  },
  {
    num: "02", title: "Validation", color: "#1a1a1a",
    tagline: "Discover if your idea solves a real problem.",
    lessons: [
      { num: "2.1", title: "Market Research Fundamentals", status: "coming", tokens: 50 },
      { num: "2.2", title: "Customer Discovery & Interviews", status: "coming", tokens: 45 },
      { num: "2.3", title: "Problem–Solution Fit", status: "coming", tokens: 40 },
    ]
  },
  {
    num: "03", title: "Build", color: C.teal,
    tagline: "Turn your idea into a real product or service.",
    lessons: [
      { num: "3.1", title: "Your Minimum Viable Offer", status: "coming", tokens: 50 },
      { num: "3.2", title: "Pricing for Profit", status: "coming", tokens: 45 },
      { num: "3.3", title: "Branding & Storytelling", status: "coming", tokens: 55 },
    ]
  },
  {
    num: "04", title: "Launch", color: C.gold,
    tagline: "Get your first customers and make your first sale.",
    lessons: [
      { num: "4.1", title: "Sales Fundamentals", status: "coming", tokens: 50 },
      { num: "4.2", title: "Marketing on a Shoestring", status: "coming", tokens: 45 },
      { num: "4.3", title: "Your First 10 Customers", status: "coming", tokens: 40 },
    ]
  },
  {
    num: "05", title: "Sustain", color: "#4a4a7a",
    tagline: "Build systems that keep your business running.",
    lessons: [
      { num: "5.1", title: "Operations & Systems", status: "coming", tokens: 50 },
      { num: "5.2", title: "Financial Management Basics", status: "coming", tokens: 55 },
      { num: "5.3", title: "Growth Planning", status: "coming", tokens: 45 },
    ]
  },
];

const faqs = [
  { q: "What is the Microbiz Startup Journey?", a: "A structured program that takes you from self-discovery to launching and sustaining your own small business — at your own pace, with support every step of the way." },
  { q: "How do tokens work?", a: "Each assignment earns you tokens. Tokens track your progress and represent the work you've completed. At the end of the program, your token total reflects your full portfolio of work." },
  { q: "What if I don't have internet access?", a: "Every lesson has a printable PDF version you can take home and complete offline. Bring your completed work back to class to record your tokens." },
  { q: "Do I need business experience?", a: "No experience needed. This program starts with who you are — your identity, values, and passion — and builds from there." },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState("modules");

  const totalTokens = modules.flatMap(m => m.lessons).reduce((sum, l) => sum + l.tokens, 0);
  const availableTokens = modules.flatMap(m => m.lessons).filter(l => l.status === "available").reduce((sum, l) => sum + l.tokens, 0);

  return (
    <div style={{ minHeight: "100vh", background: C.bgSoft, fontFamily: "Georgia,'Times New Roman',serif", color: C.black }}>

      {/* ── TOP NAV ── */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.grayBorder}`, padding: "0 32px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="7" fill={C.heading} />
              <rect x="7" y="7" width="9" height="9" fill="rgba(255,255,255,0.25)" />
              <rect x="20" y="7" width="9" height="9" fill="rgba(255,255,255,0.7)" />
              <rect x="7" y="20" width="9" height="9" fill="rgba(255,255,255,0.7)" />
              <rect x="20" y="20" width="9" height="9" fill="rgba(255,255,255,0.25)" />
            </svg>
            <div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: C.black, lineHeight: 1.1 }}>Microbiz Startup Journey</div>
              <div style={{ fontSize: "0.62rem", color: C.grayLight, fontFamily: "sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>Participant Portal</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {["modules", "resources", "faq"].map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.78rem", fontFamily: "sans-serif", fontWeight: activeTab === t ? 700 : 400, color: activeTab === t ? C.heading : C.gray, textTransform: "capitalize", padding: "4px 0", borderBottom: activeTab === t ? `2px solid ${C.heading}` : "2px solid transparent", transition: "all 0.15s" }}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <div style={{ background: C.heading, position: "relative", overflow: "hidden" }}>
        {/* Geometric background */}
        <svg style={{ position: "absolute", right: 0, top: 0, opacity: 0.08 }} width="500" height="320" viewBox="0 0 500 320">
          <circle cx="420" cy="80" r="180" stroke="#fff" strokeWidth="1.5" fill="none" />
          <circle cx="420" cy="80" r="120" stroke="#fff" strokeWidth="1.5" fill="none" />
          <circle cx="420" cy="80" r="60" stroke="#fff" strokeWidth="1.5" fill="none" />
          <circle cx="420" cy="80" r="20" fill="#fff" />
          <line x1="0" y1="160" x2="500" y2="160" stroke="#fff" strokeWidth="0.8" />
          <line x1="250" y1="0" x2="250" y2="320" stroke="#fff" strokeWidth="0.8" />
        </svg>

        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "52px 32px 48px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 10, fontFamily: "sans-serif" }}>
                Professional Development · Entrepreneurship
              </div>
              <h1 style={{ margin: "0 0 12px", fontSize: "2.4rem", fontWeight: 700, color: "#fff", lineHeight: 1.15, fontFamily: "Georgia,serif" }}>
                Microbiz<br />Startup Journey
              </h1>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 24px", fontFamily: "sans-serif", maxWidth: 480 }}>
                A step-by-step program taking you from self-discovery to launching and sustaining your own small business. Built for real people, real communities, real impact.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 9, padding: "12px 18px", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", fontFamily: "sans-serif", lineHeight: 1 }}>5</div>
                  <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.6)", fontFamily: "sans-serif", marginTop: 3 }}>Modules</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 9, padding: "12px 18px", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", fontFamily: "sans-serif", lineHeight: 1 }}>15</div>
                  <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.6)", fontFamily: "sans-serif", marginTop: 3 }}>Lessons</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 9, padding: "12px 18px", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", fontFamily: "sans-serif", lineHeight: 1 }}>{totalTokens}</div>
                  <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.6)", fontFamily: "sans-serif", marginTop: 3 }}>Total Tokens</div>
                </div>
              </div>
            </div>

            {/* Progress card */}
            <div style={{ background: C.white, borderRadius: 14, padding: "22px 24px", minWidth: 240, boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
              <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.12em", color: C.teal, fontFamily: "sans-serif", fontWeight: 700, marginBottom: 10 }}>Your Progress</div>
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: "0.78rem", color: C.gray, fontFamily: "sans-serif" }}>Lessons Unlocked</span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: C.black, fontFamily: "sans-serif" }}>1 / 15</span>
                </div>
                <div style={{ background: C.grayBg, borderRadius: 4, height: 6, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "6.7%", background: C.teal, borderRadius: 4 }} />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: "0.78rem", color: C.gray, fontFamily: "sans-serif" }}>Tokens Available</span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: C.heading, fontFamily: "sans-serif" }}>{availableTokens} / {totalTokens}</span>
                </div>
                <div style={{ background: C.grayBg, borderRadius: 4, height: 6, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${(availableTokens / totalTokens) * 100}%`, background: C.heading, borderRadius: 4 }} />
                </div>
              </div>
              <div style={{ background: C.tealLight, borderRadius: 8, padding: "10px 12px", border: `1px solid ${C.tealMid}`, textAlign: "center" }}>
                <div style={{ fontSize: "0.68rem", color: C.teal, fontFamily: "sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Now Available</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: C.black }}>Module 1 · Lesson 1.1</div>
                <div style={{ fontSize: "0.72rem", color: C.gray, fontFamily: "sans-serif" }}>Personal Identity</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TEAL STRIP ── */}
      <div style={{ background: C.teal, padding: "12px 32px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "0.7rem", fontFamily: "sans-serif", color: "#fff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>◈ Now Open:</span>
          <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.9)", fontFamily: "sans-serif" }}>Module 1, Lesson 1.1 — Personal Identity: The Power of Identity is ready for you.</span>
          <span style={{ marginLeft: "auto", fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif" }}>45 tokens available</span>
        </div>
      </div>

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "32px 32px 60px" }}>

        {/* ═══ MODULES TAB ═══ */}
        {activeTab === "modules" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 700, color: C.heading, fontFamily: "Georgia,serif" }}>Course Modules</h2>
              <p style={{ margin: 0, fontSize: "0.82rem", color: C.gray, fontFamily: "sans-serif" }}>Work through each module in order. New lessons unlock as the program progresses.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {modules.map((mod, mi) => (
                <div key={mod.num} style={{ background: C.white, border: `1px solid ${C.grayBorder}`, borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  {/* Module header */}
                  <div style={{ background: mod.color, padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 9, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.25)" }}>
                        <span style={{ fontSize: "1rem", fontWeight: 900, color: "#fff", fontFamily: "sans-serif" }}>{mod.num}</span>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.55)", fontFamily: "sans-serif", marginBottom: 2 }}>Module {mod.num}</div>
                        <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", fontFamily: "Georgia,serif" }}>{mod.title}</div>
                        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif" }}>{mod.tagline}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#fff", fontFamily: "sans-serif", lineHeight: 1 }}>
                        {mod.lessons.reduce((s, l) => s + l.tokens, 0)}
                      </div>
                      <div style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.55)", fontFamily: "sans-serif" }}>tokens</div>
                    </div>
                  </div>

                  {/* Lessons */}
                  <div style={{ padding: "8px 0" }}>
                    {mod.lessons.map((lesson, li) => {
                      const isAvailable = lesson.status === "available";
                      return (
                        <div key={lesson.num} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 24px", borderBottom: li < mod.lessons.length - 1 ? `1px solid ${C.grayBorder}` : "none", background: isAvailable ? "#fafffe" : C.white, cursor: isAvailable ? "pointer" : "default", transition: "background 0.15s" }}>
                          {/* Status icon */}
                          <div style={{ width: 32, height: 32, borderRadius: 6, flexShrink: 0, background: isAvailable ? C.tealLight : C.grayBg, border: `1.5px solid ${isAvailable ? C.tealMid : C.grayBorder}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {isAvailable
                              ? <span style={{ fontSize: "0.75rem", color: C.teal }}>▶</span>
                              : <span style={{ fontSize: "0.75rem", color: C.grayLight }}>◯</span>}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <span style={{ fontSize: "0.65rem", fontFamily: "sans-serif", color: C.grayLight, fontWeight: 700 }}>Lesson {lesson.num}</span>
                              {isAvailable && <span style={{ fontSize: "0.58rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "2px 7px", borderRadius: 4, background: C.tealLight, color: C.teal, border: `1px solid ${C.tealMid}`, fontFamily: "sans-serif" }}>Open Now</span>}
                            </div>
                            <div style={{ fontSize: "0.88rem", fontWeight: isAvailable ? 700 : 400, color: isAvailable ? C.black : C.grayLight, marginTop: 2 }}>{lesson.title}</div>
                          </div>
                          <div style={{ textAlign: "right", flexShrink: 0 }}>
                            <div style={{ fontSize: "0.88rem", fontWeight: 700, color: isAvailable ? mod.color : C.grayLight, fontFamily: "sans-serif" }}>{lesson.tokens}</div>
                            <div style={{ fontSize: "0.6rem", color: C.grayLight, fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>tokens</div>
                          </div>
                          {isAvailable && <span style={{ fontSize: "0.8rem", color: C.teal }}>→</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ RESOURCES TAB ═══ */}
        {activeTab === "resources" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 700, color: C.heading, fontFamily: "Georgia,serif" }}>Resources & Downloads</h2>
              <p style={{ margin: 0, fontSize: "0.82rem", color: C.gray, fontFamily: "sans-serif" }}>Printable materials for participants without consistent internet access.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { mod: "Module 1", lesson: "Lesson 1.1", title: "Personal Identity: The Power of Identity", type: "Lesson + Activities PDF", available: true, pages: 6, tokens: 45 },
                { mod: "Module 1", lesson: "Lesson 1.2", title: "Vision & Purpose", type: "Lesson + Activities PDF", available: false, pages: "—", tokens: 40 },
                { mod: "Module 1", lesson: "Lesson 1.3", title: "Mindset: The Entrepreneur Within", type: "Lesson + Activities PDF", available: false, pages: "—", tokens: 35 },
                { mod: "All Modules", lesson: "Reference", title: "Token Tracking Sheet", type: "Progress Tracker PDF", available: true, pages: 1, tokens: null },
              ].map((r, i) => (
                <div key={i} style={{ background: C.white, border: `1px solid ${C.grayBorder}`, borderRadius: 12, padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: "0.62rem", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: C.grayLight, marginBottom: 3 }}>{r.mod} · {r.lesson}</div>
                      <div style={{ fontWeight: 700, color: C.black, fontSize: "0.88rem", lineHeight: 1.3 }}>{r.title}</div>
                    </div>
                    {r.available
                      ? <span style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "3px 8px", borderRadius: 4, background: C.tealLight, color: C.teal, border: `1px solid ${C.tealMid}`, fontFamily: "sans-serif", flexShrink: 0 }}>Ready</span>
                      : <span style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "3px 8px", borderRadius: 4, background: C.grayBg, color: C.grayLight, border: `1px solid ${C.grayBorder}`, fontFamily: "sans-serif", flexShrink: 0 }}>Coming</span>}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: C.gray, fontFamily: "sans-serif", marginBottom: 12 }}>
                    {r.type} {r.pages !== "—" && `· ${r.pages} pages`} {r.tokens && `· ${r.tokens} tokens`}
                  </div>
                  <button disabled={!r.available} style={{ width: "100%", padding: "9px", borderRadius: 7, background: r.available ? C.heading : C.grayBg, border: "none", color: r.available ? "#fff" : C.grayLight, fontSize: "0.75rem", fontWeight: 700, fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.07em", cursor: r.available ? "pointer" : "not-allowed" }}>
                    {r.available ? "⬇ Download PDF" : "Not Yet Available"}
                  </button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, background: C.white, border: `1px solid ${C.grayBorder}`, borderRadius: 12, padding: "22px 24px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 7, background: C.tealLight, border: `1px solid ${C.tealMid}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: C.teal, fontSize: "1rem" }}>◈</span>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: C.black, marginBottom: 5, fontSize: "0.9rem" }}>For Facilitators</div>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: C.gray, fontFamily: "sans-serif", lineHeight: 1.7 }}>
                    Print lesson PDFs before each class session. Participants can complete activities by hand and return them to you for token recording. All PDFs are formatted for standard 8.5×11 paper and include answer spaces sized for handwriting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══ FAQ TAB ═══ */}
        {activeTab === "faq" && (
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 700, color: C.heading, fontFamily: "Georgia,serif" }}>Frequently Asked Questions</h2>
              <p style={{ margin: 0, fontSize: "0.82rem", color: C.gray, fontFamily: "sans-serif" }}>Everything participants need to know about the program.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: C.white, border: `1px solid ${openFaq === i ? C.teal : C.grayBorder}`, borderRadius: 10, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700, color: C.black, fontSize: "0.9rem", textAlign: "left", fontFamily: "Georgia,serif" }}>{faq.q}</span>
                    <span style={{ color: openFaq === i ? C.teal : C.grayLight, fontSize: "1rem", flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 20px 16px", fontSize: "0.85rem", color: C.gray, fontFamily: "sans-serif", lineHeight: 1.75, borderTop: `1px solid ${C.grayBorder}`, paddingTop: 14 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, background: "#fbe8ec", border: "1px solid #f0bcc8", borderRadius: 12, padding: "20px 22px" }}>
              <div style={{ fontWeight: 700, color: C.heading, marginBottom: 6, fontSize: "0.9rem" }}>Have a question not listed here?</div>
              <p style={{ margin: 0, fontSize: "0.82rem", color: C.gray, fontFamily: "sans-serif", lineHeight: 1.7 }}>
                Bring your questions to your next class session, or speak with your facilitator. You can also write your question on the back of any printed activity sheet.
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div style={{ background: C.black, padding: "24px 32px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="7" fill={C.heading} />
              <rect x="7" y="7" width="9" height="9" fill="rgba(255,255,255,0.3)" />
              <rect x="20" y="7" width="9" height="9" fill="rgba(255,255,255,0.7)" />
              <rect x="7" y="20" width="9" height="9" fill="rgba(255,255,255,0.7)" />
              <rect x="20" y="20" width="9" height="9" fill="rgba(255,255,255,0.3)" />
            </svg>
            <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif" }}>Microbiz Startup Journey</span>
          </div>
          <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", fontFamily: "sans-serif", letterSpacing: "0.06em" }}>
            PARTICIPANT PORTAL · ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </div>
  );
}
