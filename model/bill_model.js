var db=require('../dbconnection');
var bill={
    
addbill:function(item,callback)
{
    var d=new Date();
    return db.query('insert into bill_tbl(bill_amt,date,user_id) values(?,?,?)',[item.bill_amt,d,item.user_id],callback);
},
getallbill:function(callback)
{
    return db.query('select * from bill_tbl',callback)
}
}
module.exports=bill;