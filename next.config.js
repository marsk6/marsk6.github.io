const { withKeystone } = require("@keystone-6/core/next");
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = withKeystone(nextConfig)
