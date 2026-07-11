import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Program Penanaman Mangrove - KKN Berdampak 2026 Sebauk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0B3D2E, #0E7490 58%, #D7903B)",
          color: "#fff",
          fontFamily: "serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: "999px",
              background: "#D7903B",
              color: "#081412",
              fontSize: 28,
              fontWeight: 700
            }}
          >
            M
          </div>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", opacity: 0.9 }}>
            KKN Berdampak 2026
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Program Penanaman Mangrove
          </div>
          <div style={{ fontSize: 32, opacity: 0.88 }}>
            Desa Sebauk, Bengkalis, Riau, Indonesia
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
