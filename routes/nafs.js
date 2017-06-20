var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Naf = require('../models/Naf.js');


/* GET /nafs/codes-naf/autocomplete */
router.get('/codes-naf/autocomplete', function (req, res, next) {

    var libelleNaf = req.query.libelle;
    var regexp = new RegExp(libelleNaf, 'i');

    Naf.find({ $or: [{CodeNAF: regexp}, {Intitule:regexp }]}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;