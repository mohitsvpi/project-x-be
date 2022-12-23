const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
   const token = req.headers.token.split(" ")[1];

   if (!token) {
      return res.status(403).json({ message: "Token does not exist" });
   }

   try {
      const obj = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = obj;
      return next();
   } catch (err) {
      return res.status(403).json({ message: "Expired or Invalid token" });
   }
};

module.exports = authenticate;