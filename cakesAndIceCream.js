const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: 'First redux action'
  };
}

const initialCakeState = {
  numOfCakes: 10
};

const initialIceCreamState = {
  numOfIceCreams: 10
};

// Each reducer manage its own part of global state,
// the state parameter is different for every reducer and corresponds to part of the state it manages.
// As our app grows in size we can split the reducers into separate files and keep them completely independent and manage different areas.
// Eg: authReducer, profileReducer, userReducer etc.

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

const store = createStore(rootReducer);

console.log('initial State', store.getState());

const unsubscribed = store.subscribe(() => console.log('Updated State', store.getState()));

// Note: When we now dispatch an action, both the reducers will receive the action. One of the reducer will act on that action and
// the other just returns default switch case.
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribed();
