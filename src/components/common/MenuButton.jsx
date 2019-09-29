import React, { useContext } from "react";
import Button from "../common/Button";
import MenuIcon from "@material-ui/icons/Menu";
import MainContext from "../../context/main/mainContext";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import UserIcon from "@material-ui/icons/AccountCircle";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
    title: {
        backgroundColor: theme.palette.background.paper
    }
}));
const StyledMenuItem = withStyles(theme => ({
    root: {
        // "&:hover": {
        //     backgroundColor: theme.palette.primary.main,
        //     "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        //         color: theme.palette.common.white
        //     }
        // }
        "&:hover": {
            // backgroundColor: theme.palette.secondary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.primary.main
            }
        }
    }
}))(MenuItem);
const MenuButton = () => {
    const mainContext = useContext(MainContext);
    const classes = useStyles();

    const sideList = () => (
        <div
            style={{ width: "250px" }}
            role="presentation"
            onClick={mainContext.toggle_Drawer_Close}
            onKeyDown={mainContext.toggle_Drawer_Close}
        >
            <MenuItem className={classes.title}>
                <div
                    style={
                        {
                            // border: "1px solid red",
                            // marginLeft: "auto",
                            // marginRight: "auto"
                        }
                    }
                >
                    <Typography
                        style={{
                            fontWeight: "700"
                        }}
                        variant="h5"
                        color="primary"
                    >
                        <Hidden smUp>Lost&Found </Hidden>
                        <Hidden xsDown>L&F </Hidden>
                    </Typography>
                </div>
            </MenuItem>
            <Divider />
            <StyledMenuItem>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
            </StyledMenuItem>
            <StyledMenuItem>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </StyledMenuItem>
            <StyledMenuItem>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </StyledMenuItem>
            <Hidden smUp>
                <Divider />

                <MenuItem
                    onClick={mainContext.handleModalOpen}
                    style={{ color: "#04dbad" }}
                >
                    <ListItemIcon>
                        <UserIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText color="primary" primary="Login" />
                </MenuItem>
                <Divider />
            </Hidden>
        </div>
    );
    return (
        <div>
            <Button
                onClick={mainContext.toggleDraweOpen}
                color="primary"
                icon={<MenuIcon fontSize="large" />}
            ></Button>
            <SwipeableDrawer
                open={mainContext.drawer_state}
                onClose={mainContext.toggleDraweClose}
                onOpen={mainContext.toggleDraweOpen}
            >
                {sideList("left")}
            </SwipeableDrawer>
        </div>
    );
};

export default MenuButton;
