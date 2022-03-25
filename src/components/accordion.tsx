import * as React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MyAccordionItem = (props) => {
  const {
    children,
    id,
    required = false,
    expanded = false,
    square = true,
    disableGutters = true,
    disabled = false,
    title = "Title",
    description = null,
    label = null,
    onChange
  } = props;

  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      square={square}
      disableGutters={disableGutters}
      disabled={disabled}
      sx={{
        ".MuiAccordionSummary-root": {
          borderTop: "1px solid rgba(224, 224, 224, 1)"
        },
        ".Mui-expanded": {
          backgroundColor: "#f6f6f6 !important"
        }
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={id}
        id={id}
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {title}
          {required && "*"}
        </Typography>
        {description && (
          <Typography sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="overline">{label}</Typography>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
