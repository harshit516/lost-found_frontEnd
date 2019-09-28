import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import App from "./App";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#04dbad"
        },
        secondary: {
            main: "#c4c4c4"
        },
        type: "light"
    }
});
ReactDOM.render(
    <ThemeProvider theme={theme}>
        {console.log("hello")}
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
