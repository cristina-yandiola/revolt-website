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
		src: '',
		alt: 'Revolt logo',
		text: 'Revolt<span class="text-accent-500 text-6xl ml-1">.</span>'
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
