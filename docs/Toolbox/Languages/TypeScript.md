# TypeScript

TypeScript is a static type checker that checks for potential type errors of JavaScript before execution. What lies at the heart of TypeScript's type checking system is the type annotations assigned to variables, functions and objects.

## Basic Concepts

- `extends`

  The `extends` keyword describes whether a value of a particular type is assignable to a variable of another type. Specifically:

  ```typescript
  // if we say A extends B, a variable of type B can be assigned a value of type A
  let a: A;
  let b: B;
  // error-start
  a = b;
  `Type 'B' is not assignable to type 'A'. ts(2322)`
  // error-end
  b = a; // Ok

  // also applicable for function parameters
  function foo(a: A) {};
  // error-start
  foo(b);
  `Argument of type 'B' is not assignable to parameter of type 'A'. ts(2345)`
  // error-end
  function bar(b: B) {};
  foo(a); // Ok
  ```

  Note that `extends` is not an operator which gives a value, and `A extends B` alone is not a valid syntax in TypeScript. The correct syntax which gives a type is the [conditional](#conditional): `A extends B ? C : D` where A, B, C, and D are types. More about this shall be covered in [Type Manipulation](#type-manipulation) section.

  `extends` keyword is also used by interfaces for extending other interfaces, but that usage is different from the concept being discussed here. For the similar usage, refer to [extending object types](#extending-object-types).

## Types

### Primitive Types

These type annotations corresponds to the 7 primitive types of JavaScript:

- `string`
- `number`
- `bigint`
- `boolean`
- `undefined`
- `symbol`
- `null`

### Special Types

- `any`

  All operations are permitted on a variable with `any` type. Values of any types can be assigned to a variable with `any` type, and a value of `any` type can be assigned to variables of any types.

- `unknown`

  Similar to `any` time but no operations are permitted. It is recommended to do proper JavaScript type checking, and convert variables of `unknown` type to target types explicitly.

- `void`

  Used to annotate the return type of a function that does not return any value. Note that the actual return type of the function can be anything:

  ```typescript
  type result = (() => number) extends (() => void) ? true : false;
  // type result = true
  ```

- `never`

  Used to annotate the type of a variable in a state that will never be reached. For example, a function that will definitely throw an error has return type `never`.

- `object`

  Used to annotate anything that is not a [primitive type](#primitive-types). Note that functions are a subset of `object` type:

  ```typescript
  type result = Function extends object ? true : false;
  // type result = true
  ```
### Object Types

The type of an object can be declared using either one of these:

```typescript
const person: { name: string; age: number };

// or with interface
interface Person {
  name: string;
  age: number;
}
const person: Person;

// or with type alias
type Person = {
  name: string;
  age: number;
};
const person: Person;
```

:::info Interface vs Type

Using interface and using type alias to annotate a object type are largely similar. Since the difference between interface and type confuses more than helps, in this document type alias is favoured over interface to annotate object types. This is just my personal preference.

There is one behavior that is unique to interface, declaration merging:

```typescript
interface Person { name: string; }
interface Person { age: number; }

// is equivalent to
interface Person { name: string; age: number; }
```

:::

#### Optional properties

A property of an object can be declared as optional with:

```typescript
type Person = {
  name: string;
  age?: number; // (property) Person.age?: number | undefined
};
```

#### Readonly properties

A property of an object can be declared as readonly with:

```typescript
type Person =  {
  name: string;
  readonly age: number;
};
```

This prevents direct assignment to the property. Note that you can assign a variable having an object type with writable properties to a variable having an object type with the same but readonly properties, and vice versa:

```typescript
type result1 = { readonly foo: string } extends { foo: string } ? true : false;
// type result1 = true
type result2 = { foo: string } extends { readonly foo: string } ? true : false;
// type result2 = true
```

#### Types of property names

The type of an object can be declared more generically with:

```typescript
type StringArray = {
  [index: number]: string;
};
```

Here we are not concerned about what exactly are the names of the properties, but rather what is the type of these property names. Such type, known as an index signature property type, must either be `string` or `number`.

While it is possible to use a combination of the two index types and property names, the following rules must be noted:

```typescript
type MyObject = {
  [numberIndex: number]: A; // A extends B
  [stringIndex: string]: B;
  foo: C;                   // C extends B
};
```

:::note Why?

From the above example, it is pretty clear that C has to extend B because `"foo"` is an element of type set `string`. The reason for A extending B is not immediately clear. In JavaScript, when we index something with a number, the number is in fact converted to a string for indexing. Due to this reason, the return type when a number index is used must be a subset of the type when using a string index. Hence, A has to extend B.

:::

#### Extending object types

Extending object types refers declaring a child object type with all properties from the parent object type. Is is done using [intersection operator](#intersection) `&`:

```typescript
type Animal = { name: string; };
type Dog = Animal & { breed: string; };
```

#### Generic object types

It is possible to have generics while declaring object types, similar to [generic types in Java](https://docs.oracle.com/javase/tutorial/java/generics/types.html). Generics make object types share a common object structure while providing the flexibility to define the types of inner properties for each object type.

```typescript
type Box<T> = { contents: T; };
```

### Array Types

The array type is just a special object type built-in properties like `length`, `pop`, `push`, etc. `T[]` is a shorthand for `Array<T>`. 

```typescript
interface Array<T> {
  length: number;
  pop(): T | undefined;
  push(...items: T[]): number;
  // ...
}
```

There are other generic types that are similar, such as `Map<K, V>`, `Set<T>`, and `Promise<T>`.

#### Tuple types

Tuple types are special cases of the array type with fixed types for items at certain indexes.

```typescript
type MyTuple = [string, number, boolean];
type A = MyTuple[0];        // type A = string
type B = MyTuple['1'];      // type B = number
type C = MyTuple['length']; // type C = 3
type D = MyTuple['push'];   // type D = push(...items: (string | number | boolean)[]): number
// error-start
type E = MyTuple[42];
`Tuple type 'MyTuple' of length '3' has no element at index '42'. ts(2493)`
// error-end
```

#### Spread operator

Note that tuple types does not necessarily have a fixed length. [A tuple type with variable length](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types) can be constructed using the spread operator `...`:

```typescript
type MyVariadicTuple = [string, ...number[], boolean];
type A = MyVariadicTuple[0];        // type A = string
type B = MyVariadicTuple[1];        // type B = number | boolean
type C = MyVariadicTuple[100];      // type C = number | boolean
type D = MyVariadicTuple['length']; // type D = number
```

You can also obtain the type of the first or the last element in a tuple type with the spread operator:

```typescript
type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never;
type Last<T extends any[]> = T extends [...infer R, infer L] ? L : never;

type A = First<[1, 2, 3]>;             // type A = 1
type B = Last<['a', 'b', 'c']>;        // type B = 'c'
type C = First<[]>;                    // type C = never
type D = First<[string, ...number[]]>; // type D = string
type E = Last<[string, ...number[]]>;  // type E = never
```

This does not work on non-tuple array types:

```typescript
type result4 = First<number[]>;
// type result4 = never
```

#### Readonly arrays

Readonly arrays are array types that do not allow modification, such as re-assigning values to array elements and pushing to / popping from the array. `readonly T[]` is a shorthand for `ReadonlyArray<T>`. Note its difference with [readonly properties of object types](#readonly-properties): you can only assign a mutable array to a variable of an readonly array type.

```typescript
type result1 = readonly number[] extends number[] ? true : false;
// type result1 = false
type result2 = number[] extends readonly number[] ? true : false;
// type result2 = true
```

### Literal Types

There are times when we hope to define a type that is more specific than the primitive types. Instead of representing all strings or numbers, we probably want to represent an element of them: for example, `"foo"` for string, or `1` for number. Such specific types are known as literal types.

```typescript
type Foo = 'foo';
type One = 1;
type result1 = Foo extends string ? true : false;
// type result1 = true
type result2 = One extends number ? true : false;
// type result2 = true
```

While assigning non-constant JavaScript variables, TypeScript by default infer the variable to be of the primitive type. To make TypeScript understand that the variable is of a literal type, use `as const`:

```typescript
const greetings1 = 'Hello world!';
type A = typeof greetings1; // type A = "Hello world!"

let greetings2 = 'Hello world!';          
type B = typeof greetings2; // type B = string

let greetings3 = 'Hello world!' as const;
type C = typeof greetings3; // type C = "Hello world!"
```

#### Tuple with literal types

We can also declare a tuple type with literal types:

```typescript
const OneTwoThreeTuple = [1, 2, 3];
```

Similarly, when we write an array in JavaScript, it is inferred to be the primitive type array as well. To workaround this, we can also use `as const` to indicate that it is in fact a tuple with literal types:

```typescript
const array = [1, 2, 3];
type A = typeof array; // type A = number[]

const tuple = [1, 2, 3] as const;
type B = typeof tuple; // type B = readonly [1, 2, 3]
```

Note that the tuple type inferred with `as const` keyword is also a [readonly array](#readonly-array).

### Function Types

The type of a function can be declared using either one of these:

```typescript
type StringConsumer = (arg: string) => void;

type StringConsumer = {
  (arg: string): void;
  name: string; // functions can have properties in JavaScript
};
```

## Type Manipulation

In any programming language, we can apply operators on values, and we get new values. We can assign values to variables, and we can apply operators on variables. Everything is just the same in TypeScript.

### Type Aliases

Aliasing a type is just like assignment to a constant:

```typescript
// just as
const a = 1;
// in typescript
type MyNumber = number;
```

Note that they work similarly, but aliasing essentially means `MyNumber` is directly aliased to `number`. There is no concept of storing the type somewhere and use it later in TypeScript.

### Conditional

The conditional in TypeScript, `A extends B ? C : D`, gives C if A [extends](#basic-concepts) B, and D otherwise. While it looks the same as the conditional clause in JavaScript, it should not be confused together because unlike in JavaScript, `A extends B` is not a valid statement and does not give a type as return value. You must always specify the return type explicitly after extends.

#### Distributive conditionals

With generics, conditionals become distributive given the generic type is a union type:

```typescript
type ToArray<T> = T extends any ? T[] : never;
type result = ToArray<string | number>;
// type result = string[] | number[]
```

Note that `extends any` iterate through all types in a union. With other conditions, we can easily apply a filter on union types:

```typescript
type FilterArray<T> = T extends any[] ? T : never;
type result = FilterArray<string[] | number | boolean[]>;
// type result = string[] | boolean[]
```

### Union

The union operator `|` is a binary operator that creates a type representing either one of the operands. Specifically, both operands are extending the union type, but others don't:

```typescript
type U = A | B;
// A extends U
// B extends U
// C does not extend U
```

The properties of the union type is the common properties of the operands.

```typescript
function foo(bar: string | number) {
  // error-start
  bar.trim();
  `Property 'trim' does not exist on type 'string | number'. ts(2339)`
  // error-end
  bar.toString(); // Ok
}
```

While this may seem to be counter intuitive, think from the processing of extending: when A extends B, A has all properties of B and some additional properties that are only applicable to A. Given `type U = A | B`, both A and B has all properties of U. Thus U can only have the properties which are common to both types A and B.

### Intersection

The intersection operator `&` is a binary operator that creates a type representing both operands. Specifically, the intersection type is extending both operands, but not others:

```typescript
type I = A & B;
// I extends A
// I extends B
// I does not extend C
```

The properties of the intersection type come form either of the operand.

```typescript
type A = { a: string; };
type B = { b: string; };
function foo(bar: A & B) {
  const c = bar.a; // Ok
  const d = bar.b; // Ok
}
```

:::note Intersection of primitives

You may be wondering why I didn't use `string & number` as an example, just like I did for intersection. Shouldn't the intersection type `string & number` contains both properties from `string` and `number`?

The answer in short is: `string & number` gives [`never`](#special-types), because there is literally no element that belongs to both type `string` and `number`. This case is different from the intersection type of two [object types](#object-types): while you can always construct an object that satisfies both object types by combining their properties (given that the two types do not have same name properties), that is not possible for [primitives](#primitive-types).

See [some other cases](https://github.com/microsoft/TypeScript/pull/31838) that immediately gives the type `never`.

:::

### Keyof

`keyof` is a unary operator that gives the union of the types of operand's property names, in [literal types](#literal-types) if possible.

```typescript
type Point = { x: number; y: number; };
type A = keyof Point;
// type A is equivalent to 'x' | 'y'

type Dictionary = {
  [key: string]: string;
};
type B = keyof Dictionary;
// type B = string | number
```

### Indexed Access

Indexed access type `[...]` gives the type of the indexed property on the target object type.

```typescript
type Person = { age: number; name: string; alive: boolean };
type A = Person['age'];
// type A = number
type B = Person['age' | 'name'];
// type B = number | string
type C = Person[keyof Person]; // just like valueof
// type C = number | string | boolean
```

### Generics

We can extend the idea of [generic object types](#generic-object-types) to the creation of any type, not limited to object types. Basically, what we want is like a function with one or more types as parameters, and one return type that is created based on the type parameters.

We can create an [unary operator](https://docs.oracle.com/javase/8/docs/api/java/util/function/UnaryOperator.html) type with generics:

```typescript
type UnaryOperator<T> = (arg: T) => T;

// restriction on type parameters
type TypeOfArray<T extends any[]> = T[number];

// optional type parameters with default values
type IdentityWithDefault<T = number> = T;
```

When generics are used on functions, we can apply the same logic to a group of similar parameter types (under the same generic type, such as `Array<any>`) without duplicating the function many times. We can also annotate the function with a flexible return type which is based on the parameter generic type.

```typescript
declare function getFirstOfArray<T>(array: T[]): T;
```

What makes generics more powerful is that the generic types can be inferred from the context so that often there is no need to specify them explicitly:

```typescript
const firstItem1 = getFirstOfArray([1, 2, 3]);
type result1 = typeof firstItem1; // type result1 = number

const firstItem2 = getFirstOfArray(['a', 'b', 'c']);
type result2 = typeof firstItem2; // type result2 = string

const firstItem3 = getFirstOfArray([1, 2, 'surprise']);
type result3 = typeof firstItem3; // type result3 = string | number

// error-start
const firstItem4 = getFirstOfArray(42);
`Argument of type 'number' is not assignable to parameter of type 'unknown[]'. ts(2345)`
// error-end
```

Note that the generic type parameter `T` can be a component of the function parameter. Using this, we can easily unwrap the types for function parameters:

```typescript
declare function makeMutable<T>(immutable: readonly T[]): T[];
const a = makeMutable([1, 2, 3] as ReadonlyArray<number>);
type A = typeof a; // type A = number[]

declare function awaitPromise<T>(promise: Promise<T>): T;
const b = awaitPromise(Promise.resolve(1 + 2));
type B = typeof b; // type B = number

// an interesting usage is to maintain the tuple type structure of parameters:
declare function getArrayIdentity<T extends any[]>(array: T): T;
const c = getArrayIdentity([1, 2, 3]);
type C = typeof c; // type C = number[]

declare function getTupleIdentity<T extends any[]>(tuple: [...T]): T;
const d = getTupleIdentity([1, 2, 3]);
type D = typeof d; // type D = [number, number, number]
```

### Mapping

Mapping is to create a new object type by iterating on an object type with `in keyof` keyword.

```typescript
type MakeBoolean<T> = {
  [P in keyof T]: boolean;
};

type MakeReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

type MakeMutable<T> = {
  -readonly [P in keyof T]: T[P];
}

type MakeOptional<T> = {
  [P in keyof T]?: T[P];
}

type MakeConcrete<T> = {
  [P in keyof T]-?: T[P];
}
```

It is possible to map the property names to new ones, or drop them in the return type using type assertions to `never`.

:::note Mapping on primitives

What happens if mapping is performed on a primitive type? Well, it will just give the primitive type. This is [intended](https://github.com/microsoft/TypeScript/issues/40012).

```typescript
type MakeBoolean<T> = {
  [P in keyof T]: boolean;
};

type result1 = keyof string;
// type result1 = number | typeof Symbol.iterator | "length" | "toString" | "concat" | ...
type result2 = MakeBoolean<string>;
// type result2 = string
```

:::

:::note Mapping on union types

When mapping is carried out on a union type, the individual types in a union are mapped:

```typescript
type A = { foo: string; };
type B = { bar: number; };

type result1 = keyof (A | B);
// type result1 = never
type result2 = MakeBoolean<A | B>;
// type result2 = { foo: boolean; } | { bar: boolean; }
```
