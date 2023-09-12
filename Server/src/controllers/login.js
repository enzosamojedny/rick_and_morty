const data = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  const found = data.find(
    (user) => user.email === email && user.password === password
  );
  const access = found ? true : false;
  res.status(200).json({ access: access });
};
//hacer el logout aca

module.exports = login;
