import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Program Penanaman Mangrove - KKN Berdampak 2026 Sebauk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = await fetch(new URL("../public/logo.png", import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
  let binary = "";
  const bytes = new Uint8Array(logoBuffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const logoSrc = `data:image/png;base64,${btoa(binary)}`;

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={56} height={56} alt="" />
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
