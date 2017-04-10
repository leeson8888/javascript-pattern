/*
var Singleton = function( name ){
   this.name = name; 
   this.instance = null;
};
Singleton.prototype.getName = function(){ 
  console.log ( this.name );
};
Singleton.getInstance = function( name ){ 
  if ( !this.instance ){
    this.instance = new Singleton( name ); 
  }
  return this.instance; 
};
var b = Singleton.getInstance( 'sven2' );
var a = Singleton.getInstance( 'sven122' ); 

console.log ( a === b ); // true
a.getName();
b.getName();

*/

var Singleton=function(){
  this.instance=null;
}
Singleton.getInstance=function(){
  console.log(this.instance);
  console.log(this.instance instanceof Singleton);
  console.log("-------------");
  if(!this.instance){
    this.instance=new Singleton();
  }
  console.log(this.instance instanceof Singleton);
  return this.instance;
}

Singleton.getInstance();