# JavaScript

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

  constructor(name: string, noise: string = 'foo') {
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

Do you notice it? The function `saySomething` duplicates in all objects initialized, although we know that it is not going to differ between objects created with the same constructor. That is going to take up much unnecessary memory space. (Same for `noise` as well, but we will discuss about that later.)

How do we solve this issue? Well, it would be great if we can have a common object that contains the function `saySomething`. All objects created by the constructor can just refer to the methods defined in this common object.

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

If you expand `[[Prototype]]` in DevTool's console, you will see:

```js
[[Prototype]]: {
  saySomething: f(),
  constructor: f Animal(name, noise = 'bar'),
}
```

While it may not be obvious, but `saySomething` is not duplicated anymore and only exists in `Animal.prototype`. The one you see is exactly `Animal.prototype`, evaluated when `[[Prototype]]` is actually expanded.

:::tip Accessing `[[Prototype]]`

`[[Prototype]]` is an internal property of objects and cannot be directly accessed with the property accessor `.`. To access it, we can use a utility function: `Object.getPrototypeOf(...)`.

With this, we can verify that the `[[Prototype]]` of the object is indeed the same instance as the `prototype` property of the constructor:

```typescript
Object.getPrototypeOf(bar1) === Animal.prototype; // true
```

:::

:::danger Mutating `prototype` property

It is advised not to mutate or reassign the `prototype` property of constructors other than initializing methods, to avoid unexpected behaviors:

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