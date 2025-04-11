# Prototypal Inheritance

## Extending Objects in JavaScript

Prototypal inheritance allows objects to inherit properties and methods from other objects, enabling code reuse without duplication.

## [[Prototype]]

- Objects have a hidden `[[Prototype]]` property that references another object (prototype) or is `null`.
- If a property is not found in an object, JavaScript looks for it in its prototype chain.

### Setting the Prototype

One way to set a prototype is using `__proto__`:

```js
let animal = { eats: true };
let rabbit = { jumps: true };

rabbit.__proto__ = animal; // rabbit inherits from animal
```

- Property lookup follows the chain: `rabbit.eats` → found in `animal`.
- The prototype chain can extend further:

```js
let longEar = { earLength: 10, __proto__: rabbit };
longEar.walk(); // Inherited from animal
```

### Prototype Limitations

1. **No circular references** – JavaScript throws an error if `__proto__` forms a cycle.
2. **Only one prototype per object** – Multiple inheritance is not possible.
3. **`__proto__` vs. `[[Prototype]]`** – `__proto__` is a getter/setter for `[[Prototype]]` and is outdated; use `Object.getPrototypeOf` / `Object.setPrototypeOf` instead.

## Writing Does Not Use Prototype

- Accessor properties use getters/setters, not prototype properties.
- Example:

```js
let user = {
  name: "John",
  surname: "Smith",
  get fullName() { return `${this.name} ${this.surname}`; },
  set fullName(value) { [this.name, this.surname] = value.split(" "); }
};

let admin = { __proto__: user, isAdmin: true };
admin.fullName = "Alice Cooper"; // Changes admin, not user
```

## The Value of `this`

- `this` always refers to the calling object, not the prototype.
- Example:

```js
let animal = {
  sleep() { this.isSleeping = true; }
};

let rabbit = { __proto__: animal };
rabbit.sleep();
console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined
```

## Iterating Over Properties

### `for…in` Loop

- Iterates over both own and inherited properties:

```js
for (let prop in rabbit) console.log(prop); // jumps, eats
```

### Filtering Own Properties

- Use `hasOwnProperty` to check if a property belongs directly to an object:

```js
for (let prop in rabbit) {
  if (rabbit.hasOwnProperty(prop)) console.log(`Own: ${prop}`);
  else console.log(`Inherited: ${prop}`);
}
```

### Methods Ignoring Prototypes

- Methods like `Object.keys()` and `Object.values()` return only an object’s own properties, ignoring inherited ones.

