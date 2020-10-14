const router = require('express').Router();
const userRoutes = require('./users');
const articleRoutes = require("./articles")

router.use('/users', userRoutes);

router.use("/articles", articleRoutes)

module.exports = router;
