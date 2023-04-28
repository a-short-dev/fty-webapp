/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
			config.resolve.fallback = {
				zustand: false,
			};
		}

		return config;
	},
};

module.exports = nextConfig;
