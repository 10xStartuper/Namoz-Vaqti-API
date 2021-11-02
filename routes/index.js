const router = require("express").Router();

//Home page
router.get("/", (req, res) => {
  res.render("index");
});

//API Route
router.use("/api", require("./api/"));

module.exports = router;
