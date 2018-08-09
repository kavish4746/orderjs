var past = require('../model/past_order')
var express = require('express');
var router = express.Router();
// router.post('/', function (req, res, next) {
//     bill.addbill(req.body, function (err, rows) {
  
//       if (err) {
//         res.json(err);
//       }
//       else {
//         res.json(rows);
//       }
//     });
//    });
   router.get('/:user_id?', function (req, res, next) {
     console.log("hello");
    past.getallpastbill(req.params.user_id,function (err, rows) {
      console.log('heloo1');
                 if (err) {
                     res.json(err);
             }
             else
              {
              
                            res.json(rows);
             }
        
            });
        
     });
  module.exports = router;