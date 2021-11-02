const router = require("express").Router();

//city today
router.get("/:city", (req, res) => {
  res.status(200).json({ type: "Day", message: req.params.city });
});

module.exports = router;
