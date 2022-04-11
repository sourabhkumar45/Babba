import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  color: "white",
  bgcolor: "#2a3e4c",
  boxShadow: 24,
  p: 4,
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderColor: grey[500],
  width: "50%",
  "&:hover": {
    borderColor: grey[50],
  },
}));

function DeleteModal({ handleClose, open }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: "20px" }}
          >
            Delete Records ?
          </Typography>
          <FormControl
            variant="standard"
            sx={{ display: "flex", gap: "3rem", color: "White" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Are you sure you want to delete these record[s]?
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "2rem",
              }}
            >
              <ColorButton variant="outlined" onClick={handleClose}>
                CANCEL
              </ColorButton>
              <ColorButton variant="outlined" onClick={handleClose}>
                DELETE
              </ColorButton>
            </div>
          </FormControl>
        </Box>
      </Fade>
    </Modal>
  );
}

export default DeleteModal;
