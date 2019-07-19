# persistant-vuex
persistant Vuex state

## Install
npm install --save persistant-vuex

## Usage
```js
import createPersistantState from 'persistant-vuex'

const myPlugin = createPersistantState({
  storage: localStorage, // default
  key: 'vuex' // default
})
const store = new Vuex.store({
  // ...
  plugins: [myPlugin]
})
```