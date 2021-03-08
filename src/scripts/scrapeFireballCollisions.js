import axios from "axios";

import FireballCollisions from "../models/fireballCollisions.model.js";

const scrapeFireballCollisions = async () => {
  // Get fireball Collision data from NASA
  const {
    data: { data: Collisions },
  } = await axios.get("https://ssd-api.jpl.nasa.gov/fireball.api");

  // Save fireball collision data to mongodb
  const CollisionsPromises = [];
  Collisions.forEach(
    ([date, _energy, impactEnergy, lat, latDir, lon, lonDir, _alt, _vel]) => {
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

      CollisionsPromises.push(
        FireballCollisions.create({
          date,
          impactEnergy,
          lat,
          lon,
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