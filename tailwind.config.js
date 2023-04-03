module.exports = {
	theme: {
		extend: {
			colors: {
				red: '#ef3939',
				green: '#14b966',
				'blue-darkest': '#101d3c',
				'blue-dark': '#193860',
				'blue-light': '#6ba9d4',
				orange: '#e99648',
				'grey-dark': '#6a6d6d',
				'grey-light': '#ddd8d8',
				turquoise: '#029f8a',
				'turquoise-light': '#9ce9cf',
				black: '#000',
				white: '#fff',
				darkGreen: '#142E50',
				brand: '#193860'
			},
			spacing: {
				8: '0.5rem',
				12: '0.75rem',
				16: '1rem',
				20: '1.25rem',
				24: '1.5rem',
				32: '2rem',
				48: '3rem',
				64: '4rem',
			},
			borderRadius: {
				5: '0.3125rem',
				10: '0.625rem',
				16: '1rem',
			},
			fontFamily: {
				opensans: ['Open Sans', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
			fontSize: {
				10: '0.625rem',
				12: '0.75rem',
				14: '0.875rem',
				16: '1rem',
				18: '1.125rem',
				20: '1.25rem',
				28: '1.75rem',
				32: '2rem',
			},
			fontWeight: {
				300: '300',
				400: '400',
				500: '500',
				700: '700',
				900: '900',
			},
			padding: {
				smd: '300px'
			},
			maxWidth: {
				smd: '300px'
			},
		},
	},
	purge: ['./src/**/*.html', './src/**/*.vue'],
	variants: {},
	plugins: [],
};
