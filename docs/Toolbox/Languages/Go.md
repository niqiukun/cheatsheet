# Go

## Basics

### Variables

Variables are declared with `var` or `:=`:

```go
var a = 1
var b, c, d = 2, 3, 4 // multiple variables

// alternatively
a := 1
b, c, d := 2, 3, 4    // multiple variables

// default initialization with types
var i int    // i == 0
var b bool   // b == false
var s string // s == ""
```

The variable type is inferred from the value when the type is not explicitly specified during declaration. The basic types in Go are `bool`, `string`, `int` and `intXX`, `uint` and `uintXX`, `floatXX`, `complexXX`, `byte`, `rune`. Refer to [the list here](https://go.dev/tour/basics/11).

Note that `string` type in Go use double quotes (`""`).

#### Constants

Constants are declared with `const`:

```go
const Pi = 3.14

// multiple constants
const (
  Big = 1 << 100
  Small = Big >> 99
)
```

Types of constants are applied when the constants are actually assigned to variables, or used as function parameters. Hence, constants can represent more precisely than the basic types:

```go
// error-start
var big = Big
"cannot use Big (untyped int constant 1267650600228229401496703205376) as int value in variable declaration (overflows)"
// error-end
```

### Functions

Here is a basic function in Go:

```go
func add(x int, y int) int {
  return x + y
}
```

Note that you must have return types for functions. Functions without return types are void functions that do not return values.

Some other special things about functions in Go:

```go
// merging params of the same type
func swap(x, y int) (int, int) {
  // return multiple values
  return y, x
}

// or named returns
func swap(x, y int) (a int, b int) {
  a = y
  b = x
  return
}
```

### Flow Control

#### Loop

`for` is the only looping construct in Go.

```go
for i := 0; i < 10; i++ {
  fmt.Println(i)
}
```

Omit initialization and increment to construct a "while" loop:

```go
i := 0
for i < 10 {
  fmt.Println(i)
  i += 1
}
```

#### Conditional

Here is a simple `if` block:

```go
if true {
  fmt.Println("Hello world!")
}
```

You can declare a variable prior to specifying the condition, the variable will be available throughout the scope of the `if` block:

```go
if result := operation(); result <= threshold {
  fmt.Printf("Result is %d, not exceeding threshold\n", result)
} else {
  fmt.Printf("Result is %d, exceeding threshold\n", result)
}
```

Another conditional is the `switch` statement. While the syntax is like other languages, `break` statements are provided automatically for each case. Also, switch need not to be on a variable: hence it can be used to replace long if else statements.

#### Defer

`defer` is to specify functions to execute after the outer function returns, with the currently evaluated parameters.

```go
func main() {
  answer := 0
  defer fmt.Println(answer)
  answer = 42
  fmt.Print("The answer to everything is: ")
}
// The answer to everything is: 0
```

Deferred functions are pushed to a stack and executed in last-in-first-out order:

```go
func main() {
  defer fmt.Println()
  for i := 0; i < 3; i++ {
    defer fmt.Printf("%d ", i)
  }
}
// 2 1 0
```

### Pointers
