import { handle_Modal_Open, handle_Modal_Close } from "../types";

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

        default:
            return state;
    }
};
