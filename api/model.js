const db = require("../data/db-config.js");

function getRecipe() {
  return db("recipes");
}

async function getRecipeById(recipe_id) {
  console.log("1");
  // return db('recipes as r').where({"r.recipe_id": recipe_id}).first();
  const recipe = await db
    .select(
      "r.recipe_name",
      "st.step",
      "st.step_number",
      "st_ing.quantity",
      "ing.ing_id",
      "ing.ingredient_name"
    )
    .from("recipes as r")
    .where({ "r.rec_id": recipe_id })
    .leftJoin("steps as st", "st.recipe_id", "r.rec_id")
    .groupBy("st.step_number")
    .orderBy("st.step_number")
    .groupBy("st.step")
    .leftJoin("steps_ingredients as st_ing", "st_ing.id", "st.ste_id")
    .leftJoin("ingredients as ing", "ing.ing_id", "st_ing.ingredient_id")
    .groupBy("ing.ing_id");

  console.log(recipe, "recipe");
  const ingArr = recipe.map((ing) => {
    return {
      ingredient_id: ing.ing_id,
      ingredients: ing.ingredient_name,
      quantity: ing.quantity,
    };
    return ingArr;
  });
  const newObj = {
    recipe_id: recipe[0].rec_id,
    recipe_name: recipe[0].recipe_name,
    steps: recipe.map((step) => {
      return {
        step_id: step.ste_id,
        step_number: step.step_number,
        step_instructions: step.step,
        ingredients: ingArr,
      };
    }),
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
