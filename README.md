# **`globalThis`** Polyfill

[`@sagi.io/globalThis`](https://www.npmjs.com/package/@sagi.io/globalThis) is
a `globalThis` polyfill that is based on [Mathias Bynens] (https://mathiasbynens.be/notes/globalthis) implementation.
[![CircleCI](https://circleci.com/gh/sagi/cfw-jwt.svg?style=svg)](https://circleci.com/gh/cfw-jwt)
[![Coverage Status](https://coveralls.io/repos/github/sagi/cfw-jwt/badge.svg?branch=master)](https://coveralls.io/github/sagi/cfw-jwt?branch=master)
[![MIT License](https://img.shields.io/npm/l/@sagi.io/cfw-jwt.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![version](https://img.shields.io/npm/v/@sagi.io/cfw-jwt.svg?style=flat-square)](http://npm.im/@sagi.io/cfw-jwt)



## Usage

ESM:

~~~js
import '@sagi.io/globalThis'
~~~

CJS:

~~~js
require('@sagi.io/globalThis')
~~~

You can now access `globalThis`.
