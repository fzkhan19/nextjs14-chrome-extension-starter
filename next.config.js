/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: "export",
	basePath: "",
	experimental: {
		appDir: false,
	},

	// Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
	// trailingSlash: true,

	// Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
	// skipTrailingSlashRedirect: true,

	// Optional: Change the output directory `out` -> `dist`
	distDir: "out",
};

module.exports = nextConfig;
