import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode for GitHub Pages (static hosting)
  ssr: false,
  // Base path for GitHub Pages subdirectory (only in production)
  basename: process.env.NODE_ENV === "production" ? "/troops-website" : "/",
} satisfies Config;
