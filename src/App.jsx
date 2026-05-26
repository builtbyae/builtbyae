
import React, { useState, useEffect, useRef } from "react";

const YELLOW = "#F2D976";
const BLUE = "#1E4A8E";
const CORAL = "#E85A2C";
const CREAM = "#F8F2E4";
const WARM_WHITE = "#FAF6EC";
const DEEP_BLUE = "#0F2A52";
const INK = "#1A1A1A";

function useInView(t) {
  t = t || 0.1;
  var ref = useRef(null);
  var st = useState(false); var v = st[0]; var setV = st[1];
  useEffect(function() {
    var o = new IntersectionObserver(function(e) { if (e[0].isIntersecting) setV(true); }, { threshold: t });
    if (ref.current) o.observe(ref.current);
    return function() { o.disconnect(); };
  }, []);
  return [ref, v];
}

function FadeUp(props) {
  var children = props.children; var delay = props.delay || 0; var style = props.style || {};
  var rv = useInView(); var ref = rv[0]; var v = rv[1];
  return (
    <div ref={ref} style={Object.assign({
      opacity: v ? 1 : 0,
      transform: v ? "none" : "translateY(30px)",
      transition: "opacity 0.85s " + delay + "s ease, transform 0.85s " + delay + "s ease",
    }, style)}>{children}</div>
  );
}

// Wavy badge shape (like Peixou yellow card)
function WavyBadge(props) {
  var fill = props.fill || YELLOW;
  var children = props.children;
  var style = props.style || {};
  return (
    <div style={Object.assign({ position: "relative", padding: "44px 38px" }, style)}>
      <svg viewBox="0 0 400 280" preserveAspectRatio="none" style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0,
      }}>
        <path d="M 7,7 Q 10.5,9.6 14.0,7.0 Q 17.5,4.4 21.0,7.0 Q 24.5,9.6 28.1,7.0 Q 31.6,4.4 35.1,7.0 Q 38.6,9.6 42.1,7.0 Q 45.6,4.4 49.1,7.0 Q 52.6,9.6 56.1,7.0 Q 59.6,4.4 63.1,7.0 Q 66.7,9.6 70.2,7.0 Q 73.7,4.4 77.2,7.0 Q 80.7,9.6 84.2,7.0 Q 87.7,4.4 91.2,7.0 Q 94.7,9.6 98.2,7.0 Q 101.7,4.4 105.3,7.0 Q 108.8,9.6 112.3,7.0 Q 115.8,4.4 119.3,7.0 Q 122.8,9.6 126.3,7.0 Q 129.8,4.4 133.3,7.0 Q 136.8,9.6 140.3,7.0 Q 143.9,4.4 147.4,7.0 Q 150.9,9.6 154.4,7.0 Q 157.9,4.4 161.4,7.0 Q 164.9,9.6 168.4,7.0 Q 171.9,4.4 175.4,7.0 Q 178.9,9.6 182.5,7.0 Q 186.0,4.4 189.5,7.0 Q 193.0,9.6 196.5,7.0 Q 200.0,4.4 203.5,7.0 Q 207.0,9.6 210.5,7.0 Q 214.0,4.4 217.5,7.0 Q 221.1,9.6 224.6,7.0 Q 228.1,4.4 231.6,7.0 Q 235.1,9.6 238.6,7.0 Q 242.1,4.4 245.6,7.0 Q 249.1,9.6 252.6,7.0 Q 256.1,4.4 259.7,7.0 Q 263.2,9.6 266.7,7.0 Q 270.2,4.4 273.7,7.0 Q 277.2,9.6 280.7,7.0 Q 284.2,4.4 287.7,7.0 Q 291.2,9.6 294.7,7.0 Q 298.3,4.4 301.8,7.0 Q 305.3,9.6 308.8,7.0 Q 312.3,4.4 315.8,7.0 Q 319.3,9.6 322.8,7.0 Q 326.3,4.4 329.8,7.0 Q 333.3,9.6 336.9,7.0 Q 340.4,4.4 343.9,7.0 Q 347.4,9.6 350.9,7.0 Q 354.4,4.4 357.9,7.0 Q 361.4,9.6 364.9,7.0 Q 368.4,4.4 371.9,7.0 Q 375.5,9.6 379.0,7.0 Q 382.5,4.4 386.0,7.0 Q 389.5,9.6 393.0,7.0 Q 395.6,10.5 393.0,14.0 Q 390.4,17.5 393.0,21.0 Q 395.6,24.5 393.0,28.0 Q 390.4,31.5 393.0,35.0 Q 395.6,38.5 393.0,42.0 Q 390.4,45.5 393.0,49.0 Q 395.6,52.5 393.0,56.0 Q 390.4,59.5 393.0,63.0 Q 395.6,66.5 393.0,70.0 Q 390.4,73.5 393.0,77.0 Q 395.6,80.5 393.0,84.0 Q 390.4,87.5 393.0,91.0 Q 395.6,94.5 393.0,98.0 Q 390.4,101.5 393.0,105.0 Q 395.6,108.5 393.0,112.0 Q 390.4,115.5 393.0,119.0 Q 395.6,122.5 393.0,126.0 Q 390.4,129.5 393.0,133.0 Q 395.6,136.5 393.0,140.0 Q 390.4,143.5 393.0,147.0 Q 395.6,150.5 393.0,154.0 Q 390.4,157.5 393.0,161.0 Q 395.6,164.5 393.0,168.0 Q 390.4,171.5 393.0,175.0 Q 395.6,178.5 393.0,182.0 Q 390.4,185.5 393.0,189.0 Q 395.6,192.5 393.0,196.0 Q 390.4,199.5 393.0,203.0 Q 395.6,206.5 393.0,210.0 Q 390.4,213.5 393.0,217.0 Q 395.6,220.5 393.0,224.0 Q 390.4,227.5 393.0,231.0 Q 395.6,234.5 393.0,238.0 Q 390.4,241.5 393.0,245.0 Q 395.6,248.5 393.0,252.0 Q 390.4,255.5 393.0,259.0 Q 395.6,262.5 393.0,266.0 Q 390.4,269.5 393.0,273.0 Q 389.5,275.6 386.0,273.0 Q 382.5,270.4 379.0,273.0 Q 375.5,275.6 371.9,273.0 Q 368.4,270.4 364.9,273.0 Q 361.4,275.6 357.9,273.0 Q 354.4,270.4 350.9,273.0 Q 347.4,275.6 343.9,273.0 Q 340.4,270.4 336.9,273.0 Q 333.3,275.6 329.8,273.0 Q 326.3,270.4 322.8,273.0 Q 319.3,275.6 315.8,273.0 Q 312.3,270.4 308.8,273.0 Q 305.3,275.6 301.8,273.0 Q 298.3,270.4 294.7,273.0 Q 291.2,275.6 287.7,273.0 Q 284.2,270.4 280.7,273.0 Q 277.2,275.6 273.7,273.0 Q 270.2,270.4 266.7,273.0 Q 263.2,275.6 259.7,273.0 Q 256.1,270.4 252.6,273.0 Q 249.1,275.6 245.6,273.0 Q 242.1,270.4 238.6,273.0 Q 235.1,275.6 231.6,273.0 Q 228.1,270.4 224.6,273.0 Q 221.1,275.6 217.5,273.0 Q 214.0,270.4 210.5,273.0 Q 207.0,275.6 203.5,273.0 Q 200.0,270.4 196.5,273.0 Q 193.0,275.6 189.5,273.0 Q 186.0,270.4 182.5,273.0 Q 178.9,275.6 175.4,273.0 Q 171.9,270.4 168.4,273.0 Q 164.9,275.6 161.4,273.0 Q 157.9,270.4 154.4,273.0 Q 150.9,275.6 147.4,273.0 Q 143.9,270.4 140.3,273.0 Q 136.8,275.6 133.3,273.0 Q 129.8,270.4 126.3,273.0 Q 122.8,275.6 119.3,273.0 Q 115.8,270.4 112.3,273.0 Q 108.8,275.6 105.3,273.0 Q 101.7,270.4 98.2,273.0 Q 94.7,275.6 91.2,273.0 Q 87.7,270.4 84.2,273.0 Q 80.7,275.6 77.2,273.0 Q 73.7,270.4 70.2,273.0 Q 66.7,275.6 63.1,273.0 Q 59.6,270.4 56.1,273.0 Q 52.6,275.6 49.1,273.0 Q 45.6,270.4 42.1,273.0 Q 38.6,275.6 35.1,273.0 Q 31.6,270.4 28.1,273.0 Q 24.5,275.6 21.0,273.0 Q 17.5,270.4 14.0,273.0 Q 10.5,275.6 7.0,273.0 Q 9.6,269.5 7.0,266.0 Q 4.4,262.5 7.0,259.0 Q 9.6,255.5 7.0,252.0 Q 4.4,248.5 7.0,245.0 Q 9.6,241.5 7.0,238.0 Q 4.4,234.5 7.0,231.0 Q 9.6,227.5 7.0,224.0 Q 4.4,220.5 7.0,217.0 Q 9.6,213.5 7.0,210.0 Q 4.4,206.5 7.0,203.0 Q 9.6,199.5 7.0,196.0 Q 4.4,192.5 7.0,189.0 Q 9.6,185.5 7.0,182.0 Q 4.4,178.5 7.0,175.0 Q 9.6,171.5 7.0,168.0 Q 4.4,164.5 7.0,161.0 Q 9.6,157.5 7.0,154.0 Q 4.4,150.5 7.0,147.0 Q 9.6,143.5 7.0,140.0 Q 4.4,136.5 7.0,133.0 Q 9.6,129.5 7.0,126.0 Q 4.4,122.5 7.0,119.0 Q 9.6,115.5 7.0,112.0 Q 4.4,108.5 7.0,105.0 Q 9.6,101.5 7.0,98.0 Q 4.4,94.5 7.0,91.0 Q 9.6,87.5 7.0,84.0 Q 4.4,80.5 7.0,77.0 Q 9.6,73.5 7.0,70.0 Q 4.4,66.5 7.0,63.0 Q 9.6,59.5 7.0,56.0 Q 4.4,52.5 7.0,49.0 Q 9.6,45.5 7.0,42.0 Q 4.4,38.5 7.0,35.0 Q 9.6,31.5 7.0,28.0 Q 4.4,24.5 7.0,21.0 Q 9.6,17.5 7.0,14.0 Q 4.4,10.5 7.0,7.0 Z"
          fill={fill} />
      </svg>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

// Wavy divider line (top/bottom of sections)
function WavyDivider(props) {
  var color = props.color || BLUE;
  var flip = props.flip || false;
  return (
    <div style={{ width: "100%", lineHeight: 0, transform: flip ? "scaleY(-1)" : "none" }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 36 }}>
        <path d="M0,30 Q60,8 120,30 T240,30 T360,30 T480,30 T600,30 T720,30 T840,30 T960,30 T1080,30 T1200,30 T1320,30 T1440,30 L1440,60 L0,60 Z" fill={color} />
      </svg>
    </div>
  );
}

// Torn-paper edge divider (Image 3 style) - top section tears into bottom
function TornDivider(props) {
  var topColor = props.topColor; var bottomColor = props.bottomColor;
  return (
    <div style={{ lineHeight: 0, background: topColor }}>
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 46 }}>
        <path d="M0,38 C90,20 170,52 260,40 C350,28 420,10 520,30 C620,50 710,56 820,40 C930,24 1010,50 1120,42 C1230,34 1320,52 1440,40 L1440,70 L0,70 Z" fill={bottomColor} />
      </svg>
    </div>
  );
}

// Tab/label like "OFERTA DO DIA"
function SectionLabel(props) {
  var text = props.text; var color = props.color || CORAL; var center = props.center;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: center ? "center" : "flex-start", marginBottom: 16 }}>
      <span style={{ display: "block", width: center ? 32 : 0, height: 1.5, background: color, opacity: center ? 1 : 0 }} />
      <span style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700,
        letterSpacing: "0.22em", textTransform: "uppercase", color: color,
      }}>{text}</span>
      <span style={{ display: "block", width: 32, height: 1.5, background: color }} />
    </div>
  );
}

// === LOGO FAMILY — "The Wink" ===
// Core icon: circle eye + offset pupil dot + little notch on top
function WinkIcon(props) {
  var size = props.size || 36; var color = props.color || BLUE; var stroke = props.stroke || 2;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ display: "block", flexShrink: 0 }}>
      {/* eye circle */}
      <circle cx="24" cy="26" r="15.5" stroke={color} strokeWidth={stroke} fill="none" />
      {/* pupil */}
      <circle cx="30.5" cy="21.5" r="3.1" fill={color} />
    </svg>
  );
}

// Full stacked lockup: wink + BUILT / by AE  (the "primary lockup")
function WinkLockup(props) {
  var size = props.size || 1; var color = props.color || BLUE; var sub = props.sub || color;
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", lineHeight: 1, gap: 6 * size }}>
      <WinkIcon size={42 * size} color={color} stroke={2.2} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 0.92 }}>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 900, fontSize: 30 * size, color: color, letterSpacing: "0.04em" }}>BUILT</span>
        <span style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: 22 * size, color: sub, marginTop: -2 * size }}>by AE</span>
      </div>
    </div>
  );
}

// Logo mark used in nav/footer — wink icon (kept same signature: size, color)
function LogoMark(props) {
  var size = props.size || 36; var color = props.color || BLUE;
  return <WinkIcon size={size} color={color} stroke={2.2} />;
}

// Decorative dot/eye accent
function EyeDot(props) {
  var size = props.size || 16; var color = props.color || BLUE; var style = props.style || {};
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={style}>
      <circle cx="10" cy="10" r="8" fill="none" stroke={color} strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3" fill={color} />
    </svg>
  );
}

// Decorative small dot
function SmallDot(props) {
  var color = props.color || BLUE; var size = props.size || 6; var style = props.style || {};
  return <div style={Object.assign({ width: size, height: size, borderRadius: "50%", background: color, flexShrink: 0 }, style)} />;
}

// Service / video card with Peixou-style ribbon header
function VideoCard(props) {
  var num = props.num; var label = props.label; var sub = props.sub;
  var color = props.color; var desc = props.desc; var idx = props.idx;
  var onOpen = props.onOpen;
  var h = useState(false); var hov = h[0]; var setHov = h[1];

  return (
    <FadeUp delay={idx * 0.1}>
      <div
        onClick={function() { if (onOpen) onOpen(props); }}
        onMouseEnter={function() { setHov(true); }}
        onMouseLeave={function() { setHov(false); }}
        style={{
          background: WARM_WHITE,
          border: "2px solid " + (hov ? color : INK + "12"),
          borderRadius: 4,
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: hov ? "translateY(-6px)" : "none",
          boxShadow: hov ? "0 18px 40px " + color + "33" : "0 2px 12px rgba(26,26,26,0.05)",
        }}>
        {/* Ribbon header */}
        <div style={{ background: color, padding: "10px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 800,
            letterSpacing: "0.18em", textTransform: "uppercase", color: WARM_WHITE,
          }}>{sub}</span>
          <span style={{
            fontFamily: "'DM Serif Display', serif", fontSize: 22, fontWeight: 900,
            color: WARM_WHITE, fontStyle: "italic", lineHeight: 1,
          }}>{num}</span>
        </div>
        {/* Video preview */}
        <div style={{
          margin: "16px 18px 0", aspectRatio: "9/16",
          background: hov ? color + "20" : color + "0e",
          border: "1.5px solid " + color + "33",
          borderRadius: 3,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          position: "relative", transition: "all 0.3s",
        }}>
          <div style={{
            width: 54, height: 54, borderRadius: "50%", background: hov ? color : WARM_WHITE,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 6px 20px " + color + "55", transition: "all 0.3s",
          }}>
            <div style={{
              width: 0, height: 0,
              borderTop: "9px solid transparent", borderBottom: "9px solid transparent",
              borderLeft: "15px solid " + (hov ? WARM_WHITE : color), marginLeft: 4, transition: "all 0.3s",
            }} />
          </div>
          <div style={{
            position: "absolute", bottom: 12,
            fontFamily: "'DM Sans', sans-serif", fontSize: 9.5,
            fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase",
            color: WARM_WHITE, background: color, padding: "5px 14px", borderRadius: 100,
          }}>&#9654; Watch</div>
        </div>
        <div style={{ padding: "18px 20px 22px" }}>
          <div style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 26, fontWeight: 900, color: BLUE, marginBottom: 6,
            letterSpacing: "-0.01em", textTransform: "uppercase",
          }}>{label}</div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: INK + "aa",
            lineHeight: 1.75,
          }}>{desc}</div>
        </div>
      </div>
    </FadeUp>
  );
}

// Video modal player
function VideoModal(props) {
  var vid = props.vid; var onClose = props.onClose;
  useEffect(function() {
    function k(e) { if (e.key === "Escape" && onClose) onClose(); }
    window.addEventListener("keydown", k);
    return function() { window.removeEventListener("keydown", k); };
  }, [vid]);
  if (!vid) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(15,42,82,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(6px)" }}>
      <div onClick={function(e) { e.stopPropagation(); }} style={{ position: "relative", width: "min(340px, 92vw)" }}>
        <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: -42, right: 0, background: "none", border: "none", color: WARM_WHITE, fontSize: 26, cursor: "pointer", lineHeight: 1 }}>&#10005;</button>
        <div style={{ aspectRatio: "9/16", borderRadius: 8, overflow: "hidden", background: "#000", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, border: "1px solid " + WARM_WHITE + "22" }}>
          {vid.src ? (
            <video src={vid.src} controls autoPlay playsInline style={{ width: "100%", height: "100%", objectFit: "contain", background: "#000" }} />
          ) : (
            <React.Fragment>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: vid.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "17px solid " + WARM_WHITE, marginLeft: 4 }} />
              </div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: WARM_WHITE + "99", textAlign: "center", padding: "0 24px", lineHeight: 1.7 }}>
                {vid.label} - {vid.sub}<br />video drops in here
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  var sc = useState(false); var scrolled = sc[0]; var setScrolled = sc[1];
  var mo = useState(false); var menuOpen = mo[0]; var setMenuOpen = mo[1];
  var ac = useState("both"); var activeCreator = ac[0]; var setActiveCreator = ac[1];
  var fm = useState({ name: "", brand: "", email: "", type: "", msg: "" });
  var form = fm[0]; var setForm = fm[1];
  var sn = useState(false); var sent = sn[0]; var setSent = sn[1];
  var ov = useState(null); var openVid = ov[0]; var setOpenVid = ov[1];
  var ft = useState("All"); var filter = ft[0]; var setFilter = ft[1];

  useEffect(function() {
    var fn = function() { setScrolled(window.scrollY > 55); };
    window.addEventListener("scroll", fn);
    return function() { window.removeEventListener("scroll", fn); };
  }, []);

  function go(id) { var el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }

  var CREATORS = {
    aaron: {
      name: "Aaron", initial: "A", color: BLUE,
      role: "Optician + Nutrition", sub: "On-Camera Lead",
      origin: "Chinese-Canadian",
      bio: "Aaron is a licensed optician who also completed nutrition education, and speaks from that nutrition background on camera. He lost 50 lbs and documents his own transformation week by week, no filters - credible for fitness, nutrition, and eyewear brands.",
      skills: ["Nutrition Background", "Licensed Optician", "Body Transformation", "Expert-Led Content"],
    },
    ellen: {
      name: "Ellen", initial: "E", color: CORAL,
      role: "Creative Director", sub: "On-Camera Talent",
      origin: "Vietnamese-Canadian",
      bio: "Ellen is a graphic designer with a sharp aesthetic eye and natural ease in front of the camera. She directs every shoot - framing, light, color, pacing - and appears on screen for lifestyle, wellness, and feminine brand content. Her Vietnamese-Canadian background opens doors to multicultural campaigns.",
      skills: ["Graphic Design", "Visual Direction", "Lifestyle Content", "Aesthetic Eye"],
    },
    both: {
      name: "Together", initial: "AE", color: DEEP_BLUE,
      role: "Content Studio", sub: "Aaron + Ellen",
      origin: "Vancouver, BC",
      bio: "A licensed optician with a nutrition background and a trained designer, building content from their real life in Vancouver. Their work covers the full wellness spectrum - nutrition, fitness, eyewear, lifestyle - with the visual quality and authentic dynamic that brands spend entire budgets trying to recreate.",
      skills: ["Couple Content", "Expert + Aesthetic", "Real Dynamic", "Brand Flexible"],
    },
  };
  var cr = CREATORS[activeCreator];

  var VIDS = [
    { num: "01", label: "Work hard, sleep harder", sub: "Testimonial", type: "Testimonial", color: BLUE, desc: "A weighted, cooling blanket that actually changed how the night feels.", src: "/videos/video1.mp4" },
    { num: "02", label: "Chill morning coffee", sub: "Lifestyle", type: "Lifestyle", color: CORAL, desc: "Slow, warm, and easy — coffee the way mornings should start.", src: "/videos/video2.mp4" },
    { num: "03", label: "ASMR sound check", sub: "Lifestyle", type: "Lifestyle", color: YELLOW, desc: "Crisp, satisfying sound, no talking — just the vibe.", src: "/videos/video3.mp4" },
    { num: "04", label: "Coffee, start to finish", sub: "Lifestyle", type: "Lifestyle", color: DEEP_BLUE, desc: "Grab the pod, the cup, the brew, the first sip — the whole little ritual.", src: "/videos/video4.mp4" },
    { num: "05", label: "The picky-pillow test", sub: "Testimonial", type: "Testimonial", color: BLUE, desc: "Adjustable down to the exact height and firmness — even for the fussiest sleeper.", src: "/videos/video5.mp4" },
    { num: "06", label: "Fresh out the box", sub: "Unboxing", type: "Unboxing", color: CORAL, desc: "First look, real reactions, beautifully framed.", src: "/videos/video6.mp4" },
    { num: "07", label: "Cooler nights, deeper sleep", sub: "Testimonial", type: "Testimonial", color: DEEP_BLUE, desc: "Same honest sleep story, told through a different edit.", src: "/videos/video7.mp4" },
    { num: "08", label: "Breathing easier", sub: "Testimonial", type: "Testimonial", color: BLUE, desc: "An asthma sufferer's take on what cleaner air actually feels like.", src: "/videos/video8.mp4" },
  ];
  var VID_TYPES = ["All", "Testimonial", "Lifestyle", "Unboxing"];
  var shownVids = filter === "All" ? VIDS : VIDS.filter(function(v) { return v.type === filter; });

  var SVCS = [
    { n: "Single Video", price: "By Inquiry", d: "One polished UGC video. Testimonial, unboxing, lifestyle, or educational. Delivered in 7 days.", c: BLUE, items: ["30-60s edited video", "Pro audio and color", "2 revision rounds", "Usage rights"] },
    { n: "Video Package", price: "By Inquiry", d: "Three unique videos ideal for A/B testing and multi-platform campaigns.", c: CORAL, items: ["3 distinct concepts", "Mixed formats", "Full editing suite", "Extended rights"] },
    { n: "Monthly Retainer", price: "By Inquiry", d: "Ongoing creative partnership with priority turnaround and consistent quality.", c: YELLOW, items: ["4 videos per month", "5-day priority", "Monthly strategy call", "Extended rights"] },
    { n: "Full Campaign", price: "By Inquiry", d: "Complete UGC campaign from concept to delivery for launches and seasonal pushes.", c: DEEP_BLUE, items: ["6 videos (3x2)", "Photography stills", "Creative brief", "60-day exclusivity"] },
  ];

  var BRANDS = [
    "Supplement Brands", "Nutrition Products", "Fitness Apparel", "Gym Equipment",
    "Meal Prep Services", "Health Food", "Eyewear and Optical", "Eye Care Products",
    "Vision Health Brands", "Wellness Apps", "Kitchen Tools", "Functional Beverages",
    "Active Lifestyle", "Recovery Products", "Coaching Platforms",
  ];

  return (
    <div style={{ background: WARM_WHITE, color: INK, fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{
        "@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,400;1,9..144,700;1,9..144,900&family=DM+Serif+Display:ital@0;1&family=Caveat:wght@500;700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');" +
        "*{box-sizing:border-box;margin:0;padding:0;}" +
        "html{scroll-behavior:smooth;background:" + WARM_WHITE + ";}" +
        "body{background:" + WARM_WHITE + ";}" +
        "::-webkit-scrollbar{width:3px;}" +
        "::-webkit-scrollbar-thumb{background:" + BLUE + ";}" +
        "::selection{background:" + YELLOW + ";color:" + BLUE + ";}" +
        "@keyframes hfade{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}" +
        "@keyframes floatY{0%,100%{transform:translateY(0px) rotate(var(--r,0deg));}50%{transform:translateY(-12px) rotate(var(--r,0deg));}}" +
        "@keyframes wiggle{0%,100%{transform:rotate(-2deg);}50%{transform:rotate(2deg);}}" +
        ".a1{animation:hfade 0.85s ease forwards;}" +
        ".a2{animation:hfade 0.85s 0.15s ease forwards;opacity:0;}" +
        ".a3{animation:hfade 0.85s 0.3s ease forwards;opacity:0;}" +
        ".a4{animation:hfade 0.85s 0.45s ease forwards;opacity:0;}" +
        ".a5{animation:hfade 0.85s 0.6s ease forwards;opacity:0;}" +
        ".nbtn{background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:" + INK + "99;transition:color 0.2s;padding:6px 0;}" +
        ".nbtn:hover{color:" + CORAL + ";}" +
        ".pbtn{display:inline-flex;align-items:center;gap:10px;background:" + BLUE + ";color:" + WARM_WHITE + ";padding:14px 32px;border-radius:100px;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;border:none;cursor:pointer;transition:all 0.25s;}" +
        ".pbtn:hover{background:" + DEEP_BLUE + ";transform:translateY(-2px);box-shadow:0 14px 32px " + BLUE + "44;}" +
        ".obtn{display:inline-flex;align-items:center;gap:10px;background:transparent;color:" + BLUE + ";padding:13px 30px;border-radius:100px;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;border:2px solid " + BLUE + ";cursor:pointer;transition:all 0.25s;}" +
        ".obtn:hover{background:" + BLUE + ";color:" + WARM_WHITE + ";}" +
        ".inp{width:100%;padding:14px 18px;border:1.5px solid " + INK + "20;border-radius:4px;font-family:'DM Sans',sans-serif;font-size:14px;color:" + INK + ";background:" + WARM_WHITE + ";outline:none;transition:border-color 0.2s;}" +
        ".inp:focus{border-color:" + BLUE + ";}" +
        ".inp::placeholder{color:" + INK + "55;}" +
        ".ctab{padding:10px 22px;border-radius:100px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:800;letter-spacing:0.05em;border:2px solid transparent;transition:all 0.22s;text-transform:uppercase;}" +
        ".display{font-family:'DM Serif Display','DM Serif Display',serif;font-weight:400;letter-spacing:-0.015em;line-height:0.98;}" +
        ".script{font-family:'Caveat',cursive;font-weight:600;}" +
        "@media(max-width:900px){.dn{display:none!important;}.sm{display:flex!important;}.tc{grid-template-columns:1fr!important;}.fc{grid-template-columns:repeat(2,1fr)!important;}.sg{grid-template-columns:1fr!important;}}" +
        "@media(max-width:520px){.fc{grid-template-columns:1fr!important;}}"
      }</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        background: scrolled ? "rgba(250,246,236,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid " + INK + "12" : "none",
        transition: "all 0.35s", padding: "0 28px",
      }}>
        <div style={{ maxWidth: 1920, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div onClick={function() { go("hero"); }} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <LogoMark size={38} color={BLUE} />
            <div>
              <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: 20, fontWeight: 900, color: BLUE, letterSpacing: "-0.02em" }}>BuiltByAE</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: CORAL, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: -1 }}>Made in Vancouver</div>
            </div>
          </div>
          <div className="dn" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {["Work", "About", "Services", "Contact"].map(function(l) {
              return <button key={l} className="nbtn" onClick={function() { go(l.toLowerCase()); }}>{l}</button>;
            })}
            <button className="pbtn" onClick={function() { go("contact"); }} style={{ padding: "11px 22px", fontSize: 11 }}>Hire Us</button>
          </div>
          <button className="sm" style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5 }} onClick={function() { setMenuOpen(function(o) { return !o; }); }}>
            {[0,1,2].map(function(i) { return <span key={i} style={{ width: 22, height: 2, background: INK, display: "block", transition: "0.25s", transform: i === 0 && menuOpen ? "rotate(45deg) translate(5px,5px)" : i === 2 && menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none", opacity: i === 1 && menuOpen ? 0 : 1 }} />; })}
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: WARM_WHITE, borderTop: "1px solid " + INK + "12", padding: "20px 40px 28px" }}>
            {["Work", "About", "Services", "Contact"].map(function(l) {
              return <div key={l} style={{ padding: "14px 0", borderBottom: "1px solid " + INK + "10" }}><button className="nbtn" onClick={function() { go(l.toLowerCase()); }}>{l}</button></div>;
            })}
            <button className="pbtn" style={{ marginTop: 20, width: "100%", justifyContent: "center" }} onClick={function() { go("contact"); setMenuOpen(false); }}>Hire Us</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" style={{ minHeight: "100vh", padding: "120px 28px 80px", position: "relative", overflow: "hidden", background: WARM_WHITE }}>
        {/* paper texture overlay */}
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(26,26,26,0.012) 2px, rgba(26,26,26,0.012) 3px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1920, margin: "0 auto", position: "relative" }}>
          <div className="tc" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>
            {/* LEFT - text */}
            <div>
              <div className="a1">
                <SectionLabel text="UGC Content Studio - Vancouver, BC" color={CORAL} />
              </div>

              <div className="a2 display" style={{ fontSize: "clamp(56px, 9vw, 124px)", color: BLUE, marginBottom: 8, textTransform: "uppercase" }}>
                BUILT BY
              </div>
              <div className="a3" style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 36 }}>
                <span style={{
                  fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontWeight: 400,
                  fontSize: "clamp(36px, 5.5vw, 78px)", color: CORAL,
                  letterSpacing: "-0.01em", lineHeight: 0.9,
                }}>aaron</span>
                <span className="display" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: BLUE, textTransform: "uppercase" }}>AND</span>
                <span style={{
                  fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontWeight: 400,
                  fontSize: "clamp(36px, 5.5vw, 78px)", color: CORAL,
                  letterSpacing: "-0.01em", lineHeight: 0.9,
                }}>ellen.</span>
              </div>

              <p className="a5" style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 16,
                color: INK + "cc", lineHeight: 1.85, maxWidth: 460,
                marginBottom: 40, fontWeight: 400,
              }}>
                Premium UGC content for fitness, nutrition, eyewear, and lifestyle brands. Led by a health expert. Directed by a designer. Made fresh in Vancouver.
              </p>

              <div className="a5" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 38 }}>
                <button className="pbtn" onClick={function() { go("contact"); }}>Start a Project</button>
                <button className="obtn" onClick={function() { go("work"); }}>View Our Work</button>
              </div>

              <div className="a5" style={{ display: "flex", alignItems: "center", gap: 16, color: INK + "66", fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", flexWrap: "wrap" }}>
                <span>Nutrition</span><SmallDot color={INK + "44"} size={4} />
                <span>Fitness</span><SmallDot color={INK + "44"} size={4} />
                <span>Eyewear</span><SmallDot color={INK + "44"} size={4} />
                <span>Lifestyle</span>
              </div>
            </div>

            {/* RIGHT - Wavy yellow card (Peixou-style) */}
            <div style={{ position: "relative" }}>
              {/* Yellow wavy hero card */}
              <div style={{ position: "relative" }}>
                <WavyBadge fill={YELLOW} style={{ padding: "56px 48px 64px" }}>
                  <SectionLabel text="Today's Offer" color={CORAL} />
                  <div style={{
                    fontFamily: "'DM Serif Display',serif", fontSize: 14,
                    color: BLUE, letterSpacing: "0.18em", textTransform: "uppercase",
                    fontWeight: 700, marginBottom: 6, marginTop: 8,
                  }}>UGC Studio</div>
                  <div className="display" style={{ fontSize: "clamp(38px, 5.5vw, 60px)", color: BLUE, marginBottom: 12, textTransform: "uppercase" }}>
                    Fresh<br />Content
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 14 }}>
                    <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: 24, color: CORAL, fontWeight: 700, marginTop: 14 }}>2X</span>
                    <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: 80, color: CORAL, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em" }}>Experts</span>
                  </div>
                  <div style={{
                    fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: BLUE,
                    letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700,
                  }}>One Standard</div>

                  <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid " + BLUE + "33" }}>
                    {[
                      ["Testimonial", "Review Style"],
                      ["Unboxing", "First Impression"],
                      ["Lifestyle", "Integration"],
                      ["Educational", "Expert Explainer"],
                    ].map(function(row, i) {
                      return (
                        <div key={row[0]} style={{
                          display: "flex", justifyContent: "space-between", alignItems: "center",
                          padding: "7px 0",
                          borderBottom: i < 3 ? "1px solid " + BLUE + "22" : "none",
                        }}>
                          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: CORAL, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>{row[1]}</span>
                          <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: 19, fontWeight: 900, color: BLUE, letterSpacing: "0.01em", textTransform: "uppercase" }}>{row[0]}</span>
                        </div>
                      );
                    })}
                  </div>
                </WavyBadge>

                {/* Floating dot accents */}
                <EyeDot color={BLUE} size={26} style={{ position: "absolute", top: -10, right: 28, background: WARM_WHITE, borderRadius: "50%", padding: 4, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", animation: "floatY 4s ease-in-out infinite" }} />
                <SmallDot color={CORAL} size={14} style={{ position: "absolute", bottom: 20, left: -8, animation: "floatY 3s ease-in-out 1s infinite" }} />

                {/* Script tag */}
                <div style={{
                  position: "absolute", bottom: -28, right: 32,
                  fontFamily: "'Caveat',cursive", fontWeight: 600,
                  fontSize: 38, color: CORAL,
                  transform: "rotate(-8deg)",
                  animation: "wiggle 6s ease-in-out infinite",
                }}>Made in Vancouver</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom yellow strip */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: YELLOW, padding: "14px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
          <div style={{ display: "flex", gap: 40, animation: "marquee 30s linear infinite", fontFamily: "'DM Serif Display',serif", fontSize: 14, fontWeight: 700, color: BLUE, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            {Array(20).fill(0).map(function(_, i) {
              return <span key={i} style={{ display: "flex", alignItems: "center", gap: 40 }}>UGC Studio<SmallDot color={CORAL} size={5} />Content<SmallDot color={CORAL} size={5} />Vancouver<SmallDot color={CORAL} size={5} />Fresh Daily<SmallDot color={CORAL} size={5} /></span>;
            })}
          </div>
        </div>
        <style>{"@keyframes marquee{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}"}</style>
      </section>

      {/* WORK */}
      <section id="work" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 28px 90px", background: WARM_WHITE, position: "relative" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto", width: "100%" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <SectionLabel text="Our Content" color={CORAL} center />
              <div className="display" style={{ fontSize: "clamp(36px,5vw,68px)", color: BLUE, marginBottom: 12, textTransform: "uppercase" }}>
                Tap to <span style={{ fontStyle: "italic", color: CORAL, fontFamily: "'DM Serif Display',serif", fontWeight: 700 }}>Watch</span>
              </div>
              <div className="script" style={{ fontSize: 26, color: INK + "88", marginTop: 4 }}>
                filter by what you need.
              </div>
            </div>
          </FadeUp>

          {/* Filter tabs */}
          <FadeUp delay={0.08}>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
              {VID_TYPES.map(function(t) {
                return (
                  <button key={t} className="ctab" onClick={function() { setFilter(t); }}
                    style={{ background: filter === t ? BLUE : "transparent", color: filter === t ? WARM_WHITE : BLUE, borderColor: BLUE, fontSize: 11 }}>
                    {t}
                  </button>
                );
              })}
            </div>
          </FadeUp>

          <div className="fc" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {shownVids.map(function(v, i) { return <VideoCard key={v.num} num={v.num} label={v.label} sub={v.sub} type={v.type} color={v.color} desc={v.desc} idx={i} onOpen={setOpenVid} />; })}
          </div>

          {/* Bottom CTA strip */}
          <FadeUp delay={0.3}>
            <div style={{ marginTop: 56, padding: "36px 44px", background: BLUE, borderRadius: 4, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden" }}>
              <div>
                <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: 28, fontWeight: 900, color: WARM_WHITE, marginBottom: 6, letterSpacing: "-0.01em" }}>
                  Want specific samples?
                </div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: WARM_WHITE + "aa" }}>
                  We send videos matched to your brand, product, and audience.
                </div>
              </div>
              <button onClick={function() { go("contact"); }} style={{
                background: YELLOW, color: BLUE, padding: "14px 30px", borderRadius: 100,
                fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 800,
                letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer",
                transition: "all 0.25s", flexShrink: 0,
              }}
                onMouseEnter={function(e) { e.currentTarget.style.background = WARM_WHITE; }}
                onMouseLeave={function(e) { e.currentTarget.style.background = YELLOW; }}>
                Request Samples
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Yellow wavy divider */}
      <WavyDivider color={YELLOW} />

      {/* ABOUT */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "90px 28px 100px", background: YELLOW, position: "relative" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto", width: "100%" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel text="The Studio" color={CORAL} center />
              <div className="display" style={{ fontSize: "clamp(36px,5.5vw,76px)", color: BLUE, textTransform: "uppercase" }}>
                Two People<span style={{ color: CORAL }}>.</span>
              </div>
              <div className="display" style={{ fontSize: "clamp(36px,5.5vw,76px)", color: BLUE, textTransform: "uppercase", fontStyle: "italic", fontWeight: 400, fontFamily: "'DM Serif Display',serif" }}>
                One <span style={{ color: CORAL }}>Vision</span>.
              </div>
            </div>
          </FadeUp>

          {/* Creator toggle */}
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 44, flexWrap: "wrap" }}>
              {[{ id: "aaron", l: "Aaron", c: BLUE }, { id: "ellen", l: "Ellen", c: CORAL }, { id: "both", l: "Together", c: DEEP_BLUE }].map(function(t) {
                return (
                  <button key={t.id} className="ctab" onClick={function() { setActiveCreator(t.id); }}
                    style={{ background: activeCreator === t.id ? t.c : "transparent", color: activeCreator === t.id ? WARM_WHITE : t.c, borderColor: t.c }}>
                    {t.l}
                  </button>
                );
              })}
            </div>
          </FadeUp>

          {/* Creator card */}
          <FadeUp delay={0.15}>
            <div style={{
              background: WARM_WHITE, borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(15,42,82,0.15)",
            }}>
              <div className="tc" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr" }}>
                {/* Left visual */}
                <div style={{
                  background: cr.color, padding: "44px 36px",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  color: WARM_WHITE, position: "relative", overflow: "hidden",
                }}>
                  {/* Decorative paper texture */}
                  <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 3px)", pointerEvents: "none" }} />

                  <div style={{
                    fontFamily: "'DM Serif Display',serif", fontStyle: "italic",
                    fontSize: 14, color: YELLOW, letterSpacing: "0.08em",
                    marginBottom: 16, fontWeight: 700, position: "relative", zIndex: 1,
                  }}>@builtbyae.fit</div>

                  <div style={{ width: "100%", aspectRatio: "3/4", background: WARM_WHITE + "1a", borderRadius: 3, border: "2px dashed " + WARM_WHITE + "44", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: 22, position: "relative", zIndex: 1 }}>
                    <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: 56, fontStyle: "italic", color: WARM_WHITE + "44", fontWeight: 900 }}>{cr.initial}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: WARM_WHITE + "88", letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 6 }}>Add Photo</div>
                  </div>

                  <div className="display" style={{ fontSize: 38, color: YELLOW, textTransform: "uppercase", textAlign: "center", marginBottom: 8, position: "relative", zIndex: 1 }}>
                    {cr.name}
                  </div>
                  <div className="script" style={{ fontSize: 22, color: WARM_WHITE, marginBottom: 16, textAlign: "center", position: "relative", zIndex: 1 }}>
                    {cr.role}
                  </div>

                  <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap", marginBottom: 16, position: "relative", zIndex: 1 }}>
                    {[cr.sub, cr.origin].map(function(t) {
                      return <span key={t} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 700, padding: "5px 12px", borderRadius: 100, background: YELLOW, color: BLUE, letterSpacing: "0.06em" }}>{t}</span>;
                    })}
                  </div>
                </div>

                {/* Right text */}
                <div style={{ padding: "48px 44px", background: WARM_WHITE }}>
                  <SectionLabel text="About the Creator" color={cr.color} />

                  <div className="display" style={{ fontSize: 42, color: BLUE, marginBottom: 16, textTransform: "uppercase" }}>
                    {cr.name === "Together" ? "BUILT" : "THE"} <span style={{ fontStyle: "italic", fontFamily: "'DM Serif Display',serif", fontWeight: 700, color: cr.color }}>
                      {cr.name === "Together" ? "by AE" : cr.role.toLowerCase()}
                    </span>
                  </div>

                  <p style={{
                    fontFamily: "'DM Serif Display',serif", fontSize: 17,
                    color: INK + "cc", lineHeight: 1.85,
                    marginBottom: 24, fontStyle: "italic",
                  }}>{cr.bio}</p>

                  {/* Skills - condensed inline */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {cr.skills.map(function(s) {
                      return (
                        <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 14px", border: "1.5px solid " + cr.color + "33", borderRadius: 100, background: cr.color + "0a", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 600, color: BLUE }}>
                          <SmallDot color={cr.color} size={5} />{s}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <WavyDivider color={YELLOW} flip />

      {/* SERVICES - Peixou price list style */}
      <section id="services" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 28px", background: WARM_WHITE, position: "relative" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto", width: "100%" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel text="Services" color={CORAL} center />
              <div className="display" style={{ fontSize: "clamp(36px,5vw,68px)", color: BLUE, marginBottom: 8, textTransform: "uppercase" }}>
                Menu of <span style={{ fontStyle: "italic", color: CORAL, fontFamily: "'DM Serif Display',serif", fontWeight: 700 }}>Services</span>
              </div>
              <div className="script" style={{ fontSize: 26, color: INK + "88" }}>
                pricing by inquiry.
              </div>
            </div>
          </FadeUp>

          {/* Yellow wavy services card - Peixou style */}
          <FadeUp delay={0.15}>
            <div style={{ position: "relative", marginBottom: 40 }}>
              <WavyBadge fill={YELLOW} style={{ padding: "48px 56px" }}>
                <div className="tc" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 48, alignItems: "flex-start" }}>
                  {/* LEFT - Featured */}
                  <div style={{ textAlign: "center", paddingRight: 32, borderRight: "1.5px solid " + BLUE + "44" }}>
                    <SectionLabel text="Featured" color={CORAL} center />
                    <div className="display" style={{ fontSize: "clamp(28px,3.5vw,44px)", color: BLUE, marginBottom: 8, textTransform: "uppercase" }}>
                      Monthly<br/>Retainer
                    </div>
                    <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: 84, fontWeight: 900, color: CORAL, lineHeight: 0.9, letterSpacing: "-0.04em", marginBottom: 4 }}>
                      4<span style={{ fontSize: 38 }}>+</span>
                    </div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: BLUE, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>
                      videos / month
                    </div>
                    <div className="script" style={{ fontSize: 22, color: CORAL }}>
                      best value
                    </div>
                  </div>

                  {/* RIGHT - Price list */}
                  <div>
                    <SectionLabel text="Service Menu" color={CORAL} />
                    {SVCS.map(function(s, i) {
                      return (
                        <div key={s.n} style={{
                          padding: "16px 0",
                          borderBottom: i < SVCS.length - 1 ? "1.5px solid " + BLUE + "22" : "none",
                          display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16,
                        }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: CORAL, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 3 }}>
                              {String(i + 1).padStart(2, "0")} - {s.c === BLUE ? "Solo" : s.c === CORAL ? "Variety" : s.c === YELLOW ? "Ongoing" : "Campaign"}
                            </div>
                            <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: 24, fontWeight: 900, color: BLUE, letterSpacing: "0.01em", marginBottom: 4, textTransform: "uppercase" }}>
                              {s.n}
                            </div>
                            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: BLUE + "aa", lineHeight: 1.5 }}>
                              {s.d}
                            </div>
                          </div>
                          <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: 20, fontWeight: 700, color: BLUE, whiteSpace: "nowrap", paddingTop: 12 }}>
                            {s.price}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </WavyBadge>
            </div>
          </FadeUp>

          {/* What's included grid */}
          <FadeUp delay={0.2}>
            <div className="fc" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 36 }}>
              {SVCS.map(function(s, i) {
                return (
                  <div key={i} style={{ padding: "26px 22px", background: WARM_WHITE, border: "1.5px solid " + s.c + "33", borderRadius: 3, transition: "transform 0.25s" }}
                    onMouseEnter={function(e) { e.currentTarget.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={function(e) { e.currentTarget.style.transform = "none"; }}>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 800, color: s.c, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>
                      Includes
                    </div>
                    <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: 20, fontWeight: 900, color: BLUE, marginBottom: 14, textTransform: "uppercase" }}>
                      {s.n}
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                      {s.items.map(function(item) {
                        return (
                          <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: INK + "cc" }}>
                            <SmallDot color={s.c} size={5} />
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </FadeUp>

          {/* Brands ribbon */}
          <FadeUp delay={0.25}>
            <div style={{ padding: "32px 40px", background: BLUE, borderRadius: 4, color: WARM_WHITE, position: "relative", overflow: "hidden" }}>
              <SectionLabel text="Ideal Brand Fit" color={YELLOW} />
              <div className="display" style={{ fontSize: 26, color: WARM_WHITE, marginBottom: 18, textTransform: "uppercase" }}>
                We work best with<span style={{ color: YELLOW }}>:</span>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {BRANDS.map(function(b) {
                  return <span key={b} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 600, padding: "7px 15px", borderRadius: 100, background: WARM_WHITE + "12", color: WARM_WHITE, border: "1px solid " + WARM_WHITE + "22", letterSpacing: "0.04em" }}>{b}</span>;
                })}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <TornDivider topColor={WARM_WHITE} bottomColor={BLUE} />

      {/* CONTACT */}
      <section id="contact" style={{ padding: "90px 28px 100px", background: BLUE, position: "relative", color: WARM_WHITE }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>
          <div className="tc" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "flex-start" }}>
            <FadeUp>
              <SectionLabel text="Contact" color={YELLOW} />
              <div className="display" style={{ fontSize: "clamp(36px,5vw,68px)", color: WARM_WHITE, marginBottom: 8, textTransform: "uppercase" }}>
                Let's <span style={{ fontStyle: "italic", color: YELLOW, fontFamily: "'DM Serif Display',serif", fontWeight: 700 }}>build</span>
              </div>
              <div className="display" style={{ fontSize: "clamp(36px,5vw,68px)", color: WARM_WHITE, marginBottom: 20, textTransform: "uppercase" }}>
                something <span style={{ color: YELLOW }}>real.</span>
              </div>
              <p style={{ fontFamily: "'DM Serif Display',serif", fontSize: 17, color: WARM_WHITE + "cc", lineHeight: 1.9, marginBottom: 36, fontStyle: "italic", maxWidth: 420 }}>
                Tell us about your brand. We respond within 24 hours with a tailored approach and samples matched to your product.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { l: "Email", v: "builtbyae.fit@gmail.com", c: YELLOW },
                  { l: "TikTok", v: "@builtbyae.fit", c: CORAL },
                  { l: "Instagram", v: "@builtbyae.fit", c: YELLOW },
                ].map(function(item) {
                  return (
                    <div key={item.l} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 18px", borderRadius: 3, background: "rgba(255,255,255,0.08)", border: "1px solid " + WARM_WHITE + "22" }}>
                      <EyeDot color={item.c} size={18} />
                      <div>
                        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: WARM_WHITE + "88", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 2 }}>{item.l}</div>
                        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: WARM_WHITE, fontWeight: 700 }}>{item.v}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="script" style={{ fontSize: 32, color: YELLOW, marginTop: 32, transform: "rotate(-4deg)" }}>
                let's talk.
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              {!sent ? (
                <div style={{ background: WARM_WHITE, borderRadius: 4, padding: "44px 40px", color: INK }}>
                  <SectionLabel text="Inquiry Form" color={CORAL} />
                  <div className="display" style={{ fontSize: 32, color: BLUE, marginBottom: 28, textTransform: "uppercase" }}>
                    Start a <span style={{ color: CORAL, fontStyle: "italic", fontFamily: "'DM Serif Display',serif", fontWeight: 700 }}>conversation</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {[{ k: "name", l: "Your Name", p: "Jane Smith" }, { k: "brand", l: "Brand Name", p: "Your Brand" }].map(function(f) {
                        return (
                          <div key={f.k}>
                            <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: CORAL, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: 7 }}>{f.l}</label>
                            <input className="inp" placeholder={f.p} value={form[f.k]} onChange={function(e) { var v = e.target.value; setForm(function(fd) { var n = Object.assign({}, fd); n[f.k] = v; return n; }); }} />
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: CORAL, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: 7 }}>Email</label>
                      <input className="inp" type="email" placeholder="hello@brand.com" value={form.email} onChange={function(e) { var v = e.target.value; setForm(function(fd) { return Object.assign({}, fd, { email: v }); }); }} />
                    </div>
                    <div>
                      <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: CORAL, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: 7 }}>Content Type</label>
                      <select className="inp" value={form.type} onChange={function(e) { var v = e.target.value; setForm(function(fd) { return Object.assign({}, fd, { type: v }); }); }} style={{ appearance: "none", cursor: "pointer" }}>
                        <option value="">Select a format</option>
                        <option>Testimonial / Review</option>
                        <option>Unboxing</option>
                        <option>Lifestyle Integration</option>
                        <option>Educational / Expert</option>
                        <option>Package / Multiple</option>
                        <option>Monthly Retainer</option>
                        <option>Not sure - let's talk</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: CORAL, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: 7 }}>About your brand</label>
                      <textarea className="inp" rows={4} placeholder="What does your brand do? What are you trying to achieve?" value={form.msg} onChange={function(e) { var v = e.target.value; setForm(function(fd) { return Object.assign({}, fd, { msg: v }); }); }} style={{ resize: "vertical", minHeight: 100 }} />
                    </div>
                    <button className="pbtn" style={{ width: "100%", justifyContent: "center", marginTop: 4 }}
                      onClick={function() { if (form.name && form.email) setSent(true); }}>
                      Send Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ background: YELLOW, borderRadius: 4, padding: "72px 40px", textAlign: "center", color: BLUE }}>
                  <div className="script" style={{ fontSize: 48, color: CORAL, marginBottom: 16, transform: "rotate(-4deg)" }}>
                    thank you!
                  </div>
                  <div className="display" style={{ fontSize: 32, color: BLUE, marginBottom: 14, textTransform: "uppercase" }}>
                    Got it, <span style={{ fontStyle: "italic", color: CORAL, fontFamily: "'DM Serif Display',serif", fontWeight: 700 }}>{form.name}</span>
                  </div>
                  <p style={{ fontFamily: "'DM Serif Display',serif", fontSize: 15, color: BLUE + "cc", lineHeight: 1.8, fontStyle: "italic", maxWidth: 380, margin: "0 auto" }}>
                    We'll be in touch within 24 hours with a tailored response and content samples matched to your brand.
                  </p>
                </div>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: DEEP_BLUE, padding: "48px 28px", color: WARM_WHITE, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <LogoMark size={42} color={YELLOW} />
            <div>
              <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: 22, fontWeight: 900, color: WARM_WHITE, letterSpacing: "-0.02em" }}>BuiltByAE</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: YELLOW, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: -1 }}>Made in Vancouver</div>
            </div>
          </div>
          <div className="script" style={{ fontSize: 28, color: YELLOW, transform: "rotate(-4deg)" }}>
            fresh content, daily.
          </div>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {["Work", "About", "Services", "Contact"].map(function(l) {
              return <button key={l} onClick={function() { go(l.toLowerCase()); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: WARM_WHITE + "88", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, transition: "color 0.2s" }}
                onMouseEnter={function(e) { e.currentTarget.style.color = YELLOW; }}
                onMouseLeave={function(e) { e.currentTarget.style.color = WARM_WHITE + "88"; }}>{l}</button>;
            })}
          </div>
        </div>
        <div style={{ maxWidth: 1920, margin: "24px auto 0", paddingTop: 24, borderTop: "1px solid " + WARM_WHITE + "18", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: WARM_WHITE + "55" }}>(c) 2026 BuiltByAE - Vancouver, BC</div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: WARM_WHITE + "55", letterSpacing: "0.16em", textTransform: "uppercase" }}>Fitness - Nutrition - Eyewear - Lifestyle</div>
        </div>
      </footer>

      <VideoModal vid={openVid} onClose={function() { setOpenVid(null); }} />
    </div>
  );
}
