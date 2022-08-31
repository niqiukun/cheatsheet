# JavaScript

## This

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

### Use Cases of Function Built-ins

Well, good to know all this, but you probably have never used them in your daily work. ~~Who writes such convoluted code with the actionable object inside the function parameters? Who anyhow changes the `this` object until the point no one knows what `this` really is?~~ What's the point of memorizing them if they are not used at all ~~except for preparing interviews~~?

Good point, so here we list some use cases that you may ~~or may not~~ encounter in future. I mean if you never come to know these functions, you will never think about using them when you encounter a similar situation! ~~If this is the case, go ahead with better alternatives!~~

#### Inheritance with prototype

In inheritance using prototype, you need to use either `apply` or `call` to ensure that the parent function is setting properties of the child object. See [inheritance with the prototype chain](#inheritance-chains). ~~To be honest, just use classes.~~

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
