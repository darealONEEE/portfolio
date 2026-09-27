import foodestic from "@/imports/Projects/7b736462ad44fc8c22a09396e7eee971dbf1dd72.png";
import nagaRescue from "@/imports/Projects/nagarescue-landing.png";
import lifelineSos from "@/imports/Projects/lifeline-sos.png";
import sinarapanFestival from "@/imports/Projects/sinarapan-festival.png";
import simcastRefinement from "@/imports/Projects/simcast-refinement.png";
import lamborghiniConcept from "@/imports/Projects/lamborghini-concept.png";
import foodget from "@/imports/Projects/foodget.png";

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

export const designProjects: Project[] = [
  {
    id: "sinarapan-festival",
    title: "Sinarapan Festival",
    format: "Festival website design",
    image: sinarapanFestival,
    imageAlt: "Sinarapan Festival website featuring festival dancers, Lake Buhi heritage, community tourism, and visitor information",
    summary: "A festival website celebrating the sinarapan, the heritage of Buhi, and community tourism in Camarines Sur.",
    description: "The design introduces the festival with a performance hero, then explains its origins in Lake Buhi and the festival's role in ecological awareness and local tradition. Sections on cultural rituals, fishing heritage, community voices, tourism, and visitor planning bring the event's history and practical travel information together.",
    highlights: ["Sinarapan and Lake Buhi heritage", "Cultural traditions and community stories", "Tourism and visitor planning information"],
  },
  {
    id: "simcast-refinement",
    title: "Simcast Website Refinement",
    format: "News website design refinement",
    image: simcastRefinement,
    imageAlt: "Simcast news website design with breaking news, trending stories, category sections, and article listings",
    summary: "A refined news website design for Simcast, powered by Microsoft News, organizing breaking, trending, and popular stories across multiple categories.",
    description: "This refinement presents a fuller news homepage with a branded header and category navigation. A featured breaking story leads into trending headlines, search and advertising areas, large article cards, and a popular article list, with news sections spanning world, health, lifestyle, money, and sports. The page closes with an expanded footer for site information, links, contact details, and a newsletter.",
    highlights: ["Breaking and trending news hierarchy", "Category-based story browsing", "Expanded footer and newsletter area"],
  },
  {
    id: "lamborghini-concept",
    title: "Lamborghini Futuristic Car Website",
    format: "Automotive website design",
    image: lamborghiniConcept,
    imageAlt: "Dark Lamborghini website concept with a futuristic car showcase, model selector, vehicle specifications, and detail gallery",
    summary: "A futuristic automotive website concept presenting Lamborghini models through dramatic dark visuals and interactive-style vehicle details.",
    description: "The design uses a black, full-page layout with vivid purple and red accents to frame a featured vehicle. Model navigation leads into a detailed Centenario showcase with performance specifications, configuration and brochure actions, image cards, and brand information.",
    highlights: ["Dark, high-contrast automotive presentation", "Model and vehicle detail sections", "Performance data and configuration actions"],
  },
];

export const developProjects: Project[] = [
  {
    id: "foodget",
    title: "Foodget",
    format: "Budget-based restaurant finder",
    image: foodget,
    imageAlt: "Foodget restaurant admin profile for Lola Nenitas Carinderia, showing a cheapest qualifying meal price, menu counts, and storefront details",
    summary: "An app that uses a user's budget to find restaurants with meals they can afford.",
    description: "Foodget helps diners discover restaurants that fit their budget. The restaurant profile shows the cheapest qualifying meal and key details such as cuisine, location, operating hours, and menu availability.",
    highlights: ["Restaurant discovery based on budget", "Cheapest qualifying meal price", "Restaurant profile and menu details"],
  },
  {
    id: "foodestic-app",
    title: "Foodestic",
    format: "Nutrition and recipe app",
    image: foodestic,
    imageAlt: "Foodestic wordmark on a pale blue background with food illustrations",
    summary: "A food app that tracks the nutrient content of ingredients and suggests recipes based on the ingredients provided.",
    description: "Foodestic helps users understand the nutritional value of their ingredients and find recipe ideas that make use of what they have on hand.",
    highlights: ["Ingredient nutrient tracking", "Recipe suggestions from provided ingredients", "Nutrition information for recipes"],
  },
  {
    id: "nagarescue",
    title: "NagaRescue",
    format: "Offline flood SOS and rescue coordination app",
    image: nagaRescue,
    imageAlt: "NagaRescue landing screen with location signal logo and Login and Register buttons",
    summary: "An offline SOS app for flood emergencies, recognized as a winning project at a mayoral hackathon in the Environment category.",
    description: "NagaRescue is being developed for integration with the MyNaga app. Its Resident, Responder, Evacuation, and City Officer apps connect residents with responders and coordinate rescue operations for a faster response.",
    highlights: ["Offline SOS for flood emergencies", "Connected Resident, Responder, Evacuation, and City Officer apps", "Designed to integrate with MyNaga"],
  },
  {
    id: "lifeline-sos",
    title: "Lifeline SOS",
    format: "Emergency response app",
    image: lifelineSos,
    imageAlt: "Lifeline SOS screen with a large SOS button, rescue prompt, and Locator and Facilities navigation",
    summary: "An extension of NagaRescue that lets people categorize SOS requests as Fire, Flood, or another emergency incident.",
    description: "Lifeline SOS expands the rescue concept beyond floods. Categorizing an SOS by incident type helps route requests for fire, flood, and other emergencies to the appropriate response operation.",
    highlights: ["Fire, flood, and emergency incident categories", "SOS request flow", "Extension of NagaRescue"],
  },
];

export const multimediaProjects: Project[] = [];
