# rs-tabs-component

### Simple React Tabs component with 4 different styles including Materialize and Bootstrap

[![NPM version][npm-image]][npm-url] [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi)

## Feature

4 differnt styles.
rs-tabs-components can render conponents and plain JSX

## install

```bash
yarn add rs-tabs-component
```

or

```bash
npm install --save rs-tabs-component
```

## Basic Example

```js

import Tabs  from './components/rs-tabs-component/rs-tabs-component'



function App() {

  const tags = ['TAB 1', 'TAB 2', 'TAB 3', 'TAB 4']; //the array or names of tabs

  const Conten1 = () => {
    return (
    //.....//
    )
  }

  const Conten2 = () => {
    return (
    //.....//
    )
  }

  return (
    <Tabs tags={tags}
          style_type='material'>
      <Content1/>
      <Content2/>
      <div>
        <h3>
          Tab 3 Content
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>
      </div>
      <div>
        <h3>
          Tab 4 Content
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </Tabs>
  )
}

```

## Options

**tags** - the array of the names of the tags

**style_type** - defines the styling of the element. Values:

1. material
2. bootstrap
3. button
4. void/default

**material**

<img src='https://github.com/leonid1976/rs-tabs-component/screenshots/material.png' width='610'>

**bootstrap**

<img src='https://github.com/leonid1976/rs-tabs-component/screenshots/bootstrap.png' width='610'>

**button**

<img src='https://github.com/leonid1976/rs-tabs-component/screenshots/button.png' width='610'>

**default**

<img src='https://github.com/leonid1976/rs-tabs-component/screenshots/default.png' width='610'>

## License

rc-tabs-component is released under the MIT license.
