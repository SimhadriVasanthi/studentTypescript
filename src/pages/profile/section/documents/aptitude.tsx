import React, { useRef } from "react";
import { Button, Grid, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const Aptitude = ({data}:any) => {
  const inputFileRefs = {
    GRE: useRef<HTMLInputElement>(null),
    GMAT: useRef<HTMLInputElement>(null),
    ACT: useRef<HTMLInputElement>(null),
    SAT: useRef<HTMLInputElement>(null),
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
          <Typography fontWeight="500">GRE</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "test.general")}
              ref={inputFileRefs.GRE}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.GRE.current?.click()}
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
          <Typography fontWeight="500">GMAT</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "test.general")}
              ref={inputFileRefs.GMAT}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.GMAT.current?.click()}
            >
              <FileUploadOutlinedIcon />
            </Button>
          </>
        </Grid>
      </Grid>
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
          <Typography fontWeight="500">SAT</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "test.general")}
              ref={inputFileRefs.SAT}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.SAT.current?.click()}
            >
              <FileUploadOutlinedIcon />
            </Button>
          </>
        </Grid>
      </Grid>
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
          <Typography fontWeight="500">ACT</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "test.general")}
              ref={inputFileRefs.ACT}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.ACT.current?.click()}
            >
              <FileUploadOutlinedIcon />
            </Button>
          </>
        </Grid>
      </Grid>
    </div>
  );
};

export default Aptitude;
