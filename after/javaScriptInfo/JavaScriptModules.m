**JavaScript Modules**

### What is a Module?
A module is simply a JavaScript file. Each script is considered a module. Modules allow functionalities to be shared across files using `export` and `import`.

- `export` marks functions, variables, or classes to be accessible from other modules.
- `import` allows bringing in functionality from other modules.

Example:
```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 📁 main.js
import { sayHi } from './sayHi.js';
sayHi('John'); // Hello, John!
```

### `this` in Modules
In a module, the top-level `this` is `undefined`, unlike in non-module scripts where `this` refers to the global object.
```js
<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script>
```

---

## Export and Import Syntax
### Exporting Before Declarations
You can place `export` before functions, variables, or classes:
```js
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const MODULE_YEAR = 2015;
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

### Exporting Separately
Instead of marking each declaration, you can export a list of functions or variables:
```js
// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}
function sayBye(user) {
  alert(`Bye, ${user}!`);
}
export { sayHi, sayBye };
```

### Importing Specific Functions
```js
// 📁 main.js
import { sayHi, sayBye } from './say.js';
sayHi('John');
sayBye('John');
```

### Importing Everything (`import *`)
Instead of listing functions individually, we can import everything as an object:
```js
import * as say from './say.js';
say.sayHi('John');
say.sayBye('John');
```

### Using `as` for Aliases
Aliases can be used to rename imported or exported values.
```js
// 📁 main.js
import { sayHi as hi, sayBye as bye } from './say.js';
hi('John');
bye('John');
```
Similarly, export with aliases:
```js
// 📁 say.js
export { sayHi as hi, sayBye as bye };
```
Now they can be accessed as:
```js
import * as say from './say.js';
say.hi('John');
say.bye('John');
```

