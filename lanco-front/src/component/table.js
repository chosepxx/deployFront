import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ReplayIcon from "@mui/icons-material/Replay";

export default function DataTableMUI(props) {
  const [rows, setRows] = React.useState(props.rows);
  const [selectedRows, setSelectedRows] = React.useState([]);

  React.useEffect(() => {
    setRows(props.rows);
  }, [rows]);

  const showRow = (event, row) => {
    console.log(`Show ${JSON.stringify(row)}`);
  };

  const editRow = (event, row) => {
    console.log(`Edit ${JSON.stringify(row)}`);
  };

  const deleteRow = (event, row) => {
    console.log(`Delete ${JSON.stringify(row)}`);
    setRows((prevRows) => {
      return prevRows.filter((element) => element.id !== row.id);
    });
  };

  const addRow = () => {
    console.log(`Add new row ...`);
  };

  const deleteRows = () => {
    console.log(`Delete rows ...`);
    // console.log(selectedRows);
    //call api function (delete method).
    //deleteApi(selectedRows);

    let newRows = props.rows.filter((rows) => {
      let res = selectedRows.find((selectedRows) => {
        return selectedRows.id === props.rows.id;
      });
      return res == undefined;
    });
    setRows(newRows);
  };

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    setSelectedRows(selectedRowsData);
  };

  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "80%",
        padding: "10px",
      }}
    >
      <Box>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Button
            variant="outlined"
            size="small"
            onClick={addRow}
            startIcon={<AddCircleIcon />}
          >
            Add a row
          </Button>
        </Stack>
        <DataGrid
          autoHeight
          columns={props.columns}
          rows={rows}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          components={{ Toolbar: GridToolbar }}
          onCellClick={handleCellClick}
          onRowClick={handleRowClick}
        />
        <Stack
          direction="row"
          spacing={1}
          sx={{ mb: 1 }}
          style={{ marginTop: "15px" }}
        >
          <Button
            variant="outlined"
            size="small"
            onClick={deleteRows}
            startIcon={<DeleteIcon />}
          >
            Delete rows
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
