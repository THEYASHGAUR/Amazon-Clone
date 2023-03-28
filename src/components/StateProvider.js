import React,{createContext,useContext, useReducer} from "react";

// pareares the datalayer
export const StateContext = createContext();

//wtap our app
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer , initialState)}>
        {children}
    </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);