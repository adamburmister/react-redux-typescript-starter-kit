import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export const increment: Function = createAction(COUNTER_INCREMENT, (value = 1) => value)

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const doubleAsync = () => {
  return (dispatch: Function, getState: Function) => {
    setTimeout(() => {
      dispatch(increment(getState().counter))
    }, 1000)
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Reducer
// ------------------------------------
// export default handleActions({
//   [COUNTER_INCREMENT]: (state:Number, { payload }:ReduxActions.Action): Number => {
//     return state + payload
//   }
// }, 1)

let reducer = handleActions({
  [COUNTER_INCREMENT]: function (state: Number, action): Number {
    return state + action.payload
  }
}, 1)

export default reducer;
