# danger-plugin-lighthouse

[![Build Status](https://travis-ci.org/orta/danger-plugin-lighthouse.svg?branch=master)](https://travis-ci.org/orta/danger-plugin-lighthouse)
[![npm version](https://badge.fury.io/js/danger-plugin-lighthouse.svg)](https://badge.fury.io/js/danger-plugin-lighthouse)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Takes lighthouse JSON data and makes it a pretty table

It's pretty basic right now, but there's space for growth!

## Usage

Install:

```sh
yarn add danger-plugin-lighthouse --dev
```

At a glance:

```js
// dangerfile.js
import lighthouse from 'danger-plugin-lighthouse'

// Defaults to looking in ./results for JSON files
lighthouse()
```

Example output:

## Lighthouse Scores

##### [`/`](https://typescript-v2-116.ortam.now.sh/)

| Performance | Accessibility | Best Practices | SEO | Progressive Web App |
|:--: | :---: | :---: | :---: | :--:|
| 0.99 | 0.85 | 0.93 | 0.82 | 0.52 |


##### [`/tsconfig`](https://typescript-v2-116.ortam.now.sh/tsconfig)

| Performance | Accessibility | Best Practices | SEO | Progressive Web App |
|:--: | :---: | :---: | :---: | :--:|
| 0.94 | 0.88 | 0.93 | 0.79 | 0.52 |


##### [`/docs/handbook/integrating-with-build-tools.html`](https://typescript-v2-116.ortam.now.sh/docs/handbook/integrating-with-build-tools.html)

| Performance | Accessibility | Best Practices | SEO | Progressive Web App |
|:--: | :---: | :---: | :---: | :--:|
| 0.96 | 0.87 | 0.93 | 0.73 | 0.52 |



## Changelog

See the GitHub [release history](https://github.com/orta/danger-plugin-lighthouse/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
