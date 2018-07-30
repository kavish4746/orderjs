var food = require('../model/dish_model')
var express = require('express');
var router = express.Router();

// router.get('/', function (req, res, next) {
// food.(function (err, rows) {
//              if (err) {
//                  res.json(err);
//          }
//          else {
//                         res.json(rows);
//          }
    
//         });
    
//  });
  
 router.get('/:cusine_name', function (req, res, next) {
   food.getallfoodByCat(req.params.cusine_name, function (err, rows) { 
       if (err) {
         res.json(err);
       }
       else {
         res.json(rows);
       }
   });
 });
module.exports = router;    