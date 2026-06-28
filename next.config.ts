import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    qualities: [60, 75],
    minimumCacheTTL: 2_678_400,
  },
};

export default nextConfig;
