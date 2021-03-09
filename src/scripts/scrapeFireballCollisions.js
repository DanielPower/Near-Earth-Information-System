import axios from "axios";

import FireballCollisions from "../models/fireballCollisions.model.js";

const positionStackApiKey = "cc86505ab7f05c016d7e7cced3d3a29f";

const scrapeFireballCollisions = async () => {
  // Get fireball Collision data from NASA
  const {
    data: { data: Collisions },
  } = await axios.get("https://ssd-api.jpl.nasa.gov/fireball.api");

  // Save fireball collision data to mongodb
  const CollisionsPromises = [];
  Collisions.forEach(
    async (
      [date, _energy, impactEnergy, lat, latDir, lon, lonDir, _alt, _vel],
      index,
    ) => {
      // Do not add collisions with missing data
      if ([date, impactEnergy, lat, latDir, lon, lonDir].includes(null)) {
        return;
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
      const country = response?.data?.data?.country || null;

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
    },
  );
};

export default scrapeFireballCollisions;
