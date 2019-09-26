import React, { useReducer } from "react";
// import axios from "axios";
import MainContext from "./mainContext";
import MainReducer from "./mainReducer";

import { handle_Modal_Open, handle_Modal_Close } from "../types";

const MainState = props => {
    const initialState = {
        open_Login_Modal: false
    };
    const [state, dispatch] = useReducer(MainReducer, initialState);

    const handleModalOpen = () => {
        dispatch({ type: handle_Modal_Open });
    };

    const handleModalClose = () => {
        dispatch({ type: handle_Modal_Close });
    };

    return (
        <MainContext.Provider
            value={{
                open_Login_Modal: state.open_Login_Modal,

                handleModalClose,
                handleModalOpen
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
};
export default MainState;
