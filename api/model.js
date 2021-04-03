const db = require("../data/db-config.js");

function getRecipe() {
  return db("recipes");
}

async function getRecipeById(recipe_id) {
  const recipe = await db("recipes as r")
    .leftJoin("steps as s", "r.rec_id", "s.recipe_id")
    .leftJoin("steps_ingredients as si", "si.step_id", "s.ste_id")
    .leftJoin("ingredients as i", "i.ing_id", "si.ingredient_id")
    .select(
      "r.rec_id",
      "r.recipe_name",
      "s.ste_id",
      "s.step_number",
      "s.step",
      "i.ing_id",
      "i.ingredient_name",
      "si.quantity"
    )
    .groupBy("s.ste_id")
    .orderBy("s.step_number")
    .where("s.recipe_id", recipe_id);

  const newObj = {
    recipe_id: recipe[0].rec_id,
    recipe_name: recipe[0].recipe_name,
    steps:
      recipe[0].step.id !== null
        ? recipe.map((step) => {
            return {
              step_id: step.ste_id,
              step_number: step.step_number,
              step_instructions: step.step,
            };
          })
        : [],
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
