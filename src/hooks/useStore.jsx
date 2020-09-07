import { h } from 'preact';
import { createContext, useReducer } from 'preact/hooks';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'increment 1':
        const newState =+ 1 // do something with the action
        return newState;
      case 'decrement 1':
        const newState =- 1 // do something with the action
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }}

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'action description':
        const newState = // do something with the action
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }