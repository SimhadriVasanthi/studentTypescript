import React, { useRef } from "react";
import { Button, Grid, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const EnglishTest = ({data}:any) => {
  const inputFileRefs = {
    TOEFL: useRef<HTMLInputElement>(null),
    IELTS: useRef<HTMLInputElement>(null),
    PTE: useRef<HTMLInputElement>(null),
    DET: useRef<HTMLInputElement>(null),

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
          <Typography fontWeight="500">TOEFL</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "test.languageProf")}
              ref={inputFileRefs.TOEFL}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.TOEFL.current?.click()}
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
          <Typography fontWeight="500">IELTS</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "test.languageProf")}
              ref={inputFileRefs.IELTS}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.IELTS.current?.click()}
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
          <Typography fontWeight="500">DET</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "test.languageProf")}
              ref={inputFileRefs.DET}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.DET.current?.click()}
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
          <Typography fontWeight="500">PTE</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "test.languageProf")}
              ref={inputFileRefs.PTE}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.PTE.current?.click()}
            >
              <FileUploadOutlinedIcon />
            </Button>
          </>
        </Grid>
      </Grid>
    </div>
  );
};

export default EnglishTest;
