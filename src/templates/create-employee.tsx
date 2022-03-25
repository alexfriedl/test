import * as React from "react";
import { Stack, Box, Button } from "@mui/material";

import { MyTitle } from "./../components/title";
import { MyInput } from "./../components/input";
import { MyAccordionItem } from "./../components/accordion";
import CustomizedHook from "./../components/autocomplete";

export const CreateEmployee = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [initiallyExpanded, setInitiallyExpanded] = React.useState<boolean>(
    true
  );

  const autocomplete = CustomizedHook();

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
    setInitiallyExpanded(false);
  };

  return (
    <Box
      sx={{
        ".MuiAccordion-root": {
          boxShadow: "none"
        },
        ".MuiAccordionDetails-root": {
          padding: "8px 24px 16px",
          backgroundColor: "#f6f6f6"
        }
      }}
    >
      <MyTitle
        title="Create Employee"
        sx={{
          padding: "16px"
        }}
      ></MyTitle>
      <Box
        sx={{
          height: "calc(100% - 40px)"
        }}
      >
        <Box>
          <MyAccordionItem
            expanded={expanded === "name" || initiallyExpanded}
            onChange={handleChange("name")}
            id="name"
            title="Employee"
            required
          >
            <Stack direction="row" spacing="24px">
              <MyInput
                label="Firstname"
                id="firstname"
                autoFocus
                required
                fullWidth
              ></MyInput>
              <MyInput
                label="Lastname"
                id="lastname"
                required
                fullWidth
              ></MyInput>
            </Stack>
            <Stack direction="row" spacing="24px">
              <MyInput
                label="Employee Id"
                id="employeeId"
                fullWidth
                required
              ></MyInput>
              <MyInput label="Nickname" id="nickname" fullWidth></MyInput>
            </Stack>
            <Box sx={{ marginTop: "4px" }}>
              <Button variant="text">Next</Button>
            </Box>
          </MyAccordionItem>
          <MyAccordionItem
            expanded={expanded === "email"}
            onChange={handleChange("email")}
            id="email"
            title="Credentials"
            description="Add email and password"
          >
            <Stack direction="row" spacing="24px">
              <MyInput label="Email" id="email" fullWidth></MyInput>
              <MyInput label="Password" id="password" fullWidth></MyInput>
            </Stack>
            <Box sx={{ marginTop: "4px" }}>
              <Button variant="text">Next</Button>
            </Box>
          </MyAccordionItem>
          <MyAccordionItem
            expanded={expanded === "crew"}
            onChange={handleChange("crew")}
            id="crew"
            title="Crew"
            description="Add crew"
          >
            <Stack direction="row" spacing="24px">
              {autocomplete}
            </Stack>
            <Box sx={{ marginTop: "4px" }}>
              <Button variant="text">Next</Button>
            </Box>
          </MyAccordionItem>
        </Box>
        <Box
          sx={{
            padding: "16px",
            position: "fixed",
            bottom: "0",
            width: "100%",
            backgroundColor: "#f6f6f6"
          }}
        >
          <Stack direction="row" gap="16px">
            <Button variant="contained" disableElevation disabled>
              Create
            </Button>
            <Button disableElevation disabled>
              Copy & create new
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
