// requires prototype.typeName.func.js

Function.prototype.inheritsFrom = function(parentClassOrObject) {
  if (parentClassOrObject instanceof Object) {
    if (typeof this.prototype.inherits == "undefined") {
      this.prototype.inherits = [];
    }
    
    if (!(parentClassOrObject.typeName() in this.prototype.inherits)) {
      // alert(this.typeName() + " Prototype inheritance from " + parentClassOrObject.typeName());
      var inheritanceTarget = null;
      
      if (parentClassOrObject instanceof Function) {
        inheritanceTarget = parentClassOrObject.prototype;
      } else {
        inheritanceTarget = parentClassOrObject;
      }
      
      for (var parentPMemberIndex in inheritanceTarget) {
        // avoid inheritance of certain elements from the parent
        switch (parentPMemberIndex) {
          case "inherits":
          case "inheritsFrom":
          case "typeName":
          case "constructor":
            continue;
          default:
            this.prototype[parentPMemberIndex] = inheritanceTarget[parentPMemberIndex];
        }
      }
      
      this.prototype.inherits[parentClassOrObject.typeName()] = inheritanceTarget;
    }
  }
};

Object.prototype.inheritsFrom = function(parentClassOrObject) {
  if (parentClassOrObject instanceof Object) {
    this.constructor.inheritsFrom(parentClassOrObject);
    // alert(this.typeName() + " Instance inheritance from " + parentClassOrObject.typeName());
    
    if (parentClassOrObject instanceof Function) {
      parentClassOrObject.apply(this, Array.prototype.slice.apply(arguments, [1]));
    }
  }
};
