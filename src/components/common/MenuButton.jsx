import React, { useContext } from "react";
import Button from "../common/Button";
import MenuIcon from "@material-ui/icons/Menu";
import MainContext from "../../context/main/mainContext";

const MenuButton = () => {
    const mainContext = useContext(MainContext);
    return (
        <div>
            <Button
                onClick={mainContext.toggleDraweOpen}
                color="primary"
                icon={<MenuIcon fontSize="large" />}
            ></Button>
        </div>
    );
};

export default MenuButton;
