const router = require("express").Router();

//city today
router.get("/:city", (req, res) => {
  res.status(200).json({ message: req.params.city });
});

module.exports = router;
