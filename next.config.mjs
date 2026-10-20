/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // STATIC_EXPORT=1 npm run build → plain HTML files in /out (used for previews)
  ...(process.env.STATIC_EXPORT ? { output: "export", trailingSlash: true, images: { unoptimized: true } } : {}),
};
export default nextConfig;
