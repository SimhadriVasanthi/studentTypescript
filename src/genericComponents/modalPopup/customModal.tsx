import * as React from "react";
import { Dialog, DialogContent } from "@mui/material";
import { ModalDialogprops } from "../../types/types";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../assets/hooks";
import { closePopup } from "../../store/Slices/popupSlice";

const CustomModal = ({ open, children,additionalData }: ModalDialogprops<{ width: any;}>) => {

  const dispatch = useAppDispatch();
  return (
    <>
      <Dialog
        open={open}
        // onClose={()=>dispatch(closePopup())}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            minWidth: "200px",
            width: `${additionalData?.width}`,
            borderRadius: "1.5rem",
            padding: "1rem",
            maxWidth: "800px",
          },
        }}
      >
        <CloseIcon
          onClick={()=>dispatch(closePopup())}
          sx={{
            position: "absolute",
            right: 14,
            top: 14,
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
