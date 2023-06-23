/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/:slug*',
				destination: '/app/:slug*',
			}
		]
	},
	async redirects() {
		return [
			{
				source: '/app/:slug*',
				destination: '/:slug*',
				permanent: true
			}
		]
	},
	pageExtensions: ['page.jsx', 'page.tsx']
}

module.exports = nextConfig