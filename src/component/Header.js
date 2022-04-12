import React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

import InputBase from "@mui/material/InputBase";

import RefreshIcon from "@mui/icons-material/Refresh";

import AddModal from "./AddModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import AdvancedSearchModal from "./AdvancedSearchModal";

function Header() {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openAS, setOpenAS] = React.useState(false);

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleOpenAS = () => setOpenAS(true);
  const handleCloseAS = () => setOpenAS(false);

  return (
    <div
      style={{
        height: 70,
        width: "100%",
        backgroundColor: "#283d4a",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          size="large"
          aria-label="large button group"
          sx={{ color: "#42aff1" }}
        >
          <Button key="PREDICT">PREDICT</Button>
          <Button key="ANALYTICS">ANALYTICS VIEW</Button>
          <Button key="ADVANCE" onClick={handleOpenAS}>
            ADVANCE SEARCH
          </Button>
        </ButtonGroup>
      </Box>
      <Button variant="outlined">
        <RefreshIcon />
      </Button>
      <InputBase
        sx={{
          ml: 2,
          flex: 0.5,
          color: "black",
          width: 20,
          borderRadius: 1,
          zIndex: 2,
          backgroundColor: "white",
        }}
        placeholder="Search Custumer Id"
        inputProps={{ "aria-label": "Search Custumer Id" }}
      />
      <ButtonGroup
        size="large"
        aria-label="large button group"
        sx={{ color: "#42aff1", ml: 10, zIndex: 1 }}
      >
        <Button key="ADD" onClick={handleOpenAdd}>
          ADD
        </Button>
        <Button key="EDIT" onClick={handleOpenEdit}>
          EDIT
        </Button>
        <Button key="DELETE" onClick={handleOpenDelete}>
          DELETE
        </Button>
      </ButtonGroup>
      <AddModal handleClose={handleCloseAdd} open={openAdd}></AddModal>
      <EditModal handleClose={handleCloseEdit} open={openEdit}></EditModal>
      <DeleteModal
        handleClose={handleCloseDelete}
        open={openDelete}
      ></DeleteModal>
      <AdvancedSearchModal
        handleClose={handleCloseAS}
        open={openAS}
      ></AdvancedSearchModal>
    </div>
  );
}

export default Header;
