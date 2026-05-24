// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/src/assets/logo.png',
		alt: 'Revolt logo',
		text: ''
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'GridScore', link: '/gridscore' },
		{ name: 'Grid Strategy', link: '/grid-strategy' },
		{ name: 'About us', link: '/about-us' },
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [
		/* { name: 'Contact us', link: '/contact', style: 'primary', size: 'lg' } */
	]
}
