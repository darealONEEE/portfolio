import foodestic from "@/imports/Projects/7b736462ad44fc8c22a09396e7eee971dbf1dd72.png";
import nomad from "@/imports/Projects/16f2b63f00e7c1e4b0fed75b11bbebe2beb87488.png";
import flora from "@/imports/Projects/4829f96d6a4cfc16218f8363f2f897f238387e75.png";
import finflow from "@/imports/Projects/d1cd261cfc7170738147bdafa7ffa4a50a67a86f.png";
import dailyPlanner from "@/imports/Projects/6dc7acc657d6ea850e95ded89f214038a8b41227.png";
import synchrony from "@/imports/Projects/d137c06c73023d895290d5173df5f565c0ae0277.png";
import connectwise from "@/imports/Projects/65a016ff04cdac47fb10801a73d948e5b3c38a02.png";
import financePro from "@/imports/Projects/e8cc71c8beaeb9fbe9232ca5795ad408770738e4.png";
import onboarding from "@/imports/Projects/c6b39f3ead91b846d204b5faac261ff3c648207f.png";
import appPromo from "@/imports/Projects/76f67412f024bbad1b5a1c25700c2ef39004ae9c.png";
import socialApp from "@/imports/Projects/9c024b8472f57d796bc74c64604770ac5e4b1d3d.png";
import marketing from "@/imports/Projects/62b00956f953f5afa3cd8a41701c26d69d9aa8b2.png";
import sidequest from "@/imports/Projects/71e092c12c29c3f0bf5eea8e35bbbd005fa7b5f9.png";
import auroraSync from "@/imports/Projects/1e42b7e4fd6525621b955f617bd2ab4ffd6218a8.png";
import appSale from "@/imports/Projects/c594cd950cfdb3211cab04913679ed46569fb61c.png";

export type Project = {
  id: string;
  title: string;
  format: string;
  image: string;
  imageAlt: string;
  summary: string;
  description: string;
  highlights: string[];
};

const mobilePromo: Project = {
  id: "mobile-app-promo",
  title: "Mobile App Promo",
  format: "App presentation",
  image: appPromo,
  imageAlt: "Two mobile screen mockups beside an app promotion headline on a blue background",
  summary: "An app presentation that pairs two angled phone mockups with a large promotional headline. The blue background and contrasting screen colors keep the product at the center of the composition.",
  description: "The layout balances the device previews on the left with supporting copy on the right. Overlapping phones add depth, while the short text hierarchy gives the presentation a clear reading order.",
  highlights: ["Layered device mockups", "Product-focused composition", "Promotional text hierarchy"],
};

const socialScreens: Project = {
  id: "social-app-screens",
  title: "Social App Screens",
  format: "Mobile interface presentation",
  image: socialApp,
  imageAlt: "Social feed, messages, welcome, and profile setup screens arranged on a pink background",
  summary: "A collection of mobile screens showing a social feed, messaging, a welcome screen, and profile setup. The presentation brings several parts of the app experience together in one composition.",
  description: "Photography anchors the feed, while bright illustrations distinguish the introductory screens. The angled arrangement makes it possible to compare the different layouts and their shared use of rounded controls and open spacing.",
  highlights: ["Photo-led social feed", "Welcome and profile layouts", "Multi-screen presentation"],
};

const marketingSite: Project = {
  id: "digital-marketing",
  title: "Digital Marketing Website",
  format: "Website presentation",
  image: marketing,
  imageAlt: "A laptop displaying a digital marketing website with a split hero and service sections",
  summary: "A website presentation for digital marketing services. A split hero pairs a bold introduction with team photography, followed by distinct areas for campaign, search, and marketing services.",
  description: "Blue accents connect the headline, navigation, and curved graphic elements. The laptop framing shows the desktop layout, with service information placed directly below the introduction to continue the page's reading flow.",
  highlights: ["Split hero composition", "Service information hierarchy", "Desktop website layout"],
};

export const designProjects: Project[] = [
  {
    id: "foodestic",
    title: "Foodestic",
    format: "Brand identity",
    image: foodestic,
    imageAlt: "Foodestic wordmark on a pale blue background with food illustrations",
    summary: "A food-themed visual identity built around a dark wordmark and a pale blue background. The central lettering is framed by oversized illustrations of ingredients and kitchen objects.",
    description: "The composition leaves generous space around the name so it remains the focal point. Thick outlines and simple shapes tie the illustrations to the wordmark, giving the tall brand graphic a consistent visual language.",
    highlights: ["Food-inspired wordmark", "Illustration and lettering balance", "Two-color visual identity"],
  },
  {
    id: "nomad",
    title: "Nomad",
    format: "Travel app interface",
    image: nomad,
    imageAlt: "Nomad travel app showing a Kyoto itinerary with arrival, hotel, and dinner entries",
    summary: "A travel interface that brings a trip overview and daily itinerary into one mobile screen. Destination photography introduces the journey, followed by a timeline of scheduled activities.",
    description: "The Kyoto preview groups arrival, hotel check-in, and dinner into separate entries with visible times. A deep teal header and warm neutral cards distinguish the trip summary from the schedule, while bottom navigation keeps the main sections in view.",
    highlights: ["Destination overview", "Time-based itinerary layout", "Mobile navigation hierarchy"],
  },
  {
    id: "flora",
    title: "Flora",
    format: "Plant care app interface",
    image: flora,
    imageAlt: "Flora garden dashboard with plant cards, watering labels, and daily care tasks",
    summary: "A plant care dashboard organized around a personal garden and today's tasks. Plant photographs, condition labels, and watering information give each plant a distinct place in the overview.",
    description: "The screen separates the plant collection from the care checklist so both are easy to scan. Green accents reinforce the garden theme, and the lower navigation introduces plant identification, a diary, care tips, and a profile.",
    highlights: ["Plant collection cards", "Care status and watering labels", "Daily task checklist"],
  },
  {
    id: "finflow",
    title: "FinFlow",
    format: "Finance app interface",
    image: finflow,
    imageAlt: "FinFlow mobile dashboard showing an account balance, recent activity, and budget categories",
    summary: "A personal finance interface that places an account overview, recent activity, and budget categories on the home screen. The design uses clear grouping to separate the different kinds of financial information.",
    description: "The balance takes the most prominent position, followed by a compact transaction list and circular budget indicators. Subtle blue surfaces and category icons give the screen structure without competing with the amounts and labels.",
    highlights: ["Account overview hierarchy", "Recent activity layout", "Visual budget categories"],
  },
  {
    id: "daily-planner",
    title: "Daily Planner",
    format: "Productivity app interface",
    image: dailyPlanner,
    imageAlt: "Daily planner home screen with task and event summaries and an upcoming tasks list",
    summary: "A daily planning interface that combines task and event summaries with a list of upcoming work. The home screen puts a short overview above the individual items that need attention.",
    description: "Colored summary blocks separate tasks from events, while the list below uses check circles, category icons, and secondary text. A bottom navigation bar groups the home screen, calendar, insights, and profile into a consistent mobile layout.",
    highlights: ["Daily task and event overview", "Scannable task rows", "Calendar-oriented navigation"],
  },
  {
    id: "synchrony",
    title: "Synchrony",
    format: "Project dashboard interface",
    image: synchrony,
    imageAlt: "Synchrony desktop dashboard displaying sprints, team activity, deadlines, and project health",
    summary: "A desktop project dashboard that brings sprint progress, team activity, and upcoming deadlines into one view. The project name and status sit above the supporting information.",
    description: "A persistent sidebar separates dashboard, project, analytics, team, and settings navigation. The main workspace groups related details into panels, using progress bars, dates, and small profile images to distinguish different types of updates.",
    highlights: ["Project overview layout", "Sprint and deadline panels", "Persistent workspace navigation"],
  },
];

export const developProjects: Project[] = [
  {
    id: "connectwise",
    title: "ConnectWise",
    format: "Mobile app showcase",
    image: connectwise,
    imageAlt: "ConnectWise app listing mockup with calendar, task, and project overview previews",
    summary: "A mobile productivity app showcase presenting a calendar, a task screen, and a project overview. The app listing composition places these previews together to explain the different areas of the interface.",
    description: "Each preview has a short heading and a distinct screen beneath it. The sequence moves from planning to individual tasks and then to project progress, with blue framing connecting the three parts of the presentation.",
    highlights: ["Calendar and task previews", "Project progress overview", "App listing composition"],
  },
  {
    id: "finance-pro",
    title: "Finance Pro",
    format: "Investment dashboard presentation",
    image: financePro,
    imageAlt: "Finance Pro investment dashboard cover on a lime-colored phone screen against dark fabric",
    summary: "An investment dashboard presentation led by bold typography and a bright lime screen. The phone mockup introduces the portfolio theme against a dark, textured setting.",
    description: "The cover groups the product name, a short portfolio introduction, and a data-update line into a vertical reading order. Its strong contrast emphasizes the introductory screen and establishes the visual direction of the presentation.",
    highlights: ["Portfolio-themed introduction", "High-contrast typography", "Mobile product presentation"],
  },
  {
    id: "mobile-onboarding",
    title: "Mobile App Onboarding",
    format: "Mobile screen mockup",
    image: onboarding,
    imageAlt: "Green and white mobile app mockups showing welcome, start, and create account screens",
    summary: "A set of introductory mobile screens covering a welcome, a start screen, and account creation. The three-device arrangement shows the visual relationship between the first steps of an app experience.",
    description: "Rounded fields and simple action buttons repeat across the green and white layouts. The account screen groups name, email, and password fields in a clear vertical sequence, while the welcome screen uses illustrations and a short introduction.",
    highlights: ["Welcome and start screens", "Account form layout", "Consistent controls and spacing"],
  },
  mobilePromo,
  socialScreens,
  marketingSite,
];

export const multimediaProjects: Project[] = [
  {
    id: "sidequest",
    title: "SideQuest",
    format: "Logo presentation",
    image: sidequest,
    imageAlt: "SideQuest wordmark beside a blue and black shield, target, and arrow emblem",
    summary: "A logo presentation combining a shield-like emblem, a circular target, and a diagonal arrow. A heavy uppercase wordmark sits alongside the symbol on a white background.",
    description: "The blue fill separates the emblem's interior from its black outlines. The arrow extends beyond the surrounding shape, giving the mark a sense of direction, while the compact lettering balances the more detailed symbol.",
    highlights: ["Shield and target symbolism", "Directional arrow motif", "Bold wordmark pairing"],
  },
  {
    id: "aurora-sync",
    title: "Aurora Sync",
    format: "Brand graphic",
    image: auroraSync,
    imageAlt: "Aurora Sync logo with a colorful ribbon monogram and connectivity and digital flow tagline",
    summary: "A brand graphic pairing a ribbon-like monogram with the Aurora Sync name. The colored symbol sits above a stacked wordmark and a tagline about connectivity and digital flow.",
    description: "Interwoven curves and changing colors give the monogram depth and movement. Dark lettering anchors the composition, while the softly lit background keeps the focus on the relationship between the symbol and the brand name.",
    highlights: ["Interwoven monogram", "Layered color treatment", "Stacked brand composition"],
  },
  {
    id: "app-sale-graphic",
    title: "App Sale Graphic",
    format: "Promotional poster",
    image: appSale,
    imageAlt: "Green app promotion poster with a sale headline, phone mockups, and offer callouts",
    summary: "A promotional poster that places mobile app previews beneath a large offer headline. The composition uses a green palette, outlined lettering, and callouts to organize the message around the product imagery.",
    description: "The phone mockups form the center of the poster, with the offer above and supporting copy below. A hand-drawn arrow draws attention to a screen detail, while a contrasting lower band separates the closing message from the imagery.",
    highlights: ["Headline and offer hierarchy", "Device-centered composition", "Promotional callout placement"],
  },
  socialScreens,
  marketingSite,
  mobilePromo,
];
