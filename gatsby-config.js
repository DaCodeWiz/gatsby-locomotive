/** @format */

module.exports = {
	siteMetadata: {
		title: `app`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-postcss',
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				implementation: require('sass'),
				sassOptions: {
					includePaths: ['./src/styles/'],
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};