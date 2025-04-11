#F.prototype
Remember, new objects can be created with a constructor function, like new F().

If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.
Please note that F.prototype here means a regular property named "prototype" on F. It sounds something similar to the term “prototype”, but here we really mean a regular property with this name.

let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true

Setting Rabbit.prototype = animal literally states the following: “When a new Rabbit is created, assign its [[Prototype]] to animal”.

On the picture, "prototype" is a horizontal arrow, meaning a regular property, and [[Prototype]] is vertical, meaning the inheritance of rabbit from animal.

!F.prototype only used at new F time
F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object.

If, after the creation, F.prototype property changes (F.prototype = <another object>), then new objects created by new F will have another object as [[Prototype]], but already existing objects keep the old one.

#Default F.prototype, constructor property

Every function has the "prototype" property even if we don’t supply it.

The default "prototype" is an object with the only property constructor that points back to the function itself.

Like this:

function Rabbit() {}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

We can check it:

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true

Naturally, if we do nothing, the constructor property is available to all rabbits through [[Prototype]]:

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (from prototype)

We can use constructor property to create a new object using the same constructor as the existing one.

Like here:

function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");


In particular, if we replace the default prototype as a whole, then there will be no "constructor" in it.

For instance:

function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false

The "prototype" property only has such a special effect when set on a constructor function, and invoked with new.
On regular objects the prototype is nothing special:

let user = {
  name: "John",
  prototype: "Bla-bla" // no magic at all
};

#Native prototypes
The "prototype" property is widely used by the core of JavaScript itself. All built-in constructor functions use it.

First we’ll look at the details, and then how to use it for adding new capabilities to built-in objects.

Object.prototype

let obj = {};
alert( obj ); // "[object Object]" ?
…But the short notation obj = {} is the same as obj = new Object(), where Object is a built-in object constructor function, with its own prototype referencing a huge object with toString and other methods.

When new Object() is called (or a literal object {...} is created), the [[Prototype]] of it is set to Object.prototype according to the rule that we discussed in the previous chapter:

So then when obj.toString() is called the method is taken from Object.prototype.

let obj = {};

alert(obj.__proto__ === Object.prototype); // true

alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true

alert(Object.prototype.__proto__); // null

Other built-in prototypes

Other built-in objects such as Array, Date, Function and others also keep methods in prototypes.

For instance, when we create an array [1, 2, 3], the default new Array() constructor is used internally. So Array.prototype becomes its prototype and provides methods. That’s very memory-efficient.

By specification, all of the built-in prototypes have Object.prototype on the top. That’s why some people say that “everything inherits from objects”

let arr = [1, 2, 3];

// it inherits from Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
alert( arr.__proto__.__proto__.__proto__ ); // null

As we’ve seen before, Object.prototype has toString as well, but Array.prototype is closer in the chain, so the array variant is used.

Even functions – they are objects of a built-in Function constructor, and their methods (call/apply and others) are taken from Function.prototype. Functions have their own toString too.

function f() {}

alert(f.__proto__ == Function.prototype); // true
alert(f.__proto__.__proto__ == Object.prototype); // true, inherit from objects


Primitives

As we remember, they are not objects. But if we try to access their properties, temporary wrapper objects are created using built-in constructors String, Number and Boolean. They provide the methods and disappear.


These objects are created invisibly to us and most engines optimize them out, but the specification describes it exactly this way. Methods of these objects also reside in prototypes, available as String.prototype, Number.prototype and Boolean.prototype.

Values null and undefined have no object wrappers
Special values null and undefined stand apart. They have no object wrappers, so methods and properties are not available for them. And there are no corresponding prototypes either.


Changing native prototypes

Native prototypes can be modified. For instance, if we add a method to String.prototype, it becomes available to all strings:

String.prototype.show = function() {
  alert(this);
};

"BOOM!".show(); // BOOM!

Borrowing from prototypes

In the chapter Decorators and forwarding, call/apply we talked about method borrowing.

That’s when we take a method from one object and copy it into another.

Some methods of native prototypes are often borrowed.

For instance, if we’re making an array-like object, we may want to copy some Array methods to it.

E.g.

let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

alert( obj.join(',') ); // Hello,world!

It works because the internal algorithm of the built-in join method only cares about the correct indexes and the length property. It doesn’t check if the object is indeed an array. Many built-in methods are like that.

Another possibility is to inherit by setting obj.__proto__ to Array.prototype, so all Array methods are automatically available in obj.

But that’s impossible if obj already inherits from another object. Remember, we only can inherit from one object at a time.

Borrowing methods is flexible, it allows to mix functionalities from different objects if needed.


#Prototype methods, objects without __proto__

we mentioned that there are modern methods to setup a prototype.

Setting or reading the prototype with obj.__proto__ is considered outdated and somewhat deprecated

To create an object with the given prototype, use:

literal syntax: { __proto__: ... }, allows to specify multiple properties
or Object.create(proto[, descriptors]), allows to specify property descriptors.
The Object.create provides an easy way to shallow-copy an object with all descriptors:

let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
Modern methods to get/set the prototype are:

Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj (same as __proto__ getter).
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto (same as __proto__ setter).
Getting/setting the prototype using the built-in __proto__ getter/setter isn’t recommended, it’s now in the Annex B of the specification.

We also covered prototype-less objects, created with Object.create(null) or {__proto__: null}.

These objects are used as dictionaries, to store any (possibly user-generated) keys.

Normally, objects inherit built-in methods and __proto__ getter/setter from Object.prototype, making corresponding keys “occupied” and potentially causing side effects. With null prototype, objects are truly empty.

