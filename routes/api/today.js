const router = require("express").Router();
const getData = require("../../controllers/getData");
const converter = require("../../controllers/converter.js");
//city today
router.get("/:city", async (req, res) => {
  try {
    const data = await getData();
    console.log(data);
    const parced = converter(data);
    console.log(parced);
    res.status(200).json({
      type: "Day",
      message: req.params.city,
      ...parced,
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
