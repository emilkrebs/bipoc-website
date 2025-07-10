/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "export",
	distDir: "out",
	assetPrefix: "/",
	trailingSlash: true,
	allowedDevOrigins: ["localhost:3000"],
	images: {
		domains: ["github.com"],
		unoptimized: true,
		minimumCacheTTL: 60 * 60 * 6 // 6 hours
	},
	// Ensure proper static generation
	generateBuildId: async () => {
		return "bipoc-static-build";
	}
};

export default nextConfig;
