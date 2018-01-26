Function.prototype.typeName = function() {
  return this.toString().match(/function\s*(\S*)\s*\(/)[1];
};

Object.prototype.typeName = function() {
 console.log(this.constructor.typeName());
  return this.constructor.typeName(); 
  
};
