// Design the data model for a recipe book application and use Knex migrations and seeding functionality to build a SQLite database based on the model and seed it with test data. Then, build an endpoint to fetch a recipe by its id.

// The requirements for the system as stated by the client are:

// Recipes have a name that must be unique (e.g. "Spaghetti Bolognese").
// Recipes contain an ordered list of steps (e.g. "Preheat the oven", "Roast the squash").
// Each step contains some instructions (e.g. "Preheat the oven") and belongs to a single recipe.
// Steps might involve any number of ingredients (zero, one or more).
// If a step involves one or more ingredients, each ingredient is used in a certain quantity.
// Ingredients can be used in different recipes, in different quantities.

// recipes:

// *RECIPE* has ---unique--- *NAME* ("Spaghetti Bolognese"),
// ^^^ and *RECIPE* has an *ORDERED LIST OF **STEP(S)***

// Each *STEP* belongs to a specific *RECIPE*

// *INGREDIENTS* must have a corresponding *ID* to *STEP*

// EACH *INGREDIENT* HAS A *QUANTITY*

// *INGREDIENTS* CAN BE USED IN DIFFERENT *RECIPE(S)*, in different *QUANTITIES*

// {
//     "recipe_id" : 1,
//     "recipe_name": "Spaghetti Bolognese",
//     "created_at": "2021-01-01 08:23:19.120",
//     "steps": [
//       {
//         "step_id": 11,
//         "step_number": 1,
//         "step_instructions": "Put a large saucepan on a medium heat",
//         "ingredients": []
//       },
//       {
//         "step_id": 12,
//         "step_number": 2,
//         "step_instructions": "Add 1 tbsp olive oil",
//         "ingredients": [
//           { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
//         ]
//       },
//     ]
//   }

exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 80).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("item_id");
      tbl.string("ingredient_name", 80);
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.integer("step_number").notNullable();
      tbl.string("step", 250).notNullable();
      tbl
        .integer("rec_id")
        .notNullable()
        .unsigned()
        .references("recipes.recipe_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("steps_ingredients", (tbl) => {
      tbl.increments();
      tbl
        .integer("step_ing_id")
        .notNullable()
        .unsigned()
        .references("steps.step_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("ingredients.item_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("quantity").unsigned();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
