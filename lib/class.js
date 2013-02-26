var argslicer = Array.prototype.slice; // fancy pants tricks

function BasicObject() {}

BasicObject.prototype = {
  callSuper: function(methodName) {
    throw("No such method: " + methodName);
  },

  inspect: function() {
    return JSON.stringify(this);
  }
};

BasicObject.mixin = function(mixin, obj) {
  for (var prop in mixin) {
    if (!obj.hasOwnProperty(prop)) { obj[prop] = mixin[prop]; }
  }
  return obj;
};

// Class definition
var Class = exports.Class = {
  create: function() {
    if (arguments.length == 1) {
      return this._createWithParent(BasicObject, arguments[0]);
    } else if (arguments.length == 2) {
      return this._createWithParent(arguments[0], arguments[1]);
    }
  },

  // Using _ is just a convention to denote a private method
  _createWithParent: function(parent, classDef) {
    // Start creating prototype for this new Class using definition
    var clonedClassProto = BasicObject.mixin(classDef, {});
    // Include parent prototype methods not already defined in new definition
    BasicObject.mixin(parent.prototype, clonedClassProto);

    // Support super via recursion
    clonedClassProto.callSuper = function(methodName) {
      // We're checking parent.prototype because a Class definition is
      // added via its prototype
      var parentProto = parent.prototype;
      if (parentProto.hasOwnProperty(methodName)) {
        return parentProto[methodName].apply(this, argslicer.call(arguments, 1));
      } else {
        return parentProto.callSuper.apply(parentProto, argslicer.call(arguments));
      }
    };

    // aka function F() {}
    function constructor() {
      (this.initialize || function () {}).apply(this, argslicer.call(arguments));
    }

    // aka F.prototype = o
    constructor.prototype = clonedClassProto;

    return constructor;
  }
};

