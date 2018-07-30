var db=require('../dbconnection');

var foodbill={

getallfoodByCat:function(cusine_name,callback)
{
    return db.query('select c.*,d.* from cusine_tbl c,dish_tbl d where c.cusine_id=d.fk_cusine_id and c.cusine_name=?',[cusine_name],callback);
}
}
module.exports=foodbill;