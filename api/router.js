const router = require("express").Router();
const Recipe = require("./model.js");

router.get("/", async (req, res, next) => {
  try {
    const recipe = await Recipe.getRecipe();
    res.status(200).json(recipe);
  } catch (err) {
    next(err);
  }
});

router.get("/:rec_id", async (req, res, next) => {
  const { rec_id } = req.params;
  try {
    const recipe = await Recipe.getRecipeById(rec_id);
    res.status(200).json(recipe);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
