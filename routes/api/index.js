const router = require("express").Router();

//Home page
router.get("/", (req, res) => {
  res.render("options");
});

//API Routes
router.use("/this-month", require("./thisMonth"));
router.use("/today", require("./today"));

module.exports = router;
