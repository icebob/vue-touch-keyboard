# vue-touch-keyboard [![NPM version](https://img.shields.io/npm/v/vue-touch-generator.svg)](https://www.npmjs.com/package/vue-touch-generator)
Virtual keyboard component for Vue.js v1.x.x. Designed to Raspberry Pi Touch Display

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/912039aa815e40de8315032519aa7e6c)](https://www.codacy.com/app/mereg-norbert/vue-touch-keyboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=icebob/vue-touch-keyboard&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/icebob/vue-touch-keyboard.svg?branch=master)](https://travis-ci.org/icebob/vue-touch-keyboard)
[![Coverage Status](https://coveralls.io/repos/github/icebob/vue-touch-keyboard/badge.svg?branch=master)](https://coveralls.io/github/icebob/vue-touch-keyboard?branch=master)
[![NPMS.io score](https://badges.npms.io/cross-spawn.svg)]()

[![Dependency Status](https://david-dm.org/icebob/vue-touch-keyboard.svg)](https://david-dm.org/icebob/vue-touch-keyboard)
[![devDependency Status](https://david-dm.org/icebob/vue-touch-keyboard/dev-status.svg)](https://david-dm.org/icebob/vue-touch-keyboard#info=devDependencies)
[![Downloads](https://img.shields.io/npm/dt/vue-touch-keyboard.svg)](https://www.npmjs.com/package/vue-touch-keyboard)

**Vue v2.x is not supported!**

## Demo
[JSFiddle demo](https://jsfiddle.net/icebob/88n7c1L8/)

[![Screenshot](http://ultraimg.com/images/2016/10/25/xn5P.png)](https://jsfiddle.net/icebob/88n7c1L8/)

## Features
- multiple layout
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
    <input type="text" placeholder="Text input" @focus="showKeyboard" data-layout="normal" />
    <vue-touch-keyboard v-if="visible", :layout="layout", :cancel="hide", :accept="accept", :input="input" />
  </div>
</template>

<script>
  import VueTouchKeyboard from "vue-touch-keyboard";

  Vue.use(VueTouchKeyboard);

  export default {
    data: {
      visible: false,
      layout: "normal",
      input: null,
      options: {
        useKbEvents: false
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
