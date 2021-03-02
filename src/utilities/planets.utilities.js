import axios from "axios";

import Planet from "../models/planet.model.js";

/**
 * 
Merc	Mercury
Venus	Venus
Earth	Earth
Mars	Mars
Juptr	Jupiter
Satrn	Saturn
Urnus	Uranus
Neptn	Neptune
Pluto	Pluto
Moon	Moon
 */
export const add_mars_data = async (req, res) => {
  const {
    data: { data: fireballs },
  } = await axios.get(
    "https://ssd-api.jpl.nasa.gov/sentry.api?all=1&ip-min=1e-5",
  ); //forces a minimum probability 0.00001

  fireballs.forEach(({ des, energy, ip, date, dist }) => {
    FireballPredict.create({
      des,
      energy,
      ip,
      date,
      dist,
    });
  });
};
