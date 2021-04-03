exports.seed = function (knex) {
  return knex("recipes").insert([
    { rec_id: 1, recipe_name: "Spaghetti Bolognese" },
    { rec_id: 2, recipe_name: "Fettucini Alfredo" },
    { rec_id: 3, recipe_name: "Penne Arrabiata" },
  ]);
};
