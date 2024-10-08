# Open Components v2

Docs later

- [Installation](#installation)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Implemented components](#implemented-components)

## Installation

`npm i @groene-otter/oc2`

Import main.css in your application, here are some options depending on your bundler:

- `@import "@groene-otter/oc2/main.css";`
- `@import "npm:@groene-otter/oc2/main.css";`
- `@import "/node_modules/@groene-otter/oc2/main.css";`

That's it 😄

## Getting started

### Brand color

All you need to do is set a brand color. Go to the Usage-tab to have a preview of the components in your brand color. These options are from
[the color-scheme on Open Props](https://open-props.style/#colors). However, feel free to use any other color you like.

### Border radius

If you want a straight corner look, simply set the default border radius to 0. Check the example below

### Examples

These are the default values in Open Components.

```
html {
  --brand: var(--cyan-6);
  --default-radius: var(--radius-2);
}
```

Here's an example for a pink theme with straight corners.

```
html {
  --brand: var(--pink-6);
  --default-radius: 0;
}
```

## Usage

To learn how to use the components, simply check out the Usage tab on the Open Components website where you can see them all in action with code samples as well.

## Implemented components

- Buttons
- Inputs (including autocomplete)
- Selects
- Checkboxes / radios
- Textareas
- Icons
- Tabs / tab-menu
- Modals
- Tooltips
- Toasts

## Future components

- Progress bars?
- Pills?
- Suggestions are welcome! Please do make an issue 😄
