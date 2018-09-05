import { ADD_POSITION } from '../actions/defaultActions';

const initialState = {

};

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSITION: {
      return { ...state, }
    };
    default:
      return state;
  };
};

export default defaultReducer;