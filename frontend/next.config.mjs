/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["images.unsplash.com"],
	},
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@": "./src",
		};
		return config;
	},
};

export default nextConfig;
