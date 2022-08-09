const router = require("express").Router();
const commentRoutes = require('./comment_routes');
const userRoutes = require("./user_routes");
const postRoutes = require("./post_routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;