import type { Metadata } from "next";
import ChinaCdnClient from "./china-cdn-client";

export const metadata: Metadata = {
  title: "中国回国加速 CDN | WiseWave",
  description:
    "WiseWave 中国回国加速 CDN 采用 CN2/中港精品 BGP 线路，提供动静态加速、CC 防护与 2 Tbps Anti-DDoS 能力。",
};

export default function ChinaCdnPage() {
  return <ChinaCdnClient />;
}
