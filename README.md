# layout.css

### Lightweight CSS Layout Framework

![CSS](https://img.shields.io/badge/-CSS-0?&style=for-the-badge&logo=CSS3&logoColor=black&color=white)
![CSS](https://img.shields.io/badge/minified%20size-4.79kb-0?&style=for-the-badge&labelColor=white&color=black)
![CSS](https://img.shields.io/badge/license-MIT-0?&style=for-the-badge&labelColor=white&color=black)
![CSS](https://img.shields.io/badge/version-1.2.0-0?&style=for-the-badge&labelColor=white&color=black)

layout.css contains a small set of CSS classes that can be used in any website or application. It's main purpose is to help developers to create intuitive and responsive website layouts in minutes.

## Features

- Flexible page containers
- A responsive grid system
- Numerous helper and utility classes
- Ability to reset certain properties
- Cross-browser compatibility
- Easy to use

### Flexible Page Containers

Containers will **always** adjust to the width of the page.

```html
<div class="container">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, corporis? Placeat eligendi velit molestiae eveniet harum ipsum, natus praesentium inventore, minus aut adipisci magnam? Impedit tempore qui modi. Enim, ad.
</div>
```

### A responsive Grid System

A grid is made out of rows and columns, just like tables.

```html
<div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
</div>
```

In this case all of the columns will have even width.
`width = (1 / number of columns) * 100 %`

![col no w](https://github.com/gergoszaszvaradi/layout.css/raw/master/resources/col_no_w.png)

Of course you can specify the number of columns in a row without setting the width manually on each column. You can use the `c` CSS class to achieve the desired effect.

```html
<div class="row c2">
    <div class="col">.col</div>
    <div class="col">.col</div>
    <div class="col">.col</div>
    <div class="col">.col</div>
</div>
```

![row c](https://github.com/gergoszaszvaradi/layout.css/raw/master/resources/row_c.png)

In this case, we have 4 columns, but we only allow 2 columns to be in one row. Because the 3. column will not fit in the first row, it's going to wrap to the next row.

### Numerous Helper and Utility Classes

#### Width

There are 12 columns in each row.

![w1 - w12](https://github.com/gergoszaszvaradi/layout.css/raw/master/resources/w1-w12.png)

You can specify for each column how many columns it covers.

```html
<div class="row">
    <div class="col w1">col</div>
    <div class="col w9">col</div>
    <div class="col w2">col</div>
</div>
```

![col diff w](https://github.com/gergoszaszvaradi/layout.css/raw/master/resources/col_diff_w.png)

In this case, if you do not specify the width of the last column, it is going to stretch to the edge of the row.

#### Offset

Offset works just like width, but it pushes the column instead of widening them.

```html
<div class="row"><div class="col w1">.col.w3</div></div>
<div class="row"><div class="col w1 o1">.col.w3.o1</div></div>
<div class="row"><div class="col w1 o2">.col.w3.o2</div></div>
<div class="row"><div class="col w1 o3">.col.w3.o3</div></div>
<div class="row"><div class="col w1 o4">.col.w3.o4</div></div>
<div class="row"><div class="col w1 o5">.col.w3.o5</div></div>
<div class="row"><div class="col w1 o6">.col.w3.o6</div></div>
<div class="row"><div class="col w1 o7">.col.w3.o7</div></div>
<div class="row"><div class="col w1 o8">.col.w3.o8</div></div>
<div class="row"><div class="col w1 o9">.col.w3.o9</div></div>
<div class="row"><div class="col w1 o10">.col.w3.o10</div></div>
<div class="row"><div class="col w1 o11">.col.w3.o11</div></div>
```

![o1 - o12](https://github.com/gergoszaszvaradi/layout.css/raw/master/resources/o1-o12.png)

```html
<div class="row"><div class="col w3">.col.w3</div></div>
<div class="row"><div class="col w3 o2">.col.w3.o2</div></div>
<div class="row"><div class="col w4 o7">.col.w4.o7</div></div>
```

![col diff o](https://github.com/gergoszaszvaradi/layout.css/raw/master/resources/col_diff_o.png)

#### Gutter

Gutter is used to add some padding to columns and rows. There are 3 ways to define gutter. Gutter all around (`g`), horizontally (`gx`), vertically (`gy`).

```html
<div class="row g2">
    <div class="col"><div class="box">.col</div></div>
    <div class="col"><div class="box">.col</div></div>
    <div class="col"><div class="box">.col</div></div>
    <div class="col"><div class="box">.col</div></div>
</div>
```

![row g2](https://github.com/gergoszaszvaradi/layout.css/raw/master/resources/row_g2.png)

#### Margin and Padding

Margin and padding can be set the same way as offset or gutter. You can set individual padding and margin with the `t`, `r`, `b`, `l`, `x`, `y` suffixes.

```html
<div class="row">
    <div class="col">.col</div>
    <div class="col p3">.col</div>
    <div class="col">.col</div>
</div>
```

![p3](https://github.com/gergoszaszvaradi/layout.css/raw/master/resources/p3.png)

#### Display and Visibility

You can `hide` and `show` elements with the respective classes. `show` will always set the display to the inherit value. So, for example, a `<span>` will be an inline, while a `<div>` will be displayed as a block.

You can also set the display type with `inline`, `iblock`, `block`, `flex`.

In case of `flex`, there are some classes that can control how the flexbox behaves.

- `h` - sets the flexbox direction to horizontal
- `v` - sets the flexbox direction to vertical
- `r` - reverses the flexbox
- `h-left`, `h-center`, `h-right` - horizontal alignment. In case of a vertical flexbox, the horizontal alignment will not be vertical like `justify-content`
- `v-top`, `v-center`, `v-bottom` - vertical alignment
- `h-spaced` - horizontal alignment, where elements have even space between them
- `v-spaced` - vertical alignment, where elements have even space between them

### The Ability to Reset Certain Properties

The `reset` class will reset everything that has been set by `layout.css`. You can reset individual things with the following classes:

- reset-row
- reset-col
- reset-w
- reset-o
- reset-g, reset-gx, reset-gy
- reset-pt, reset-pr, reset-pb, reset-pl, reset-px, reset-py
- reset-mt, reset-mr, reset-mb, reset-ml, reset-mx, reset-my
- reset-hide, reset-show
- reset-h, reset-v, reset-r

### Using the Classes Everywhere

The classes described above can be used on **any** element. For example the `w` class is not restricted to columns. You can use it to scale an image to fit the parent element.

### Units and Measurements

Width and offset is measured in column units. A row has 12 columns in it. The class `w3` will cover 3 columns in that row. The general formula is:
`width = (n/12) * 100 %` where `n` is the number of columns to cover

Gutter, margin and padding is a bit different. There are 6 values:

- 1 - 0.25rem
- 2 - 0.5rem
- 3 - 1rem
- 4 - 1.75rem
- 5 - 3rem
- 6 - 5rem

### Dealing with Responsive Designs

There are 4 different devices defined in `layout.css`.

- s - Small
- m - Medium
- l - Large
- xl - Extra Large

Every class can be assigned to specific devices too. You can do that by using the appropriate abbreviation of the device followed by a `:` and the name of the property. For example: `m:w3` is w3 on medium devices **and above**.

It is **important** to note that these device specifications will affect the selected device and everything above.

```html
<div class="row">
    <div class="col m:w3">.col</div>
</div>
```

In this case, the column will have a width of 100% until the screen becomes as large as the medium device width. Large and Extra Large devices will inherit this value.

In order to specify only one device you need to define the default value on next device size. For example:

```html
<div class="row">
    <div class="col m:w3 l:reset-w">.col</div>
</div>
```

You can see that on large devices we reset the `w` class. This means that everything above and equal to a Large device will have the default width, while the Medium device will have a width of 3 columns.

## Getting Started

```bash
git clone https://github.com/gergoszaszvaradi/layout.css.git
cd layout.css
npm install
npm run build
```

#### Manual Building

Building manually only minimizes CSS files. The main advantage of building with `build.js` is recursive importing. The command below will write all of the minimized files to the `dist` directory in the working directory.

```bash
node build.js [input]
```

## License

This software is free to use under the MIT license. See the [LICENSE file](https://github.com/gergoszaszvaradi/layout.css/blob/master/LICENSE) for license text and copyright information.