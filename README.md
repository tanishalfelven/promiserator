# PROMISERATOR

Have you ever wanted to avoid using iterables as a consumer, and instead wished there was some sort of middleware that forced you to consume all iterable objects through the async api?

WELL HAVE I GOT THE CODE FOR YOU - INTRODUCING PROMISERATORS!

Now, we can remove iterables in favor of `async` functions. It's never been simpler!

```js
const promiserator = require("promiserator");

const p = promiserator([1, 2, 3, 4, 5]);

while({ value } = await p) {
    console.log(value);
}
```
Note: you may wish to define the variable you destructure into - we avoided this for that much needed sugar. ;)

#### DISCLAIMER: Please don't actually use this.