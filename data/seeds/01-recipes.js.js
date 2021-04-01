exports.seed = function (knex) {
  return knex("recipes").insert([
    { id: 1, name: "Spaghetti Bolognese" },
    { id: 2, name: "Fettucini Alfredo" },
    { id: 3, name: "Penne Arrabiata" },
  ]);
};
