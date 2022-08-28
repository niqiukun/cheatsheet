"use strict";(self.webpackChunkcheatsheet=self.webpackChunkcheatsheet||[]).push([[5377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=i,d=h["".concat(p,".").concat(u)]||h[u]||m[u]||a;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const a={},r="JavaScript",s={unversionedId:"Toolbox/Languages/JavaScript",id:"Toolbox/Languages/JavaScript",title:"JavaScript",description:"Prototype",source:"@site/docs/Toolbox/Languages/JavaScript.md",sourceDirName:"Toolbox/Languages",slug:"/Toolbox/Languages/JavaScript",permalink:"/cheatsheet/docs/Toolbox/Languages/JavaScript",draft:!1,editUrl:"https://github.com/niqiukun/cheatsheet/blob/master/docs/Toolbox/Languages/JavaScript.md",tags:[],version:"current",frontMatter:{},sidebar:"toolboxSidebar",previous:{title:"Go",permalink:"/cheatsheet/docs/Toolbox/Languages/Go"},next:{title:"TypeScript",permalink:"/cheatsheet/docs/Toolbox/Languages/TypeScript"}},p={},l=[{value:"Prototype",id:"prototype",level:2},{value:"From Class to Prototype",id:"from-class-to-prototype",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Initializing properties",id:"initializing-properties",level:4},{value:"Initializing methods",id:"initializing-methods",level:4},{value:"Inheritance Chains",id:"inheritance-chains",level:3},{value:"Conclusion",id:"conclusion",level:3}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"javascript"},"JavaScript"),(0,i.kt)("h2",{id:"prototype"},"Prototype"),(0,i.kt)("admonition",{title:"Why prototype?",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"For me personally, I would prefer using ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," of class for inheritance, due to its higher readability and maintainability. So why still learn about prototype?"),(0,i.kt)("p",{parentName:"admonition"},"Well, apparently the introduction of class in ES6 (formally ES2015) did not stop prototype from appearing in interviews. Also, prototype is a good to know for the following reasons:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Class is merely syntactical sugar over prototype. Understanding prototype is essential for understanding class inheritance under the hood."),(0,i.kt)("li",{parentName:"ul"},"Class is less optimized compared to prototype implementations, especially with private properties."),(0,i.kt)("li",{parentName:"ul"},"Older browsers do not support class out of the box and class needs to be transpiled into prototype."))),(0,i.kt)("h3",{id:"from-class-to-prototype"},"From Class to Prototype"),(0,i.kt)("p",null,"Let's first write some inheritance with class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class Animal {\n  name: string;\n  noise: string;\n\n  constructor(name: string, noise: string = 'bar') {\n    this.name = name;\n    this.noise = noise;\n  }\n\n  saySomething() {\n    console.log(`${this.name} says: ${this.noise}`);\n  }\n}\n\nclass Cat extends Animal {\n  constructor(name: string) {\n    super(name, 'meow~');\n  }\n\n  doSomething() {\n    console.log(`${this.name} is sleeping.`);\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name: string) {\n    super(name, 'woof!');\n  }\n\n  doSomething() {\n    console.log(`${this.name} is running around.`);\n  }\n}\n\nconst dog = new Dog('Lele');\ndog.saySomething(); // Lele says: woof!\ndog.doSomething(); // Lele is running around.\n\nconst cat = new Cat('Mimi');\ncat.saySomething(); // Mimi says: meow~\ncat.doSomething(); // Mimi is sleeping.\n")),(0,i.kt)("p",null,"How how to do the same with prototype? Let's start with the parent class, ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal"),"."),(0,i.kt)("p",null,"We first write with the constructor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function Animal(name: string, noise: string = 'bar') {\n  this.name = name;\n  this.noise = noise;\n}\n")),(0,i.kt)("p",null,"We also write the method for the parent class and assigning it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"prototype")," of the constructor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"Animal.prototype.saySomething = function () {\n  console.log(`${this.name} says: ${this.noise}`);\n};\n")),(0,i.kt)("p",null,"That is already sufficient for us to test out if this works."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const bar = new Animal('Foo');\nbar.saySomething(); // Foo says: bar\n")),(0,i.kt)("p",null,"Before we continue, let's pause a while for now to understand what is happening here."),(0,i.kt)("h3",{id:"constructors"},"Constructors"),(0,i.kt)("h4",{id:"initializing-properties"},"Initializing properties"),(0,i.kt)("p",null,"What is a constructor function? It is a function that returns objects with properties initialized in a same way when called multiple times. There is no difference to a normal function and we can do this ourselves:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0},"function getAnimal(name: string, noise: string = 'bar') {\n  // highlight-next-line\n  const newAnimal = {};\n  newAnimal.name = name;\n  newAnimal.noise = noise;\n  // highlight-next-line\n  return newAnimal;\n}\n")),(0,i.kt)("p",null,"However, note that line 2 and line 5 maybe a little bit repetitive to write given that they are necessary in all constructor functions. We hope the constructor functions can just care about assigning values to an object, not initializing or returning it. Therefore, we make use of ",(0,i.kt)("inlineCode",{parentName:"p"},"this"),", an object that exists in function's outer scope and made available to the function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function Animal(name: string, noise: string = 'bar') {\n  this.name = name;\n  this.noise = noise;\n}\n")),(0,i.kt)("p",null,"Yes, this is exactly the same as the function we have just written previously. But what happens if we use it directly?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"Animal('foo1');\nthis.name; // foo1\nAnimal('foo2');\nthis.name; // foo2\n// Hmm where is animal foo1?\n")),(0,i.kt)("p",null,"All functions at the same level share the same ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," object, so it is impossible to have multiple objects! Here is exactly why we need the ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," keyword: to put simply, it creates an object, make ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," of the function that follows to point to this object, and finally return this object when the function finishes executing (assigning the values)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const foo1 = new Animal('foo1');\nfool.name; // foo1\nconst foo2 = new Animal('foo2');\nfoo2.name; // foo2\n// Yay we can have many objects!\n")),(0,i.kt)("h4",{id:"initializing-methods"},"Initializing methods"),(0,i.kt)("p",null,"All seems good right now, let's continue to add our method, ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function Animal(name: string, noise: string = 'bar') {\n  this.name = name;\n  this.noise = noise;\n  this.saySomething = function () {\n    console.log(`${this.name} says: ${this.noise}`);\n  };\n}\n\nconst bar = new Animal('Foo');\nbar.saySomething(); // Foo says: bar\n")),(0,i.kt)("p",null,"Great! It works, and you are satisfied with that."),(0,i.kt)("p",null,"But wait a moment. There is one more thing to optimize, but you may not realize it. Let's see what is inside our initialized objects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const bar1 = new Animal('foo1');\nconst bar2 = new Animal('foo2');\nbar1; // { name: 'foo1', noise: 'bar', saySomething: f(), ... }\nbar2; // { name: 'foo2', noise: 'bar', saySomething: f(), ... }\n")),(0,i.kt)("p",null,"Do you notice it? The function ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething")," duplicates in all objects initialized, although we know that it is not going to differ between objects instantiated with the same constructor. That is going to take up much unnecessary memory space. (Same for ",(0,i.kt)("inlineCode",{parentName:"p"},"noise")," as well, but we will discuss about that later.)"),(0,i.kt)("p",null,"How do we solve this issue? Well, it would be great if we can have a common object that contains the function ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething"),". All objects instantiated by the constructor can just refer to the methods defined in this common object."),(0,i.kt)("p",null,"This common object is known as the prototype."),(0,i.kt)("p",null,"The prototype of objects comes from the ",(0,i.kt)("inlineCode",{parentName:"p"},"prototype")," property of functions. The ",(0,i.kt)("inlineCode",{parentName:"p"},"prototype")," property is only used when a function is called as a constructor with ",(0,i.kt)("inlineCode",{parentName:"p"},"new"),": an internal property known as ",(0,i.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," of the new object, also known as the prototype of the object, will be pointing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"prototype")," of the constructor."),(0,i.kt)("admonition",{title:"Too many prototypes!",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The properties ",(0,i.kt)("inlineCode",{parentName:"p"},"prototype")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," are confusing. For clarity, here we outline the difference between the two and denote them differently in this document:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prototype"),': it is a property of a function. It is the target where the prototypes of objects are pointing to. It is mentioned as "the ',(0,i.kt)("inlineCode",{parentName:"li"},"prototype"),' property" in this document.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[[Prototype]]"),": it is an internal property of an object (including a function). It points to the ",(0,i.kt)("inlineCode",{parentName:"li"},"prototype"),' property of object\'s constructor. By "internal", it means that the property is not directly accessible. It is mentioned as "the prototype of the object" in this document.'))),(0,i.kt)("p",null,"Let's change the above code properly by assigning methods to the ",(0,i.kt)("inlineCode",{parentName:"p"},"prototype")," property of the constructor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function Animal(name: string, noise: string = 'bar') {\n  this.name = name;\n  this.noise = noise;\n}\nAnimal.prototype.saySomething = function () {\n  console.log(`${this.name} says: ${this.noise}`);\n};\nconst bar1 = new Animal('foo1');\nconst bar2 = new Animal('foo2');\nbar1; // { name: 'foo1', noise: 'bar', [[Prototype]]: Object }\nbar2; // { name: 'foo1', noise: 'bar', [[Prototype]]: Object }\n")),(0,i.kt)("p",null,"If you expand ",(0,i.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," in DevTools' console, you will see:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"[[Prototype]]: {\n  saySomething: f(),\n  constructor: f Animal(name, noise = 'bar'),\n}\n")),(0,i.kt)("p",null,"While it may not be obvious, but ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething")," is not duplicated anymore and only exists in ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal.prototype"),". The one you see is exactly ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal.prototype"),", evaluated when ",(0,i.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," is actually expanded."),(0,i.kt)("p",null,"The special thing about ",(0,i.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," internal property is that when you call something like ",(0,i.kt)("inlineCode",{parentName:"p"},"bar.saySomething()"),", it first search for property ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething")," in the object's own property scope, and if it is not found, search for the property in the object's prototype scope."),(0,i.kt)("p",null,"Maybe you already think that it starts to feel like inheritance. Exactly. Let's move on to chain up the prototypes of objects to achieve the real inheritance that we want."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Accessing ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"[[Prototype]]")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," is an internal property of objects and cannot be directly accessed with the property accessor ",(0,i.kt)("inlineCode",{parentName:"p"},"."),". To access it, we can use a utility function: ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.getPrototypeOf(...)"),"."),(0,i.kt)("p",{parentName:"admonition"},"With this, we can verify that the ",(0,i.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," of the object is indeed the same instance as the ",(0,i.kt)("inlineCode",{parentName:"p"},"prototype")," property of the constructor:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"Object.getPrototypeOf(bar1) === Animal.prototype; // true\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Mutating ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"prototype")," property"),(0,i.kt)("p",{parentName:"admonition"},"It is advised not to mutate or reassign the ",(0,i.kt)("inlineCode",{parentName:"p"},"prototype")," property of constructors other than initializing methods, to avoid unexpected or inconsistent behaviors:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const bar = new Animal('Foo');\n\nAnimal.prototype.saySomething = function () {\n  console.log(`${this.name} says nothing.`);\n};\nbar.saySomething(); // Foo says nothing.\n\n// Some time later\nAnimal.prototype.saySomething = function () {\n  console.log(`${this.name} says something!`);\n};\nbar.saySomething(); // Foo says something!\n"))),(0,i.kt)("h3",{id:"inheritance-chains"},"Inheritance Chains"),(0,i.kt)("p",null,"Now how do we chain up prototypes of objects? One thing that immediately comes up in your mind is probably to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.setPrototypeOf")," method. Well, this is half correct: but the real question is what is the object that we want to set new prototype on, and where is this new prototype coming from."),(0,i.kt)("p",null,"One may be temped to set the prototype directly on instantiated objects. If you have followed me until this point, you know that it is not going to work. If we completely alter the prototype of an object, it no longer have access to the properties on the previous prototype, and hence the ability that it used to have. This is obviously not we want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function Cat(name: string) {\n  this.name = name;\n  this.noise = 'meow~';\n}\nCat.prototype.doSomething = function () {\n  console.log(`${this.name} is sleeping.`);\n};\n\nconst cat = new Cat('Mimi');\n// highlight-next-line\nObject.setPrototypeOf(cat, Cat.prototype);\ncat.doSomething(); // Mimi is sleeping.\n// error-start\ncat.saySomething();\n`TypeError: cat.saySomething is not a function`;\n// error-end\n")),(0,i.kt)("p",null,"How do we retain the original properties of the object's prototype, while being able to access new properties? The answer is simply: to use prototype itself. But this time, we are setting the prototype, or the ",(0,i.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," inner property, of the constructor's ",(0,i.kt)("inlineCode",{parentName:"p"},"prototype")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function Cat(name: string) {\n  // a bit incorrect, but let's fix it later\n  this.name = name;\n  this.noise = 'meow~';\n}\n// highlight-next-line\nObject.setPrototypeOf(Cat.prototype, Animal.prototype);\nCat.prototype.doSomething = function () {\n  console.log(`${this.name} is sleeping.`);\n};\n\nconst cat = new Cat('Mimi');\ncat.doSomething(); // Mimi is sleeping.\ncat.saySomething(); // Mimi says: meow~\n")),(0,i.kt)("p",null,"Let's inspect ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," in DevTools to understand what is happening:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  name: 'Mimi',\n  noise: 'meow~',\n  [[Prototype]]: { // Cat.prototype\n    doSomething: f(),\n    constructor: f Cat(name),\n    [[Prototype]]: { // Animal.prototype\n      saySomething: f(),\n      constructor: f Animal(name, noise = 'foo'),\n    },\n  },\n}\n")),(0,i.kt)("p",null,"We have successfully created a prototype chain! When we call ",(0,i.kt)("inlineCode",{parentName:"p"},"cat.saySomething()"),", it first tries to find ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"cat"),"'s own property. When it is not found, it searches within the prototype of ",(0,i.kt)("inlineCode",{parentName:"p"},"cat"),", that is ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat.prototype"),"'s own property. When it is still not found, it searches the prototype of ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat.prototype"),", that is ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal.prototype"),"'s own property. Finally, it found ",(0,i.kt)("inlineCode",{parentName:"p"},"saySomething")," there."),(0,i.kt)("admonition",{title:"Own property",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We refer something's own property as an object's property that does not need to be searched further within the object's prototype. In the above example, ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"noise")," are own properties of ",(0,i.kt)("inlineCode",{parentName:"p"},"cat"),". We can verify this:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"cat.hasOwnProperty('name'); // true\ncat.hasOwnProperty('noise'); // true\ncat.hasOwnProperty('doSomething'); // false\nObject.getPrototypeOf(cat).hasOwnProperty('doSomething'); // true\n"))),(0,i.kt)("p",null,"We are pretty close to the original class implementation right now. One last question is how do we achieve ",(0,i.kt)("inlineCode",{parentName:"p"},"super()"),", like in child class's constructor?"),(0,i.kt)("p",null,"We follow the same idea as ",(0,i.kt)("inlineCode",{parentName:"p"},"super"),': instead of assigning the initial properties ourselves, we make use of the constructor of the parent "class":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function Cat(name: string) {\n  Animal.prototype.constructor.call(this, name, 'meow~');\n}\nObject.setPrototypeOf(Cat.prototype, Animal.prototype);\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"What is ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"call"),"?"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"someFunction.call(someObject, ...)")," is a way to call function ",(0,i.kt)("inlineCode",{parentName:"p"},"someFunction"),", but with the context object ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," within the function pointing to ",(0,i.kt)("inlineCode",{parentName:"p"},"someObject"),"."),(0,i.kt)("p",{parentName:"admonition"},"Why we need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor.call(this, ...)")," here, instead of directly invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor(...)"),"? That is because we want to set the properties like ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," on the instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat"),", but not on the instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal.prototype"),"."),(0,i.kt)("p",{parentName:"admonition"},"See what happens if we invoke the constructor directly:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function Cat(name: string) {\n  Animal.prototype.constructor(name, 'meow~');\n}\nObject.setPrototypeOf(Cat.prototype, Animal.prototype);\nCat.prototype.doSomething = function () {\n  console.log(`${this.name} is sleeping.`);\n};\n\nconst cat = new Cat('Mimi');\ncat.doSomething(); // Mimi is sleeping.\n\nconst cat2 = new Cat('Miantiao');\ncat2.doSomething(); // Miantiao is sleeping.\ncat.doSomething(); // Miantiao is sleeping.\n// What happened to Mimi???\n")),(0,i.kt)("p",{parentName:"admonition"},"If we inspect ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," under DevTools, we will realize what is wrong here:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  // name is not here...?\n  [[Prototype]]: { // Cat.prototype\n    doSomething: f(),\n    constructor: f Cat(name),\n    [[Prototype]]: { // Animal.prototype\n      // highlight-next-line\n      name: 'Miantiao', // name is here!\n      noise: 'meow~',\n      saySomething: f(),\n      constructor: f Animal(name, noise = 'foo'),\n    },\n  }\n}\n")),(0,i.kt)("p",{parentName:"admonition"},"The constructor incorrectly sets the properties ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"noise")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal.prototype")," because ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," within the constructor ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," is pointing to ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal.prototype"),". When ",(0,i.kt)("inlineCode",{parentName:"p"},"cat2")," is instantiated, it overwrites the property ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal.prototype")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"'Mimi'")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"'Miantiao'"),". To prevent this, we need to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," when calling the constructor ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," to ensure that the properties are assigned correctly.")),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Here is the original class inheritance implemented with prototype:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// class Animal\nfunction Animal(name: string, noise: string = 'bar') {\n  this.name = name;\n  this.noise = noise;\n}\n\nAnimal.prototype.saySomething = function () {\n  console.log(`${this.name} says: ${this.noise}`);\n};\n\n// class Cat\nfunction Cat(name: string) {\n  Animal.prototype.constructor.call(this, name, 'meow~');\n}\n// extends Animal\nObject.setPrototypeOf(Cat.prototype, Animal.prototype);\n\nCat.prototype.doSomething = function () {\n  console.log(`${this.name} is sleeping.`);\n};\n\n// class Dog\nfunction Dog(name: string) {\n  Animal.prototype.constructor.call(this, name, 'woof!');\n}\n// extends Animal\nObject.setPrototypeOf(Dog.prototype, Animal.prototype);\n\nDog.prototype.doSomething = function () {\n  console.log(`${this.name} is running around.`);\n};\n\nconst dog = new Dog('Lele');\ndog.saySomething(); // Lele says: woof!\ndog.doSomething(); // Lele is running around.\n\nconst cat = new Cat('Mimi');\ncat.saySomething(); // Mimi says: meow~\ncat.doSomething(); // Mimi is sleeping.\n")))}m.isMDXComponent=!0}}]);