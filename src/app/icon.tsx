import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 192,
  height: 192,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 140,
          background: "#80872d",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fcf9f4",
          fontWeight: "bold",
          fontFamily: "Anton, sans-serif",
          borderRadius: 40,
          boxShadow: "4px 4px 0px #000000",
        }}
      >
        T
      </div>
    ),
    { ...size }
  );
}
