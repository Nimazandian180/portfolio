import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const alt = "Nima Zandian — Front-end Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f7f5ef",
        color: "#242823",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 30, display: "flex" }}>
        Nima Zandian{" "}
        <span style={{ marginLeft: 20, color: "#b84228" }}>
          {" "}
          / Front-end Developer
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          letterSpacing: -3,
        }}
      >
        <div>Thoughtful interfaces.</div>
        <div style={{ color: "#b84228" }}>Real-world impact.</div>
      </div>
      <div style={{ display: "flex", fontSize: 24 }}>
        React · Next.js · TypeScript
      </div>
    </div>,
    size,
  );
}
