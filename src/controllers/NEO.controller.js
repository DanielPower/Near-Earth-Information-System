import axios from "axios";
import dayjs from "dayjs";


//client sourced API call
export const getNEOs = async (req, res) => {

  //variables taken in by request
  const { sortby, minDistance, maxDistance, classification, minDate, maxDate, limit } = req.params;

  //basic request, altered by variables
  const { data: { data: NEOs } } = await axios.get('https://ssd-api.jpl.nasa.gov/cad.api', {
    params: {
      //variables used to make request
      "dist-min": minDistance,
      "dist-max": maxDistance,
      "min-date": minDate,
      "max-date": maxDate,
      class: classification,
      sort: sortby,
      limit: limit,
    },
  });
  
  //send response from API
  res.send(NEOs);
};

