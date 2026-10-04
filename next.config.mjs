/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Permit the proxied Arena preview origin so development HMR works in the browser.
  allowedDevOrigins: ["*.e2b.app"],
};

export default nextConfig;
