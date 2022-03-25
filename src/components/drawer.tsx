import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export const MyDrawer = (props): JSX.Element => {
  const { anchor = "right", open, handleClose, children } = props;

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={() => handleClose(open)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 10,
        ".MuiDrawer-paperAnchorRight": {
          padding: "12px 0 24px",
          minWidth: 270,
          maxWidth: 700,
          width: "calc(100% - 48px)"
        }
      }}
    >
      <IconButton
        color="inherit"
        aria-label="close drawer"
        edge="start"
        onClick={() => handleClose(open)}
        sx={{
          position: "absolute",
          right: "12px",
          top: "18px",
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          ":hover": {
            backgroundColor: "rgba(0, 0, 0, 0.14)"
          }
        }}
      >
        <CloseIcon />
      </IconButton>
      {children}
    </Drawer>
  );
};
