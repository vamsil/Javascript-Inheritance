Function.prototype.typeName = function() {
  return this.toString().match(/function\s*(\S*)\s*\(/)[1];
}

Object.prototype.typeName = function() {
  return this.constructor.typeName();
}
