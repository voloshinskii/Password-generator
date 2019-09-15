
const generator = require('generate-password');

export const GENERATE_PASSWORD = 'password/GENERATE_PASSWORD';
export const SET_LENGTH = 'password/SET_LENGTH';
export const CHANGE_PROP = 'password/CHANGE_PROP';


const initialState = {
  length: 8,
  password: '',
  uppercase: true,
  numbers: true,
  symbols: false,
  similar: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    case SET_LENGTH:
      return {
        ...state,
        length: action.length
      }
    case CHANGE_PROP:
      return {
        ...state,
        [action.prop.name]: action.prop.value
      }
    default:
      return state
  }
}
export const generate = () => {
  return (dispatch, getState) => {
    let state = getState();

    let passSettings = state.password;
    let pass = generator.generate({
      length: passSettings.length,
      strict: true,
      uppercase: passSettings.uppercase,
      numbers: passSettings.numbers,
      symbols: passSettings.symbols,
      excludeSimilarCharacters: !passSettings.similar,
    });

    dispatch({
      type: GENERATE_PASSWORD,
      password: pass
    })
  }
}

export const setLength = (length) => {
  return dispatch => {
    if(length > 1024) length = 1024;
    if(length < 5) length = 5;
    dispatch({
      type: SET_LENGTH,
      length
    });
    dispatch(generate());
  }
}

export const changeProp = (prop, value) => {
  return dispatch => {
    dispatch({
      type: CHANGE_PROP,
      prop: {name: prop, value}
    });
    dispatch(generate());
  }
}