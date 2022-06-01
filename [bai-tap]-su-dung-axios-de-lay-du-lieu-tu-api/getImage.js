const axios = require("axios");

const getAPOD = async () => {
    const getAPOD = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    return getAPOD.data;
}

getAPOD()
.then(json => {
    const APOD = json
    console.log(APOD["hdurl"])
})