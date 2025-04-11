**JavaScript Classes Summary**

### Class Basic Syntax
A class in JavaScript is a blueprint for creating objects, encapsulating data and behavior in one construct.

```javascript
class MyClass {
  constructor() { ... }
  method1() { ... }
  method2() { ... }
}
```
- `constructor()` initializes an object.
- Methods are defined without commas between them.
- Instantiate using `new MyClass()`.

### What is a Class?
- In JavaScript, a class is a special type of function.
- Methods are stored in `User.prototype`, enabling prototype-based inheritance.
- Classes are not just syntactic sugar; they enforce strict mode and must be called with `new`.

```javascript
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}
alert(typeof User); // "function"
```

### Class Expressions
- Classes can be assigned to variables or created dynamically.

```javascript
let User = class MyClass {
  sayHi() { alert(MyClass); }
};
```

### Getters and Setters
- Allows defining computed properties.

```javascript
class User {
  constructor(name) { this.name = name; }
  get name() { return this._name; }
  set name(value) {
    if (value.length < 4) alert("Name too short.");
    this._name = value;
  }
}
```

### Computed Property Names
```javascript
class User {
  ['say' + 'Hi']() { alert("Hello"); }
}
```

### Class Fields
- Fields are assigned to each instance, not the prototype.

```javascript
class User {
  name = "John";
  sayHi() { alert(`Hello, ${this.name}!`); }
}
```

### Inheritance with `extends`
```javascript
class Animal {
  constructor(name) { this.name = name; }
}
class Rabbit extends Animal {
  constructor(name) { super(name); }
}
```

### Overriding Methods
- `super.method()` calls the parent method.
- `super()` must be used in derived constructors before `this`.

```javascript
class Rabbit extends Animal {
  stop() {
    super.stop();
    alert(`${this.name} hides!`);
  }
}
```

### Super Internals
- Methods use prototype lookup (`super.method()` calls `[[HomeObject]]`).
- Class fields are initialized before constructors.

```javascript
class Animal {
  name = "animal";
  constructor() { alert(this.name); }
}
class Rabbit extends Animal {
  name = "rabbit";
}
new Rabbit(); // Outputs "animal" due to field initialization order.
```

This summary captures the essentials of JavaScript classes for efficient learning and recall!

