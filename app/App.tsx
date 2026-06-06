import { useState, useEffect } from "react";
import { BodySilhouette } from "./components/BodySilhouette";
import { InfoPanel } from "./components/InfoPanel";
import { ZoneId } from "./components/zones";
import { ViewType } from "./components/svgPaths";

const FONT = "'DM Sans', system-ui, sans-serif";

const VIEW_OPTIONS: { id: ViewType; label: string; sublabel: string }[] = [
  { id: "maleFront",   label: "Homme",  sublabel: "Face" },
  { id: "maleBack",    label: "Homme",  sublabel: "Dos" },
  { id: "femaleFront", label: "Femme",  sublabel: "Face" },
  { id: "femaleBack",  label: "Femme",  sublabel: "Dos" },
];

function SimpleFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid rgba(42,122,138,0.18)",
        borderRadius: "6px",
        boxShadow: "0 1px 6px rgba(42,122,138,0.07)",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(42,122,138,0.25), transparent)",
        margin: "0",
      }}
    />
  );
}

export default function App() {
  const [view, setView] = useState<ViewType>("maleFront");
  const [hoveredZoneId, setHoveredZoneId] = useState<ZoneId | null>(null);
  const [pinnedZoneId, setPinnedZoneId] = useState<ZoneId | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const displayedZoneId = hoveredZoneId ?? pinnedZoneId;

  const handleHover = (zoneId: string | null) => {
    setHoveredZoneId(zoneId as ZoneId | null);
  };

  const handleClick = (zoneId: string) => {
    setPinnedZoneId((prev) => (prev === zoneId ? null : (zoneId as ZoneId)));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f6f8",
        display: "flex",
        flexDirection: "column",
        fontFamily: FONT,
      }}
    >

      {/* ─── MAIN ─── */}
      <main
        style={{
          flex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          padding: isMobile ? "16px 12px" : "28px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* ─── VIEW SELECTOR ─── */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "inline-flex",
              gap: "4px",
              background: "#ffffff",
              border: "1px solid rgba(42,122,138,0.18)",
              borderRadius: "8px",
              padding: "4px",
            }}
          >
            {VIEW_OPTIONS.map(({ id, label, sublabel }) => {
              const active = view === id;
              return (
                <button
                  key={id}
                  onClick={() => { setView(id); setPinnedZoneId(null); setHoveredZoneId(null); }}
                  style={{
                    padding: "8px 20px",
                    background: active ? "#2a7a8a" : "transparent",
                    border: "none",
                    borderRadius: "6px",
                    color: active ? "#ffffff" : "#4a8a98",
                    fontFamily: FONT,
                    fontSize: "13px",
                    fontWeight: active ? "500" : "400",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1px",
                    minWidth: "72px",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) (e.currentTarget as HTMLButtonElement).style.background = "rgba(42,122,138,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  <span style={{ fontSize: "13px" }}>{label}</span>
                  <span style={{ fontSize: "10px", opacity: 0.8 }}>{sublabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── LAYOUT ─── */}
        <div
          style={{
            display: isMobile ? "flex" : "grid",
            gridTemplateColumns: isMobile ? undefined : "260px 1fr",
            flexDirection: isMobile ? "column" : undefined,
            gap: "20px",
            alignItems: "start",
          }}
        >
          {/* ─── LEFT PANEL (desktop) ─── */}
          {!isMobile && (
            <SimpleFrame>
              <div style={{ minHeight: "580px" }}>
                <InfoPanel zoneId={displayedZoneId} />
              </div>
            </SimpleFrame>
          )}

          {/* ─── SILHOUETTE ─── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <SimpleFrame>
              <div
                style={{
                  position: "relative",
                  padding: "20px 16px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* Instruction label */}
                <p
                  style={{
                    fontFamily: FONT,
                    fontSize: "11px",
                    fontWeight: "400",
                    letterSpacing: "1px",
                    color: "#7aaab8",
                    textTransform: "uppercase",
                    margin: 0,
                    alignSelf: "center",
                  }}
                >
                  {isMobile ? "Touchez une zone" : "Survolez ou cliquez une zone"}
                </p>

                <div
                  style={{
                    width: "100%",
                    maxWidth: isMobile ? "270px" : "360px",
                    aspectRatio: "300 / 645",
                  }}
                >
                  <BodySilhouette
                    view={view}
                    onHover={handleHover}
                    onClick={handleClick}
                    hoveredZoneId={hoveredZoneId}
                    pinnedZoneId={pinnedZoneId}
                  />
                </div>

                {/* View label */}
                <p
                  style={{
                    fontFamily: FONT,
                    fontSize: "11px",
                    color: "#9acad5",
                    margin: 0,
                    letterSpacing: "0.5px",
                  }}
                >
                  {VIEW_OPTIONS.find((v) => v.id === view)?.label} — Vue {VIEW_OPTIONS.find((v) => v.id === view)?.sublabel}
                </p>
              </div>
            </SimpleFrame>

            {/* Note */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                padding: "12px 14px",
                background: "#ffffff",
                border: "1px solid rgba(42,122,138,0.12)",
                borderRadius: "6px",
              }}
            >
              <span style={{ color: "#5aaabb", fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>ℹ</span>
              <p
                style={{
                  fontFamily: FONT,
                  fontSize: "13px",
                  color: "#5a8090",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Ces niveaux sont indicatifs et basés sur l'expérience observée en atelier. La tolérance individuelle varie selon chaque personne.
              </p>
            </div>
          </div>
        </div>

        {/* ─── MOBILE PANEL ─── */}
        {isMobile && (
          <SimpleFrame>
            <InfoPanel zoneId={displayedZoneId} />
          </SimpleFrame>
        )}

        {/* ─── FOOTER CONTENT ─── */}
        <div
          style={{
            marginTop: "8px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(42,122,138,0.15)",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "24px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ fontFamily: FONT, fontSize: "16px", fontWeight: "600", color: "#1a2d35", margin: 0 }}>
              L'Ombre Noire
            </p>
            <p style={{ fontFamily: FONT, fontSize: "13px", color: "#6a9aa8", lineHeight: "1.6", maxWidth: "300px", margin: 0 }}>
              Atelier de tatouage privé spécialisé dans le noir et gris réaliste. Chaque pièce est conçue comme une œuvre unique.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p style={{ fontFamily: FONT, fontSize: "11px", letterSpacing: "1px", color: "#7aaab8", textTransform: "uppercase", margin: 0 }}>
              Consultation sur rendez-vous
            </p>
            <p style={{ fontFamily: FONT, fontSize: "14px", color: "#2a7a8a", margin: 0 }}>
              contact.lombrenoire@gmail.com
            </p>
          </div>
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          borderTop: "1px solid rgba(42,122,138,0.12)",
          padding: "14px 24px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p style={{ fontFamily: FONT, fontSize: "12px", color: "#9acad5", margin: 0 }}>
            © L'Ombre Noire · Tous droits réservés
          </p>
          <p style={{ fontFamily: FONT, fontSize: "12px", color: "#9acad5", margin: 0 }}>
            Chaque tatouage est une décision permanente — choisissez avec discernement.
          </p>
        </div>
      </footer>
    </div>
  );
}
