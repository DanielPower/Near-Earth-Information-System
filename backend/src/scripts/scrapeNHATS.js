import axios from "axios";

import NHATS from "../models/NHATS.model.js";

const scrapeNHATSs = async () => {
  // Get NHATS data from NASA
  const {
    data: { data: NHATSData },
  } = await axios.get("https://ssd-api.jpl.nasa.gov/nhats.api", {
    params: {},
  });

  // Save NHATS data to mongodb
  const NHATSPromises = [];
  NHATSData.forEach(
    ({
      des,
      min_size: minSize,
      max_size: maxSize,
      obs_start: obsStart,
      obs_end: obsEnd,
      obs_mag: obsMag,
    }) => {
      // Discard incomplete data
      if ([des, minSize, maxSize, obsStart, obsEnd, obsMag].includes(null)) {
        return;
      }
      NHATSPromises.push(
        NHATS.create({
          des,
          minSize,
          maxSize,
          obsStart,
          obsEnd,
          obsMag,
        }).catch((error) => {
          // Ignore duplicate values
          if (error.code !== 11000) {
            throw error;
          }
        }),
      );
    },
  );
};

export default scrapeNHATSs;
