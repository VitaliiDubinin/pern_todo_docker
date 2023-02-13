const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

module.exports = function(req, res, next) {
  // Get token from header
  // const token = req.header("jwt_token");
  const token = req.headers["jwt_token"];
  // const token = req.headers["origin"];
  // console.log(req.headers);
  // console.log(req.headers["origin"]);
  // console.log(req.headers["jwt_token"]);
  

  // Check if not token
  if (!token) {
  // if (!req.headers["jwt_token"]) {
    return res.status(403).json({ msg: "authorization denied" });
    // testo=JSON.stringify(req);
    // return res.status(403).json(testo);
  }
  
  // Verify token
  try {
    //it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
// }
};
