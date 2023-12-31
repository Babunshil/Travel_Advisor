import axios from "axios";

export const getPlaceData = async (type, sw, ne) => {
  try {
    // request (if request not run then the error code will run)
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': 'b665656b66msh92ecf170a9a7e8bp15cfd4jsned399bb7430b',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;

  }
  catch (error) {
    console.log(error);
  }
}
