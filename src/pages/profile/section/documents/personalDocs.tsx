import React, { useRef } from "react";
import { Button, Grid, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const PersonalDocs = ({data}:any) => {
  const inputFileRefs = {
    resume: useRef<HTMLInputElement>(null),
    passportBD: useRef<HTMLInputElement>(null),
    passportADD: useRef<HTMLInputElement>(null),
  };

  const handleSubmit = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldPath: string
  ) => {
    const file = event.target.files && event.target.files[0]; // Check if files exist and get the first one
    console.log(file, event, fieldPath);
  };

  return (
    <div>
      <Grid
        container
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
          <Typography fontWeight="500">Resume</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "personal.resume")}
              ref={inputFileRefs.resume}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.resume.current?.click()}
            >
              <FileUploadOutlinedIcon />
            </Button>
          </>
        </Grid>
      </Grid>
      {/* Passport ADD */}
      <Grid
        container
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
          <Typography fontWeight="500">Passport ADD</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "personal.passportADD")}
              ref={inputFileRefs.passportADD}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.passportADD.current?.click()}
            >
              <FileUploadOutlinedIcon />
            </Button>
          </>
        </Grid>
      </Grid>
      {/* Passport BD */}
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          padding: "10px",
          background: "#F7FAFD",
        }}
      >
        <Grid item xs={4}>
          <Typography fontWeight="500">Passport BD</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "personal.passportBD")}
              ref={inputFileRefs.passportBD}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.passportBD.current?.click()}
            >
              <FileUploadOutlinedIcon />
            </Button>
          </>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalDocs;
