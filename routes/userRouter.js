const express = require("express");
const { signIn, signUp } = require("../controllers/userController");

const router = express.Router();

router.post("/register", signUp);
router.post("/login", signIn);

// router.get("/", fetchAllPosts);
// router.get("/:id", checkData(User), fetchUser);
// router.post("/", multerConfig.single("avatar"), addUser);

module.exports = router;
