/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://marsk6.github.io',
  generateRobotsTxt: true, // (optional)
  exclude: ['/preview'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/preview'
      },
    ],
  },
  outDir: 'out',
  generateIndexSitemap: false
}
