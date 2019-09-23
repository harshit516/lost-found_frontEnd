import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import App from "./App";

const theme = createMuiTheme({
    palette: {
        primary: {
            contrastText: "#f5f5f5",
            main: "#ff9933",
            light: "#fa5",
            dark: "#f81"
        },
        secondary: {
            contrastText: "#ff9933",
            main: "#f5f5f5",
            light: "#fafafa",
            dark: "#e0e0e0"
        }
    }
});
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
