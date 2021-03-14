import scrapeFireballCollisions from "./scrapeFireballCollisions.js";
import scrapeFireballPredictions from "./scrapeFireballPredictions.js";
import scrapeNHATSs from "./scrapeNHATS.js";

export const scrapeAll = async () => {
  console.log("Begin Scraping NASA APIs");
  await scrapeFireballCollisions();
  await scrapeFireballPredictions();
  await scrapeNHATSs();
  console.log("Done scraping NASA APIs");
};

export default scrapeAll;
