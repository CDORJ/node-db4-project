exports.seed = function (knex) {
  return knex("recipes_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 53.5 },
    { recipe_id: 1, ingredient_id: 2, quantity: 2 },
    { recipe_id: 1, ingredient_id: 3, quantity: 40 },
    { recipe_id: 2, ingredient_id: 2, quantity: 10 },
    { recipe_id: 2, ingredient_id: 4, quantity: 25 },
    { recipe_id: 2, ingredient_id: 5, quantity: 6 },
    { recipe_id: 3, ingredient_id: 1, quantity: 7 },
    { recipe_id: 3, ingredient_id: 4, quantity: 50 },
    { recipe_id: 3, ingredient_id: 2, quantity: 3 },
  ]);
};
