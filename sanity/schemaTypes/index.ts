import { type SchemaTypeDefinition } from "sanity";
import { homeDifference } from "./home-difference";
import { homeConsultation } from "./home-consultation";
import { homeStoryTelling } from "./home-storytelling";
import { homeStorybook } from "./home-storybook";
import { aboutDifference } from "./about-difference";
import { aboutStoryTeller } from "./about-storyteller";
import { portfolio } from "./portfolio";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeDifference,
    homeConsultation,
    homeStoryTelling,
    homeStorybook,
    aboutDifference,
    aboutStoryTeller,
    portfolio,
  ],
};