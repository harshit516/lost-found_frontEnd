import React, { useContext } from "react";
import Login from "./Login";
import Logo from "./Logo";
import WelcomeMsg from "./WelcomeMsg";
import Grid from "@material-ui/core/Grid";
import CloseBtn from "@material-ui/icons/CancelOutlined";
import Button from "@material-ui/core/Button";
import MainContext from "../../context/main/mainContext";
export default function MainPage() {
    const mainContext = useContext(MainContext);
    return (
        <div style={{ margin: "2.3rem" }}>
            <Grid container justify="center" alignItems="center">
                <Grid item></Grid>
                <Logo />
            </Grid>

            <Grid
                container
                justify="center"
                alignItems="center"
                style={{
                    marginTop: "1rem"
                }}
            >
                <Grid item>
                    <WelcomeMsg />
                </Grid>
            </Grid>

            <Grid
                container
                justify="center"
                alignItems="center"
                style={{
                    marginTop: "1rem"
                }}
            >
                <Grid item>
                    <Login />
                </Grid>
            </Grid>

            <Grid
                container
                justify="center"
                alignItems="center"
                style={{
                    marginTop: ""
                }}
            >
                <Grid item>
                    <Button
                        color="primary"
                        style={{}}
                        onClick={mainContext.handleModalClose}
                    >
                        <CloseBtn style={{ fontSize: "2.5rem" }} />
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
