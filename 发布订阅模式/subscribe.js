//定义售楼处
var salesOffices={};

//缓存列表，存放回调函数
salesOffices.clientList=[];

//增加订阅者
salesOffices.listen=function(fn){
    this.clientList.push(fn);
}

//发布消息
salesOffices.trigger=function(){
  for(var i=0,fn;fn=this.clientList[i++];){
    fn.apply(this,arguments);
  }
}


/*********************
 * 测试测试测试测试测试测
 */
var fn1=function(price, squareMeter){
   console.log('价格1= ' + price);
   console.log('squareMeter1= ' + squareMeter);
}
salesOffices.listen( fn1);

var fn2=function(price, squareMeter){
   console.log('价格2= ' + price);
   console.log('squareMeter2= ' + squareMeter);
}

salesOffices.listen( fn2);

salesOffices.trigger(2000000, 88); 
salesOffices.trigger(3000000, 99); 

