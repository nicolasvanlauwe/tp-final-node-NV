const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Accès refusé. Aucun token fourni." });
  }

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), "secret");
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token invalide." });
  }
};

module.exports = authMiddleware;
