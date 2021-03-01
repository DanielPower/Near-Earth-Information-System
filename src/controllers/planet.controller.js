import httpStatus from "http-status";

import Planet from "../models/planet.js";

export const getAllPlanets = async (_req, res) => {
  const planets = await Planet.find({});
  res.send(planets);
};

export const createPlanet = async (req, res) => {
  Planet.create(req.body);
  res.status(httpStatus.CREATED).send();
};

export const removePlanet = async () => {
;s;ldkfjasoeifha;selfh
}