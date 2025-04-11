# The old "var"

## "var" has no block scope
- Variables declared with `var` are function-scoped or global-scoped and are visible through blocks.

## "var" tolerates redeclarations
- Redeclaring a variable with `var` does not cause an error; it is simply ignored if the variable already exists.

## "var" variables can be declared below their use (Hoisting)
- All `var` declarations are hoisted (moved to the top of their function or global scope) but not their assignments.

```javascript
function sayHi() {
  var phrase; // Declaration is hoisted
  alert(phrase); // undefined
  phrase = "Hello"; // Assignment happens here
}

sayHi();
```

---

# IIFE (Immediately-Invoked Function Expressions)
- IIFE is a function that executes immediately after its definition.
- The function is wrapped in parentheses to make it an expression.

```javascript
(function() {
  var message = "Hello";
  alert(message); // Hello
})();
```

---

# Global Object
- In browsers, the global object is `window`; in Node.js, it is `global`.
- The standardized global object across environments is `globalThis`.
- Properties of the global object can be accessed directly:

```javascript
alert("Hello");
// Same as:
window.alert("Hello");
```

## `var` and Global Object
- Variables declared with `var` become properties of the global object, while `let` and `const` do not.

```javascript
var gVar = 5;
alert(window.gVar); // 5

let gLet = 5;
alert(window.gLet); // undefined
```

## Global Variables Best Practice
- Instead of relying on `var`-based global properties, explicitly attach important values to the global object:

```javascript
window.currentUser = { name: "John" };
alert(currentUser.name); // John
alert(window.currentUser.name); // John
```

- Using local variables and function parameters instead of global variables results in better code design, fewer errors, and easier testing.

---

# Using Global Object for Polyfills
- The global object can be used to define missing functionality in older browsers:

```javascript
if (!window.Promise) {
  window.Promise = ... // Custom implementation
}
```

