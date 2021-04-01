exports.seed = function (knex) {
  return knex("ingredients").insert([
    { id: 1, name: "water" },
    { id: 2, name: "pasta" },
    { id: 3, name: "tomato sauce" },
    { id: 4, name: "cumin" },
    { id: 5, name: "garlic" },
  ]);
};
