import React, { createContext, useContext } from "react";

const DMContext = createContext();

export const useDMContext = () => useContext(DMContext);

export const DMProvider = ({children}) => {
    const initialState = {
        message: "Hola!",
    };

    return (
        <DMContext.Provider value={initialState}>
            {children}
        </DMContext.Provider>
    );
};