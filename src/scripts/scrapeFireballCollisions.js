import axios from "axios";

import FireballCollisions from "../models/fireballCollisions.model.js";

const positionStackApiKey = "cc86505ab7f05c016d7e7cced3d3a29f";

const scrapeFireballCollisions = async () => {
  // Get fireball Collision data from NASA
  const {
    data: { data: collisions },
  } = await axios.get("https://ssd-api.jpl.nasa.gov/fireball.api");

  console.log(collisions.length);
  // Save fireball collision data to mongodb
  const CollisionsPromises = [];
  for (let i = 0; i < collisions.length; i++) {
    console.log(`Scraping fireball impact ${i} / ${collisions.length}`);
    let [date, _energy, impactEnergy, lat, latDir, lon, lonDir] = collisions[i];
    // Do not add collisions with missing data
    if ([date, impactEnergy, lat, latDir, lon, lonDir].includes(null)) {
      continue;
    }
    //change coordinates to negative if latitide is South or longitude is West
    if (latDir === "S") {
      lat = -lat;
    }
    if (lonDir === "W") {
      lon = -lon;
    }

    const response = await axios.get(
      "http://api.positionstack.com/v1/reverse",
      {
        params: {
          access_key: positionStackApiKey,
          query: `${lat},${lon}`,
        },
      },
    );
    const country =
      response.data?.data?.find(({ country }) => country)?.country || null;
    console.log(country);

    CollisionsPromises.push(
      FireballCollisions.create({
        date,
        impactEnergy,
        lat,
        lon,
        country,
      }).catch((error) => {
        if (error.code !== 11000) {
          throw error;
        }
      }),
    );
  }
};

export default scrapeFireballCollisions;
