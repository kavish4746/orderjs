var db=require('../dbconnection');

var bill={

getallbill:function(item,callback)
{
    return db.query('insert into bill_tbl values(?,?,?,?)'[item.bill_id,item.bill_amt,item.date,item.user_id],callback);
}
}
module.exports=bill;