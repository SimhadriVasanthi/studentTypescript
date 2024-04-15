import React, { useRef } from "react";
import {
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { deleteUploadProfile, uploadProfile } from "../../../../services";
import { useAppDispatch } from "../../../../assets/hooks";
import { setDocuments } from "../../../../store/Slices/documentsSlice";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

const PersonalDocs = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const inputFileRefs = {
    resume: useRef<HTMLInputElement>(null),
    passportBD: useRef<HTMLInputElement>(null),
    passportADD: useRef<HTMLInputElement>(null),
  };
  const secondarydocuments = [
    { key: "resume", label: "Resume" },
    { key: "passportBD", label: "Passport BD" },
    { key: "passportADD", label: "Passport ADD" },
  ];
  const handleSubmit = async (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldPath: string
  ) => {
    const file = event.target.files && event.target.files[0];
    if (fieldPath && file !== null && file !== undefined) {
      const formData = new FormData();
      formData.append("uploaded_file", file);
      formData.append("fieldPath", fieldPath);
      const response = await uploadProfile(formData);
      if (response) {
        dispatch(setDocuments(response.data.data.docs));
      }
    } else {
    }
  };
  const handleDelete = async (
    fieldPath: string,
    deleteId:string
  ) => {
    const response = await deleteUploadProfile({fieldPath: fieldPath,documentId: deleteId});
    if (response) {
      dispatch(setDocuments(response.data.data));
    } else {
    }
  };
  return (
    <div>
      {secondarydocuments.map((doc) => (
          <Grid
            container
            key={doc.key}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              padding: "10px",
              background: "#F7FAFD",
              mb: 2,
            }}
          >
            <Grid item xs={4}>
              <Typography fontWeight="500">{doc.label}</Typography>
            </Grid>
            <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
              {data && data[doc.key] ? (
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center", marginRight: "10px" }}
                >
                  <Typography>{data[doc.key].name}</Typography>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreHorizIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem key={1}>
                      <Link
                        to="/pdfPreview"
                        target="_blank"
                        onClick={() => {
                          localStorage.setItem("docId", data[doc.key]._id);
                        }}
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        View file
                      </Link>
                    </MenuItem>
                    <MenuItem key={2} onClick={() =>handleDelete(`personal.${doc.key}`,data[doc.key]._id)}>
                      Delete
                    </MenuItem>
                  </Menu>
                </Stack>
              ) : (
                <>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    className=""
                    onChange={(event) => handleSubmit(event, `personal.${doc.key}`)}
                    ref={inputFileRefs[doc.key as keyof typeof inputFileRefs]}
                    accept=".pdf"
                  />
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      p: 0,
                      fontSize: "0.7rem",
                    }}
                    onClick={() =>
                      inputFileRefs[
                        doc.key as keyof typeof inputFileRefs
                      ].current?.click()
                    }
                  >
                    <FileUploadOutlinedIcon />
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        ))}
    </div>
  );
};

export default PersonalDocs;
