import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const StyledBadge = withStyles(theme => ({
    badge: {
        border: `2px solid ${theme.palette.primary.main}`
    }
}))(Badge);

const IconButtonWithBadge = props => {
    const { text, icon, color } = props;
    return (
        <IconButton aria-label={text} color="primary">
            <StyledBadge badgeContent={87} color={color}>
                {icon}
            </StyledBadge>
        </IconButton>
    );
};

export default IconButtonWithBadge;
