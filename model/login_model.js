var db=require('../dbconnection');

var login={

getAllUserById:function(item,callback)
{
    return db.query('Select * from user_tbl where user_id=? and password=?',[item.user_id,item.password],callback);
}
}
module.exports=login;