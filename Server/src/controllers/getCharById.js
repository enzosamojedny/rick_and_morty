const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

function getCharById({ req, res }) {
  const { id } = Params; //?aca la cagamos

  axios(`URL/${id}`)
    .then((response) => response.data)
    .then({ status, name, species, origin, gender, image });
}

module.exports = { getCharById };
