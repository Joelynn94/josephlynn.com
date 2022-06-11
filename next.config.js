const withImages = require("next-images");
module.exports = withImages();

const securityHeaders = [
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains; preload",
	},
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "X-Frame-Options",
		value: "SAMEORIGIN",
	},
];
module.exports = {
	reactStrictMode: true,
	webpack5: true,
	webpack: (config) => {
		// Fixes npm packages that depend on `fs` module
		config.resolve.fallback = { fs: false };

		return config;
	},
	// You can choose which headers to add to the list
	// after learning more below.
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: "/:path*",
				headers: securityHeaders,
			},
		];
	},
};
