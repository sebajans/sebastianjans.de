const path = '/logos';

type LogoItem = {
	id: number;
	title: string;
	text: string;
	image: string;
	imageDark?: string;
};

export const logoItems: LogoItem[] = [
	{
		id: 1,
		title: 'Recycle Rumble',
		text: 'A logo a recycling game i created. It features a playful design and clipped corners to convey safety.',
		image: `${path}/logo-rr.webp`,
		imageDark: `${path}/logo-rr-white.webp`
	},
	// {
	//   title: 'Chilis',
	//   text: 'A logo for a spicy mexican sauce. Colourful and playful!',
	//   image: `${path}/logo-chilli.webp`,
	//   imageDark: `${path}/logo-chilli.webp`,
	// },
	{
		id: 2,
		title: 'Renata Jans',
		text: 'A logo designed to be elegant, yet bold. It is for Renata Jans, a beauty consultant.',
		image: `${path}/logo-rj-s.webp`,
		imageDark: `${path}/logo-rj-s-white.webp`
	},
	{
		id: 3,
		title: 'bate',
		text: 'A logotype for a spanish brand that produces baseball bats.',
		image: `${path}/logo-bate.webp`,
		imageDark: `${path}/logo-bate-white.webp`
	},
	{
		id: 4,
		title: 'Students comitee Materials Science',
		text: 'A logo for the students comitee for my former university. It incorporates both design guidelines from the university and elements from materials science.',
		image: `${path}/logo-fachschaft.webp`,
		imageDark: `${path}/logo-fachschaft-white.webp`
	},
	{
		id: 5,
		title: 'Sisimi',
		text: 'A design for a brand that produces cat toys. ',
		image: `${path}/logo-sisimi-color.webp`,
		imageDark: `${path}/logo-sisimi-color.webp`
	},
	{
		id: 6,
		title: 'Smyle Webdesign',
		text: 'Logo redesign for a web design brand. The goal was to show the responsiveness of the designs.',
		image: `${path}/logo-smyle.webp`,
		imageDark: `${path}/logo-smyle.webp`
	},
	{
		id: 7,
		title: 'Holztransformer',
		text: 'A logo for a company that focusses in upcycling old pallet wood to create furniture.',
		image: `${path}/logo-ht.webp`,
		imageDark: `${path}/logo-ht-white.webp`
	},
	{
		id: 8,
		title: 'WordMate',
		text: 'A logo for an application that i am creating. It is an app that aims to help people learn new languages.',
		image: `${path}/logo-wordmate.webp`,
		imageDark: `${path}/logo-wordmate-white.webp`
	},
	{
		id: 9,
		title: 'Cupholder',
		text: 'A design for a cupholder that features a shutter mechanism and a telescope mechanism, which are used as elements in the logo design.',
		image: `${path}/logo-cupholder.webp`,
		imageDark: `${path}/logo-cupholder-white.webp`
	},
	{
		id: 10,
		title: 'Brazie',
		text: 'A logo for an upcoming clothing brand, it uses friendly colors and resembles the initials of the founder (VB).',
		image: `${path}/logo-brazie.webp`,
		imageDark: `${path}/logo-brazie-white.webp`
	},
	{
		id: 11,
		title: 'HortaTech',
		text: 'HortaTech promotes sustainable agriculture through the use of advanced technologies and innovative practices to improve the management of water resources. Our goal is to preserve the agricultural heritage of the Huerta de Valencia, reducing environmental impact and promoting local economic development.',
		image: `${path}/logo-hortatech.webp`,
	},
	{
		id: 12,
		title: 'Cidaqua',
		text: 'Cidaqua is a research project that focuses on water treatment and management. The logo is designed to convey the importance of water and the environment.',
		image: `${path}/logo-cidaqua.webp`,
		imageDark: `${path}/logo-cidaqua-white.webp`
	},
	{
		id: 13,
		title: 'CPHA-Consulting',
		text: 'Cph&A Consulting is a value-driven consultancy firm specializing in sustainable and regional economic development through collaboration and multi-stakeholder engagement.',
		image: `${path}/logo-cpha.webp`,
		imageDark: `${path}/logo-cpha-white.webp`
	},
	{
		id: 14,
		title: 'Vivus',
		text: 'Vivus is a brand that creates sustainable interior design products from regenerative materials. The logo is designed to convey a sense of elegance and sophistication.',
		image: `${path}/logo-vivus.webp`,
		imageDark: `${path}/logo-vivus-white.webp`
	},
	{
		id: 15,
		title: 'Erzählchen',
		text: 'Erzählchen is a brand that focuses on storytelling and creativity. The logo is designed to convey a sense of imagination and wonder.',
		image: `${path}/logo-erzaehlchen.webp`,
		// imageDark: `${path}/logo-erzaehlchen-white.webp`
	}

	// Add: HortaTech, Cidaqua, CPHA-Consulting, Vivus, Erzählchen?
	// Adjust: call it "branding"
];
