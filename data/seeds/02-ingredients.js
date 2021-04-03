exports.seed = function (knex) {
  return knex("ingredients").insert([
    { ing_id: 1, ingredient_name: "water" },
    { ing_id: 2, ingredient_name: "pasta" },
    { ing_id: 3, ingredient_name: "tomato sauce" },
    { ing_id: 4, ingredient_name: "cumin" },
    { ing_id: 5, ingredient_name: "garlic" },
  ]);
};
