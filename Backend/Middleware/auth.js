const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
      return res.status(401).json({ message: "No token provided" });
  }

  try {
      const actualToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;

      const decoded = jwt.verify(actualToken, "privet_Key123");
      req.user = decoded;
      next();
  } catch (error) {
      console.error("❌ Invalid token:", error.message);
      res.status(400).json({ message: "Invalid token" });
  }
};
const isAdmin = (req, res, next) => {
    const token = req.header("Authorization");
  
    if (!token) {
      console.log("❌ No token provided");
      return res.status(403).json({ message: "Access denied" });
    }
  
    try {
      const decoded = jwt.verify(token.replace("Bearer ", ""), "privet_Key123");
  
      console.log("✅ Decoded token:", decoded);
  
      if (!decoded.isAdmin) {
        console.log("❌ Not an admin");
        return res.status(403).json({ message: "Access denied" });
      }
  
      req.user = decoded;
      next();
    } catch (error) {
      console.log("❌ JWT Error:", error.message);
      return res.status(403).json({ message: "Access denied" });
    }
  };
  
  

module.exports = {authenticate,isAdmin}