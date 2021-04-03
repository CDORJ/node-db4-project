exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("rec_id");
      tbl.string("recipe_name", 128).notNullable();
      tbl.time("created_at", { precision: 6 });
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ing_id");
      tbl.string("ingredient_name", 250);
    })
    .createTable("steps", (tbl) => {
      tbl.increments("ste_id");
      tbl.integer("step_number");
      tbl.string("step", 250);
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("recipes.rec_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("steps_ingredients", (tbl) => {
      tbl.increments();
      tbl
        .integer("step_id")
        .notNullable()
        .unsigned()
        .references("steps.ste_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("ingredients.ing_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("quantity").unsigned();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
