const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");
const { response } = require("express");

const getCharById = (req, res) => {
  const { id } = req.params;

  axios(`${URL}/${id}`)
    .then((response) => response.data)
    .then(({ id, status, name, species, origin, image, gender }) => {
      if (name) {
        const character = {
          id,
          status,
          name,
          species,
          origin,
          image,
          gender,
        };
        return res.status(200).json(character);
      }
      return res.status(404).send("Not found");
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = {
  getCharById,
};

// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then(({ id, name, gender, species, origin, image, status }) => {
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//       };
//       return res
//         .writeHead(200, { "content-type": "application/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       return res.writeHead(
//         500,
//         { "content-type": "text/plain" }.end(error.message)
//       );
//     });
// };

// module.exports = {
//   getCharById,
// };
