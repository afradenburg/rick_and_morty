const user = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  const userFound = user.find(
    (data) => data.email === email && data.password === password
  );

  if (userFound) return res.status(200).json({ access: true });

  return res.status(404).json({ access: false });
};

module.exports = {
  login,
};
