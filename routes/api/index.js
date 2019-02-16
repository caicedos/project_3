const path = require("path");
const router = require("express").Router();
const productRoutes = require("./products");
const cartRoutes = require("./cart");
const userRoutes = require("./user");


router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/user", userRoutes);



// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
