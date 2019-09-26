import React from "react";
import MuiButton from "@material-ui/core/Button";

const Button = props => {
    const {
        text,
        icon,
        variant,
        color,
        size,
        classes,
        onClick,
        styles
    } = props;
    return (
        <MuiButton
            variant={variant}
            color={color}
            size={size}
            onClick={onClick}
            className={classes}
        >
            {text || icon}
        </MuiButton>
    );
};

export default Button;
