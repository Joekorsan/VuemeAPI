
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'joe@vueme.com',
          first_name: 'Joe',
          last_name:'Sando',
          password: '12345',
          google_id:'1134234dnfjnwof',
          logged:false,
          google_image:'imageurl'
        },
        {
          email: 'noel@vueme.com',
          first_name: 'Hassan',
          last_name:'Khan',
          password: 'hk1234',
          google_id:'fiuiewb7734',
          logged:false,
          google_image:'imageurl'
        },
      ]);
    });
};
