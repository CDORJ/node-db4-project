exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name").notNullable().unique();
      tbl.timestamp(false, true);
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name", 128).notNullable().unique();
    })
    .createTable("steps", (tbl) => {
      tbl.increments();
      tbl.integer("step_number").notNullable();
      tbl.string("instructions", 250).notNullable();
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("step_ingredients", (tbl) => {
      tbl.increments();
      tbl
        .integer("step_id")
        .notNullable()
        .unsigned()
        .references("steps.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("ingredients.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.scheme
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
