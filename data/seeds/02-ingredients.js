exports.seed = function (knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("ingredients").insert([
    { item_id: 1, ingredient_name: "bread" },
    { item_id: 2, ingredient_name: "patty" },
    { item_id: 3, ingredient_name: "pepper" },
    { item_id: 4, ingredient_name: "mayo" },
    { item_id: 5, ingredient_name: "salt" },
  ]);
};
