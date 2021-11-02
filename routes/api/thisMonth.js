const router = require("express").Router();

//city this month
router.get("/:city", (req, res) => {
  res.status(200).json({ type: "Month", message: req.params.city });
});

module.exports = router;
