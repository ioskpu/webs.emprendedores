/** @type {import('next').NextConfig} */

const { withSentryConfig } = require('@sentry/nextjs')
const withPWA = require('next-pwa')

const nextConfig = withPWA({
	dest: 'public',
	register: true,
	disable: process.env.NODE_ENV === 'development',
})({
	// reactStrictMode: true,
	swcMinify: true,
	sentry: {
		hideSourceMaps: true,
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false
			require('./scripts/sitemap-generator.js')
		}
		return config
	},
	redirects: async () => {
		return [
			{
				source: '/github',
				destination: 'https://github.com/ioskpu',
				permanent: true,
			},
			{
				source: '/github/:params',
				destination: 'https://github.com/ioskpu/:params',
				permanent: true,
			},
			{
				source: '/linkedin',
				destination: 'https://www.linkedin.com/in/lrcorales',
				permanent: true,
			},
			{
				source: '/twitter',
				destination: 'https://twitter.com/lrcorales',
				permanent: true,
			},
			// {
			// 	source: '/instagram',
			// 	destination: 'https://www.instagram.com/koushikpuppala',
			// 	permanent: true,
			// },
			// {
			// 	source: '/facebook',
			// 	destination: 'https://www.facebook.com/puppalakoushik',
			// 	permanent: true,
			// },
			// {
			// 	source: '/discord',
			// 	destination: 'https://discord.com/users/735813371433058354',
			// 	permanent: true,
			// },
			// {
			// 	source: '/skype',
			// 	destination: 'https://join.skype.com/invite/vfWLRyA9iFQc',
			// 	permanent: true,
			// },
			// {
			// 	source: '/youtube',
			// 	destination: 'https://www.youtube.com/@koushikpuppala',
			// 	permanent: true,
			// },
			// {
			// 	source: '/server',
			// 	destination: 'https://discord.gg/MsJ99j5Bcv',
			// 	permanent: true,
			// },
			{
				source: '/status',
				destination: 'https://status.koushikpuppala.com/',
				permanent: true,
			},
		]
	},
})

const sentryWebpackPluginOptions = {
	silent: true,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
