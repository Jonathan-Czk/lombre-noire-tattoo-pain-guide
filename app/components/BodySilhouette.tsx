import { useState, useCallback } from "react";
import { getPainColors, PATH_TO_ZONE, ZONES } from "./zones";
import { VIEW_PATHS, ViewType } from "./svgPaths";

interface Props {
  view: ViewType;
  onHover: (zoneId: string | null) => void;
  onClick: (zoneId: string) => void;
  hoveredZoneId: string | null;
  pinnedZoneId: string | null;
}

interface TooltipState {
  pathId: string;
  x: number;
  y: number;
}

export function BodySilhouette({ view, onHover, onClick, hoveredZoneId, pinnedZoneId }: Props) {
  const [hoveredPathId, setHoveredPathId] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const paths = VIEW_PATHS[view];

  const getSvgCoords = (e: React.MouseEvent<SVGPathElement>) => {
    const svg = (e.currentTarget as SVGPathElement).closest("svg");
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (300 / rect.width),
      y: (e.clientY - rect.top) * (645 / rect.height),
    };
  };

  const handleMouseEnter = useCallback(
    (pathId: string, e: React.MouseEvent<SVGPathElement>) => {
      setHoveredPathId(pathId);
      const zoneId = PATH_TO_ZONE[pathId] ?? null;
      onHover(zoneId);
      const coords = getSvgCoords(e);
      if (coords) setTooltip({ pathId, x: coords.x, y: coords.y });
    },
    [onHover]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredPathId(null);
    setTooltip(null);
    onHover(null);
  }, [onHover]);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGPathElement>) => {
    if (!hoveredPathId) return;
    const coords = getSvgCoords(e);
    if (coords) setTooltip((prev) => (prev ? { ...prev, x: coords.x, y: coords.y } : null));
  }, [hoveredPathId]);

  const handleClick = useCallback(
    (pathId: string) => {
      const zoneId = PATH_TO_ZONE[pathId];
      if (zoneId) onClick(zoneId);
    },
    [onClick]
  );

  const tooltipZone =
    tooltip && PATH_TO_ZONE[tooltip.pathId]
      ? ZONES[PATH_TO_ZONE[tooltip.pathId]]
      : null;

  const tooltipX = tooltip
    ? tooltip.x > 180
      ? tooltip.x - 145
      : tooltip.x + 10
    : 0;
  const tooltipY = tooltip
    ? Math.min(tooltip.y + 10, 580)
    : 0;

  return (
    <svg
      viewBox="0 0 300 645"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
      aria-label="Silhouette interactive — niveaux de douleur par zone"
    >
      <defs>
        {/* Paper texture */}
        <filter id="paper-tex" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="12" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>

        {/* Sketch wobble for outline */}
        <filter id="sketch-line" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="3" seed="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Light hatching — pain 4-6 */}
        <pattern id="hatch-med" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(40)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#2a6a7a" strokeWidth="0.6" opacity="0.35" />
        </pattern>

        {/* Dense hatching — pain 7-8 */}
        <pattern id="hatch-dark" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(42)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#0e3848" strokeWidth="0.8" opacity="0.45" />
        </pattern>

        {/* Cross-hatch — pain 9-10 */}
        <pattern id="hatch-xdark" patternUnits="userSpaceOnUse" width="5" height="5">
          <line x1="0" y1="0" x2="5" y2="5" stroke="#061018" strokeWidth="0.8" opacity="0.6" />
          <line x1="5" y1="0" x2="0" y2="5" stroke="#061018" strokeWidth="0.8" opacity="0.6" />
        </pattern>

        {/* Clip to visible area */}
        <clipPath id="svg-clip">
          <rect x="0" y="0" width="300" height="645" />
        </clipPath>
      </defs>

      <g clipPath="url(#svg-clip)">
        {/* Light background */}
        <rect
          x="0" y="0" width="300" height="645"
          fill="#f4fafc"
          filter="url(#paper-tex)"
        />

        {/* Subtle grid lines */}
        <g stroke="#a8d8e2" strokeWidth="0.3" opacity="0.35">
          <line x1="150" y1="0" x2="150" y2="645" strokeDasharray="2,8" />
          <line x1="0" y1="322" x2="300" y2="322" strokeDasharray="2,8" />
        </g>

        {/* Zone paths */}
        {Object.entries(paths).map(([pathId, pathData]) => {
          const zoneId = PATH_TO_ZONE[pathId];
          if (!zoneId) return null;
          const zone = ZONES[zoneId];
          const isHovered = hoveredPathId === pathId;
          const isHighlighted = hoveredZoneId === zoneId || pinnedZoneId === zoneId;
          const colors = getPainColors(zone.douleur, isHovered || isHighlighted);

          return (
            <g key={pathId}>
              {/* Base fill */}
              <path
                d={pathData}
                fill={colors.fill}
                stroke={colors.stroke}
                strokeWidth={colors.strokeWidth}
                strokeLinejoin="round"
                opacity={0.92}
                onMouseEnter={(e) => handleMouseEnter(pathId, e)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onClick={() => handleClick(pathId)}
                style={{ cursor: "pointer", transition: "fill 0.18s ease, opacity 0.18s ease" }}
              />
              {/* Hatching overlay */}
              {colors.hatchId && (
                <path
                  d={pathData}
                  fill={`url(#${colors.hatchId})`}
                  stroke="none"
                  pointerEvents="none"
                />
              )}
              {/* Hover highlight ring */}
              {(isHovered || isHighlighted) && (
                <path
                  d={pathData}
                  fill="none"
                  stroke="#f0fafc"
                  strokeWidth="1.5"
                  opacity="0.5"
                  pointerEvents="none"
                />
              )}
            </g>
          );
        })}

        {/* Tooltip */}
        {tooltip && tooltipZone && (
          <g transform={`translate(${tooltipX}, ${tooltipY})`} pointerEvents="none">
            <rect
              x="0" y="0" width="140" height="52"
              rx="4" ry="4"
              fill="#1a3d48"
              stroke="rgba(90,170,187,0.5)"
              strokeWidth="1"
              opacity="0.96"
            />
            <text
              x="70" y="17"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="10"
              fontFamily="'DM Sans', system-ui, sans-serif"
              fontWeight="600"
              letterSpacing="0.5"
            >
              {tooltipZone.nom}
            </text>
            {/* Pain dots */}
            {Array.from({ length: 10 }, (_, i) => (
              <rect
                key={i}
                x={10 + i * 12}
                y={23}
                width="9"
                height="5"
                rx="1.5"
                fill={i < tooltipZone.douleur ? getPainDotColor(tooltipZone.douleur) : "rgba(255,255,255,0.12)"}
              />
            ))}
            <text
              x="70" y="46"
              textAnchor="middle"
              fill="rgba(160,210,220,0.9)"
              fontSize="9"
              fontFamily="'DM Sans', system-ui, sans-serif"
            >
              {tooltipZone.duree}
            </text>
          </g>
        )}
      </g>
    </svg>
  );
}

function getPainDotColor(level: number): string {
  if (level <= 3) return "#8ad4e0";
  if (level <= 6) return "#5aaabb";
  if (level <= 8) return "#2a8898";
  return "#a0d8e8";
}
