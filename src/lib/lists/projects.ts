export interface PhotoGridPosition {
  url: string;
  row?: number;
  col?: number;
  rowspan: number;
  colspan: number;
}

export interface ProjectData {
  slug: string;
  logo: string;
  url: string;
  logoDark?: string;
  clientName: string;
  shortDescription: string;
  projectOverview?: string[];
  objectives: string[];
  problemStatement: string;
  solution?: string;
  processText: string[];
  colors?: string[];
  tools: string[];
  screenshot?: string;
  screenshot2?: string;
  screenshot3?: string;
  screenshotMobile?: string;
  screenshotMobile2?: string;
  screenshotMobile3?: string;
  comparisonImage?: { upperImage: string; lowerImage: string }[];
  photoGridPositions?: PhotoGridPosition[];
}

export const projectItems: ProjectData[] = [

  {
    slug: 'project-renatajans',
    url: 'renatajans.de',
    logo: '/projects/website-rj/logo-rj-l.svg',
    logoDark: '/projects/website-rj/logo-rj-l-white.svg',
    clientName: 'Renata Jans',
    shortDescription: 'This is the website I created for a make-up stylist. It is primarily aimed at a female audience, so the colour scheme is mainly purple, red and white. The website includes a full-screen front page and a menu bar.',
    projectOverview: ['The first concept'],
    objectives: [`Develop an attractive and user-friendly website that effectively showcases Renata J's beauty products.`,
      `Promote Renata J's makeup teaching services to empower women of all ages.`,
      `Highlight Renata J's makeup artistry services, particularly for weddings and special occasions.`],
    problemStatement: `The client wanted a website that would be easy to navigate and would showcase her work in a way that would be easy to understand and would be visually appealing.`,
    solution: 'We designed and developed a comprehensive website for Renata J that combined elegant aesthetics with user-friendly navigation. Our approach included:',
    processText: [`I conducted a thorough analysis of Renata Jans brand and target audience.`,
      `Created a visually appealing, feminine design with a modern and responsive layout.`,
      `Developed a custom content management system (CMS) for easy product and content updates.`,
      `Implemented intuitive navigation and clear calls to action to guide users to Renata's product offerings and services.`,],
    colors: ['#FFEFF0', '#BA000C', '#3C0005', '#201230'],
    tools: ['Wordpress', 'Elementor', 'Affinity Designer'],
    screenshot: '/projects/website-rj/website-rena-front-1.webp',
    screenshot2: '/projects/website-rj/website-rena-front-2.webp',
    screenshotMobile: '/projects/website-rj/website-rena-front-Mobile-1.webp',
    screenshotMobile2: '/projects/website-rj/website-rena-front-Mobile-4.webp',
    // photoGridPositions: [
    //   { url: '/projects/website-rj/outfit_1_3.webp', rowspan: 1, colspan: 1 },
    //   { url: '/projects/website-rj/outfit_1_5.webp', rowspan: 2, colspan: 2 },
    //   { url: '/projects/website-rj/outfit_1_4.webp', rowspan: 1, colspan: 1 },
    //   { url: '/projects/website-rj/outfit_1_1.webp', rowspan: 1, colspan: 1 },
    // ],
  },
  {
    slug: 'project-rr',
    logo: '/projects/website-RR/logo-RR-l.webp',
    logoDark: '/projects/website-RR/logo-RR-l-white.webp',
    url: 'recycle-rumble.netlify.app',
    clientName: 'Recycle Rumble',
    shortDescription: 'This is my master\'s thesis project, "Recycle Rumble," aimed at educating children about recycling and waste sorting through an innovative game. The project encompasses both a virtual web-app version and a physical board game version.',
    projectOverview: ['Educational Game Development'],
    objectives: [`Create an engaging and educational game, "Recycle Rumble," to teach children about recycling and waste sorting.`,
      `Leverage AI tools and technology to push the boundaries of creativity and interactive learning.`,
      `Develop both a virtual web-app version and a physical board game version for diverse learning experiences.`],
    problemStatement: `The challenge was to design and develop an effective and enjoyable educational tool for children that would instill knowledge about recycling and waste management while keeping them engaged.`,
    solution: 'We devised a comprehensive solution that involved the following key strategies:',
    processText: [`Conducted extensive research on children's learning preferences and the most effective pedagogical approaches for teaching recycling and waste sorting.`,
      `Designed and developed the virtual version of "Recycle Rumble" as a web-app, using cutting-edge technologies like Svelte and Tailwind CSS.`,
      `Leveraged AI tools to enhance the gameplay experience and adapt the game's difficulty to individual learning levels.`,
      `Created the physical board game version using design software, Affinity Designer, and worked with MidJourney for production and printing.`,],
    colors: ['#E7E3D9', '#FF8031', '#302B1F'],
    tools: ['Svelte', 'Tailwind CSS', 'GitHub', 'Affinity Designer', 'MidJourney'],
    screenshot: '/projects/website-RR/website-RR-ss-front.webp',
    screenshot2: '/projects/website-RR/website-RR-ss-level.webp',
    screenshotMobile: '/projects/website-RR/website-RR-ss-mobile-front.webp',
    screenshotMobile2: '/projects/website-RR/website-RR-ss-mobile-play.webp',
    comparisonImage: [
      {
        upperImage: '/projects/website-RR/website-RR-play.webp',
        lowerImage: '/projects/website-RR/website-RR-front.webp'
      },
    ],
    photoGridPositions: [
      // { url: '/projects/website-RR/website-RR-mobile-front.webp', rowspan: 2, colspan: 1 },
      { url: '/projects/website-RR/website-RR-front.webp', rowspan: 2, colspan: 2 },
      { url: '/projects/website-RR/website-RR-mobile-settings.webp', rowspan: 1, colspan: 1 },
    ],
    // { url: '/projects/website-RR/website-RR-mobile-level.webp', rowspan: 1, colspan: 1 },
  },
  {
    slug: 'project-brazie',
    url: 'brazie.eu',
    logo: '/projects/website-brazie/logo-brazie.svg',
    logoDark: '/projects/website-brazie/logo-brazie-white.svg',
    clientName: 'Brazie',
    shortDescription: 'Introducing "Brazie," a sustainable fashion brand committed to upcycling and creating unique fashion pieces, primarily using upcycled denim. The brand embraces a streetstyle aesthetic and features a multi-language page with dark mode.',
    projectOverview: ['Sustainable Fashion Brand Creation'],
    objectives: [`Establish a sustainable fashion brand, "Brazie," dedicated to upcycling denim for unique fashion pieces.`,
      `Develop a visually appealing and user-friendly website with multi-language support and dark mode.`,
      `Utilize modern web technologies, including SvelteKit, TailwindCSS, GitHub, and Affinity Designer, for design and development.`],
    problemStatement: `The challenge was to create a brand and an online presence that reflects Brazie's commitment to sustainable fashion and appeals to fashion-conscious consumers.`,
    solution: 'We crafted a comprehensive solution that encompassed the following key strategies:',
    processText: [`Conducted in-depth market research to identify sustainable fashion trends and target audience preferences.`,
      `Designed and developed a visually stunning website using SvelteKit and TailwindCSS, focusing on user experience and responsiveness.`,
      `Implemented a multi-language feature to reach a broader international audience and added dark mode for enhanced user experience.`,
      `Created a distinctive brand identity, including the logo and visual elements, using Affinity Designer, to reflect Brazie's ethos.`,],
    colors: ['#353979', '#D85C96', '#F198B8', '#C9DBEF'],
    tools: ['SvelteKit', 'Tailwind CSS', 'GitHub', 'Affinity Designer'],
    screenshot: '/projects/website-brazie/website-brazie-front.webp',
    screenshot2: '/projects/website-brazie/website-brazie-gallery.webp',
    screenshotMobile: '/projects/website-brazie/website-brazie-mobile-front.webp',
    screenshotMobile2: '/projects/website-brazie/website-brazie-mobile-skills.webp',
    // photoGridPositions: [
    //   { url: '/projects/website-brazie/photo-1.webp', rowspan: 1, colspan: 1 },
    //   { url: '/projects/website-brazie/photo-2.webp', rowspan: 2, colspan: 2 },
    //   { url: '/projects/website-brazie/photo-3.webp', rowspan: 1, colspan: 1 },
    //   { url: '/projects/website-brazie/photo-4.webp', rowspan: 1, colspan: 1 },
    // ],
  },
  {
    slug: 'project-dmaier',
    url: 'dmaier-gmbh.de',
    logo: '/projects/website-dmaier/logo-dmaier.webp',
    logoDark: '/projects/website-dmaier/logo-dmaier.webp',
    clientName: 'DMaier GmbH',
    shortDescription: 'This is the website redesign project we undertook for dmaier gmbh, a local brand in the metal industry. The project aimed to provide the company with a fresh online image and enhance its online presence for B2B partners.',
    projectOverview: ['Redesigning the Online Image'],
    objectives: [`Revamp the website to present dmaier gmbh as a modern and innovative player in the metal industry.`,
      `Improve user experience and engagement for B2B partners and potential clients.`,
      `Highlight dmaier gmbh's expertise in creating custom metal pieces and solutions.`],
    problemStatement: `dmaier gmbh required a website that would accurately reflect its capabilities and establish a strong online presence. The existing website didn't effectively communicate the company's strengths and was outdated.`,
    solution: 'We executed a comprehensive website redesign project for dmaier gmbh, focusing on the following strategies:',
    processText: [`Conducted a detailed analysis of dmaier gmbh's brand identity and its target B2B audience.`,
      `Crafted a modern and visually appealing design that conveyed innovation and precision.`,
      `Implemented a content management system (CMS) for easy updates and maintenance of product listings and case studies.`,
      `Enhanced the website's navigation to ensure that B2B partners could easily access relevant information and showcase dmaier gmbh's custom metal solutions.`,],
    colors: ['#FFFFFF', '#D6DBEE', '#0054A8'],
    tools: ['WordPress', 'Elementor', 'Affinity Designer'],
    screenshot: '/projects/website-dmaier/website-dmaier-front.webp',
    screenshot2: '/projects/website-dmaier/website-dmaier.webp',
    screenshotMobile: '/projects/website-dmaier/website-dmaier-front-mobile.webp',
    screenshotMobile2: '/projects/website-dmaier/website-dmaier-mobile.webp',
    // photoGridPositions: [
    //   { url: '/projects/website-dmaier/photo-1.webp', rowspan: 1, colspan: 1 },
    //   { url: '/projects/website-dmaier/photo-2.webp', rowspan: 2, colspan: 2 },
    //   { url: '/projects/website-dmaier/photo-3.webp', rowspan: 1, colspan: 1 },
    //   { url: '/projects/website-dmaier/photo-4.webp', rowspan: 1, colspan: 1 },
    // ],
  },
  {
    slug: 'project-kamadob10',
    url: 'kamadob10.com',
    logo: '/projects/website-kamadob10/logo-kamadob10.webp',
    logoDark: '/projects/website-kamadob10/logo-kamadob10-white.webp',
    clientName: 'KamadoB10',
    shortDescription: `This is the web design and branding project for kamadob10, a premium brand specializing in crafting traditional Japanese kamados in Germany. The project aimed to create an online presence that reflects the brand's premium status and showcases its handmade, high-quality grills.`,
    projectOverview: ['Web Design and Branding'],
    objectives: [`Design a visually stunning website that reflects kamadob10's premium positioning in the market.`,
      `Develop an e-commerce platform using WooCommerce to showcase and sell handmade kamados.`,
      `Create a strong brand identity that aligns with kamadob10's commitment to traditional craftsmanship and quality.`],
    problemStatement: `kamadob10 needed a compelling online platform that would effectively convey its premium status, showcase its handmade kamados, and reach a discerning audience.`,
    solution: 'We executed a comprehensive solution that encompassed the following key strategies:',
    processText: [`Conducted thorough market research to understand the premium grill market and the expectations of discerning consumers.`,
      `Designed a visually captivating website using WordPress and Elementor, focusing on user experience and showcasing the craftsmanship of kamadob10's grills.`,
      `Implemented WooCommerce for e-commerce functionality, allowing customers to explore and purchase kamados online.`,
      `Developed a brand identity that emphasizes kamadob10's commitment to traditional Japanese craftsmanship and quality, while also showcasing the brand's German heritage.`,],
    colors: ['#21372F', '#E64A19', '#000000', '#F9EBD2'],
    tools: ['WordPress', 'WooCommerce', 'Elementor'],
    screenshot: '/projects/website-kamadob10/website-kamadob10-front.webp',
    screenshot2: '/projects/website-kamadob10/website-kamadob10-shop.webp',
    screenshotMobile: '/projects/website-kamadob10/website-kamadob10-front-mobile.webp',
    screenshotMobile2: '/projects/website-kamadob10/website-kamadob10-mobile-2.webp',
    // photoGridPositions: [
    //   { url: '/projects/website-kamadob10/photo-1.webp', rowspan: 1, colspan: 1 },
    //   { url: '/projects/website-kamadob10/photo-2.webp', rowspan: 2, colspan: 2 },
    //   { url: '/projects/website-kamadob10/photo-3.webp', rowspan: 1, colspan: 1 },
    //   { url: '/projects/website-kamadob10/photo-4.webp', rowspan: 1, colspan: 1 },
    // ],
  }


]

