import React from "react";

import Navbar from "./components/common/Navbar";
import MainState from "./context/main/MainState";
import { CssBaseline } from "@material-ui/core";

function App() {
    return (
        <div>
            <CssBaseline />{" "}
            <MainState>
                <Navbar />
            </MainState>{" "}
        </div>
    );
}

export default App;
