const db = require("../data/db-config.js");

function getRecipe() {
  return db("recipes");
}

async function getRecipeById(rec_id) {
  console.log("1");

  const recipe = await db
    .select(
      "r.recipe_name",
      "st.step",
      "st.step_number",
      "st_ing.quantity",
      "ing.item_id",
      "ing.ingredient_name"
    )
    .from("recipes as r")
    .where({ "r.recipe_id": rec_id })
    .leftJoin("steps as st", "st.rec_id", "r.recipe_id")
    .groupBy("st.step_number")
    .orderBy("st.step_number")
    .groupBy("st.step")
    .leftJoin("steps_ingredients as st_ing", "st_ing.step_ing_id", "st.step_id")
    .leftJoin("ingredients as ing", "ing.ing_id", "st_ing.ingredient_id")
    .groupBy("ing.item_id");

  console.log(recipe, "recipe");
  const ingredientArr = recipe.map((ing) => {
    return {
      ingredient_id: ing.ing_id,
      ingredients: ing.ingredient_name,
      quantity: ing.quantity,
    };
    return ingredientArr;
  });
  const newObj = {
    rec_id: recipe[0].recipe_id,
    recipe_name: recipe[0].recipe_name,
    steps: recipe.map((step) => {
      return {
        step_id: step.step_id,
        step_number: step.step_number,
        step_instructions: step.step,
        ingredients: ingredientArr,
      };
    }),
  };
  return newObj;
}

module.exports = {
  getRecipe,
  getRecipeById,
};
