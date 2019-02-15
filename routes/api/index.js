const path = require("path");
const router = require("express").Router();
const productRoutes = require("./products");
const cartRoutes = require("./cart");


// Book routes
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);

// Google Routes
// router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
