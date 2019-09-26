import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "../common/Button";
import SearchIcon from "@material-ui/icons/SearchOutlined";

const useStyles = makeStyles(theme => ({
    search: {
        position: "relative",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: "100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up("lg")]: {
            width: 700,
            marginRight: "auto"
        }
    }
}));

const SearchBar = props => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            {/* <Button text="all" color="primary" /> */}
            <InputBase
                fullWidth
                color="primary"
                style={{
                    fontWeight: "534",
                    paddingLeft: "1rem",
                    color: "#636363"
                }}
                placeholder="Search..."
            />
            <Button icon={<SearchIcon />} color="primary" />
        </div>
    );
};

export default SearchBar;
