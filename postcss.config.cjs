// const production = process.env.NODE_ENV === "production";

module.exports = {
	plugins: {
		// '@tailwindcss/postcss': {},
		...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
	}
};
