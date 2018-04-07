var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('channel').select().then(channel => res.json(channel))
});

router.get('/:id', function(req, res) {
  knex('channel').select().where('id', req.params.id).then(channel => res.json(channel))
});

router.post('/', function(req, res) {
  knex('channel').insert(req.body).then(() => {
    knex('channel').select().then(channel => res.json(channel))
  });
});

router.patch('/:id', function(req, res) {
  knex('channel').update(req.body).where('id', req.params.id).then(function() {
    knex('channel').select().then(channel => res.json(channel))
  });
});

router.delete('/:id', function(req, res) {
  knex('channel').del().where('id', req.params.id).then(function() {
    knex('channel').select().then(channel => res.json(channel))
  });
});


module.exports = router;
