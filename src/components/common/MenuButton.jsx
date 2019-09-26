import React, { useContext } from "react";
import Button from "../common/Button";
import MenuIcon from "@material-ui/icons/Menu";
import MainContext from "../../context/main/mainContext";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
const MenuButton = () => {
    const mainContext = useContext(MainContext);
    const sideList = side => (
        <div
            style={{ width: "250px" }}
            role="presentation"
            onClick={mainContext.toggle_Drawer_Close}
            onKeyDown={mainContext.toggle_Drawer_Close}
        >
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"All mails"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Trash"} />
                </ListItem>
            </List>
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
