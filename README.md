# vue-touch-keyboard [![NPM version](https://img.shields.io/npm/v/vue-touch-keyboard.svg)](https://www.npmjs.com/package/vue-touch-keyboard) ![VueJS v2.x compatible](https://img.shields.io/badge/vue%202.x-compatible-green.svg)

Virtual keyboard component for Vue.js v2.x. Designed to Raspberry Pi Touch Display

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5f3594b30dd4489094730fa2babd7ba5)](https://www.codacy.com/app/mereg-norbert/vue-touch-keyboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=icebob/vue-touch-keyboard&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/icebob/vue-touch-keyboard.svg?branch=master)](https://travis-ci.org/icebob/vue-touch-keyboard)
[![Coverage Status](https://coveralls.io/repos/github/icebob/vue-touch-keyboard/badge.svg?branch=master)](https://coveralls.io/github/icebob/vue-touch-keyboard?branch=master)
[![NPMS.io score](https://badges.npms.io/vue-touch-keyboard.svg)]()

[![Dependency Status](https://david-dm.org/icebob/vue-touch-keyboard.svg)](https://david-dm.org/icebob/vue-touch-keyboard)
[![devDependency Status](https://david-dm.org/icebob/vue-touch-keyboard/dev-status.svg)](https://david-dm.org/icebob/vue-touch-keyboard#info=devDependencies)
[![Downloads](https://img.shields.io/npm/dt/vue-touch-keyboard.svg)](https://www.npmjs.com/package/vue-touch-keyboard)

**If you like my work, please [donate](https://www.paypal.me/meregnorbert). Thank you!**

## Demo
[JSFiddle demo](https://jsfiddle.net/icebob/88n7c1L8/)
[Codepen demo](https://codepen.io/alvidr/pen/JBEmdR/)

[![Screenshot](https://cloud.githubusercontent.com/assets/306521/19721016/d56005bc-9b70-11e6-8568-39dc207bc466.png)]()

## Features
- 3 built-in layouts, but you can create custom layouts
- **no external dependencies**
- full responsive
- customizable styles
- ...etc

## Installation
### NPM
You can install it via [NPM](http://npmjs.org/).
```
$ npm install vue-touch-keyboard
```
### Manual
Download zip package and unpack and add the `vue-touch-keyboard.css` and `vue-touch-keyboard.js` file to your project from dist folder.
```
https://github.com/icebob/vue-touch-keyboard/archive/master.zip
```

## Usage
```html
<template>
  <div>
    <input type="text" placeholder="Text input" @focus="show" data-layout="normal" />
    <vue-touch-keyboard :options="options" v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" />
  </div>
</template>

<script>
  import VueTouchKeyboard from "vue-touch-keyboard";
  import style from "vue-touch-keyboard/dist/vue-touch-keyboard.css"; // load default style

  Vue.use(VueTouchKeyboard);

  export default {
    data: {
      visible: false,
      layout: "normal",
      input: null,
      options: {
        useKbEvents: false,
        preventClickEvent: false
      }
    },

    methods: {
        accept(text) {
          alert("Input text: " + text);
          this.hide();
        },

        show(e) {
          this.input = e.target;
          this.layout = e.target.dataset.layout;

          if (!this.visible)
            this.visible = true
        },

        hide() {
          this.visible = false;
        }
    }
  }
</script>
```

## Properties
Property      | Default  | Accepted values | Description
------------- | -------- | --------------- | -----------
`input`     | required  | `HTMLInputElement`   | The target input HTML element
`layout`    | required  | `String` or `Object`    | Layout of keys. If you are using the built-in layouts, you can set as the name of the layout. If you want to use custom layout, you need to set a layout `Object`.
`accept`    | `null`  | `Function`     | Event handler. Fired when the "Accept/Close" button pressed.
`cancel`    | `null`  | `Function`     | Event handler. Fired when the "Cancel" button pressed.
`change`    | `null`  | `Function`     | Event handler. Fired when the input value changed.
`next`      | `null`  | `Function`     | Event handler. Fired when the "Next" button pressed or the length of the value of the input reached the `maxLength` of the `input`
`options`   | `{}`    | `Object`     | Functional options.
`defaultKeySet`| `default` | `String`  | Default key set. You can choose a desired key set of your layout to be used when a keyboard is initialized.

## Options
Option      | Default  | Accepted values | Description
----------- | -------- | --------------- | -----------
`useKbEvents`  | `false`  | `boolean`    | If true, the component will generate a `keydown` event and trigger it. If it returns with `false`, it won't insert the new character.
`preventClickEvent`  | `false`  | `boolean`    | If true, the component will `preventDefault` the click event.

## Built-in layouts
* `normal` - Normal full layout. Similar as real keyboard layouts
* `numeric` - Only for numbers
* `compact` - Compact layout. Similar as mobile phone keyboard layouts

## Development
This command will start a `webpack-dev-server` with content of `dev` folder.
```bash
npm run dev
```

## Build
This command will build a distributable version in the `dist` directory.
```bash
npm run build
```

## Test
```bash
npm test
```

## Contribution
Please send pull requests improving the usage and fixing bugs, improving documentation and providing better examples, or providing some testing, because these things are important.

## License
vue-touch-keyboard is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact

Copyright (C) 2016 Icebob

[![@icebob](https://img.shields.io/badge/github-icebob-green.svg)](https://github.com/icebob) [![@icebob](https://img.shields.io/badge/twitter-Icebobcsi-blue.svg)](https://twitter.com/Icebobcsi)
