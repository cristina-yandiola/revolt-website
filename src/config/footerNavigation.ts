// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Revolt.',
		aboutText: 'Electricity thingy website.',
		logo: {
			src: '/logo.svg',
			alt: 'The tailwind astro theme',
			text: 'Revolt'
		}
	},
	footerColumns: [
		{
			category: 'Essentials',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: '/about-us'
				},
				{
					subCategory: 'Consulting',
					subCategoryLink: '/consulting'
				},
				{
					subCategory: 'Courses',
					subCategoryLink: '/courses'
				}
				// {
				// 	subCategory: 'FAQ',
				// 	subCategoryLink: '/faq'
				// },
				// {
				// 	subCategory: 'Pricing',
				// 	subCategoryLink: '/pricing'
				// },
				// {
				// 	subCategory: 'Changelog',
				// 	subCategoryLink: '/changelog'
				// },
			]
		},
		{
			category: 'Legal',
			subCategories: [
				{
					subCategory: 'Terms',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				}
				// {
				// 	subCategory: 'Support',
				// 	subCategoryLink: '/contact'
				// },
				// {
				// 	subCategory: 'Join us',
				// 	subCategoryLink: '/contact'
				// }
			]
		}
	],
	subFooter: {
		copywriteText: '© Revolt 2026.'
	}
}
