# JavaScript

## ESNext

#### ES2022

- Private properties and methods in classes
- Top-level await in modules
- `Array.prototype.at()` equivalent to `arr[]`

#### ES2021

- `String.prototype.replaceAll()`
- Logical assignment operators: `||=`, `&&=`, `??=`
- Numeric separator: `1_000_000`
- `Promise.any()`

#### ES2020

- Nullish coalescing operator: `??`
- Optional chaining operator: `?.`
- `Promise.allSettled()`
- Dynamic import via `import()`
- `BigInt` primitive type
- `globalThis`

#### ES2019

- `Array.prototype.flat() / flatMap()`
- `Object.fromEntries()`: reverse of `Object.entries()`
- Optional catch binding: parameter `error` is optional after `catch`
- `String.prototype.trimStart() / trimEnd()`

#### ES2018

- Object spread operator: `...` for objects
- `Promise.prototype.finally()`
- Asynchronous iterators: `for async (... of ...)`
- Asynchronous generators: `yield` promises

#### ES2017

- `String.prototype.padStart() / padEnd()`
- `Object.values()`
- `Object.entries()`
- `async` / `await`

#### ES2016

- Exponentiation operator: `**`
- `Array.prototype.includes()`

#### ES2015 (ES6)

- `String.prototype.startsWith() / endsWith() / includes() / repeat()`
- Template literals: `` `Hello %{name}` ``
- `Symbol` primitive type
- `let` / `const`
- Destructuring: `const { a, b } = obj` / `const [a, b] = arr`
- Default function parameters: `function func(x, y=0) { ... }`
- Rest parameters: `function func(a, ...restArgs) { ... }`
- Spread operator: `...` for iterables (arrays)
- Arrow functions: `(...) => { ... }`
- Method definitions in objects: `{ myMethod(x, y) {...} }`
- Property value shorthands: `const obj = { a, b }` is equivalent to `{ a: a, b: b }`
- Computed property keys in objects: `{ [key]: ... }`
- `Object.assign()`
- Classes
- Modules: `export` / `import`
- `for ... of ...`
- `Array.from() / to()`, `Array.prototype.entries() / keys() / values() / find() / findIndex() / copyWithin() / fill()`
- `Map`, `WeakMap`, `Set`: maps, weakMaps and sets
- Typed arrays
- Iterables and Iterators
- Generators
- `Promise`: promises
- `Proxy`: proxies

## This

`this` is the context object that points to different objects depending on the context.

### Contexts

- **Global**

  Without any context, `this` refers to the global object: the `globalThis` property in NodeJS, or `window` in browsers.

- **Function**

  In a function, `this` depends on how the function is called. If the function is called directly, `this` also refers to the global object. In a constructor called with `new` keyword, `this` refers to the newly created object instead. In [a function called with `call` or `apply` or a bound function created with `bind`](#apply-bind-and-call), `this` depends on the actual function parameters.

  If the function is a method of an object, `this` refers to the object itself.

  Note that in an arrow function, `this` takes the value of its outer context (`this` outside the function). This is determined when the arrow function is created and is regardless of when it is called. Even if the arrow function is a method of an object, `this` is taken from the context outside the object.

- **Class**

  In a base class, `this` refers to an instance of the class. In a derived class, `this` refers to an instance of the class only after the parent constructor `super` is called.

### Apply, Bind and Call

`apply()`, `bind()`, and `call()` are builtin methods of functions in JavaScript. (They are members of [`Function.prototype`](#prototype).) The differences between them and direct function invocation are mainly: 1) what the context object, `this`, is pointing to within the function, and 2) the way function parameters are passed in.

Here is one simple example:

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function sing(employer: string, has: string[]) {
  const hasParsed = has.map(has => `a ${has}`).join(' and ');
  console.log(
    `Hi, my name is ${this.name} and I work in a ${employer}, I've got ${hasParsed}.`
  );
}

const joe = new Person('Joe');
```

The function `sing` does not work when you try to call it directly:

```typescript
function sing(employer: string, has: string[]) {
  const hasParsed = has.map(has => `a ${has}`).join(' and ');
  // error-start
  console.log(
    `Hi, my name is ${this.name} and I work in a ${employer}, I've got ${hasParsed}.`
  );
  `TypeError: Cannot read properties of undefined (reading 'name')`;
  // error-end
}

sing('button factory', ['wife', 'dog', 'family']);
```

Let's see how can we use the function with `apply`, `call`, and `bind`.

#### `apply(thisArg: any, argArray?: any[])`

`apply` calls the function with the first parameter as the `this` context object, and the second parameter as the parameters of the function.

```typescript
sing.apply(joe, ['button factory', ['wife', 'dog', 'family']]);
// Hi, my name is Joe and I work in a button factory, I've got a wife and a dog and a family.
```

#### `call(thisArg: any, ...argArray: any[])`

`call` calls the function with the first parameter as the `this` context object, and the remaining parameters as the parameters of the function.

```typescript
sing.call(joe, 'button factory', ['wife', 'dog', 'family']);
// Hi, my name is Joe and I work in a button factory, I've got a wife and a dog and a family.
```

#### `bind(thisArg: any)`

`bind` is the most special among the three, where it creates a new function with the `this` context object referring to a give object for subsequent direct invocations.

```typescript
const joeSings = sing.bind(joe);
joeSings('button factory', ['wife', 'dog', 'family']);
// Hi, my name is Joe and I work in a button factory, I've got a wife and a dog and a family.
```

<details>

<summary>Implementing bind</summary>

Here is how `bind` can be implemented by hand, using [a function wrapper pattern](#wrapping-a-function):

```javascript
function bind(func, thisArg) {
  return function (...args) {
    return func.apply(thisArg, args);
  };
}
```

</details>

### Use Cases of Function Built-ins

Well, good to know all this, but you probably have never used them in your daily work. ~~Who writes such convoluted code with the actionable object inside the function parameters? Who anyhow changes the `this` object until the point no one knows what `this` really is?~~ What's the point of memorizing them if they are not used at all ~~except for preparing interviews~~?

Good point, so here we list some use cases that you may ~~or may not~~ encounter in future. I mean if you never come to know these functions, you will never think about using them when you encounter a similar situation!

#### Inheritance with prototype

In inheritance using prototype, you need to use either `apply` or `call` to ensure that the parent function is setting properties of the child object. See [inheritance with the prototype chain](#inheritance-chains). ~~To be honest, just use classes.~~

#### Wrapping a function

`apply` becomes truly handy when it comes to wrapping a function. Wrapping a function is to create a new function based on an existing function, usually with additional behaviors. For example, the following is a wrapping function to print out function parameters and return value:

```typescript
function wrapWithPrint<T extends any[], U>(func: (...args: T) => U) {
  return function (...args: T) {
    console.log(`${func.name} is called with ${args}`);
    const result = func.apply(this, args) as U;
    console.log(`${func.name} returns ${result}`);
    return result;
  };
}
```

Let's try this out:

```typescript
function add(a: number, b: number) {
  return a + b;
}

const wrappedAdd = wrapWithPrint(add);
wrappedAdd(5, 3);
// add is called with 5,3
// add returns 8
```

Now why is `apply` useful here? Because you always want the context object `this` stay the same before and after wrapping. Let's take a look at the example here:

```typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  saySomething(to: string) {
    console.log(`Hi ${to}, my name is ${this.name}.`);
  }
}

const joe = new Person('Joe');
joe.saySomething = wrapWithPrint(joe.saySomething);
joe.saySomething('Tony');
// saySomething is called with Tony
// Hi Tony, my name is Joe.
// saySomething returns undefined
```

This example will not work without `apply`! This is because by calling the function directly, the context object within the function is set to the current context object where the call takes place, in this case `globalThis` or `window`:

```typescript
function wrapWithPrint<T extends any[], U>(func: (...args: T) => U) {
  return function (...args: T) {
    console.log(`${func.name} is called with ${args}`);
    const result = func(...args); // this === globalThis
    console.log(`${func.name} returns ${result}`);
    return result;
  };
}
```

As a result, accessing `this.name` in `saySomething` result in reading property `name` on `globalThis` and gives `undefined`. By using `apply` function, we ensure that `this` is consistent with when the wrapper function is actually called.

## Prototype

:::caution Why prototype?

For me personally, I would prefer using `extends` of class for inheritance, due to its higher readability and maintainability. So why still learn about prototype?

Well, apparently the introduction of class in ES6 (formally ES2015) did not stop prototype from appearing in interviews. Also, prototype is a good to know for the following reasons:

- Class is merely syntactical sugar over prototype. Understanding prototype is essential for understanding class inheritance under the hood.
- Class is less optimized compared to prototype implementations, especially with private properties.
- Older browsers do not support class out of the box and class needs to be transpiled into prototype.

:::

### From Class to Prototype

Let's first write some inheritance with class:

```typescript
class Animal {
  name: string;
  noise: string;

  constructor(name: string, noise: string = 'bar') {
    this.name = name;
    this.noise = noise;
  }

  saySomething() {
    console.log(`${this.name} says: ${this.noise}`);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name, 'meow~');
  }

  doSomething() {
    console.log(`${this.name} is sleeping.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name, 'woof!');
  }

  doSomething() {
    console.log(`${this.name} is running around.`);
  }
}

const dog = new Dog('Lele');
dog.saySomething(); // Lele says: woof!
dog.doSomething(); // Lele is running around.

const cat = new Cat('Mimi');
cat.saySomething(); // Mimi says: meow~
cat.doSomething(); // Mimi is sleeping.
```

How how to do the same with prototype? Let's start with the parent class, `Animal`.

We first write with the constructor:

```typescript
function Animal(name: string, noise: string = 'bar') {
  this.name = name;
  this.noise = noise;
}
```

We also write the method for the parent class and assigning it to the `prototype` of the constructor:

```typescript
Animal.prototype.saySomething = function () {
  console.log(`${this.name} says: ${this.noise}`);
};
```

That is already sufficient for us to test out if this works.

```typescript
const bar = new Animal('Foo');
bar.saySomething(); // Foo says: bar
```

Before we continue, let's pause a while for now to understand what is happening here.

### Constructors

#### Initializing properties

What is a constructor function? It is a function that returns objects with properties initialized in a same way when called multiple times. There is no difference to a normal function and we can do this ourselves:

```typescript showLineNumbers
function getAnimal(name: string, noise: string = 'bar') {
  // highlight-next-line
  const newAnimal = {};
  newAnimal.name = name;
  newAnimal.noise = noise;
  // highlight-next-line
  return newAnimal;
}
```

However, note that line 2 and line 5 maybe a little bit repetitive to write given that they are necessary in all constructor functions. We hope the constructor functions can just care about assigning values to an object, not initializing or returning it. Therefore, we make use of `this`, an object that exists in function's outer scope and made available to the function:

```typescript
function Animal(name: string, noise: string = 'bar') {
  this.name = name;
  this.noise = noise;
}
```

Yes, this is exactly the same as the function we have just written previously. But what happens if we use it directly?

```typescript
Animal('foo1');
this.name; // foo1
Animal('foo2');
this.name; // foo2
// Hmm where is animal foo1?
```

All functions at the same level share the same `this` object, so it is impossible to have multiple objects! Here is exactly why we need the `new` keyword: to put simply, it creates an object, make `this` of the function that follows to point to this object, and finally return this object when the function finishes executing (assigning the values).

```typescript
const foo1 = new Animal('foo1');
fool.name; // foo1
const foo2 = new Animal('foo2');
foo2.name; // foo2
// Yay we can have many objects!
```

#### Initializing methods

All seems good right now, let's continue to add our method, `saySomething`:

```typescript
function Animal(name: string, noise: string = 'bar') {
  this.name = name;
  this.noise = noise;
  this.saySomething = function () {
    console.log(`${this.name} says: ${this.noise}`);
  };
}

const bar = new Animal('Foo');
bar.saySomething(); // Foo says: bar
```

Great! It works, and you are satisfied with that.

But wait a moment. There is one more thing to optimize, but you may not realize it. Let's see what is inside our initialized objects:

```typescript
const bar1 = new Animal('foo1');
const bar2 = new Animal('foo2');
bar1; // { name: 'foo1', noise: 'bar', saySomething: f(), ... }
bar2; // { name: 'foo2', noise: 'bar', saySomething: f(), ... }
```

Do you notice it? The function `saySomething` duplicates in all objects initialized, although we know that it is not going to differ between objects instantiated with the same constructor. That is going to take up much unnecessary memory space. (Same for `noise` as well, but we will discuss about that later.)

How do we solve this issue? Well, it would be great if we can have a common object that contains the function `saySomething`. All objects instantiated by the constructor can just refer to the methods defined in this common object.

This common object is known as the prototype.

The prototype of objects comes from the `prototype` property of functions. The `prototype` property is only used when a function is called as a constructor with `new`: an internal property known as `[[Prototype]]` of the new object, also known as the prototype of the object, will be pointing to the `prototype` of the constructor.

:::caution Too many prototypes!

The properties `prototype` and `[[Prototype]]` are confusing. For clarity, here we outline the difference between the two and denote them differently in this document:

- `prototype`: it is a property of a function. It is the target where the prototypes of objects are pointing to. It is mentioned as "the `prototype` property" in this document.
- `[[Prototype]]`: it is an internal property of an object (including a function). It points to the `prototype` property of object's constructor. By "internal", it means that the property is not directly accessible. It is mentioned as "the prototype of the object" in this document.

:::

Let's change the above code properly by assigning methods to the `prototype` property of the constructor.

```typescript
function Animal(name: string, noise: string = 'bar') {
  this.name = name;
  this.noise = noise;
}
Animal.prototype.saySomething = function () {
  console.log(`${this.name} says: ${this.noise}`);
};
const bar1 = new Animal('foo1');
const bar2 = new Animal('foo2');
bar1; // { name: 'foo1', noise: 'bar', [[Prototype]]: Object }
bar2; // { name: 'foo1', noise: 'bar', [[Prototype]]: Object }
```

If you expand `[[Prototype]]` in DevTools' console, you will see:

```js
[[Prototype]]: {
  saySomething: f(),
  constructor: f Animal(name, noise = 'bar'),
}
```

While it may not be obvious, but `saySomething` is not duplicated anymore and only exists in `Animal.prototype`. The one you see is exactly `Animal.prototype`, evaluated when `[[Prototype]]` is actually expanded.

The special thing about `[[Prototype]]` internal property is that when you call something like `bar.saySomething()`, it first search for property `saySomething` in the object's own property scope, and if it is not found, search for the property in the object's prototype scope.

Maybe you already think that it starts to feel like inheritance. Exactly. Let's move on to chain up the prototypes of objects to achieve the real inheritance that we want.

:::tip Accessing `[[Prototype]]`

`[[Prototype]]` is an internal property of objects and cannot be directly accessed with the property accessor `.`. To access it, we can use a utility function: `Object.getPrototypeOf(...)`.

With this, we can verify that the `[[Prototype]]` of the object is indeed the same instance as the `prototype` property of the constructor:

```typescript
Object.getPrototypeOf(bar1) === Animal.prototype; // true
```

`obj.__proto__` is equivalent to `Object.getPrototypeOf(obj)` in most JavaScript engines. However, this is [non-standard and should be avoided](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto).

:::

:::danger Mutating `prototype` property

It is advised not to mutate or reassign the `prototype` property of constructors other than initializing methods, to avoid unexpected or inconsistent behaviors:

```typescript
const bar = new Animal('Foo');

Animal.prototype.saySomething = function () {
  console.log(`${this.name} says nothing.`);
};
bar.saySomething(); // Foo says nothing.

// Some time later
Animal.prototype.saySomething = function () {
  console.log(`${this.name} says something!`);
};
bar.saySomething(); // Foo says something!
```

:::

### Inheritance Chains

Now how do we chain up prototypes of objects? One thing that immediately comes up in your mind is probably to use `Object.setPrototypeOf` method. Well, this is half correct: but the real question is what is the object that we want to set new prototype on, and where is this new prototype coming from.

One may be temped to set the prototype directly on instantiated objects. If you have followed me until this point, you know that it is not going to work. If we completely alter the prototype of an object, it no longer have access to the properties on the previous prototype, and hence the ability that it used to have. This is obviously not we want:

```typescript
function Cat(name: string) {
  this.name = name;
  this.noise = 'meow~';
}
Cat.prototype.doSomething = function () {
  console.log(`${this.name} is sleeping.`);
};

const cat = new Cat('Mimi');
// highlight-next-line
Object.setPrototypeOf(cat, Cat.prototype);
cat.doSomething(); // Mimi is sleeping.
// error-start
cat.saySomething();
`TypeError: cat.saySomething is not a function`;
// error-end
```

How do we retain the original properties of the object's prototype, while being able to access new properties? The answer is simply: to use prototype itself. But this time, we are setting the prototype, or the `[[Prototype]]` inner property, of the constructor's `prototype` property.

```typescript
function Cat(name: string) {
  // a bit incorrect, but let's fix it later
  this.name = name;
  this.noise = 'meow~';
}
// highlight-next-line
Object.setPrototypeOf(Cat.prototype, Animal.prototype);
Cat.prototype.doSomething = function () {
  console.log(`${this.name} is sleeping.`);
};

const cat = new Cat('Mimi');
cat.doSomething(); // Mimi is sleeping.
cat.saySomething(); // Mimi says: meow~
```

Let's inspect `cat` in DevTools to understand what is happening:

```typescript
{
  name: 'Mimi',
  noise: 'meow~',
  [[Prototype]]: { // Cat.prototype
    doSomething: f(),
    constructor: f Cat(name),
    [[Prototype]]: { // Animal.prototype
      saySomething: f(),
      constructor: f Animal(name, noise = 'foo'),
    },
  },
}
```

We have successfully created a prototype chain! When we call `cat.saySomething()`, it first tries to find `saySomething` in `cat`'s own property. When it is not found, it searches within the prototype of `cat`, that is `Cat.prototype`'s own property. When it is still not found, it searches the prototype of `Cat.prototype`, that is `Animal.prototype`'s own property. Finally, it found `saySomething` there.

:::tip Own property

We refer something's own property as an object's property that does not need to be searched further within the object's prototype. In the above example, `name` and `noise` are own properties of `cat`. We can verify this:

```typescript
cat.hasOwnProperty('name'); // true
cat.hasOwnProperty('noise'); // true
cat.hasOwnProperty('doSomething'); // false
Object.getPrototypeOf(cat).hasOwnProperty('doSomething'); // true
```

:::

We are pretty close to the original class implementation right now. One last question is how do we achieve `super()`, like in child class's constructor?

We follow the same idea as `super`: instead of assigning the initial properties ourselves, we make use of the constructor of the parent "class":

```typescript
function Cat(name: string) {
  Animal.prototype.constructor.call(this, name, 'meow~');
}
Object.setPrototypeOf(Cat.prototype, Animal.prototype);
```

:::info What is `call`?

`someFunction.call(someObject, ...)` is a way to call function `someFunction`, but with the context object `this` within the function pointing to `someObject`.

Why we need to use `constructor.call(this, ...)` here, instead of directly invoking `constructor(...)`? That is because we want to set the properties like `name` on the instance of `Cat`, but not on the instance of `Animal.prototype`.

See what happens if we invoke the constructor directly:

```typescript
function Cat(name: string) {
  Animal.prototype.constructor(name, 'meow~');
}
Object.setPrototypeOf(Cat.prototype, Animal.prototype);
Cat.prototype.doSomething = function () {
  console.log(`${this.name} is sleeping.`);
};

const cat = new Cat('Mimi');
cat.doSomething(); // Mimi is sleeping.

const cat2 = new Cat('Miantiao');
cat2.doSomething(); // Miantiao is sleeping.
cat.doSomething(); // Miantiao is sleeping.
// What happened to Mimi???
```

If we inspect `cat` under DevTools, we will realize what is wrong here:

```typescript
{
  // name is not here...?
  [[Prototype]]: { // Cat.prototype
    doSomething: f(),
    constructor: f Cat(name),
    [[Prototype]]: { // Animal.prototype
      // highlight-next-line
      name: 'Miantiao', // name is here!
      noise: 'meow~',
      saySomething: f(),
      constructor: f Animal(name, noise = 'foo'),
    },
  }
}
```

The constructor incorrectly sets the properties `name` and `noise` on `Animal.prototype` because `this` within the constructor `Animal` is pointing to `Animal.prototype`. When `cat2` is instantiated, it overwrites the property `name` inside `Animal.prototype` from `'Mimi'` to `'Miantiao'`. To prevent this, we need to specify `this` when calling the constructor `Animal` to ensure that the properties are assigned correctly.

:::

### Conclusion

Here is the original class inheritance implemented with prototype:

```typescript
// class Animal
function Animal(name: string, noise: string = 'bar') {
  this.name = name;
  this.noise = noise;
}

Animal.prototype.saySomething = function () {
  console.log(`${this.name} says: ${this.noise}`);
};

// class Cat
function Cat(name: string) {
  Animal.prototype.constructor.call(this, name, 'meow~');
}
// extends Animal
Object.setPrototypeOf(Cat.prototype, Animal.prototype);

Cat.prototype.doSomething = function () {
  console.log(`${this.name} is sleeping.`);
};

// class Dog
function Dog(name: string) {
  Animal.prototype.constructor.call(this, name, 'woof!');
}
// extends Animal
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

Dog.prototype.doSomething = function () {
  console.log(`${this.name} is running around.`);
};

const dog = new Dog('Lele');
dog.saySomething(); // Lele says: woof!
dog.doSomething(); // Lele is running around.

const cat = new Cat('Mimi');
cat.saySomething(); // Mimi says: meow~
cat.doSomething(); // Mimi is sleeping.
```

## Debounce and Throttle

Debounce and throttle are commonly used techniques to prevent the same action from happening many times within a short period of time, usually to reduce the frequency of API requests or form submissions.

The difference between the two is that debounce is to delay the same action until a period of no action has passed, while throttle is to disallow the same action within a period of time after the action has just been triggered.

Here, let's begin our example with a simple action:

```jsx live
function Example() {
  function triggerEvent() {
    console.log('Event triggered!');
  }

  return (
    <div>
      <button onClick={() => triggerEvent()}>Click me!</button>
    </div>
  );
}
```

### Debounce

Let's design a debounce function:

```javascript
async function debounce(func, time) {
  // return debounced version of func
  return func;
}
```

Our first goal is to delay the function execution until a period of inactivity. Let's implement delaying of the function first with [a wrapping function](#wrapping-a-function):

```jsx live
function Example() {
  function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }

  function debounce(func, time) {
    return function (...args) {
      return wait(time).then(() => {
        func.apply(this, args);
      });
    };
  }

  function triggerEvent() {
    console.log('Event triggered!');
  }
  const debouncedTriggerEvent = debounce(triggerEvent, 1000);

  return (
    <div>
      <button onClick={() => debouncedTriggerEvent()}>Click me!</button>
    </div>
  );
}
```

Great! The event is now delayed for 1s before being triggered. However, we have not achieved our goal yet: to cancel the current event if there is a new call within 1s.

Let's think about how to do this. First, it would be great if we can cancel the wait if there is a new event call. But the current `setTimeout` cannot be cancelled half way. How can we make it cancellable?

Let's first modify the `wait` function to return a promise but with a cancel function:

```jsx live
function Timer() {
  class CancellablePromise extends Promise {
    constructor(executor, cancelCallback) {
      let cancel;
      function wrapExecutor(executor) {
        return function (resolve, reject) {
          cancel = () => {
            cancelCallback();
            reject();
          };
          executor.call(this, resolve, reject);
        };
      }
      super(wrapExecutor(executor));
      this.cancel = cancel;
    }
  }

  function cancellableWait(time) {
    let timer = null;
    return new CancellablePromise(
      (resolve, reject) => {
        timer = setTimeout(resolve, time);
      },
      () => {
        timer && clearTimeout(timer);
      }
    );
  }

  const timerPromise = useRef();

  return (
    <div>
      <button
        onClick={() => {
          console.log('Timer starts!');
          timerPromise.current = cancellableWait(5000);
          timerPromise.current
            .then(() => {
              console.log('5 seconds has passed!');
            })
            .catch(() => {
              console.log('Timer cancelled...');
            });
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          timerPromise.current && timerPromise.current.cancel();
        }}
      >
        Cancel
      </button>
    </div>
  );
}
```

Wow it works! Now we can use our cancellable wait in the debounce function:

```jsx live
function Example() {
  class CancellablePromise extends Promise {
    constructor(executor, cancelCallback) {
      let cancel;
      function wrapExecutor(executor) {
        return function (resolve, reject) {
          cancel = () => {
            cancelCallback();
            reject();
          };
          executor.call(this, resolve, reject);
        };
      }
      super(wrapExecutor(executor));
      this.cancel = cancel;
    }
  }

  function cancellableWait(time) {
    let timer = null;
    return new CancellablePromise(
      (resolve, reject) => {
        timer = setTimeout(resolve, time);
      },
      () => {
        timer && clearTimeout(timer);
      }
    );
  }

  function debounce(func, time) {
    let cancellablePromise;
    return function (...args) {
      cancellablePromise && cancellablePromise.cancel();
      cancellablePromise = cancellableWait(time);
      return cancellablePromise
        .then(() => {
          func.apply(this, args);
        })
        .catch(() => {
          // do nothing
        });
    };
  }

  function triggerEvent() {
    console.log('Event triggered!');
  }
  const debouncedTriggerEvent = debounce(triggerEvent, 1000);

  return (
    <div>
      <button onClick={() => debouncedTriggerEvent()}>Click me!</button>
    </div>
  );
}
```

### Throttle

Let's design a throttle function:

```javascript
function throttle(func, time) {
  // return throttled version of func
  return func;
}
```

Inside this function, we should keep a flag to indicate whether there is a event triggered recently, and prevent the event from triggering if this is the case:

```javascript
function throttle(func, time) {
  let recentlyExecuted = false;
  return function (...args) {
    if (recentlyExecuted) return;
    func.apply(this, args);
    recentlyExecuted = true;
  };
}
```

Now we need to reset this flag once this period has passed:

```javascript
function throttle(func, time) {
  let recentlyExecuted = false;
  return function (...args) {
    if (recentlyExecuted) return;
    func.apply(this, args);
    recentlyExecuted = true;
    setTimeout(() => {
      recentlyExecuted = false;
    }, time);
  };
}
```

Let's try it!

```jsx live
function Example() {
  function throttle(func, time) {
    let recentlyExecuted = false;
    return function (...args) {
      if (recentlyExecuted) return;
      func.apply(this, args);
      recentlyExecuted = true;
      setTimeout(() => {
        recentlyExecuted = false;
      }, time);
    };
  }

  function triggerEvent() {
    console.log('Event triggered!');
  }
  const throttledTriggerEvent = throttle(triggerEvent, 1000);

  return (
    <div>
      <button onClick={() => throttledTriggerEvent()}>Click me!</button>
    </div>
  );
}
```

## Currying

Currying is to transform a function with many parameters to a function that take in each parameter one by one. With a curried function, a multi-stage process on some data can be split up and chained up easily, without the need to write everything as the function parameters at one go.

```javascript
function curry(func) {
  // return a curried function that ...
  return function curried(...args) {
    // if having equal (or more) parameters than original function
    if (args.length >= func.length) {
      // return result from original function
      return func.apply(this, args);
    }
    // return a function that expect the rest of the parameters
    return function (...restArgs) {
      // recursive call with all parameters gathered so far
      return curried(this, args.concat(restArgs));
    };
  };
}
```

## Behind the Scene

### Memory Management

In JavaScript, the memory allocation and release are automated. JavaScript uses mark-and-sweep algorithm for garbage collection: from the root (global object), periodically find objects that are reachable from the roots, and garbage collect ones that are not reachable. This prevent the issue of circular references where two objects refer to each other but are not referred from anywhere else. This will result in a memory leak in a naive reference-counting algorithm.

### The Event Loop

#### Runtime concepts

- **Stack**

  Records currently executing functions. New function called is pushed to the stack and is popped when the function returns. Note that function parameters and local variables declared in a function are stored in the heap instead so that they may remain accessible even after the function has returned.

- **Heap**

  Stores the variables (objects).

- **Queue**

  Stores incoming messages. As the runtime handles an incoming message, it dequeues the message and calls the corresponding function with the message as an input parameter, creating a new stack frame. The handling of messages continue once the stack is emptied.

#### The event loop

In browsers, new messages are added to the queue when an event occurs and there is an event listener attached to it. It can also be added using `setTimeout`. Note the timeout value only indicates the period of time after which the message is added to the queue: hence it is a minimum time rather than a guaranteed time. Also for this reason, `setTimeout` with a timeout value of 0 always delays the callback until the current function stack finishes executing.

Separate runtimes, such as web workers or cross-origin `iframes` keep their own stack, heap, and queue. They can communicate via the `postMessage` method. This also adds a new message to the queue of the target runtime if the runtime is listening `message` events.
