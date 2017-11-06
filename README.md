# nuxt-facebook-pixel-module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-facebook-pixel-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-facebook-pixel-module)
[![npm](https://img.shields.io/npm/dt/nuxt-facebook-pixel-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-facebook-pixel-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> A NuxtJS module thats injects Facebook Pixel code

## Table of Contents ##

* [Requirements](#requirements)
* [Install](#install)
* [Getting Started](#getting-started)
* [License](#license)

## Requirements

* npm or yarn
* NuxtJS
* NodeJS

## Install

```bash
$ npm install --save nuxt-facebook-pixel-module
// or
$ yarn add nuxt-facebook-pixel-module
```

## Getting Started

Add `nuxt-facebook-pixel-module` to `modules` section of `nuxt.config.js`.
```js
{
  modules: [
    // Simple usage
    'nuxt-facebook-pixel-module',

    // With options
    ['nuxt-facebook-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: 'FACEBOOK_PIXEL_ID',
    }],
 ]
}
```
or even
```js
{
  modules: [
    'nuxt-facebook-pixel-module',
  ],
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: 'FACEBOOK_PIXEL_ID',
  },
}
```


## License

[MIT License](./LICENSE)
