
import { useState, useEffect, useRef } from "react";

/* ================= THEME ================= */
const YELLOW = "#F2D976";
const BLUE = "#1E4A8E";
const CORAL = "#E85A2C";
const CREAM = "#F8F2E4";
const WARM_WHITE = "#FAF6EC";
const DEEP_BLUE = "#0F2A52";
const INK = "#1A1A1A";

/* ================= HOOK ================= */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(
      (e) => e[0].isIntersecting && setV(true),
      { threshold }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return [ref, v];
}

/* ================= ANIMATION ================= */
function FadeUp({ children, delay = 0, style = {} }) {
  const [ref, v] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(24px)",
        transition: `0.8s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ================= SIMPLE LOGO ================= */
function LogoMark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          border: `2px solid ${BLUE}`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: CORAL,
          }}
        />
      </div>
      <div style={{ fontWeight: 900, color: BLUE }}>BuiltByAE</div>
    </div>
  );
}

/* ================= DIVIDER (torn paper style) ================= */
function TornDivider() {
  return (
    <div style={{ height: 40, background: YELLOW, position: "relative" }}>
      <svg viewBox="0 0 1440 60" style={{ width: "100%", height: 40 }}>
        <path
          d="M0,20 Q60,60 120,20 T240,20 T360,20 T480,20 T600,20 T720,20 T840,20 T960,20 T1080,20 T1200,20 T1320,20 T1440,20 L1440,60 L0,60 Z"
          fill={WARM_WHITE}
        />
      </svg>
    </div>
  );
}

/* ================= VIDEO DATA ================= */
const VIDEOS = [
  { id: 1, type: "testimonial", title: "Trust Review" },
  { id: 2, type: "unboxing", title: "First Reaction" },
  { id: 3, type: "lifestyle", title: "Daily Use" },
  { id: 4, type: "education", title: "Expert Insight" },
  { id: 5, type: "testimonial", title: "Before / After" },
  { id: 6, type: "lifestyle", title: "Real Routine" },
];

/* ================= APP ================= */
export default function App() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const filtered =
    filter === "all"
      ? VIDEOS
      : VIDEOS.filter((v) => v.type === filter);

  return (
    <div style={{ fontFamily: "sans-serif", background: WARM_WHITE }}>

      {/* ================= HERO ================= */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: 40 }}>
        <div style={{ flex: 1 }}>
          <FadeUp>
            <div style={{ color: CORAL, fontWeight: 700 }}>UGC Studio Vancouver</div>

            <h1 style={{ fontSize: 80, color: BLUE, margin: 0 }}>
              BUILT BY
            </h1>

            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <h2 style={{ fontSize: 50, margin: 0, color: CORAL }}>Aaron</h2>
              <h2 style={{ fontSize: 50, margin: 0, color: BLUE }}>& Ellen</h2>
            </div>

            <p style={{ maxWidth: 420, color: INK, opacity: 0.7 }}>
              Nutrition + Optician expertise meets design-led content creation.
            </p>
          </FadeUp>
        </div>

        {/* CLEAN PANEL */}
        <div style={{
          flex: 1,
          height: 420,
          border: `2px dashed ${BLUE}`,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: YELLOW + "55"
        }}>
          Photo / Product Slot
        </div>
      </section>

      {/* ================= SHOWCASE ================= */}
      <section style={{ minHeight: "100vh", padding: 60 }}>
        <FadeUp>
          <h2 style={{ color: BLUE }}>Showcase</h2>

          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            {["all", "testimonial", "unboxing", "lifestyle", "education"].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                style={{
                  padding: "6px 14px",
                  borderRadius: 20,
                  border: "none",
                  background: filter === t ? BLUE : "#ddd",
                  color: filter === t ? "white" : "black",
                  cursor: "pointer"
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {filtered.map((v) => (
              <div
                key={v.id}
                onClick={() => setActive(v)}
                style={{
                  height: 180,
                  border: `2px solid ${BLUE}`,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  background: "#fff"
                }}
              >
                {v.title}
              </div>
            ))}
          </div>
        </FadeUp>

        {active && (
          <div
            onClick={() => setActive(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div style={{ background: "white", padding: 40 }}>
              {active.title}
            </div>
          </div>
        )}
      </section>

      {/* ================= ABOUT (CLEAN) ================= */}
      <section style={{ minHeight: "100vh", background: YELLOW, padding: 60 }}>
        <FadeUp>
          <h2 style={{ color: BLUE }}>About</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <div style={{ border: `2px dashed ${BLUE}`, height: 300 }} />

            <div>
              <p>
                Aaron combines nutrition science + optician background.
                Ellen leads visual direction and content design.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ================= SERVICES ================= */}
      <section style={{ minHeight: "100vh", padding: 60 }}>
        <FadeUp>
          <h2 style={{ color: BLUE }}>Services</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
            <div style={{ border: `2px dashed ${BLUE}`, height: 280 }}>
              Photo Slot
            </div>

            <div>
              <div>Single Video</div>
              <div>Retainer</div>
              <div>Campaign</div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ================= CONTACT ================= */}
      <TornDivider />

      <section style={{ minHeight: "100vh", background: BLUE, color: "white", padding: 60 }}>
        <FadeUp>
          <h2>Contact</h2>

          <p>builtbyae.fit@gmail.com</p>
          <p>TikTok: builtbyae.fit</p>
        </FadeUp>
      </section>

      {/* ================= FOOTER (UNCHANGED STYLE IDEA) ================= */}
      <footer style={{ padding: 40, background: DEEP_BLUE, color: "white" }}>
        BuiltByAE — Vancouver
      </footer>
    </div>
  );
}