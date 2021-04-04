exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes").insert([
    { recipe_id: 1, recipe_name: "veggie patty" },
    { recipe_id: 2, recipe_name: "fried bologna" },
    { recipe_id: 3, recipe_name: "soylent" },
  ]);
};
