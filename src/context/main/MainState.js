import React, { useReducer } from "react";
// import axios from "axios";
import MainContext from "./mainContext";
import MainReducer from "./mainReducer";

import {
    handle_Modal_Open,
    handle_Modal_Close,
    toggle_Drawer_Open,
    toggle_Drawer_Close
} from "../types";

const MainState = props => {
    const initialState = {
        open_Login_Modal: false,
        drawer_state: false
    };
    const [state, dispatch] = useReducer(MainReducer, initialState);

    const handleModalOpen = () => {
        dispatch({ type: handle_Modal_Open });
    };

    const handleModalClose = () => {
        dispatch({ type: handle_Modal_Close });
    };
    const toggleDraweOpen = () => {
        dispatch({ type: toggle_Drawer_Open });
    };
    const toggleDraweClose = () => {
        dispatch({ type: toggle_Drawer_Close });
    };

    return (
        <MainContext.Provider
            value={{
                open_Login_Modal: state.open_Login_Modal,
                drawer_state: state.drawer_state,
                handleModalClose,
                handleModalOpen,
                toggleDraweOpen,
                toggleDraweClose
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
};
export default MainState;
