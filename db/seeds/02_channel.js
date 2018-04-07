
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('channel').del()
    .then(function () {
      // Inserts seed entries
      return knex('channel').insert([
        {
          host_id: 1,
          friend_id:2,
          video_url:'https://www.youtube.com/watch?v=ggVsXljT0MI&list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9&index=2'
        }

      ]);
    });
};
