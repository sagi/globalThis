# **`globalThis`** Polyfill

[`@sagi.io/globalthis`](https://www.npmjs.com/package/@sagi.io/globalthis) is
a `globalThis` polyfill that is based on [Mathias Bynens](https://mathiasbynens.be/notes/globalthis)'s' implementation.

[![CircleCI](https://circleci.com/gh/sagi/globalThis.svg?style=svg)](https://circleci.com/gh/sagi/globalThis)
[![Coverage Status](https://coveralls.io/repos/github/sagi/globalThis/badge.svg?branch=master)](https://coveralls.io/github/sagi/globalThis?branch=master)
[![MIT License](https://img.shields.io/npm/l/@sagi.io/globalthis.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![version](https://img.shields.io/npm/v/@sagi.io/globalthis.svg?style=flat-square)](http://npm.im/@sagi.io/globalthis)



## Usage

ESM:

~~~js
import '@sagi.io/globalthis'
~~~

CJS:

~~~js
require('@sagi.io/globalthis')
~~~

You can now access `globalThis`.
