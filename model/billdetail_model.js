var db=require('../dbconnection');
var billdetail={
    
addbillsum:function(item,callback)
{
    var value=[];
    for(let i=0;i<item.length;i++)
    {
        value[i]=[item[i].fk_bill_id,item[i].fk_dish_id,item[i].price,item[i].qty];
    }
    return db.query('insert into billdetail(fk_bill_id,fk_dish_id,price,qty) VALUES ?',[value],callback);
},
getallbilldetail:function(callback)
{
    return db.query('select * from billdetail',callback)
}
}
module.exports=billdetail;