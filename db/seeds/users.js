
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'joe@vueme.com',
          password: '12345',
          phone: '1231231234',
          street_address: '123 Main St',
          city: 'Phoenix',
          state: 'Arizona',
          zip: '85043',
          is_verified: 'false',
          avatar: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_80%2Cw_300/MTE4MDAzNDEwNzc3ODM1MDIy/will-ferrell-9542601-1-402.jpg',
        },
        {
          email: 'noel@vueme.com',
          password: '12345',
          phone: '1231231234',
          street_address: '456 Broad St',
          city: 'Phoenix',
          state: 'Arizona',
          zip: '85043',
          is_verified: 'false',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Jimmy_Fallon%2C_Montclair_Film_Festival%2C_2013.jpg/220px-Jimmy_Fallon%2C_Montclair_Film_Festival%2C_2013.jpg',
        },
      ]);
    });
};
