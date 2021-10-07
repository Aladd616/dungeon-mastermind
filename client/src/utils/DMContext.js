import React, { createContext, useContext } from "react";

const DMContext = createContext();

export const useDMContext = () => useContext(DMContext);

export const DMProvider = ({children}) => {
    const initialState = {
        testmessage: "This is a test!",
    };

    return (
        <DMContext.Provider value={initialState}>
            {children}
        </DMContext.Provider>
    );
};