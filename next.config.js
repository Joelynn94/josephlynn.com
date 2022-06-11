const withImages = require("next-images");
module.exports = withImages();

module.exports = {
	reactStrictMode: true,
	webpack5: true,
	webpack: (config) => {
		// Fixes npm packages that depend on `fs` module
		config.resolve.fallback = { fs: false };

		return config;
	},
};
