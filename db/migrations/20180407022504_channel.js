
exports.up = function(knex, Promise) {

  return knex.schema.createTable('channel', function(table){
    table.increments('id');
    table.integer('host_id')
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .index();
    table.integer('friend_id')
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .index();
    table.boolean('is_active').defaultTo(true);
    table.string('video_url')
    table.timestamps(true, true);


    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('channel');
};
