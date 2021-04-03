const router = require("express").Router();
const Food = require("./model.js");

router.get("/", async (req, res, next) => {
  try {
    const recipe = await Food.getRecipe();
    res.status(200).json(recipe);
  } catch (err) {
    next(err);
  }
});

router.get("/:recipe_id", async (req, res, next) => {
  const { recipe_id } = req.params;
  try {
    const recipe = await Food.getRecipeById(recipe_id);
    res.status(200).json(recipe);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
