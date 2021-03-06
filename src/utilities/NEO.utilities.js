import axios from "axios";
//import NEO from "../models/NEO";

export const parse_NEO_distances = async (req, res) => {
  const {
    data: { data: closest },
  } = await axios.get(
    //closest NEO's
    "https://ssd-api.jpl.nasa.gov/cad.api?dist-max=10LD&sort=dist",
  );

  //cd is the calander date time, des is designation
  closest.forEach(({ des, dist_min, dist_max, dist, body, cd }) => {
    NEO.create({
      des,
      dist_min,
      dist_max,
      dist,
      body,
      cd,
    });
    console.log(closest);
    
  });

  //Sorting closest NEO's by soonest date
  //is the data pre sorted by date?, regardless this should redundantly work
  const cdSortedNEO = closest.slice().sort((a,b) => (new Date(b.cd) - new Date(a.cd)));
  var soonestKnownNEO = [];
  var longestKnownNEO = [];

  //create next NEO and longest NEO array
  for(i = 0; i<10; i++){
    soonestKnownNEO.push(cdSortedNEO[i]);
    longestKnownNEO.push(cdSortedNEO[cdSortedNEO.length - 1 - i]);
  }

  //https://flaviocopes.com/how-to-sort-array-by-date-javascript/
  console.log("Soonest known NEO: ");
  console.log(soonestKnownNEO[0]);
  console.log("Longest known NEO: ");
  console.log(lastKnownNEO[0]);

  //sort by closest distance
  const distSortedNEO = closest.slice().sort((a,b) => (b.dist - a.dist));
  var closestKnownNEO = [];

  //create closest 5 distances array
  for(i = 0; i<5; i++){
    closestKnownNEO.push(distSortedNEO[i]);
  }

  //display 5 closest distances
  console.log("5 Closest known NEO: ");
  console.log(closestKnownNEO);

};

