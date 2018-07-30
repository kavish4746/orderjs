var db=require('../dbconnection');

var foodbill={

getallcusine:function(callback)
{
    return db.query('select * from cusine_tbl ',callback);
}
}
module.exports=foodbill;