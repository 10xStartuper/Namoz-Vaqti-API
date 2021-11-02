const router = require("express").Router();
const getData = require("../../controllers/getData");
//city today
router.get("/:city", async (req, res) => {
  try {
    data = await getData();
    res.status(200).json({
      type: "Day",
      message: req.params.city,
      data: `${data}`,
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
