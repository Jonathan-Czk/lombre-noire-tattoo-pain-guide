import { ZoneId, ZoneInfo, ZONES, PAIN_LABELS, getPainColors } from "./zones";

const FONT = "'DM Sans', system-ui, sans-serif";

interface Props {
  zoneId: ZoneId | null;
}

const NAV_LINKS = [
  { label: "Tatouage avant-bras", href: "/tatouage-avant-bras" },
  { label: "Tatouage bras",       href: "/tatouage-bras" },
  { label: "Tatouage main",       href: "/tatouage-main" },
  { label: "Tatouage dos",        href: "/tatouage-dos" },
  { label: "Tatouage poitrine",   href: "/tatouage-poitrine" },
  { label: "Tatouage côtes",      href: "/tatouage-cotes" },
  { label: "Tatouage jambe",      href: "/tatouage-jambe" },
  { label: "Tatouage cou",        href: "/tatouage-cou" },
  { label: "Tatouage pied",       href: "/tatouage-pied" },
  { label: "Tatouage cuisse",     href: "/tatouage-cuisse" },
];

function PainMeter({ level }: { level: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
      {Array.from({ length: 10 }, (_, i) => {
        const active = i < level;
        const colors = getPainColors(level, false);
        return (
          <div
            key={i}
            style={{
              width: "18px",
              height: "5px",
              borderRadius: "2px",
              background: active ? colors.fill : "rgba(42,122,138,0.1)",
              border: active ? `1px solid ${colors.stroke}` : "1px solid rgba(42,122,138,0.12)",
              transition: "all 0.25s ease",
            }}
          />
        );
      })}
    </div>
  );
}

export function InfoPanel({ zoneId }: Props) {
  const zone: ZoneInfo | null = zoneId ? ZONES[zoneId] : null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowY: "auto",
        scrollbarWidth: "none",
      }}
    >
      {/* Zone info block */}
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid rgba(42,122,138,0.12)",
          minHeight: "260px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {!zone ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "4px" }}>
            <p style={{ fontFamily: FONT, fontSize: "11px", letterSpacing: "1.5px", color: "#7aaab8", textTransform: "uppercase", margin: 0 }}>
              Exploration
            </p>
            <p style={{ fontFamily: FONT, fontSize: "14px", color: "#4a8a98", lineHeight: "1.65", margin: 0 }}>
              Survolez ou touchez une zone de la silhouette pour découvrir le niveau de douleur associé à un tatouage dans cette région.
            </p>
            <div style={{ height: "1px", background: "rgba(42,122,138,0.12)", margin: "2px 0" }} />
            <p style={{ fontFamily: FONT, fontSize: "12px", color: "#7aaab8", lineHeight: "1.6", margin: 0 }}>
              Chaque zone est évaluée sur une échelle de 1 à 10. Ces niveaux restent indicatifs — la tolérance à la douleur varie selon chaque individu.
            </p>
          </div>
        ) : (
          <>
            <div>
              <p style={{ fontFamily: FONT, fontSize: "10px", letterSpacing: "1.5px", color: "#7aaab8", textTransform: "uppercase", margin: "0 0 4px" }}>
                Zone sélectionnée
              </p>
              <h2 style={{ fontFamily: FONT, fontSize: "22px", fontWeight: "600", color: "#1a2d35", letterSpacing: "-0.3px", margin: 0 }}>
                {zone.nom}
              </h2>
            </div>

            <div style={{ height: "1px", background: "rgba(42,122,138,0.12)" }} />

            {/* Pain level */}
            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontFamily: FONT, fontSize: "11px", letterSpacing: "1px", color: "#7aaab8", textTransform: "uppercase" }}>
                  Douleur
                </span>
                <span style={{ fontFamily: FONT, fontSize: "13px", color: "#2a7a8a", fontWeight: "500" }}>
                  {zone.douleur}/10 — {PAIN_LABELS[zone.douleur]}
                </span>
              </div>
              <PainMeter level={zone.douleur} />
            </div>

            {/* Duration */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontFamily: FONT, fontSize: "11px", letterSpacing: "1px", color: "#7aaab8", textTransform: "uppercase" }}>
                Durée de séance
              </span>
              <span style={{ fontFamily: FONT, fontSize: "16px", fontWeight: "500", color: "#2a7a8a" }}>
                {zone.duree}
              </span>
            </div>

            {/* Description */}
            <p style={{ fontFamily: FONT, fontSize: "13.5px", color: "#4a7888", lineHeight: "1.65", margin: 0 }}>
              {zone.description}
            </p>

            {/* Internal link */}
            {zone.lien && (
              <a
                href={zone.lien}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: FONT,
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#2a7a8a",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(42,122,138,0.3)",
                  paddingBottom: "1px",
                  width: "fit-content",
                  transition: "color 0.15s, border-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#1a5d6a";
                  el.style.borderBottomColor = "#1a5d6a";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#2a7a8a";
                  el.style.borderBottomColor = "rgba(42,122,138,0.3)";
                }}
              >
                {zone.lienLabel} →
              </a>
            )}
          </>
        )}
      </div>

      {/* Pain legend */}
      <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(42,122,138,0.1)" }}>
        <p style={{ fontFamily: FONT, fontSize: "10px", letterSpacing: "1.5px", color: "#7aaab8", textTransform: "uppercase", margin: "0 0 10px" }}>
          Échelle de douleur
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          {[
            { label: "Faible",       range: "1–3",   fill: "#bee4ec", stroke: "#5aaabb" },
            { label: "Modérée",      range: "4–6",   fill: "#4e9dac", stroke: "#2a7a8a" },
            { label: "Élevée",       range: "7–8",   fill: "#1e6070", stroke: "#124050" },
            { label: "Très élevée",  range: "9–10",  fill: "#0e2830", stroke: "#081418" },
          ].map(({ label, range, fill, stroke }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "26px", height: "12px", background: fill, border: `1px solid ${stroke}`, borderRadius: "2px", flexShrink: 0 }} />
              <span style={{ fontFamily: FONT, fontSize: "13px", color: "#3a6878" }}>{label}</span>
              <span style={{ fontFamily: FONT, fontSize: "11px", color: "#9acad5", marginLeft: "auto" }}>{range}/10</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nav links */}
      <div style={{ padding: "16px 20px" }}>
        <p style={{ fontFamily: FONT, fontSize: "10px", letterSpacing: "1.5px", color: "#7aaab8", textTransform: "uppercase", margin: "0 0 10px" }}>
          Explorer par zone
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{
                fontFamily: FONT,
                fontSize: "13px",
                color: "#3a6878",
                textDecoration: "none",
                padding: "6px 0",
                borderBottom: "1px solid rgba(42,122,138,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "color 0.12s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#2a7a8a")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#3a6878")}
            >
              {label}
              <span style={{ color: "#9acad5", fontSize: "12px" }}>›</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
