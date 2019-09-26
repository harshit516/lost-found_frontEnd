import React from "react";
import PropTypes from "prop-types";
import MyTextFeild from "../common/MyTextFeild";
import MyButton from "../common/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={2}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down("xs")]: {
            width: "auto"
        },
        width: "35rem"
    }
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChangeIndex(index) {
        setValue(index);
    }

    return (
        <div
            className={classes.root}
            style={{
                border: "#d6d4d0 1px solid"
            }}
        >
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Login" {...a11yProps(0)} />
                    <Tab label="signup" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <MyTextFeild label={"First Name"} name={"firstName"} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <MyTextFeild label={"Last Name"} name={"lastName"} />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <MyTextFeild
                            label={"Email id"}
                            name={"email"}
                            type={"email"}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <MyTextFeild
                            label={"Password"}
                            name={"password"}
                            type={"password"}
                        />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <MyTextFeild
                            label={"Confirm Password"}
                            name={"confirmpassword"}
                            type={"password"}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justify="center"
                >
                    <Grid
                        item
                        style={{
                            marginTop: "1rem",
                            marginBottom: "0.5rem"
                        }}
                    >
                        <MyButton
                            color="primary"
                            text="SignUp"
                            size="large"
                            // fullWidth={true}
                            variant={"outlined"}
                        />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item sm={12}>
                        <MyTextFeild
                            label={"Email id"}
                            name={"email"}
                            type={"email"}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item sm={12}>
                        <MyTextFeild
                            label={"Password"}
                            name={"password"}
                            type={"password"}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justify="center"
                >
                    <Grid
                        item
                        style={{
                            marginTop: "1rem",
                            marginBottom: "0.5rem"
                        }}
                    >
                        <MyButton
                            color="primary"
                            text="Login"
                            size="large"
                            fullWidth={true}
                            variant={"outlined"}
                        />
                    </Grid>
                </Grid>
            </TabPanel>
        </div>
    );
}
