# Setup VueJS

> A Vue.js project in Typescript

# Disclaimer
> THIS IS WORK IN PROGRESS

## Dependecies

- All dependecies of vuejs/webpack except babel* & eslint
- ```yarn add tslint```
- ```yarn add vue-class-component html-loader```
- ```yarn add bootstrap-sass sass-loader sass-node```
- ```yarn add font-awesome```

## TSLint

- We follow the ```tslint-config-shopify``` tslint config

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn serve

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
```
## ToDo

- [x] Refactor vue/cli-webpack to TS
- [x] Add vue-class-component
- [x] Add tslint (split *.vue into ts & html file)
- [x] Add global sass file
- [x] Add bootstrap
- [x] Add font-awesome
- [x] Add polyfills (copy from angular)
- [x] Add logger
- [x] Add config
- [x] Add localstorage helper
- [x] Add karma unit testing
- [x] Add prettier support
- [x] Add vue-i18n
- [x] Add Vuex (draft)
- [x] Add Axios (draft)

## Issues

- TSLint (and Vetur) has no support for *.vue files. Fallback to ts & html files.

## Resoources

Typescript in VueJS
https://github.com/ulaval/modul-typescript-template
https://github.com/locoslab/vue-typescript-component-example
https://github.com/Toilal/vue-webpack-template

Other VueJS setups
https://github.com/vuejs/vue-curated-client
https://alexjoverm.github.io/2017/06/28/Integrate-TypeScript-in-your-Vue-project





