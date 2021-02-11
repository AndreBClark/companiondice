import React, { createContext, useReducer, useContext } from 'react';

const DiceSidesStateContext = createContext();
const DiceSidesDispatchContext = createContext();
function DiceSidesReducer(state, action) {
  switch (action.type) {
    case 'd4': {
      return { sides: state.sides = 4 };
    }
    case 'd6': {
      return { sides: state.sides = 6 };
    }
    case 'd8': {
      return { sides: state.sides = 8 };
    }
    case 'd10': {
      return { sides: state.sides = 10 };
    }
    case 'd12': {
      return { sides: state.sides = 12 };
    }
    case 'd20': {
      return { sides: state.sides = 20 };
    }
    case 'd100': {
      return { sides: state.sides = 100 };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function DiceSidesProvider({ children }) {
  const [state, dispatch] = useReducer(DiceSidesReducer, { sides: 20 });
  return (
    <DiceSidesStateContext.Provider value={state}>
      <DiceSidesDispatchContext.Provider value={dispatch}>
        {children}
      </DiceSidesDispatchContext.Provider>
    </DiceSidesStateContext.Provider>
  );
}
function useSidesState() {
  const context = useContext(DiceSidesStateContext);
  if (context === undefined) {
    throw new Error('useSidesState must be used within a DiceSidesProvider');
  }
  return context;
}
function useSidesDispatch() {
  const context = useContext(DiceSidesDispatchContext);
  if (context === undefined) {
    throw new Error('useSidesDispatch must be used within a DiceSidesProvider');
  }
  return context;
}
function useDiceSides() {
  return [useSidesState(), useSidesDispatch()];
}
export { DiceSidesProvider, useDiceSides };
