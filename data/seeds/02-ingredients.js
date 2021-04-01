exports.seed = function (knex) {
  return knex("ingredients").insert([
    { id: 1, ingredient_name: "water" },
    { id: 2, ingredient_name: "pasta" },
    { id: 3, ingredient_name: "tomato sauce" },
    { id: 4, ingredient_name: "cumin" },
    { id: 5, ingredient_name: "garlic" },
  ]);
};
