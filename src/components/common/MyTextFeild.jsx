import React from "react";
import TextField from "@material-ui/core/TextField";

export default function LastName({
    label,
    fullwidth = true,
    name,
    type = "text",
    margin = "normal"
}) {
    return (
        <TextField
            fullWidth={fullwidth}
            placeholder={label}
            type={type}
            name={name}
            margin={margin}
            variant="outlined"
        />
    );
}
