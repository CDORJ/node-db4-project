exports.seed = function (knex) {
  return knex("steps").insert([
    { step_id: 1, step: "thaw patty", step_number: 1, rec_id: 1 },
    { step_id: 2, step: "make patty", step_number: 2, rec_id: 1 },
    { step_id: 3, step: "fry bologna", step_number: 1, rec_id: 2 },
    { step_id: 4, step: "make sandwich", step_number: 2, rec_id: 2 },
    { step_id: 5, step: "open", step_number: 1, rec_id: 3 },
    { step_id: 6, step: "drink", step_number: 2, rec_id: 3 },
  ]);
};
