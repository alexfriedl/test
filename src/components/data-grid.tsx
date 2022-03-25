import * as React from "react";
import { Button, Box } from "@mui/material";
import {
  DataGridPro,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridSortingInitialState,
  GridColumnPinningState
} from "@mui/x-data-grid-pro";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: 400,
  width: "100%",
  backgroundColor: "white",
  justifyContent: "space-between",
  height: "calc(100vh - 168px)"
}));

export const MyDataGrid = (props) => {
  const {
    columns,
    rows,
    pinnedColumns = false,
    sortedColumns,
    onMainActionClick,
    mainActionType = "create"
  } = props;
  const [pageSize, setPageSize] = React.useState<number>(15);

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer
        sx={{
          backgroundColor: "#f6f6f6",
          width: "calc(100% + 2px)",
          padding: "0 0 16px",
          margin: "-1px",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "flex-start",
          gap: "24px",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "relative",
          borderBottom: "1px solid rgba(224, 224, 224, 1)",
          button: {
            fontSize: 14,
            borderRadius: 0
          }
        }}
      >
        <Button
          variant="outlined"
          endIcon={mainActionType === "create" && <AddIcon />}
          onClick={() => onMainActionClick(true)}
        >
          {mainActionType === "create" && "Create"}
        </Button>
        <Box
          sx={{
            button: {
              textTransform: "capitalize",
              color: "#747174",
              minWidth: "initial",
              span: { margin: 0 }
            }
          }}
        >
          <GridToolbarColumnsButton color="inherit" />
          <GridToolbarFilterButton color="inherit" />
          <GridToolbarDensitySelector color="inherit" />
          <GridToolbarExport color="inherit" />
        </Box>
      </GridToolbarContainer>
    );
  };
  const pinningState: GridColumnPinningState =
    typeof pinnedColumns === "boolean"
      ? pinnedColumns
        ? {
            left: ["__check__"],
            right: ["action"]
          }
        : null
      : {
          ...(pinnedColumns?.left && {
            left: [...pinnedColumns?.left]
          }),
          ...(pinnedColumns?.right && {
            right: [...pinnedColumns?.right]
          })
        };

  const sortingState: GridSortingInitialState = {
    sortModel: sortedColumns
  };

  return (
    <StyledBox>
      <DataGridPro
        components={{ Toolbar: CustomToolbar }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[15, 50, 500]}
        pagination
        density="comfortable"
        localeText={{
          toolbarColumns: <></>,
          toolbarFilters: <></>,
          toolbarExport: <></>,
          toolbarDensity: <></>
        }}
        checkboxSelection
        initialState={{ pinnedColumns: pinningState, sorting: sortingState }}
        sx={{
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "600",
            fontSize: 13,
            color: "#747174",
            background: "#E7E5E2"
          },
          "& .MuiDataGrid-pinnedColumnHeaders": {
            backgroundColor: "#E7E5E2"
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#E7E5E2"
          }
        }}
      />
    </StyledBox>
  );
};
