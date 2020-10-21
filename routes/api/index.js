
const fileRoutes = require("./file");
const router = require('express').Router();
const userRoutes = require('./users');
const articleRoutes = require('./articles')
const lessonRoutes = require('./lessons')
const commentRoutes = require('./comments')

router.use('/users', userRoutes);
router.use('/articles', articleRoutes);
router.use('/lessons', lessonRoutes);
router.use('/comments', commentRoutes)
router.use("/files", fileRoutes);


module.exports = router;
