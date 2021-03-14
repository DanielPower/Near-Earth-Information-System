import FireballCollisions from "../models/fireballCollisions.model.js";

export const findByDistance = async (req, res) => {
  //queries entered by user
  const userLat = req.query.lat;
  const userLon = req.query.lon;
  const searchDistance = req.query.distance;
  //return collisions stored in db
  let withinSearchDistance = await FireballCollisions.find({});
  const radius = 6371e3; //earth's radius metres
  const lat1 = (userLat * Math.PI) / 180; //convert from degrees to radians
  let collisionsWithinDistance = []; //stores all collisions within specified distance
  withinSearchDistance.forEach((item) => {
    //convert from degrees to radians
    const lat2 = (item.lat * Math.PI) / 180;
    const latDiff = ((item.lat - userLat) * Math.PI) / 180;
    const lonDiff = ((item.lon - userLon) * Math.PI) / 180;
    //haversine formula to calculate great-circle distance between two points
    const a =
      Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
      Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(lonDiff / 2) *
        Math.sin(lonDiff / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const dkm = (radius * c) / 1000; //distance in kms

    if (dkm <= searchDistance) {
      //check if distance between user and collision is less than search distance specified
      //create an object to return to user that includes distance away
      let obj = {
        date: item.date,
        impactEnergy: item.impactEnergy,
        lat: item.lat,
        lon: item.lon,
        dist: dkm,
      };
      collisionsWithinDistance.push(obj); //add to list
    }
  });
  collisionsWithinDistance.sort((a, b) => (a.dist > b.dist ? 1 : -1)); //sort list to return closest collision first
  res.send(collisionsWithinDistance);
};

export const getCountryImpactCounts = async (_req, res) => {
  const fireballs = await FireballCollisions.find({});
  const countries = {};
  fireballs.forEach(({ country }) => {
    if (!countries[country]) {
      countries[country] = 0;
    }
    countries[country] += 1;
  });

  res.send(countries);
};
