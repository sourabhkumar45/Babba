import React from "react";
import TextField from "@mui/material/TextField";
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

function AddModal({ handleClose, open }) {
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
            ADD
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
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Business code"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Customer Number"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Clear Date"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Business Year"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Document id"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Posting Date"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Document Create Date"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Due Date"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Invoice Currency"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Document type"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Posting Id"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Total Open Amount"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "2rem",
              }}
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                placeholder="Baseline Create Date"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Customer Payment Term"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                placeholder="Invoice Id"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "2rem",
              }}
            >
              <ColorButton variant="outlined">ADD</ColorButton>
              <ColorButton variant="outlined" onClick={handleClose}>
                CANCEL
              </ColorButton>
            </div>
          </FormControl>
        </Box>
      </Fade>
    </Modal>
  );
}

export default AddModal;
