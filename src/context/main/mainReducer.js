import {
    handle_Modal_Open,
    handle_Modal_Close,
    toggle_Drawer_Open,
    toggle_Drawer_Close
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case handle_Modal_Open:
            return {
                ...state,
                open_Login_Modal: true
            };
        case handle_Modal_Close:
            return {
                ...state,
                open_Login_Modal: false
            };
        case toggle_Drawer_Open:
            return {
                ...state,
                drawer_state: true
            };
        case toggle_Drawer_Close:
            return {
                ...state,
                drawer_state: false
            };

        default:
            return state;
    }
};
