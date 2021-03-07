import axios from "axios";
import dayjs from "dayjs";


//Twitter API call
export const getNEOs = async (req, res) => {

    const {  } = req.params;

    //basic request
    // possible request format: GET https://api.twitter.com/1.1/statuses/lookup.json?id=20,1050118621198921728
  const { data: { data: tweets } } = await axios.get('https://api.twitter.com/1.1/statuses/lookup.json', {
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
  res.send(tweets);
};