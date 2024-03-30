import * as React from "react";
import { Dialog, DialogContent } from "@mui/material";
import { ModalDialogprops } from "../../types/types";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ open, children, handleClose,additionalData }: ModalDialogprops<null>) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            minWidth: "200px",
            width: "550px",
            borderRadius: "1.5rem",
            padding: "1rem",
            maxWidth: "800px",
          },
        }}
      >
        <CloseIcon
          onClick={() => handleClose()}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#E94040",
            cursor: "pointer",
          }}
        />
        <DialogContent
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "12px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#fff",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-track": {
              // backgroundColor: "#fff",
            },
          }}
        >
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomModal;