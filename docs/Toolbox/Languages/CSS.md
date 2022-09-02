# CSS

## Selectors

The selectors in CSS determine the elements to apply respective styles on. If there are multiple elements matching a selector, all these elements will be selected and styled.

### Type of Selectors

- **Type selector**

  ```css
  h1 {
    /* ... */
  }
  ```

  Selects the element if the type of the element (the tag name) matches the selector. Cannot be chained after other selectors. Have low specificity.

  The **universal selector** is a special type selector that selects all types of elements:

  ```css
  * {
    /* ... */
  }
  ```

- **Class selector**

  ```css
  .main-content {
    /* ... */
  }
  ```

  Selects the element if the element includes the class name specified in the selector.

  Can be chained after other selectors:

  ```css
  div.page-wrapper.document-page {
    /* ... */
  }
  ```

  By chaining selectors, all selectors must be satisfied to match an element.

  The **pseudo-class selector** is just like a class selector but works with [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes): classes that are not actually applied to the elements but can be used to match elements in a certain state. Such state can be the state of the element itself (`:invalid` for `<input>`), due to user interaction (`:hover` or `:focus`), or related to where the element is positioned in the document tree (`:first-child`, `:last-child`, `:nth-child`).

  Pseudo-class selectors can be chained after other selectors.

  ```css
  a:hover {
    /* ... */
  }
  ```

  **Pseudo elements** are not actual HTML elements but refer to special parts of HTML elements that can be selected by the **pseudo-element selector**. For example, `::first-line` selects the first line of text in an element.

  ```css
  p::first-line {
    /* ... */
  }
  ```

  Pseudo elements can also be generated with the pseudo-element selector. For example, `::before` and `::after` generate pseudo-elements before and after an element with the `content` property. Note that the `content` property is required for the pseudo-element to show, so an empty content `content: ""` can be used in this case.

- **Attribute selector**

  ```css
  [attr='value'] {
    /* ... */
  }
  ```

  Selects the element if the element's attribute matches the condition specified by the selector. For the full list of conditions available, [refer to here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors). Can be chained after other selectors.

- **ID selector**

  ```css
  #sidebar-quicklinks {
    /* ... */
  }
  ```

  Selects the element if the element id matches the selector. Can be chained after other selectors. You should not expect selecting multiple elements using ID selectors since the elements are supposed to have unique IDs. Have high specificity.

### Combining Selectors

## Box Model

### Display Types

HTML elements reside in boxes. The display type of these boxes determines the rules for which the elements are positioned in a page. The display type is specified via the `display` CSS property.

You may specify both the outer display type and inner display type using property `display`, and the two can be specified together. It is more common to see only inner display types being specified as HTML elements have respective outer display types by default.

- Outer display types:

  - `block`

    - The element starts on a new line.
    - `width`, `height`, `margin`, `padding`, `border` apply and affect positioning.
    - The element fills up the available width in its container.

    `block` is default for HTML elements `<div>`, `<h1>`, `<p>`, `<ul>`, `<ol>`, `<li>`, ...

  - `inline`:

    - The element continues on the same line.
    - `width` and `height` does not apply and have no effect on positioning.
    - `margin`, `padding`, `border` apply but have no effect on positioning.

    `inline` is default for HTML elements `<a>`, `<span>`, `<label>`, `<button>`, `<input>`, ...

  - `inline-block`:

    - The element continues on the same line.
    - `width`, `height`, `margin`, `padding`, `border` apply and affect positioning.

  See the [complete list here](https://www.w3schools.com/html/html_blocks.asp).

- Inner display types:

  `flow` (default), `flex`, `grid`, `table`

### Parts of the Box Model

A box that contains the HTML element is made up of content, padding, border and margin.

- **Content**

  Specified by the properties `width` (`inline-size` if text is horizontal) and `height` (`block-size` if text is horizontal).

  In the standard box model, padding, border, and margin are outside the content.

  In the alternative box model specified by `box-sizing: border-box`, padding and border are inside the content, only margin is outside the content.

- **Padding**

  Specified by the property `padding`.

  ```css
  div {
    padding: 10px; /* all sides */
    padding: 10px 10px; /* vertical, horizontal */
    padding: 10px 10px 10px; /* top, horizontal, bottom */
    padding: 10px 10px 10px 10px; /* top, right, bottom, left */
    /* not using shorthand */
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
  }
  ```

- **Border**

  Specified by the property `border`.

  ```css
  div {
    border: solid; /* style */
    border: 2px solid; /* width, style */
    border: solid #66ccff; /* style, color */
    border: 2px solid #66ccff; /* width, style, color */
    /* not using shorthand */
    border-width: 2px 2px 2px 2px; /* same rule as padding */
    border-style: solid solid solid solid; /* same rule as padding */
    /* common values include: none, solid, dashed, dotted, double */
    border-color: blue blue blue blue; /* same rule as padding */
  }
  ```

- **Margin**

  Specified by the property `margin`.

  ```css
  div {
    margin: 10px 10px 10px 10px; /* same rule as padding */
  }
  ```

## Values

### Lengths

Represent a length in CSS.

- **Absolute length units**

  The most useful is `px`, representing 1 pixel. Others like `in` exists (`1in = 96px`) but not commonly used.

- **Relative length units**

  The most useful is `rem`, representing the root element's font size (by default `16px`).

  Other common ones include:

  | Unit  | Meaning                                    |
  | ----- | ------------------------------------------ |
  | `em`  | the current / parent element's font size   |
  | `lh`  | the current / parent element's line height |
  | `rlh` | the root element's line height             |
  | `vw`  | 1% of the viewport's width                 |
  | `vh`  | 1% of the viewport's height                |

- **Percentages**

  The length relative to the parent element's same property.