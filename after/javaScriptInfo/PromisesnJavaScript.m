# Promises in JavaScript

## Concept of Promises
A **Promise** in JavaScript represents a value that may be available now, or in the future, or never. It acts as a bridge between "producing code" (which takes time) and "consuming code" (which needs the result).

### Constructor Syntax
```javascript
let promise = new Promise(function(resolve, reject) {
  // executor function
});
```
- The **executor** function runs automatically when the promise is created.
- It calls `resolve(value)` on success and `reject(error)` on failure.

### Internal Properties
- **state**: Initially `"pending"`, changes to `"fulfilled"` (resolved) or `"rejected"` (rejected).
- **result**: Initially `undefined`, changes to the resolved value or error.

### Example
```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});
```

## Handling Promises: `.then()`, `.catch()`, `.finally()`
### `.then()`
Handles both success and failure:
```javascript
promise.then(
  result => console.log(result), // on success
  error => console.error(error) // on error
);
```

### `.catch()`
Handles only rejections:
```javascript
promise.catch(error => console.error(error));
```

### `.finally()`
Runs regardless of success or failure, useful for cleanup:
```javascript
promise.finally(() => console.log("Cleanup tasks"));
```

## Promise Chaining
Each `.then()` returns a new promise, allowing sequential execution:
```javascript
new Promise(resolve => setTimeout(() => resolve(1), 1000))
  .then(result => result * 2)
  .then(result => result * 2)
  .then(result => console.log(result)); // Output: 4
```

## Returning Promises
A handler inside `.then()` can return another promise:
```javascript
new Promise(resolve => setTimeout(() => resolve(1), 1000))
  .then(result => new Promise(resolve => setTimeout(() => resolve(result * 2), 1000)))
  .then(result => console.log(result)); // Output: 2
```

## Example: `loadScript()`
```javascript
function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.append(script);
  });
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
  .then(script => console.log(`${script.src} is loaded!`))
  .catch(error => console.error(error));
```

## Avoiding "Pyramid of Doom"
Without chaining:
```javascript
loadScript("script1.js").then(script1 => {
  loadScript("script2.js").then(script2 => {
    loadScript("script3.js").then(script3 => {
      one(); two(); three();
    });
  });
});
```
With chaining:
```javascript
loadScript("script1.js")
  .then(() => loadScript("script2.js"))
  .then(() => loadScript("script3.js"))
  .then(() => { one(); two(); three(); });
```

## Key Takeaways
- Promises handle asynchronous operations more efficiently than callbacks.
- `.then()`, `.catch()`, and `.finally()` provide structured handling of results and errors.
- Chaining avoids deeply nested callback structures (callback hell).
- Always return a new promise if an operation is asynchronous within `.then()`.

Using promises correctly leads to cleaner, more maintainable asynchronous code in JavaScript.

