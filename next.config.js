/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	async redirects(){
		return [
			{
				source: '/',
				destination: '/app',
				permanent: false
			}
		]
	},
	pageExtensions: ['page.jsx', 'page.tsx']
}

module.exports = nextConfig