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

Selectors can be combined together to give more fine-tuned selection of elements based on their positions in a document tree (except selector list, which is technically not a combinator).

- **Selector list**

  A selector list is formed by joining multiple selectors with comma (`,`). Elements matching **any** of the selectors in a selector list will be selected.

  ```css
  h1,
  .main-content {
    /* ... */
  }
  ```

  ```html
  <h1>Selected!</h1>
  <div class="main-content">Selected!</div>
  ```

- **Descendent / child combinator**

  A descendent combinator is formed by joining selectors with space (`" "`). Given a descendent combinator with two selectors, elements matching the second selector will be selected if they have an ancestor (direct or indirect parent) element matching the first selector. This process is done recursively for more than 2 selectors.

  ```css
  .document-toc-container .document-toc-list,
  .document-toc-container .document-toc-item {
    /* ... */
  }
  ```

  ```html
  <div class="document-toc-container">
    <ul class="document-toc-list">
      Selected!
      <li class="document-toc-item">Selected!</li>
    </ul>
  </div>
  ```

  A child combinator is formed by joining selectors with `>`. Unlike descendent combinator, elements matching the second selector will be selected if they have a direct parent element matching the first selector.

  ```css
  .document-toc-container > .document-toc-list,
  .document-toc-container > .document-toc-item {
    /* ... */
  }
  ```

  ```html
  <div class="document-toc-container">
    <ul class="document-toc-list">
      Selected!
      <li class="document-toc-item">Not selected...</li>
    </ul>
  </div>
  ```

- **Sibling combinator**

  An adjacent sibling combinator is formed by joining selectors with `+`. Elements matching the second selector will be selected if they are adjacent siblings **following** elements matching the first selector.

  ```css
  h1 + p {
    /* ... */
  }
  ```

  ```html
  <div>
    <h1></h1>
    <p>Selected!</p>
    <div></div>
  </div>
  ```

  A general sibling combinator is formed by joining selectors with `~`. Elements matching the second selector will be selected if they are siblings **following** elements matching the first selector.

  ```css
  h1 ~ div {
    /* ... */
  }
  ```

  ```html
  <div>
    <h1></h1>
    <p></p>
    <div>Selected!</div>
  </div>
  ```

### Specificity

Every combination of selectors have a specificity. Higher specificity means higher priority for the styles to be applied, overwriting styles of lower specificity ones.

Computation of specificity [can be found here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2). As a general rule, to compare the specificity of two styles, we first find the selector with the highest specificity in the combination:

```
!important > inline styles > ID selector > class selector > type selector
```

If the selectors with the highest specificity have the same type, then their number determines the specificity. If they have the same number, then the selectors with the second highest specificity determines the final specificity. This process goes on. If two styles have the same final specificity, whichever comes last will be applied.

## Layout

### Display

HTML elements reside in boxes. The display type of these boxes determines the rules for which the elements are positioned in a page. The display type is specified via the `display` CSS property.

You may specify both the outer display type and inner display type using property `display`, and the two can be specified together. It is more common to see only inner display types being specified as HTML elements have respective outer display types by default.

- Outer display types:

  - `block`: the element participates in Block Formatting Context (BFC), that is:

    - The element starts on a new line.
    - `width`, `height`, `margin`, `padding`, `border` apply and affect positioning.
    - The element fills up the available width in its container.

    `block` is default for HTML elements `<div>`, `<h1>`, `<p>`, `<ul>`, `<ol>`, `<li>`, ...

  - `inline`: the element participates in Inline Formatting Context (IFC), that is:

    - The element continues on the same line.
    - `width` and `height` does not apply and have no effect on positioning.
    - `margin`, `padding`, `border` apply but only horizontal ones have effect on positioning.

    `inline` is default for HTML elements `<a>`, `<span>`, `<label>`, `<button>`, `<input>`, ...

  - `inline-block`: the element participates in IFC with an inner BFC, that is:

    - The element continues on the same line.
    - `width`, `height`, `margin`, `padding`, `border` apply and affect positioning.

  - `none`: do not render the element.

  :::info Info

  The difference between `display:none` and `visibility:hidden` is that `display:none` completely excludes the element by taking it out of the document flow and the element does not take up space, while `visibility:hidden` simply makes the element invisible, but the element still takes up space and child elements are still visible, similar to `opacity:0`.

  :::

  See the [complete list of elements here](https://www.w3schools.com/html/html_blocks.asp).

  <details>

  <summary><strong>Formatting Context</strong></summary>

  The formatting context refers to a part of the page where the elements in the context should be arranged in a particular way. The two common formatting contexts are block formatting context (BFC) and inline formatting context (IFC). The initial block formatting context is created by the outmost `<html>` element.

  A BFC acts as an independent container separating inner elements from the outside, hence the height of a container with an inner BFC includes the height of floating elements within the BFC.

  For further details and ways to create an inner BFC, [refer to here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts).

  </details>

- Inner display types:

  `flow` (default), `flow-root`, [`flex`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), [`grid`](https://css-tricks.com/snippets/css/complete-guide-grid/), `table`

### Box Model

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

  Negative padding takes no effect.

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

  Negative border width takes no effect.

- **Margin**

  Specified by the property `margin`.

  ```css
  div {
    margin: 10px 10px 10px 10px; /* same rule as padding */
  }
  ```

  Negative margin allows other elements in the margin direction to occupy the space taken by the element. If the element is the top-most / left-most element, a negative top / left margin causes the element to move outside of the page.

  Margin `auto` can be used with `position: absolute` to automatically position the content in a container.

### Positioning

Positioning is used to override how an element will be arranged in the document, as specified by the [display types](#display-types). The positioning is specified by the `position` CSS property.

- `static`

  The default positioning. Takes no effect.

- `relative`

  To be used together with `top`, `right`, `bottom`, `left` to specify how much an element should be shifted relative to its default position. Note that it does not affect the original space taken up by the element and the positioning of other elements, so the resultant effect is similar to `transform: translate(...)`. In addition, `top` and `bottom` / `right` and `left` are contradicting and only the last one specified in a pair will apply.

  Creates a **positioning context** for it's descendent elements.

- `absolute`

  To be used together with `top`, `right`, `bottom`, `left` to specify the distances between edges of an element to the edges of the containing element which creates the positioning context. The element with `absolute` positioning is taken out of the document flow and hence does not occupy space.

  If all elements in a document have `static` positioning, then the default positioning context would be the initial containing block, which has the dimensions of the viewport and contains the `<html>` element.

- `fixed`

  Similar to `absolute` positioning but the positioning of the element to the visible portion of the viewport.

- `sticky`

  To be used together with `top`, `right`, `bottom`, `left` to specify the minimum distances between edges of an element to the edges of the nearest ancestor element that has a "scrolling mechanism". When the minimum distances are not reached, the element is positioned in a default way like in the document flow.

## Values and Units

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
