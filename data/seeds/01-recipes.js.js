exports.seed = function (knex) {
  return knex("recipes").insert([
    { id: 1, recipe_name: "Spaghetti Bolognese" },
    { id: 2, recipe_name: "Fettucini Alfredo" },
    { id: 3, recipe_name: "Penne Arrabiata" },
  ]);
};
