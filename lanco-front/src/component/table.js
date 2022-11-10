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
import Swal from "sweetalert2";

import { Modal, Button as ButtonModal } from "react-bootstrap";

export default function DataTableMUI(props) {
  const [rows, setRows] = React.useState(props.rows);
  const [columns, setColumns] = React.useState(props.columns);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [showData, setShowData] = React.useState([]);
  React.useEffect(() => {
    setRows(props.rows);
  }, []);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
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

    setShowData(row.id);
    openModal();
  };

  const editRow = (event, row) => {
    props.editRow(row);
  };

  const deleteRow = (row) => {
    Swal.fire({
      title: "Esta seguro de eliminar este archivo?",
      text: "Estos cambios no se pueden deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setRows((prevRows) => {
          return prevRows.filter((element) => element.id !== row.id);
        });
        props.deleteRow(row.id);
        Swal.fire("Borrado!", "Ha sido eliminado exitosamente", "success");
      }
    });
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
    <div>
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{showData}</Modal.Body>
        <Modal.Footer>
          <ButtonModal variant="secondary" onClick={closeModal}>
            Close
          </ButtonModal>
        </Modal.Footer>
      </Modal>
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
    </div>
  );
}
