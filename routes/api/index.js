const router = require("express").Router();
const userRoutes = require("./users");
const articleRoutes = require("./articles");
const chatRoutes = require("./chats");
const fileRoutes = require("./file");

router.use("/users", userRoutes);
router.use("/articles", articleRoutes);
router.use("/chats", chatRoutes);
router.use("/upload", fileRoutes);

module.exports = router;
