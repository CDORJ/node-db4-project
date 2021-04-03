const db = require("../data/db-config.js");

function getRecipe() {
  return db("recipes");
}

async function getRecipeById(recipe_id) {
  const recipe = await db
    .select(
      "st.ste_id",
      "rs.recipe_name",
      "st.step_number",
      "st.step",
      "ing.ing_id",
      "rec_ing.quantity",
      "rs.rec_id"
    )
    .from("recipes as rs")
    .where({ "rs.rec_id": recipe_id })
    .first()
    .join("steps as st", "st.recipe_id", "rs.rec_id")
    .join("ingredients as ing", "ing.ing_id", "rec_ing.ingredient_id")
    .leftJoin(
      "recipes_ingredients as rec_ing",
      "rec_ing.recipe_id",
      "rs.rec_id"
    )
    .groupBy("st.ste_id")
    .orderBy("st.step");

  const newObj = {
    recipe_id: recipe[0].rec_id,
    recipe_name: recipe[0].recipe_name,
    // steps: recipe.map((step) => {
    //   return {
    //     step_id: step.step_id,
    //     step_number: step.step_number,
    //     instructions: step.step,
    // ingredients:
    //   step.ing.id !== null
    //     ? step.ing.map((ing) => {
    //         return {
    //           ingredient_id: ing.id,
    //         };
    //       })
    //     : [],
  };
  return newObj;
}

module.exports = {
  getRecipe,
  getRecipeById,
};

/* "recipe_id" : 1,
  "recipe_name": "Spaghetti Bolognese",
  "created_at": "2021-01-01 08:23:19.120",
  "steps": [
    {
      "step_id": 11,
      "step_number": 1,
      "step_instructions": "Put a large saucepan on a medium heat",
      "ingredients": []
    },
    {
      "step_id": 12,
      "step_number": 2,
      "step_instructions": "Add 1 tbsp olive oil",
      "ingredients": [
        { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
      ]
    },
  ]
} */
