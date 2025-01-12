import type { Component } from "svelte";
import ServiceIcon from "./ServiceComponent.svelte";
export interface SubService {
  id: number; // Unique ID for sub-service
  name: string;
  component?: string;
  price: number;
  description: string; // Added description field for subService
}

export interface Package {
  id: number; // Unique ID for package
  name: string;
  selectedSubService: string[]; // Array of IDs of selected sub-services
  discount: number;
  description: string;
}

export interface MainService {
  slug: string;
  id: number; // Unique ID for main service
  name: string;
  color: string;
  description: string;
  packages: Package[];
  subServices: SubService[];
}

export const services: MainService[] = [
  {
    slug: "web-development",
    id: 1,
    color:
      " bg-primary-200/40 dark:bg-primary-700/40 hover:bg-primary-200/80  dark:hover:bg-primary-700/80",
    name: "Web Development & Design",
    description: "Craft responsive and functional websites.",
    packages: [
      {
        id: 4,
        name: "Basic",
        selectedSubService: ["Frontend Development", "Landing Page Design"],
        discount: 20,
        description: "Essential services for web development.",
      },
      {
        id: 5,
        name: "Pro",
        selectedSubService: [
          "Frontend Development",
          "Landing Page Design",
          "Responsive Design",
          "Database Design",
        ],
        discount: 30,
        description:
          "Enhanced services including responsive design and database.",
      },
      {
        id: 6,
        name: "Premium",
        selectedSubService: [
          "Frontend Development",
          "Landing Page Design",
          "Responsive Design",
          "Testing & Debugging",
          "UI Framework Setup",
          "E-commerce Functionality",
          "Content Management System",
        ],
        discount: 40,
        description:
          "Complete package with advanced features and integrations.",
      },
    ],
    subServices: [
      {
        id: 21,
        component: "front-end",
        name: "Frontend Development",
        price: 80,
        description: "Creation of user-facing website components.",
      },
      {
        id: 22,
        component: "landing-page",
        name: "Landing Page Design",
        price: 120,
        description: "Design of the landing page.",
      },
      {
        id: 23,
        component: "responsive",
        name: "Responsive Design",
        price: 100,
        description: "Ensuring adaptability across devices.",
      },
      // { id:"", name: "Database Design", price: 110, description: "Efficient data organization and management." },
      {
        id: 24,
        component: "ui-ux",
        name: "UI Framework Setup",
        price: 90,
        description: "Implementation of UI frameworks.",
      },
      // { id: 25, component: "landing-page", name: "API Integration", price: 85, description: "Integration of third-party APIs." },
      {
        id: 26,
        component: "testing",
        name: "Testing & Debugging",
        price: 95,
        description: "Thorough testing and bug fixing.",
      },
      {
        id: 27,
        component: "content-management",
        name: "Content Management System",
        price: 130,
        description: "Integration of CMS for content control.",
      },
      {
        id: 28,
        component: "ecommerce",
        name: "E-commerce Functionality",
        price: 140,
        description: "Setup for online selling functionality.",
      },
      // { id:"", name: "Web Hosting Setup", price: 70, description: "Configuration of web hosting services." },
      // Other sub-services for Web Development & Design with descriptions
    ],
  },
  {
    slug: "branding",
    id: 2,
    color:
      " bg-primary-300/40 dark:bg-primary-600/40 hover:bg-primary-300/80  dark:hover:bg-primary-600/80",

    name: "Branding",
    description: "Build a unique brand identity for your business.",
    packages: [
      {
        id: 1,
        name: "Basic",
        selectedSubService: ["Logo", "Colours", "Typography"],
        discount: 30,
        description: "Essential branding elements to get started.",
      },
      {
        id: 2,
        name: "Pro",
        selectedSubService: [
          "Logo",
          "Colours",
          "Typography",
          "Mockups",
          "Brand Strategy",
        ],
        discount: 40,
        description: "Enhanced branding with strategy and mockups.",
      },
      {
        id: 3,
        name: "Premium",
        selectedSubService: [
          "Logo",
          "Colours",
          "Typography",
          "Usage Guide",
          "Mockups",
          "Brand Strategy",
          "Naming",
          "Patterns",
          "Iconography",
        ],
        discount: 50,
        description: "Complete branding suite with additional services.",
      },
    ],
    subServices: [
      {
        id: 11,
        component: "logo",
        name: "Logo",
        price: 50,
        description: "Unique logo design for your brand.",
      },
      {
        id: 12,
        component: "color",
        name: "Colours",
        price: 30,
        description: "Custom color palette selection.",
      },
      {
        id: 13,
        component: "typography",
        name: "Typography",
        price: 100,
        description: "Tailored typography choices for brand.",
      },
      {
        id: 14,
        component: "guide",
        name: "Usage Guide",
        price: 80,
        description: "Guide on using your logo effectively.",
      },
      {
        id: 15,
        component: "pattern",
        name: "Patterns",
        price: 70,
        description: "Pattern creation for brand consistency.",
      },
      {
        id: 16,
        component: "mockup",
        name: "Mockups",
        price: 90,
        description: "Visual mockups for branding materials.",
      },
      {
        id: 17,
        component: "icon",
        name: "Iconography",
        price: 60,
        description: "Creation of brand-specific icons.",
      },
      {
        id: 18,
        component: "strategy",
        name: "Brand Strategy",
        price: 120,
        description: "Strategic planning for brand development.",
      },
      {
        id: 19,
        component: "naming",
        name: "Naming",
        price: 110,
        description: "Assistance in brand name selection.",
      },
      // { id:"", name: "Stationery Design", price: 85, description: "Design for business stationery items." },
      // Add more sub-services for Branding
    ],
  },
  {
    id: 3,
    slug: "graphic-design",
    color:
      " bg-primary-400/40 dark:bg-primary-500/40 hover:bg-primary-400/80  dark:hover:bg-primary-500/80",
    name: "Graphic Design",
    description: "Create visually appealing and impactful designs.",
    packages: [
      {
        id: 7,
        name: "Basic",
        selectedSubService: ["Illustrations", "Print Design"],
        discount: 25,
        description: "Fundamental graphic design services.",
      },
      {
        id: 8,
        name: "Pro",
        selectedSubService: [
          "Illustrations",
          "Print Design",
          "Packaging Design",
          "Publication Design",
        ],
        discount: 35,
        description: "Expanded design services for various mediums.",
      },
      {
        id: 9,
        name: "Premium",
        selectedSubService: [
          "Illustrations",
          "Print Design",
          "Packaging Design",
          "Publication Design",
          "Digital Art",
          "Typography Design",
        ],
        discount: 45,
        description:
          "Comprehensive design suite with advanced creative services.",
      },
    ],
    subServices: [
      {
        id: 31,
        component: "illustration",
        name: "Illustrations",
        price: 70,
        description: "Artistic visual representations.",
      },
      {
        id: 32,
        component: "print",
        name: "Print Design",
        price: 90,
        description: "Designs for print materials.",
      },
      {
        id: 33,
        component: "package",
        name: "Packaging Design",
        price: 110,
        description: "Attractive packaging designs.",
      },
      {
        id: 34,
        component: "publication",
        name: "Publication Design",
        price: 80,
        description: "Designs for publications.",
      },
      {
        id: 35,
        component: "business-card",
        name: "Business Card Design",
        price: 50,
        description: "Design of business cards.",
      },
      {
        id: 42,
        component: "social-media",
        name: "Social Media Templates",
        price: 60,
        description: "Graphics for social media platforms.",
      },
      // { id: 44, component: "poster", name: "Poster Design", price: 70, description: "Creative poster designs." },
      // { id: 45, component: "flyer", name: "Flyer Design", price: 65, description: "Designs for promotional flyers." }

      // { id: 35,
      //   component: "",
      //    name: "Digital Art", price: 75, description: "Artwork created digitally." },
      // { id: 36,
      //   component: "",
      //    name: "Typography Design", price: 95, description: "Creative typography designs." },
      // { id: 37,
      //   component: "brand",
      //    name: "Brand Identity Design", price: 120, description: "Development of brand identities." },
      // { id: 38,
      //   component: "motion",
      //    name: "Motion Graphics", price: 130, description: "Dynamic visual elements." },
      // { id: 39,
      //   component: "identity",
      //    name: "Visual Identity Design", price: 100, description: "Creation of visual identities." },
      // Other sub-services for Graphic Design with descriptions
    ],
  },
  {
    id: 4,
    slug: "product-design",
    color:
      " bg-primary-500/40 dark:bg-primary-400/40 hover:bg-primary-500/80  dark:hover:bg-primary-400/80",
    name: "Product Design",
    description: "Design user-centric products for optimal experiences.",
    packages: [
      {
        id: 10,
        name: "Basic",
        selectedSubService: ["Product Research", "Wireframing"],
        discount: 15,
        description: "Initial product design services.",
      },
      {
        id: 11,
        name: "Pro",
        selectedSubService: [
          "Product Research",
          "Wireframing",
          "Prototyping",
          "User Testing",
        ],
        discount: 25,
        description: "Enhanced product design services with testing.",
      },
      {
        id: 12,
        name: "Premium",
        selectedSubService: [
          "Product Research",
          "Wireframing",
          "Prototyping",
          "User Testing",
          "Interaction Design",
          "Visual Design",
          "Usability Testing",
        ],
        discount: 35,
        description: "Complete product design suite with advanced features.",
      },
    ],
    subServices: [
      {
        id: 41,
        component: "research",
        name: "Product Research",
        price: 60,
        description: "Research to inform product design.",
      },
      {
        id: 42,
        component: "wireframe",
        name: "Wireframing",
        price: 85,
        description: "Initial visual layout of product.",
      },
      {
        id: 43,
        component: "prototype",
        name: "Prototyping",
        price: 75,
        description: "Interactive prototype creation.",
      },
      {
        id: 44,
        component: "testing",
        name: "User Testing",
        price: 90,
        description: "Testing with real users for feedback.",
      },
      {
        id: 45,
        component: "interaction",
        name: "Interaction Design",
        price: 100,
        description: "Design of interactive elements.",
      },
      // { id: 46, component: "",
      //   name: "Visual Design", price: 110, description: "Creation of visual product elements." },
      // { id: 47, component: "usability",
      //   name: "Usability Testing", price: 80, description: "Testing for usability and functionality." },
      {
        id: 48,
        component: "3d",
        name: "3D Design",
        price: 120,
        description: "Design of mobile applications.",
      },
      // Other sub-services for Product Design with descriptions
    ],
  },
  // {
  //   name: "UI/UX Design",
  //   packages: { id:"", name: "Basic", selectedSubService: ["Wireframing", "Prototyping"], discount: 15 },
  //   subServices: [
  //     { id:"", name: "Wireframing", price: 60 },
  //     { id:"", name: "Prototyping", price: 85 },
  //     { id:"", name: "User Research", price: 75 },
  //     { id:"", name: "User Testing", price: 90 },
  //     { id:"", name: "Information Architecture", price: 100 },
  //     { id:"", name: "Interaction Design", price: 110 },
  //     { id:"", name: "Visual Design", price: 95 },
  //     { id:"", name: "Usability Testing", price: 80 },
  //     { id:"", name: "Mobile App Design", price: 120 },
  //     { id:"", name: "Website Redesign", price: 130 },
  //     // Add more sub-services for UI/UX Design
  //   ],
  // },
  // Add more categories or services as needed
];
