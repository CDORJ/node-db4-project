exports.seed = function (knex) {
  return knex("steps_ingredients").insert([
    { step_id: 1, ingredient_id: 1, quantity: 53.5 },
    { step_id: 1, ingredient_id: 2, quantity: 0 },
    { step_id: 1, ingredient_id: 3, quantity: 40 },
    { step_id: 2, ingredient_id: 2, quantity: 10 },
    { step_id: 2, ingredient_id: 4, quantity: 25 },
    { step_id: 2, ingredient_id: 5, quantity: 0 },
    { step_id: 3, ingredient_id: 1, quantity: 7 },
    { step_id: 3, ingredient_id: 4, quantity: 0 },
    { step_id: 3, ingredient_id: 2, quantity: 3 },
  ]);
};
