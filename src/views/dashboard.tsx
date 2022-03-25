import * as React from "react";
import { Box, Toolbar } from "@mui/material";

import { MyAppBar } from "./../components/app-bar";
import { MyNavigation } from "./../components/navigation";
import { MyTitle } from "./../components/title";

const drawerWidth = 240;

export function DashboardView(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <MyAppBar handleDrawerToggle></MyAppBar>

      <MyNavigation
        props={{ window, mobileOpen, container, handleDrawerToggle }}
      ></MyNavigation>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <MyTitle title="Dashboard"></MyTitle>
        <div>Currently not in UX scope</div>
      </Box>
    </Box>
  );
}
