# Arrow Functions Revisited

## Why Use Arrow Functions?
- Useful for small functions executed elsewhere, e.g.:
  - `arr.forEach(func)` – `func` runs for each array item.
  - `setTimeout(func)` – `func` runs after a delay.
- Helps maintain the current context (`this`).

## Arrow Functions Have No `this`
- In regular functions, `this` depends on how the function is called.
- Arrow functions don’t have `this`; they inherit it from their surrounding scope.

### Example:
```js
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach(student => {
      alert(this.title + ': ' + student);
    });
  }
};

group.showList(); // Works correctly
```
- If a regular function was used inside `forEach`, `this.title` would be `undefined`.

## Arrow Functions Can't Be Used as Constructors
- Since they don’t have `this`, they can’t be used with `new`.

## Arrow Functions vs `bind`
- `.bind(this)` creates a bound function.
- Arrow functions simply don’t have `this` and inherit it from the surrounding scope.

## Arrow Functions Have No `arguments`
- Regular functions have an `arguments` object.
- Arrow functions don’t; they inherit it from their enclosing function.

### Example:
```js
function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // "Hello, John" after 2 seconds
```
- Without an arrow function, extra variables (`args` and `ctx`) would be needed.

## Key Takeaways
- 

