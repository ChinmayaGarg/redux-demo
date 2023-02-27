const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

// Action is an object with type property. We are not restricted to just have a type property, other than type the
// structure of an action object is completely upto developer
// {
//   type: BUY_CAKE,
//   info: 'First redux action',
// }

// With redux we also go an extra mile to implement action creator. Action creator simply creates an action.
// In terms of code, an action creator is a function that returns an action.
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  };
}

// Reducer takes in previousState (state of tha application before making any change) and action and returns newState.
// (previousState, action) => newState;
// We defined our action above, now what is remaining is to determine what our application state looks like.
// Application state is represented by a single object.
// We pass the initial state as the default value for the state parameter of the reducer. As the application starts,
// the initial state of the application is passed in as the arguement to the reducer function.
// From the reducer function, we are not mutating the state object, we are returning the state object.
const initialState = {
  numOfCakes: 10
};

const reducer = (state = initialState, action) => {
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

/* 
 Step1: Create store, createStore function accepts parameter which is reducer function.
 The reducer function has the initial state of the application, the reducer is required for the store to make the state transitions based on the actions perceive.
 Responsibility 1: Redux store holding the application state.
*/
const store = createStore(reducer);

/* 
 Responsibility 2: Expose getState() method to give the current state of the store.
*/
console.log('initial State', store.getState());

/* 
 Responsibility 4: Subscribe the changes of the store to the app using subscribe method.
 Subscribe method accepts a function that is called every time the state in the redux store changes.
*/
const unsubscribed = store.subscribe(() => console.log('Updated State', store.getState()));

/* 
 Responsibility 3: Store Provides dispatch method to update the state.
 Dispatch method accepts an action as a parameter. We can directly provide an action if we want to, but we have an action_creator.
 Hence, we invoke action creator as the parameter which returns the action.
*/
store.dispatch(buyCake());
// To cause few more state transitions we dispatched action few more times.
store.dispatch(buyCake());
store.dispatch(buyCake());

/* 
 Finally, unsubscribe the store by calling the function returned by subscribe method.
*/
unsubscribed();

/* 
When we dispatch an action, the reducer sees the action type is buy cake. 
The reducer will then try to match this type with the switch cases.
It matches the first case and simply decrements the number of cakes by 1 and returns new state.
Now, the store's state is updated, which calls the listener automatically and logs to the console.
*/
