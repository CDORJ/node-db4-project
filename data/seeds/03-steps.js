exports.seed = function (knex) {
  return knex("steps").insert([
    { ste_id: 1, step: "cook it", step_number: 1, recipe_id: 1 },
    { ste_id: 2, step: "eat it", step_number: 2, recipe_id: 1 },
    { ste_id: 3, step: "cook it", step_number: 1, recipe_id: 2 },
    { ste_id: 4, step: "eat it", step_number: 2, recipe_id: 2 },
    { ste_id: 5, step: "cook it", step_number: 1, recipe_id: 3 },
    { ste_id: 6, step: "eat it", step_number: 2, recipe_id: 3 },
  ]);
};
