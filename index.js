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
