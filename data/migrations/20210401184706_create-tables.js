exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name", 128).notNullable();
      tbl.timestamp(false, true);
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name", 250);
    })
    .createTable("steps", (tbl) => {
      tbl.increments();
      tbl.integer("step_number");
      tbl.string("step", 250);
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("recipes_ingredients", (tbl) => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("ingredients.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("quantity").unsigned();
    });
};

exports.down = function (knex) {
  return knex.scheme
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
