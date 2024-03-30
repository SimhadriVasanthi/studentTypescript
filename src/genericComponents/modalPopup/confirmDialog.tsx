// Library Imports
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ModalDialogprops } from "../../types/types";

const ConfirmDialog = ({
  open,
  handleClose,
  additionalData,
}: ModalDialogprops<{ title: string; content: string }>) => {
  const styles = {
    ".MuiPaper-root": {
      width: "25rem",
      ".MuiDialogContent-root .MuiTypography-root": {
        fontSize: "1rem",
      },
    },
  };

  return (
    <Box>
      <Dialog
        open={open || false}
        onClose={handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={styles}
      >
        <DialogTitle id="alert-dialog-title">
          {additionalData?.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {additionalData?.content}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ConfirmDialog;
