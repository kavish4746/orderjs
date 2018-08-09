var db=require('../dbconnection');

var past={

getallpastbill:function(user_id,callback)
{
        console.log(user_id);
    return db.query('select * from bill_tbl where user_id=?',[user_id],callback);
},
getallpastbillDetail:function(fk_bill_id,callback)
{
    return db.query('select bd.*,d.* from billdetail bd,dish_tbl d where bd.fk_dish_id=d.dish_id and fk_bill_id=?',[fk_bill_id],callback);
}
}
module.exports=past;