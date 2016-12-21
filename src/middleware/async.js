// This function gets called whenever dispatch is fired. From there on we pass it to the next middle ware which passes it on to actions middleware
// and from there it passes it on to the Reducer.


export default ({dispatch}) => {
  return next => action => {
    if (!action.payload || !action.payload.then) {
         console.log('in line8');
      return next(action);
    }

    // Make Sure the Action Promises Resolves
    action.payload.then((response) => {
      const newAction = { ...action, payload: response };
       dispatch(newAction);
    });
  };
};
