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
