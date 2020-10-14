
const router = require("express").Router();
const userRoutes = require("./users");
const articleRoutes = require("./articles");


//User routes
router.use("/users", userRoutes);

//Article Routes
router.use("/articles", articleRoutes);

router.use("/articles", articleRoutes)

module.exports = router;
