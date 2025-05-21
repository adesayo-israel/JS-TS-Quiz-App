const questionBank = [
    
        
      {
        question: "What is the type of typeof null?",
        options: ["null", "object", "undefined", "function"],
        answer: 1
      },
      {
        question: "What will this log? function greet() { console.log(\"Hi\"); } greet();",
        options: ["Error", "undefined", "Hi", "Nothing"],
        answer: 2
      },
      {
        question: "What concept allows inner() to access count?",
        options: ["Hoisting", "Closure", "Inheritance", "Scope chain"],
        answer: 1
      },
      {
        question: "What will the Promise example output after 1 second?",
        options: ["Done!", "undefined", "Error", "Nothing"],
        answer: 0
      },
      {
        question: "Which of the following is true about IIFEs?",
        options: ["They pollute global scope", "They run only on page load", "They help encapsulate variables", "They throw errors"],
        answer: 2
      },
      {
        question: "What is the output of: let x = 10; if (true) { let x = 20; console.log(x); } console.log(x);",
        options: ["20 and 20", "20 and undefined", "20 and 10", "Error"],
        answer: 2
      },
      {
        question: "What does the Event Loop do in JavaScript?",
        options: [
          "Blocks execution until all code is done",
          "Executes async callbacks after the stack is clear",
          "Skips async code",
          "Executes everything in parallel"
        ],
        answer: 1
      },
      {
        question: "Which of the following is true about async/await?",
        options: [
          "It blocks the call stack",
          "It replaces Promises",
          "It simplifies writing async code",
          "It can be used outside functions"
        ],
        answer: 2
      },
      {
        question: "What is the result of '1' + 2 + 3?",
        options: ["123", "6", "33", "Error"],
        answer: 0
      },
      {
        question: "What is the output of 1 == '1' and 1 === '1'?",
        options: ["true and true", "true and false", "false and true", "false and false"],
        answer: 1
      },
      {
        question: "Which variable declaration is block scoped?",
        options: ["var", "let", "const", "let and const"],
        answer: 3
      },
      {
        question: "What is the value of 'this' inside a regular function in strict mode?",
        options: ["undefined", "global", "window", "null"],
        answer: 0
      },
      {
        question: "Which method is used to create a new object from a prototype?",
        options: ["Object.assign", "Object.create", "Object.clone", "Object.inherit"],
        answer: 1
      },
      {
        question: "Which pattern is used to delay execution until a pause in input?",
        options: ["Throttling", "Debouncing", "Memoization", "Closure"],
        answer: 1
      },
      {
        question: "Which pattern limits function execution to once per time period?",
        options: ["Debouncing", "Throttling", "Memoization", "Closure"],
        answer: 1
      },
      {
        question: "What is currying?",
        options: [
          "Transforming a function with multiple arguments into nested single-argument functions",
          "Reducing function arguments",
          "Memoizing a function",
          "Executing a function immediately"
        ],
        answer: 0
      },
      {
        question: "What is the output of (() => typeof arguments)()?",
        options: ["object", "undefined", "function", "array"],
        answer: 1
      },
      {
        question: "Which operator is used to spread an array into individual elements?",
        options: ["...", "*", "&&", "||"],
        answer: 0
      },
      {
        question: "What keyword is used to export a function in ES6 module?",
        options: ["export", "module", "require", "return"],
        answer: 0
      },
      {
        question: "Which feature allows default values in function parameters?",
        options: ["Destructuring", "ES6 Default Parameters", "Spread operator", "Arrow functions"],
        answer: 1
      },
      {
        question: "Which data structure does Set resemble most?",
        options: ["Array", "Map", "Object", "Stack"],
        answer: 0
      },
      {
        question: "Which object method converts a JSON string to an object?",
        options: ["JSON.toObject", "JSON.stringify", "JSON.parse", "JSON.convert"],
        answer: 2
      },
      {
        question: "What does NaN === NaN return?",
        options: ["true", "false", "Error", "undefined"],
        answer: 1
      },
      {
        question: "Which method is used to copy all enumerable properties from one or more objects to a target object?",
        options: ["Object.assign", "Object.copy", "Object.merge", "Object.join"],
        answer: 0
      },
      {
        question: "Which TypeScript keyword is used to define a custom data type?",
        options: ["type", "interface", "class", "any"],
        answer: 0
      },
      {
        question: "Which of these TypeScript types allows any value?",
        options: ["any", "unknown", "never", "void"],
        answer: 0
      },
      {
        question: "Which of these types represents no value in TypeScript?",
        options: ["void", "never", "null", "undefined"],
        answer: 0
      },
      {
        question: "What does keyof T return in TypeScript?",
        options: ["Values", "Keys", "Types", "Strings"],
        answer: 1
      },
      {
        question: "What does the 'as' keyword do in TypeScript?",
        options: ["Casts type", "Declares variable", "Imports module", "Exports function"],
        answer: 0
      },
      {
        question: "Which utility type makes all properties optional?",
        options: ["Partial", "Optional", "Nullable", "Loose"],
        answer: 0
      },
      {
        question: "What does the '===' operator do in JavaScript?",
        options: [
          "Checks only value equality",
          "Checks both value and type equality",
          "Converts types and compares values",
          "Assigns values strictly"
        ],
        answer: 1
      },
      {
        question: "What is the output of typeof null?",
        options: ["null", "object", "undefined", "false"],
        answer: 1
      },
      {
        question: "Which symbol is used for optional chaining?",
        options: ["&&", "??", "?.", "::"],
        answer: 2
      },
      {
        question: "What is the type of typeof null?",
        options: ["null", "object", "undefined", "function"],
        answer: 1
      },
      {
        question: "What will this log? function greet() { console.log(\"Hi\"); } greet();",
        options: ["Error", "undefined", "Hi", "Nothing"],
        answer: 2
      },
      {
        question: "What concept allows inner() to access count?",
        options: ["Hoisting", "Closure", "Inheritance", "Scope chain"],
        answer: 1
      },
      {
        question: "What will the Promise example output after 1 second?",
        options: ["Done!", "undefined", "Error", "Nothing"],
        answer: 0
      },
      {
        question: "Which of the following is true about IIFEs?",
        options: ["They pollute global scope", "They run only on page load", "They help encapsulate variables", "They throw errors"],
        answer: 2
      },
      {
        question: "What is the output of: let x = 10; if (true) { let x = 20; console.log(x); } console.log(x);",
        options: ["20 and 20", "20 and undefined", "20 and 10", "Error"],
        answer: 2
      },
      {
        question: "What does the Event Loop do in JavaScript?",
        options: [
          "Blocks execution until all code is done",
          "Executes async callbacks after the stack is clear",
          "Skips async code",
          "Executes everything in parallel"
        ],
        answer: 1
      },
      {
        question: "Which of the following is true about async/await?",
        options: [
          "It blocks the call stack",
          "It replaces Promises",
          "It simplifies writing async code",
          "It can be used outside functions"
        ],
        answer: 2
      },
      {
        question: "What is the result of '1' + 2 + 3?",
        options: ["123", "6", "33", "Error"],
        answer: 0
      },
      {
        question: "What is the output of 1 == '1' and 1 === '1'?",
        options: ["true and true", "true and false", "false and true", "false and false"],
        answer: 1
      },
      {
        question: "Which variable declaration is block scoped?",
        options: ["var", "let", "const", "let and const"],
        answer: 3
      },
      {
        question: "What is the value of 'this' inside a regular function in strict mode?",
        options: ["undefined", "global", "window", "null"],
        answer: 0
      },
      {
        question: "Which method is used to create a new object from a prototype?",
        options: ["Object.assign", "Object.create", "Object.clone", "Object.inherit"],
        answer: 1
      },
      {
        question: "Which pattern is used to delay execution until a pause in input?",
        options: ["Throttling", "Debouncing", "Memoization", "Closure"],
        answer: 1
      },
      {
        question: "Which pattern limits function execution to once per time period?",
        options: ["Debouncing", "Throttling", "Memoization", "Closure"],
        answer: 1
      },
      {
        question: "What is currying?",
        options: [
          "Transforming a function with multiple arguments into nested single-argument functions",
          "Reducing function arguments",
          "Memoizing a function",
          "Executing a function immediately"
        ],
        answer: 0
      },
      {
        question: "What is the output of (() => typeof arguments)()?",
        options: ["object", "undefined", "function", "array"],
        answer: 1
      },
      {
        question: "Which operator is used to spread an array into individual elements?",
        options: ["...", "*", "&&", "||"],
        answer: 0
      },
      {
        question: "What keyword is used to export a function in ES6 module?",
        options: ["export", "module", "require", "return"],
        answer: 0
      },
      {
        question: "Which feature allows default values in function parameters?",
        options: ["Destructuring", "ES6 Default Parameters", "Spread operator", "Arrow functions"],
        answer: 1
      },
      {
        question: "Which data structure does Set resemble most?",
        options: ["Array", "Map", "Object", "Stack"],
        answer: 0
      },
      {
        question: "Which object method converts a JSON string to an object?",
        options: ["JSON.toObject", "JSON.stringify", "JSON.parse", "JSON.convert"],
        answer: 2
      },
      {
        question: "What does NaN === NaN return?",
        options: ["true", "false", "Error", "undefined"],
        answer: 1
      },
      {
        question: "Which method is used to copy all enumerable properties from one or more objects to a target object?",
        options: ["Object.assign", "Object.copy", "Object.merge", "Object.join"],
        answer: 0
      },
      {
        question: "Which TypeScript keyword is used to define a custom data type?",
        options: ["type", "interface", "class", "any"],
        answer: 0
      },
      {
        question: "Which of these TypeScript types allows any value?",
        options: ["any", "unknown", "never", "void"],
        answer: 0
      },
      {
        question: "Which of these types represents no value in TypeScript?",
        options: ["void", "never", "null", "undefined"],
        answer: 0
      },
      {
        question: "What does keyof T return in TypeScript?",
        options: ["Values", "Keys", "Types", "Strings"],
        answer: 1
      },
      {
        question: "What does the 'as' keyword do in TypeScript?",
        options: ["Casts type", "Declares variable", "Imports module", "Exports function"],
        answer: 0
      },
      {
        question: "Which utility type makes all properties optional?",
        options: ["Partial", "Optional", "Nullable", "Loose"],
        answer: 0
      },
      {
        question: "What does the '===' operator do in JavaScript?",
        options: [
          "Checks only value equality",
          "Checks both value and type equality",
          "Converts types and compares values",
          "Assigns values strictly"
        ],
        answer: 1
      },
      {
        question: "Which of the following is not a primitive data type in JavaScript?",
        options: ["Symbol", "Undefined", "Object", "Boolean"],
        answer: 2
      },
      {
        question: "Which method can be used to stop event bubbling?",
        options: ["stopPropagation()", "preventDefault()", "stopBubble()", "cancelBubble()"],
        answer: 0
      },
      {
        question: "What is the purpose of 'use strict'?",
        options: [
          "Enable ES6 features",
          "Enable strict mode for secure JavaScript",
          "Disable async functions",
          "Use newer syntax"
        ],
        answer: 1
      },
      {
        question: "Which keyword is used to create a class in TypeScript?",
        options: ["class", "function", "type", "interface"],
        answer: 0
      },
      {
        question: "What is the output of `typeof null`?",
        options: ["null", "object", "undefined", "false"],
        answer: 1
      },
      {
        question: "How do you define a tuple type in TypeScript?",
        options: [
          "let x: [] = [1, 'a'];",
          "let x = [1, 'a'];",
          "let x: [number, string] = [1, 'a'];",
          "let x: any[] = [1, 'a'];"
        ],
        answer: 2
      },
      {
        question: "What is an IIFE in JavaScript?",
        options: [
          "A function that is executed immediately after declaration",
          "A type of arrow function",
          "A function that returns itself",
          "A recursive function"
        ],
        answer: 0
      },
      {
        question: "Which of the following is NOT a valid way to declare a variable?",
        options: ["var", "let", "const", "define"],
        answer: 3
      },
      {
        question: "What will `Promise.resolve(5).then(console.log)` print?",
        options: ["undefined", "Promise", "5", "Error"],
        answer: 2
      },
      {
        question: "What is the output of `0.1 + 0.2 === 0.3`?",
        options: ["true", "false", "NaN", "undefined"],
        answer: 1
      },
      {
        question: "What does the 'async' keyword do to a function?",
        options: [
          "Makes it return a promise",
          "Forces it to run after other functions",
          "Creates a blocking function",
          "None of the above"
        ],
        answer: 0
      },
      {
        question: "Which built-in method calls a function for each element in an array?",
        options: ["each()", "loop()", "forEach()", "every()"],
        answer: 2
      },
      {
        question: "Which of these is a correct way to cast a string to a number in TypeScript?",
        options: [
          "Number('123')",
          "'123'.toNumber()",
          "parseInt('123')",
          "Both 1 and 3"
        ],
        answer: 3
      },
      {
        question: "Which symbol is used to denote optional properties in TypeScript interfaces?",
        options: ["!", ":", "?", "#"],
        answer: 2
      },
      {
        question: "Which is a valid way to declare a generic function in TypeScript?",
        options: [
          "function id<T>(value: T): T {}",
          "function id(value<T>): T {}",
          "function<T> id(value): T {}",
          "function id(value): generic {}"
        ],
        answer: 0
      },
      {
        question: "What does the spread operator `...` do?",
        options: [
          "Spreads characters into strings",
          "Spreads elements of an array or object",
          "Combines objects",
          "Returns the memory address"
        ],
        answer: 1
      },
      {
        question: "What is the purpose of `Object.freeze()`?",
        options: [
          "Make object properties immutable",
          "Stop memory leaks",
          "Prevent deletion of the object",
          "Clone an object"
        ],
        answer: 0
      },
      {
        question: "Which of these is used to handle errors in JavaScript?",
        options: ["try-catch", "promise-catch", "error-catch", "both 1 and 2"],
        answer: 3
      },
      {
        question: "What does `map()` return?",
        options: [
          "A transformed array",
          "A filtered array",
          "A boolean",
          "Nothing"
        ],
        answer: 0
      },
      {
        question: "Which feature is introduced in ES6?",
        options: ["Arrow functions", "Promises", "let and const", "All of the above"],
        answer: 3
      },
      {
        question: "Which method is used to make an object iterable?",
        options: ["Symbol.iterator", "toIterable()", "makeIterator()", "None"],
        answer: 0
      },
      {
        question: "What does the 'this' keyword refer to in arrow functions?",
        options: ["Global object", "Function context", "Lexical context", "DOM"],
        answer: 2
      },
      {
        question: "What will be the output: `typeof NaN`?",
        options: ["number", "NaN", "undefined", "object"],
        answer: 0
      },
      {
        question: "Which of the following is true about 'null' and 'undefined'?",
        options: [
          "Both are equal with ===",
          "They are different types",
          "They are both objects",
          "undefined is derived from null"
        ],
        answer: 1
      },
      {
        question: "What will `console.log([] + {})` output?",
        options: ["[object Object]", "NaN", "0", "undefined"],
        answer: 0
      },
      {
        question: "Which operator allows safe access to nested object properties?",
        options: ["&&", "??", "?.", "!"],
        answer: 2
      },
      {
        question: "What does `setTimeout(fn, 0)` do?",
        options: [
          "Executes fn immediately",
          "Adds fn to the call stack",
          "Executes fn after current call stack",
          "Blocks execution for fn"
        ],
        answer: 2
      },
      {
        question: "Which method is used to combine arrays?",
        options: ["merge()", "combine()", "concat()", "push()"],
        answer: 2
      },
      {
        question: "Which of the following is a TypeScript utility type?",
        options: ["Partial", "Optional", "Nullable", "Flexible"],
        answer: 0
      },
      {
        question: "How do you define an enum in TypeScript?",
        options: [
          "enum Color { Red, Green, Blue }",
          "type Color = { Red, Green, Blue }",
          "Color = enum(Red, Green, Blue)",
          "enum = Color { Red, Green, Blue }"
        ],
        answer: 0
      },
      {
        question: "What is 'debouncing' in JavaScript?",
        options: [
          "A method to call a function immediately",
          "A technique to delay a function call until input stops",
          "A bug in event handling",
          "A type of callback"
        ],
        answer: 1
      },
      {
        question: "What will be the result of `[] == ![]`?",
        options: ["true", "false", "error", "undefined"],
        answer: 0
      },
      {
        question: "How is inheritance implemented in JavaScript?",
        options: ["Prototypes", "Classes", "Objects", "Modules"],
        answer: 0
      },
      {
        question: "What does `Object.assign()` do?",
        options: [
          "Copy object properties",
          "Freeze an object",
          "Compare objects",
          "Merge arrays"
        ],
        answer: 0
      },
      {
        question: "Which one is not hoisted?",
        options: ["var", "function", "let", "function*"],
        answer: 2
      },
      {
        question: "What is the main benefit of TypeScript?",
        options: [
          "Dynamic typing",
          "Static typing and type safety",
          "More libraries",
          "Faster execution"
        ],
        answer: 1
      },
      {
        question: "What is the default return type of `Array.prototype.filter()`?",
        options: ["Boolean", "Number", "Array", "Object"],
        answer: 2
      },
      {
        question: "What happens if you declare the same variable twice using `var`?",
        options: ["Syntax error", "Last declaration overrides", "Both coexist", "Ignored"],
        answer: 1
      },
      {
        question: "Which statement is true about `let` declarations?",
        options: [
          "They are function-scoped",
          "They can be redeclared",
          "They are block-scoped",
          "They are hoisted and initialized"
        ],
        answer: 2
      }
 
];