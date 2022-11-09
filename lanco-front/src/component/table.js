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
import "../public/css/styles.css";
import ReplayIcon from "@mui/icons-material/Replay";

export default function DataTableMUI(props) {
  const [rows, setRows] = React.useState(props.rows);
  const [columns, setColumns] = React.useState(props.columns);
  const [selectedRows, setSelectedRows] = React.useState([]);

  React.useEffect(() => {
    setRows(props.rows);
  }, []);

  React.useEffect(() => {
    setColumns([
      ...columns,
      {
        field: "Show",
        type: "actions",
        width: 100,
        renderCell: (params) => (
          <div>
            <IconButton
              color="primary"
              component="label"
              onClick={(event) => {
                showRow(event, params.row);
              }}
            >
              <FactCheckIcon />
            </IconButton>
            <IconButton
              color="primary"
              component="label"
              onClick={(event) => {
                editRow(event, params.row);
              }}
            >
              <FileCopyIcon />
            </IconButton>
            <IconButton
              color="primary"
              component="label"
              onClick={(event) => {
                deleteRow(params.row);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ),
      },
    ]);
  }, []);

  const showRow = (event, row) => {
    console.log(`Show ${JSON.stringify(row)}`);
  };

  const editRow = (event, row) => {
    props.editRow(row);
  };

  const deleteRow = (row) => {
    setRows((prevRows) => {
      return prevRows.filter((element) => element.id !== row.id);
    });
    props.deleteRow(row.id);
  };

  const addRow = () => {
    props.addNew();
  };
  const deleteRows = () => {
    console.log(`Delete rows ...`);
    let newRows = rows.filter((rows) => {
      let res = selectedRows.find((selectedRows) => {
        return selectedRows.id === rows.id;
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
        width: "70%",
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
            Agregar nuevo
          </Button>
        </Stack>
        <DataGrid
          autoHeight
          columns={columns}
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
            Borrar filas
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
