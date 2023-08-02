import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlaceData = async (sw, ne) => {
  try {
    // request (if request not run then the error code will run)
    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '8be9056fe4msh3445bd6f0e9d196p157426jsn6c124643fb3b',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;

  }
  catch (error) {
    console.log(error);
  }
}
