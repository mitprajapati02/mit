# Introduction: Callbacks

JavaScript host environments allow you to schedule asynchronous actions—actions initiated now but completed later.

One such function is `setTimeout`. Other real-world examples of asynchronous actions include loading scripts and modules.

Consider the `loadScript(src)` function, which loads a script with the given `src`:

```js
function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}
```

Usage example:

```js
loadScript('/my/script.js');
```

This function executes scripts asynchronously. The script starts loading immediately but runs later when fully loaded. Any code written below `loadScript(...)` executes without waiting for the script to load.

If we attempt to call a function from the script immediately after loading:

```js
loadScript('/my/script.js');
newFunction(); // Error: function not found
```

The browser may not have loaded the script yet. Currently, `loadScript` does not provide a way to track when loading is complete.

## Using Callbacks

To handle this issue, we modify `loadScript` to accept a callback function that runs when the script finishes loading:

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}
```

Now, we can use a callback to execute code after the script loads:

```js
loadScript('/my/script.js', function() {
  newFunction(); // Now it works!
});
```

This is an example of **callback-based asynchronous programming**, where a function performing an asynchronous operation accepts a callback to execute after completion.

## Callback in Callback

To load multiple scripts sequentially:

```js
loadScript('/my/script.js', function(script) {
  loadScript('/my/script2.js', function(script) {
    loadScript('/my/script3.js', function(script) {
      // All scripts loaded
    });
  });
});
```

For a few actions, this approach is fine. However, for multiple actions, it becomes unwieldy. We’ll explore better approaches later.

## Handling Errors

The current implementation does not handle errors. We can improve it to track loading failures:

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
```

Usage example:

```js
loadScript('/my/script.js', function(error, script) {
  if (error) {
    console.error(error);
  } else {
    console.log('Script loaded successfully');
  }
});
```

### Callback Error Handling Convention
- The **first argument** of the callback is reserved for an error (`callback(err)`).
- The **second argument** (and others if needed) are for successful results (`callback(null, result)`).

## The Pyramid of Doom

For multiple dependent asynchronous operations, the code becomes deeply nested:

```js
loadScript('1.js', function(error, script) {
  if (error) {
    handleError(error);
  } else {
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // Continue after all scripts are loaded
          }
        });
      }
    });
  }
});
```

This structure, known as **callback hell** or the **Pyramid of Doom**, becomes unmanageable as complexity grows. We will explore better approaches like Promises and async/await to simplify asynchronous code.

