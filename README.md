# rc-tabs-component

### Simple React Tabs component with 4 different styles including Materialize and Bootstrap




## Feature

4 differnt styles.
rc-tabs-components can render conponents and plain JSX

## install

```bash
yarn add rc-tabs-component
```

or

```bash
npm install --save rc-tabs-component
```

## Basic Example

```js

import Tabs  from 'rc-tabs-component'



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

<img src='https://github.com/leonid1976/rc-tabs-component/blob/master/screenshots/material.png' width='610'>

**bootstrap**

<img src='https://github.com/leonid1976/rc-tabs-component/blob/master/screenshots/bootstrap.png' width='610'>

**button**

<img src='https://github.com/leonid1976/rc-tabs-component/blob/master/screenshots//button.png' width='610'>

**default**

<img src='https://github.com/leonid1976/rc-tabs-component/blob/master/screenshots/default.png' width='610'>

## License

rc-tabs-component is released under the MIT license.
