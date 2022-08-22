"use strict";(self.webpackChunkcheatsheet=self.webpackChunkcheatsheet||[]).push([[3666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},y=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(d,p(p({ref:t},y),{},{components:n})):a.createElement(d,p({ref:t},y))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},p="TypeScript",o={unversionedId:"Toolbox/Languages/TypeScript",id:"Toolbox/Languages/TypeScript",title:"TypeScript",description:"TypeScript is a static type checker that checks for potential type errors of JavaScript before execution. What lies at the heart of TypeScript's type checking system is the type annotations assigned to variables, functions and objects.",source:"@site/docs/Toolbox/Languages/TypeScript.md",sourceDirName:"Toolbox/Languages",slug:"/Toolbox/Languages/TypeScript",permalink:"/cheatsheet/docs/Toolbox/Languages/TypeScript",draft:!1,editUrl:"https://github.com/niqiukun/cheatsheet/blob/master/docs/Toolbox/Languages/TypeScript.md",tags:[],version:"current",frontMatter:{},sidebar:"toolboxSidebar",previous:{title:"JavaScript",permalink:"/cheatsheet/docs/Toolbox/Languages/JavaScript"},next:{title:"intro",permalink:"/cheatsheet/docs/Toolbox/intro"}},s={},l=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Types",id:"types",level:2},{value:"Primitive Types",id:"primitive-types",level:3},{value:"Special Types",id:"special-types",level:3},{value:"Object Types",id:"object-types",level:3},{value:"Optional properties",id:"optional-properties",level:4},{value:"Readonly properties",id:"readonly-properties",level:4},{value:"Types of property names",id:"types-of-property-names",level:4},{value:"Extending object types",id:"extending-object-types",level:4},{value:"Generic object types",id:"generic-object-types",level:4},{value:"Array Types",id:"array-types",level:3},{value:"Tuple types",id:"tuple-types",level:4},{value:"Spread operator",id:"spread-operator",level:4},{value:"Readonly arrays",id:"readonly-arrays",level:4},{value:"Literal Types",id:"literal-types",level:3},{value:"Tuple with literal types",id:"tuple-with-literal-types",level:4},{value:"Function Types",id:"function-types",level:3},{value:"Type Manipulation",id:"type-manipulation",level:2},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Conditional",id:"conditional",level:3},{value:"Union",id:"union",level:3},{value:"Intersection",id:"intersection",level:3},{value:"Keyof",id:"keyof",level:3},{value:"Indexed Access",id:"indexed-access",level:3},{value:"Generics",id:"generics",level:3},{value:"Mapping",id:"mapping",level:3}],y={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"typescript"},"TypeScript"),(0,r.kt)("p",null,"TypeScript is a static type checker that checks for potential type errors of JavaScript before execution. What lies at the heart of TypeScript's type checking system is the type annotations assigned to variables, functions and objects."),(0,r.kt)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"extends")),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"extends")," keyword describes whether a value of a particular type is assignable to a variable of another type. Specifically:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// if we say A extends B, a variable of type B can be assigned a value of type A\nlet a: A;\nlet b: B;\n// error-start\na = b;\n`Type 'B' is not assignable to type 'A'. ts(2322)`\n// error-end\nb = a; // Ok\n\n// also applicable for function parameters\nfunction foo(a: A) {};\n// error-start\nfoo(b);\n`Argument of type 'B' is not assignable to parameter of type 'A'. ts(2345)`\n// error-end\nfunction bar(b: B) {};\nfoo(a); // Ok\n")),(0,r.kt)("p",{parentName:"li"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"extends")," is not an operator which gives a value, and ",(0,r.kt)("inlineCode",{parentName:"p"},"A extends B")," alone is not a valid syntax in TypeScript. The correct syntax which gives a type is the ",(0,r.kt)("a",{parentName:"p",href:"#conditional"},"conditional"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"A extends B ? C : D")," where A, B, C, and D are types. More about this shall be covered in ",(0,r.kt)("a",{parentName:"p",href:"#type-manipulation"},"Type Manipulation")," section."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"extends")," keyword is also used by interfaces for extending other interfaces, but that usage is different from the concept being discussed here. For the similar usage, refer to ",(0,r.kt)("a",{parentName:"p",href:"#extending-object-types"},"extending object types"),"."))),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("h3",{id:"primitive-types"},"Primitive Types"),(0,r.kt)("p",null,"These type annotations corresponds to the 7 primitive types of JavaScript:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bigint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symbol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"null"))),(0,r.kt)("h3",{id:"special-types"},"Special Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",{parentName:"li"},"All operations are permitted on a variable with ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," type. Values of any types can be assigned to a variable with ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," type, and a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," type can be assigned to variables of any types.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"unknown")),(0,r.kt)("p",{parentName:"li"},"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," time but no operations are permitted. It is recommended to do proper JavaScript type checking, and convert variables of ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown")," type to target types explicitly.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",{parentName:"li"},"Used to annotate the return type of a function that does not return any value. Note that the actual return type of the function can be anything:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type result = (() => number) extends (() => void) ? true : false;\n// type result = true\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"never")),(0,r.kt)("p",{parentName:"li"},"Used to annotate the type of a variable in a state that will never be reached. For example, a function that will definitely throw an error has return type ",(0,r.kt)("inlineCode",{parentName:"p"},"never"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",{parentName:"li"},"Used to annotate anything that is not a ",(0,r.kt)("a",{parentName:"p",href:"#primitive-types"},"primitive type"),". Note that functions are a subset of ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," type:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type result = Function extends object ? true : false;\n// type result = true\n")))),(0,r.kt)("h3",{id:"object-types"},"Object Types"),(0,r.kt)("p",null,"The type of an object can be declared using either one of these:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const person: { name: string; age: number };\n\n// or with interface\ninterface Person {\n  name: string;\n  age: number;\n}\nconst person: Person;\n\n// or with type alias\ntype Person = {\n  name: string;\n  age: number;\n};\nconst person: Person;\n")),(0,r.kt)("admonition",{title:"Interface vs Type",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using interface and using type alias to annotate a object type are largely similar. Since the difference between interface and type confuses more than helps, in this document type alias is favoured over interface to annotate object types. This is just my personal preference."),(0,r.kt)("p",{parentName:"admonition"},"There is one behavior that is unique to interface, declaration merging:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Person { name: string; }\ninterface Person { age: number; }\n\n// is equivalent to\ninterface Person { name: string; age: number; }\n"))),(0,r.kt)("h4",{id:"optional-properties"},"Optional properties"),(0,r.kt)("p",null,"A property of an object can be declared as optional with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Person = {\n  name: string;\n  age?: number; // (property) Person.age?: number | undefined\n};\n")),(0,r.kt)("h4",{id:"readonly-properties"},"Readonly properties"),(0,r.kt)("p",null,"A property of an object can be declared as readonly with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Person =  {\n  name: string;\n  readonly age: number;\n};\n")),(0,r.kt)("p",null,"This prevents direct assignment to the property. Note that you can assign a variable having an object type with writable properties to a variable having an object type with the same but readonly properties, and vice versa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type result1 = { readonly foo: string } extends { foo: string } ? true : false;\n// type result1 = true\ntype result2 = { foo: string } extends { readonly foo: string } ? true : false;\n// type result2 = true\n")),(0,r.kt)("h4",{id:"types-of-property-names"},"Types of property names"),(0,r.kt)("p",null,"The type of an object can be declared more generically with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type StringArray = {\n  [index: number]: string;\n};\n")),(0,r.kt)("p",null,"Here we are not concerned about what exactly are the names of the properties, but rather what is the type of these property names. Such type, known as an index signature property type, must either be ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,r.kt)("p",null,"While it is possible to use a combination of the two index types and property names, the following rules must be noted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type MyObject = {\n  [numberIndex: number]: A; // A extends B\n  [stringIndex: string]: B;\n  foo: C;                   // C extends B\n};\n")),(0,r.kt)("admonition",{title:"Why?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"From the above example, it is pretty clear that C has to extend B because ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo"')," is an element of type set ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". The reason for A extending B is not immediately clear. In JavaScript, when we index something with a number, the number is in fact converted to a string for indexing. Due to this reason, the return type when a number index is used must be a subset of the type when using a string index. Hence, A has to extend B.")),(0,r.kt)("h4",{id:"extending-object-types"},"Extending object types"),(0,r.kt)("p",null,"Extending object types refers declaring a child object type with all properties from the parent object type. Is is done using ",(0,r.kt)("a",{parentName:"p",href:"#intersection"},"intersection operator")," ",(0,r.kt)("inlineCode",{parentName:"p"},"&"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Animal = { name: string; };\ntype Dog = Animal & { breed: string; };\n")),(0,r.kt)("h4",{id:"generic-object-types"},"Generic object types"),(0,r.kt)("p",null,"It is possible to have generics while declaring object types, similar to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/java/generics/types.html"},"generic types in Java"),". Generics make object types share a common object structure while providing the flexibility to define the types of inner properties for each object type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Box<T> = { contents: T; };\n")),(0,r.kt)("h3",{id:"array-types"},"Array Types"),(0,r.kt)("p",null,"The array type is just a special object type built-in properties like ",(0,r.kt)("inlineCode",{parentName:"p"},"length"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pop"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"push"),", etc. ",(0,r.kt)("inlineCode",{parentName:"p"},"T[]")," is a shorthand for ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<T>"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Array<T> {\n  length: number;\n  pop(): T | undefined;\n  push(...items: T[]): number;\n  // ...\n}\n")),(0,r.kt)("p",null,"There are other generic types that are similar, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Map<K, V>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Set<T>"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<T>"),"."),(0,r.kt)("h4",{id:"tuple-types"},"Tuple types"),(0,r.kt)("p",null,"Tuple types are special cases of the array type with fixed types for items at certain indexes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type MyTuple = [string, number, boolean];\ntype A = MyTuple[0];        // type A = string\ntype B = MyTuple['1'];      // type B = number\ntype C = MyTuple['length']; // type C = 3\ntype D = MyTuple['push'];   // type D = push(...items: (string | number | boolean)[]): number\n// error-start\ntype E = MyTuple[42];\n`Tuple type 'MyTuple' of length '3' has no element at index '42'. ts(2493)`\n// error-end\n")),(0,r.kt)("h4",{id:"spread-operator"},"Spread operator"),(0,r.kt)("p",null,"Note that tuple types does not necessarily have a fixed length. ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types"},"A tuple type with variable length")," can be constructed using the spread operator ",(0,r.kt)("inlineCode",{parentName:"p"},"..."),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type MyVariadicTuple = [string, ...number[], boolean];\ntype A = MyVariadicTuple[0];        // type A = string\ntype B = MyVariadicTuple[1];        // type B = number | boolean\ntype C = MyVariadicTuple[100];      // type C = number | boolean\ntype D = MyVariadicTuple['length']; // type D = number\n")),(0,r.kt)("p",null,"You can also obtain the type of the first or the last element in a tuple type with the spread operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never;\ntype Last<T extends any[]> = T extends [...infer R, infer L] ? L : never;\n\ntype A = First<[1, 2, 3]>;             // type A = 1\ntype B = Last<['a', 'b', 'c']>;        // type B = 'c'\ntype C = First<[]>;                    // type C = never\ntype D = First<[string, ...number[]]>; // type D = string\ntype E = Last<[string, ...number[]]>;  // type E = never\n")),(0,r.kt)("p",null,"This does not work on non-tuple array types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type result4 = First<number[]>;\n// type result4 = never\n")),(0,r.kt)("h4",{id:"readonly-arrays"},"Readonly arrays"),(0,r.kt)("p",null,"Readonly arrays are array types that do not allow modification, such as re-assigning values to array elements and pushing to / popping from the array. ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly T[]")," is a shorthand for ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadonlyArray<T>"),". Note its difference with ",(0,r.kt)("a",{parentName:"p",href:"#readonly-properties"},"readonly properties of object types"),": you can only assign a mutable array to a variable of an readonly array type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type result1 = readonly number[] extends number[] ? true : false;\n// type result1 = false\ntype result2 = number[] extends readonly number[] ? true : false;\n// type result2 = true\n")),(0,r.kt)("h3",{id:"literal-types"},"Literal Types"),(0,r.kt)("p",null,"There are times when we hope to define a type that is more specific than the primitive types. Instead of representing all strings or numbers, we probably want to represent an element of them: for example, ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo"')," for string, or ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," for number. Such specific types are known as literal types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Foo = 'foo';\ntype One = 1;\ntype result1 = Foo extends string ? true : false;\n// type result1 = true\ntype result2 = One extends number ? true : false;\n// type result2 = true\n")),(0,r.kt)("p",null,"While assigning non-constant JavaScript variables, TypeScript by default infer the variable to be of the primitive type. To make TypeScript understand that the variable is of a literal type, use ",(0,r.kt)("inlineCode",{parentName:"p"},"as const"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const greetings1 = 'Hello world!';\ntype A = typeof greetings1; // type A = \"Hello world!\"\n\nlet greetings2 = 'Hello world!';          \ntype B = typeof greetings2; // type B = string\n\nlet greetings3 = 'Hello world!' as const;\ntype C = typeof greetings3; // type C = \"Hello world!\"\n")),(0,r.kt)("h4",{id:"tuple-with-literal-types"},"Tuple with literal types"),(0,r.kt)("p",null,"We can also declare a tuple type with literal types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const OneTwoThreeTuple = [1, 2, 3];\n")),(0,r.kt)("p",null,"Similarly, when we write an array in JavaScript, it is inferred to be the primitive type array as well. To workaround this, we can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"as const")," to indicate that it is in fact a tuple with literal types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const array = [1, 2, 3];\ntype A = typeof array; // type A = number[]\n\nconst tuple = [1, 2, 3] as const;\ntype B = typeof tuple; // type B = readonly [1, 2, 3]\n")),(0,r.kt)("p",null,"Note that the tuple type inferred with ",(0,r.kt)("inlineCode",{parentName:"p"},"as const")," keyword is also a ",(0,r.kt)("a",{parentName:"p",href:"#readonly-array"},"readonly array"),"."),(0,r.kt)("h3",{id:"function-types"},"Function Types"),(0,r.kt)("p",null,"The type of a function can be declared using either one of these:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type StringConsumer = (arg: string) => void;\n\ntype StringConsumer = {\n  (arg: string): void;\n  name: string; // functions can have properties in JavaScript\n};\n")),(0,r.kt)("h2",{id:"type-manipulation"},"Type Manipulation"),(0,r.kt)("p",null,"In any programming language, we can apply operators on values, and we get new values. We can assign values to variables, and we can apply operators on variables. Everything is just the same in TypeScript."),(0,r.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("p",null,"Aliasing a type is just like assignment to a constant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// just as\nconst a = 1;\n// in typescript\ntype MyNumber = number;\n")),(0,r.kt)("p",null,"Note that they work similarly, but aliasing essentially means ",(0,r.kt)("inlineCode",{parentName:"p"},"MyNumber")," is directly aliased to ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),". There is no concept of storing the type somewhere and use it later in TypeScript."),(0,r.kt)("h3",{id:"conditional"},"Conditional"),(0,r.kt)("p",null,"The conditional in TypeScript, ",(0,r.kt)("inlineCode",{parentName:"p"},"A extends B ? C : D"),", gives C if A ",(0,r.kt)("a",{parentName:"p",href:"#basic-concepts"},"extends")," B, and D otherwise. While it looks the same as the conditional clause in JavaScript, it should not be confused together because unlike in JavaScript, ",(0,r.kt)("inlineCode",{parentName:"p"},"A extends B")," is not a valid statement and does not give a type as return value. You must always specify the return type explicitly after extends."),(0,r.kt)("h3",{id:"union"},"Union"),(0,r.kt)("p",null,"The union operator ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," is a binary operator that creates a type representing either one of the operands. Specifically, both operands are extending the union type, but others don't:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type U = A | B;\n// A extends U\n// B extends U\n// C does not extend U\n")),(0,r.kt)("p",null,"The properties of the union type is the common properties of the operands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function foo(bar: string | number) {\n  // error-start\n  bar.trim();\n  `Property 'trim' does not exist on type 'string | number'. ts(2339)`\n  // error-end\n  bar.toString(); // Ok\n}\n")),(0,r.kt)("p",null,"While this may seem to be counter intuitive, think from the processing of extending: when A extends B, A has all properties of B and some additional properties that are only applicable to A. Given ",(0,r.kt)("inlineCode",{parentName:"p"},"type U = A | B"),", both A and B has all properties of U. Thus U can only have the properties which are common to both types A and B."),(0,r.kt)("h3",{id:"intersection"},"Intersection"),(0,r.kt)("p",null,"The intersection operator ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," is a binary operator that creates a type representing both operands. Specifically, the intersection type is extending both operands, but not others:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type I = A & B;\n// I extends A\n// I extends B\n// I does not extend C\n")),(0,r.kt)("p",null,"The properties of the intersection type come form either of the operand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type A = { a: string; };\ntype B = { b: string; };\nfunction foo(bar: A & B) {\n  const c = bar.a; // Ok\n  const d = bar.b; // Ok\n}\n")),(0,r.kt)("admonition",{title:"Intersection of primitives",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You may be wondering why I didn't use ",(0,r.kt)("inlineCode",{parentName:"p"},"string & number")," as an example, just like I did for intersection. Shouldn't the intersection type ",(0,r.kt)("inlineCode",{parentName:"p"},"string & number")," contains both properties from ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"?"),(0,r.kt)("p",{parentName:"admonition"},"The answer in short is: ",(0,r.kt)("inlineCode",{parentName:"p"},"string & number")," gives ",(0,r.kt)("a",{parentName:"p",href:"#special-types"},(0,r.kt)("inlineCode",{parentName:"a"},"never")),", because there is literally no element that belongs to both type ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),". This case is different from the intersection type of two ",(0,r.kt)("a",{parentName:"p",href:"#object-types"},"object types"),": while you can always construct an object that satisfies both object types by combining their properties (given that the two types do not have same name properties), that is not possible for ",(0,r.kt)("a",{parentName:"p",href:"#primitive-types"},"primitives"),"."),(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/pull/31838"},"some other cases")," that immediately gives the type ",(0,r.kt)("inlineCode",{parentName:"p"},"never"),".")),(0,r.kt)("h3",{id:"keyof"},"Keyof"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"keyof")," is a unary operator that gives the union of the types of operand's property names, in ",(0,r.kt)("a",{parentName:"p",href:"#literal-types"},"literal types")," if possible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Point = { x: number; y: number; };\ntype A = keyof Point;\n// type A is equivalent to 'x' | 'y'\n\ntype Dictionary = {\n  [key: string]: string;\n};\ntype B = keyof Dictionary;\n// type B = string | number\n")),(0,r.kt)("h3",{id:"indexed-access"},"Indexed Access"),(0,r.kt)("p",null,"Indexed access type ",(0,r.kt)("inlineCode",{parentName:"p"},"[...]")," gives the type of the indexed property on the target object type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Person = { age: number; name: string; alive: boolean };\ntype A = Person['age'];\n// type A = number\ntype B = Person['age' | 'name'];\n// type B = number | string\ntype C = Person[keyof Person]; // just like valueof\n// type C = number | string | boolean\n")),(0,r.kt)("h3",{id:"generics"},"Generics"),(0,r.kt)("p",null,"We can extend the idea of ",(0,r.kt)("a",{parentName:"p",href:"#generic-object-types"},"generic object types")," to the creation of any type, not limited to object types. Basically, what we want is like a function with one or more types as parameters, and one return type that is created based on the type parameters."),(0,r.kt)("p",null,"We can create an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/UnaryOperator.html"},"unary operator")," type with generics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type UnaryOperator<T> = (arg: T) => T;\n\n// restriction on type parameters\ntype TypeOfArray<T extends any[]> = T[number];\n\n// optional type parameters with default values\ntype IdentityWithDefault<T = number> = T;\n")),(0,r.kt)("p",null,"When generics are used on functions, we can apply the same logic to a group of similar parameter types (under the same generic type, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<any>"),") without duplicating the function many times. We can also annotate the function with a flexible return type which is based on the parameter generic type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function getFirstOfArray<T>(array: T[]): T;\n")),(0,r.kt)("p",null,"What makes generics more powerful is that the generic types can be inferred from the context so that often there is no need to specify them explicitly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const firstItem1 = getFirstOfArray([1, 2, 3]);\ntype result1 = typeof firstItem1; // type result1 = number\n\nconst firstItem2 = getFirstOfArray(['a', 'b', 'c']);\ntype result2 = typeof firstItem2; // type result2 = string\n\nconst firstItem3 = getFirstOfArray([1, 2, 'surprise']);\ntype result3 = typeof firstItem3; // type result3 = string | number\n\n// error-start\nconst firstItem4 = getFirstOfArray(42);\n`Argument of type 'number' is not assignable to parameter of type 'unknown[]'. ts(2345)`\n// error-end\n")),(0,r.kt)("p",null,"Note that the generic type parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," can be a component of the function parameter. Using this, we can easily unwrap the types for function parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function makeMutable<T>(immutable: readonly T[]): T[];\nconst a = makeMutable([1, 2, 3] as ReadonlyArray<number>);\ntype A = typeof a; // type A = number[]\n\ndeclare function awaitPromise<T>(promise: Promise<T>): T;\nconst b = awaitPromise(Promise.resolve(1 + 2));\ntype B = typeof b; // type B = number\n\n// an interesting usage is to maintain the tuple type structure of parameters:\ndeclare function getArrayIdentity<T extends any[]>(array: T): T;\nconst c = getArrayIdentity([1, 2, 3]);\ntype C = typeof c; // type C = number[]\n\ndeclare function getTupleIdentity<T extends any[]>(tuple: [...T]): T;\nconst d = getTupleIdentity([1, 2, 3]);\ntype D = typeof d; // type D = [number, number, number]\n")),(0,r.kt)("h3",{id:"mapping"},"Mapping"),(0,r.kt)("p",null,"Mapping is to create a new object type by iterating on an object type with ",(0,r.kt)("inlineCode",{parentName:"p"},"in keyof")," keyword."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type MakeBoolean<T> = {\n  [P in keyof T]: boolean;\n};\n\ntype MakeReadonly<T> = {\n  readonly [P in keyof T]: T[P];\n}\n\ntype MakeMutable<T> = {\n  -readonly [P in keyof T]: T[P];\n}\n\ntype MakeOptional<T> = {\n  [P in keyof T]?: T[P];\n}\n\ntype MakeConcrete<T> = {\n  [P in keyof T]-?: T[P];\n}\n")),(0,r.kt)("p",null,"It is possible to map the property names to new ones, or drop them in the return type using type assertions to ",(0,r.kt)("inlineCode",{parentName:"p"},"never"),"."),(0,r.kt)("admonition",{title:"Mapping on primitives",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"What happens if mapping is performed on a primitive type? Well, it will just give the primitive type. This is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/40012"},"intended"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'type MakeBoolean<T> = {\n  [P in keyof T]: boolean;\n};\n\ntype result1 = keyof string;\n// type result1 = number | typeof Symbol.iterator | "length" | "toString" | "concat" | ...\ntype result2 = MakeBoolean<string>;\n// type result2 = string\n'))),(0,r.kt)("admonition",{title:"Mapping on union types",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When mapping is carried out on a union type, the individual types in a union are mapped:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type A = { foo: string; };\ntype B = { bar: number; };\n\ntype result1 = keyof (A | B);\n// type result1 = never\ntype result2 = MakeBoolean<A | B>;\n// type result2 = { foo: boolean; } | { bar: boolean; }\n"))))}c.isMDXComponent=!0}}]);