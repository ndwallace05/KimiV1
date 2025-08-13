import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // 禁用 Next.js 热重载，由 nodemon 处理重编译
  reactStrictMode: false,
  // Removed problematic webpack config that was causing server hang
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
