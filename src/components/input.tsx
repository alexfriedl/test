import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

const StyledTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow"
    ]),
    "&:hover": {
      backgroundColor: "transparent"
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  }
}));

export const MyInput = (props) => {
  const {
    autoFocus = false,
    label = "Label",
    placeholder = "Type",
    defaultValue = "",
    id,
    variant = "filled",
    required = false,
    fullWidth = false,
    sx
  } = props;
  return (
    <StyledTextField
      autoFocus={autoFocus}
      label={label}
      placeholder={placeholder}
      defaultValue={defaultValue}
      id={id}
      variant={variant}
      style={{
        marginTop: 11,
        backgroundColor: "white",
        minWidth: `${fullWidth ? "initial" : "270px"}`
      }}
      required={required}
      fullWidth={fullWidth}
      sx={sx}
      margin="dense"
    />
  );
};
