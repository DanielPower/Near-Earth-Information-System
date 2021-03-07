import axios from "axios";
import mongoose from "mongoose";

import NHATS from "../models/nhat.model.js";

await mongoose.connect("mongodb://localhost:27017/nasa");

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

// Close connection once all NHATS have been saved.
Promise.all(NHATSPromises).then(() => {
  mongoose.disconnect();
});
