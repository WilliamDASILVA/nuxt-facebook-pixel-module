# nuxt-facebook-pixel-module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-facebook-pixel-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-facebook-pixel-module)
[![npm](https://img.shields.io/npm/dt/nuxt-facebook-pixel-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-facebook-pixel-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)
[![CircleCI](https://img.shields.io/circleci/project/github/WilliamDASILVA/nuxt-facebook-pixel-module/master.svg?style=flat-square)](https://circleci.com/gh/WilliamDASILVA/nuxt-facebook-pixel-module/tree/master)

> A NuxtJS module thats injects Facebook Pixel code

## Table of Contents

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
      disabled: false
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
    disabled: false
  },
}
```

## Disabling the pixel (for GDPR)

If you'd like to install the pixel disabled, and enable it later after the user has consented to its use, you can do so by setting `disabled: true` in the pixel configuration:

```js
{
  modules: [
    'nuxt-facebook-pixel-module',
  ],
  facebook: {
    ...
    disabled: true
  },
}
```

Now, in your component, you can call the following in order to start the pixel and track the current page.

```js
this.$fb.enable()
```

## Module options

List of possible options in the module:

| Option   | Default  | Required | Description                                                                               |
|----------|----------|----------|-------------------------------------------------------------------------------------------|
| pixelId  | null     | true     | The unique pixel identifier provided by Facebook.                                         |
| track    | PageView | false    | Default tracking event.                                                                   |
| version  | 2.0      | false    | Tracking version.                                                                         |
| disabled | false    | false    | Disable the Pixel by default when initialized. Can be enabled later through `$fb.enable()`.

## Facebook pixel instance

The tracking pixel instance is available on all vue component instances as $fb. It has the following methods:

| Method            | Purpose                                                                                                  | Equivalent to                  |
|-------------------|----------------------------------------------------------------------------------------------------------|--------------------------------|
| enable()          | If you had previously set `disabled: true` in config, enables the pixel and tracks the current page view | $fb.init(), $fb.track()        |
| init()            | Initialises the pixel                                                                                    | fbq('init', <options.pixelId>) |
| track(event)           | Sends a track event. It's `PageView` by default if the `event` is not defined.                                                                                      | fbq('track', <options.track>)  |
| query(key, value, parameters) | Call the underlying fbq instance with anything else. The `parameters` attribute is optional.                                                      | fbq(key, value, parameters)                |

## License

[MIT License](./LICENSE)
