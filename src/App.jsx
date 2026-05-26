
import { useState, useEffect, useRef } from "react";

const YELLOW = "#F2D976"; // UPDATED (butter yellow)
const BLUE = "#1E4A8E";
const CORAL = "#E85A2C";
const CREAM = "#F8F2E4";
const WARM_WHITE = "#FAF6EC";
const DEEP_BLUE = "#0F2A52";
const INK = "#1A1A1A";

/* -----------------------------
   BASIC HOOK
------------------------------*/
function useInView(t) {
  t = t || 0.1;
  var ref = useRef(null);
  var st = useState(false); var v = st[0]; var setV = st[1];

  useEffect(function () {
    var o = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) setV(true);
    }, { threshold: t });

    if (ref.current) o.observe(ref.current);
    return function () { o.disconnect(); };
  }, []);

  return [ref, v];
}

function FadeUp(props) {
  var rv = useInView();
  var ref = rv[0]; var v = rv[1];

  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(30px)",
        transition: "all 0.8s ease"
      }}
    >
      {props.children}
    </div>
  );
}

/* -----------------------------
   LOGO (UPDATED)
   cleaner dot-above mark
------------------------------*/
function LogoMark(props) {
  var size = props.size || 38;
  var color = props.color || BLUE;

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <span style={{
        fontFamily: "Fraunces",
        fontSize: size * 0.75,
        fontWeight: 900,
        color
      }}>
        B
      </span>

      {/* CLEAN DOT MARK */}
      <div style={{
        position: "absolute",
        top: 6,
        right: 6,
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: color
      }} />
    </div>
  );
}

/* -----------------------------
   HERO CLEAN PANEL (UPDATED)
------------------------------*/
function HeroPanel() {
  return (
    <div style={{
      background: "rgba(242,217,118,0.35)",
      border: "1px solid " + BLUE + "33",
      borderRadius: 8,
      padding: 40,
      minHeight: 420,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <div style={{ fontSize: 14, letterSpacing: 2, color: BLUE }}>
        PHOTO / VIDEO SLOT
      </div>
      <div style={{ fontSize: 12, opacity: 0.6, marginTop: 10 }}>
        Replace with your hero visual
      </div>
    </div>
  );
}

/* -----------------------------
   VIDEO DATA (NOW 6 + TYPES)
------------------------------*/
const VIDEOS = [
  { id: 1, type: "testimonial", title: "Testimonial Review" },
  { id: 2, type: "unboxing", title: "Unboxing Reaction" },
  { id: 3, type: "lifestyle", title: "Lifestyle Integration" },
  { id: 4, type: "educational", title: "Expert Breakdown" },
  { id: 5, type: "lifestyle", title: "Morning Routine" },
  { id: 6, type: "testimonial", title: "Product Trust Review" }
];

/* -----------------------------
   VIDEO CARD
------------------------------*/
function VideoCard({ v, onClick }) {
  return (
    <div
      onClick={() => onClick(v)}
      style={{
        background: WARM_WHITE,
        border: "1px solid " + INK + "22",
        padding: 20,
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      <div style={{ fontSize: 11, color: CORAL, textTransform: "uppercase" }}>
        {v.type}
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, color: BLUE }}>
        {v.title}
      </div>
    </div>
  );
}

/* -----------------------------
   APP
------------------------------*/
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const filtered = VIDEOS.filter(v =>
    filter === "all" ? true : v.type === filter
  );

  return (
    <div style={{ background: WARM_WHITE, minHeight: "100vh" }}>

      {/* NAV */}
      <div style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: 20,
        background: scrolled ? "rgba(250,246,236,0.95)" : "transparent"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LogoMark />
            <b>BuiltByAE</b>
          </div>

          {/* FIXED ALIGNMENT */}
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <span>Work</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* HERO (FULL SCREEN FIXED) */}
      <section style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: 60
      }}>
        <div>
          <h1 style={{ fontSize: 80, color: BLUE }}>
            BUILT BY AARON & ELLEN
          </h1>
          <p style={{ maxWidth: 400 }}>
            Premium UGC content studio based in Vancouver.
          </p>
        </div>

        <HeroPanel />
      </section>

      {/* SHOWCASE (6 VIDEOS + FILTER) */}
      <section style={{ padding: 60, minHeight: "100vh" }}>
        <h2>Showcase</h2>

        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
          {["all", "testimonial", "unboxing", "lifestyle", "educational"].map(t => (
            <button key={t} onClick={() => setFilter(t)}>
              {t}
            </button>
          ))}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 20
        }}>
          {filtered.map(v => (
            <VideoCard key={v.id} v={v} onClick={setSelected} />
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div onClick={() => setSelected(null)} style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div style={{
              background: "white",
              padding: 40
            }}>
              <h2>{selected.title}</h2>
            </div>
          </div>
        )}
      </section>

      {/* ABOUT (CONDENSED + FIXED ROLE) */}
      <section style={{ minHeight: "100vh", padding: 60, background: YELLOW }}>
        <h2>About</h2>

        <div style={{ maxWidth: 600 }}>
          <p>
            Aaron: Optician + Nutrition background.  
            Ellen: Creative Director & Designer.
          </p>
        </div>
      </section>

      {/* CONTACT (UPDATED + TORN STYLE PLACEHOLDER) */}
      <section style={{ minHeight: "100vh", padding: 60, background: BLUE, color: "white" }}>
        <h2>Contact</h2>

        <p>builtbyae.fit@gmail.com</p>
        <p>TikTok: builtbyae.fit</p>

        {/* torn paper line placeholder */}
        <div style={{
          height: 40,
          background: "linear-gradient(135deg, transparent 25%, white 25%)"
        }} />
      </section>

      {/* FOOTER (UNCHANGED AS REQUESTED) */}
      <footer style={{ padding: 40, background: DEEP_BLUE, color: "white" }}>
        BuiltByAE © 2026
      </footer>

    </div>
  );
}