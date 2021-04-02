const db = require("../data/db-config.js");

async function getRecipeById(id) {
  const recipe = await db("recipes as re")
    .where({ "re.id": id })
    .join("steps as st", "st.id", "re.id")
    .leftJoin("recipes_ingredients as ri", "ri.id", "re.id")
    .join("ingredients as in", "in.id", "ri.id")
    .select(
      "re.id",
      "re.recipe_name",
      "st.id",
      "st.step_number",
      "st.step",
      "in.id",
      "in.ingredient_name",
      "ri.quantity"
    )
    .groupBy("st.id")
    .orderBy("st.step_number");
  const recObj = {
    recipe_id: recipe[0].id,
    recipe_name: recipe[0].recipe_name,
    steps: recipe.map((step) => {
      return {
        step_id: step.step_id,
        step_number: step.step_number,
        step_instructions: step.step_instructions,
        ingredients:
          step[0].ingredients.id !== null
            ? step.map((ingredients) => {
                return {
                  ingredient_id: ingredients.id,
                  ingredient_name: ingredients.ingredient_name,
                  quantity: ingredients.quantity,
                };
              })
            : [],
      };
    }),
  };
}

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
