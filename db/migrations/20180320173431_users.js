exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', function(table){
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
    table.boolean('logged');
    table.string('google_id');
    table.string('google_image');
    table.string('email');
    table.string('password');
    table.timestamps(true , true);


    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
