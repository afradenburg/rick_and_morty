const { login } = require("../controlers/login");
const { getCharById } = require("../controlers/getCharById");
const { postFav, deleteFav } = require("../controlers/handleFavorites");

const router = require("express").Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});
router.get("/login", (req, res) => {
  login(req, res);
});
router.post("/fav", (req, res) => {
  postFav(req, res);
});
//cualquiera de las dos formas esta bien,
//igualmente recibira los req, res por parametros
router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});

module.exports = router;
