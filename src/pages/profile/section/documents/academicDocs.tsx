import React, { useRef} from "react";
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
import Accordion from "../../../../genericComponents/accordian";
import { useAppDispatch } from "../../../../assets/hooks";
import { deleteUploadProfile, uploadProfile } from "../../../../services";
import { setDocuments } from "../../../../store/Slices/documentsSlice";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const AcademicDocs = ({ data }: any) => {
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
    secondarySchool: useRef<HTMLInputElement>(null),
    plus2: useRef<HTMLInputElement>(null),
    degree: useRef<HTMLInputElement>(null),
  };

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

  const documents = [
    { key: "transcripts", label: "Transcripts" },
    { key: "bonafide", label: "Bonafide" },
    { key: "CMM", label: "CMM" },
    { key: "PCM", label: "PCM" },
    { key: "OD", label: "OD" },
  ];
  const secondarydocuments = [
    { key: "secondarySchool", label: "School" },
    { key: "plus2", label: "Grade 12" },
    { key: "degree", label: "Degree" },
  ];
  const Bachelors = () => {
    const bachelorsFileRefs = {
      transcripts: useRef<HTMLInputElement>(null),
      bonafide: useRef<HTMLInputElement>(null),
      CMM: useRef<HTMLInputElement>(null),
      PCM: useRef<HTMLInputElement>(null),
      OD: useRef<HTMLInputElement>(null),
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openvalue = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <Accordion title="Bachelors">
        <>
          {documents.map((doc) => (
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
                <Typography>{doc.label}</Typography>
              </Grid>
              <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
                {data.bachelors && data.bachelors[doc.key] ? (
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ alignItems: "center", marginRight: "10px" }}
                  >
                    <Typography>{data.bachelors[doc.key].name}</Typography>
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
                      open={openvalue}
                      onClose={handleClose}
                    >
                      <MenuItem key={1}>
                        <Link
                          to="/pdfPreview"
                          target="_blank"
                          onClick={() => {
                            localStorage.setItem(
                              "docId",
                              data.bachelors[doc.key]._id
                            );
                          }}
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          View file
                        </Link>
                      </MenuItem>
                      <MenuItem key={2} onClick={() =>handleDelete(`academic.bachelors.${doc.key}`,data.bachelors[doc.key]._id)}>
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
                      onChange={(event) =>
                        handleSubmit(event, `academic.bachelors.${doc.key}`)
                      }
                      ref={
                        bachelorsFileRefs[
                          doc.key as keyof typeof bachelorsFileRefs
                        ]
                      }
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
                        bachelorsFileRefs[
                          doc.key as keyof typeof bachelorsFileRefs
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
        </>
      </Accordion>
    );
  };

  const Masters = () => {
    const mastersFileRefs = {
      CMM: useRef<HTMLInputElement>(null),
      bonafide: useRef<HTMLInputElement>(null),
      transcripts: useRef<HTMLInputElement>(null),
      PCM: useRef<HTMLInputElement>(null),
      OD: useRef<HTMLInputElement>(null),
    };
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openvalue = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        <Accordion title="Masters">
          <>
            {documents.map((doc) => (
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
                  <Typography>{doc.label}</Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  sx={{ justifyContent: "end", display: "flex" }}
                >
                  {data.masters && data.masters[doc.key] ? (
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ alignItems: "center", marginRight: "10px" }}
                    >
                      <Typography>{data.masters[doc.key].name}</Typography>
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
                        open={openvalue}
                        onClose={handleClose}
                      >
                        <MenuItem key={1}>
                          <Link
                            to="/pdfPreview"
                            target="_blank"
                            onClick={() => {
                              localStorage.setItem(
                                "docId",
                                data.masters[doc.key]._id
                              );
                            }}
                            style={{ textDecoration: "none", color: "#000" }}
                          >
                            View file
                          </Link>
                        </MenuItem>
                        <MenuItem key={2} onClick={() =>handleDelete(`academic.masters.${doc.key}`,data.masters[doc.key]._id)}>
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
                        onChange={(event) =>
                          handleSubmit(event, `academic.masters.${doc.key}`)
                        }
                        ref={
                          mastersFileRefs[
                            doc.key as keyof typeof mastersFileRefs
                          ]
                        }
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
                          mastersFileRefs[
                            doc.key as keyof typeof mastersFileRefs
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
          </>
        </Accordion>
      </>
    );
  };

  return (
    <div>
      <Masters />
      <Bachelors />
      <>
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
                    <MenuItem key={2} onClick={() =>handleDelete(`academic.${doc.key}`,data[doc.key]._id)}>
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
                    onChange={(event) => handleSubmit(event, `academic.${doc.key}`)}
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
      </>
    </div>
  );
};

export default AcademicDocs;
