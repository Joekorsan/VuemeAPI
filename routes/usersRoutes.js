var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users').select().then(users => res.json(users))
});

router.get('/:id', function(req, res) {
  knex('users').select().where('id', req.params.id).then(users => res.json(users))
});

router.post('/', function(req, res) {
  knex('users').insert(req.body).then(() => {
    knex('users').select().then(users => res.json(users))
  });
});

router.patch('/:id', function(req, res) {
  knex('users').update(req.body).where('id', req.params.id).then(function() {
    knex('users').select().then(users => res.json(users))
  });
});

router.delete('/:id', function(req, res) {
  knex('users').del().where('id', req.params.id).then(function() {
    knex('users').select().then(users => res.json(users))
  });
});


module.exports = router;
