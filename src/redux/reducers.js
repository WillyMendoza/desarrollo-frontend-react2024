import { combineReducers } from 'redux';

import defaultReducer from './default/defaultReducer';

const rootReducer = combineReducers({
  default: defaultReducer,

  // Add your other reducers here
});

export default rootReducer;