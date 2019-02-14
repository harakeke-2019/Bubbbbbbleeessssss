
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first: 'Jason', last: 'Ben'},
        {id: 2, first: 'Fetu', last: 'Micah'},
        {id: 3, first: 'Riki', last: 'Jenny'}
      ]);
    });
};
