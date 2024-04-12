import React, { useRef } from "react";
import { Button, Grid, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Accordion from "../../../../genericComponents/accordian";

const AcademicDocs = ({data}:any) => {
  const inputFileRefs = {
    secondarySchool: useRef<HTMLInputElement>(null),
    plus2: useRef<HTMLInputElement>(null),
    degree: useRef<HTMLInputElement>(null),
  };

  const handleSubmit = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldPath: string
  ) => {
    const file = event.target.files && event.target.files[0]; // Check if files exist and get the first one
    console.log(file, event, fieldPath);
  };

  const Bachelors = () => {
    const bachelorsFileRefs = {
      transcripts: useRef<HTMLInputElement>(null),
      bonafide: useRef<HTMLInputElement>(null),
      CMM: useRef<HTMLInputElement>(null),
      PCM: useRef<HTMLInputElement>(null),
      OD: useRef<HTMLInputElement>(null),
    };
    return (
      <>
        <Accordion title="Bachelors">
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
                <Typography>Transcripts</Typography>
              </Grid>
              <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
                <>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    className=""
                    onChange={(event) =>
                      handleSubmit(event, "academic.bachelors.transcripts")
                    }
                    ref={bachelorsFileRefs.transcripts}
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
                      bachelorsFileRefs.transcripts.current?.click()
                    }
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
                <Typography>Bonafide</Typography>
              </Grid>
              <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
                <>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    className=""
                    onChange={(event) =>
                      handleSubmit(event, "academic.bachelors.bonafide")
                    }
                    ref={bachelorsFileRefs.bonafide}
                    accept=".pdf"
                  />
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      p: 0,
                      fontSize: "0.7rem",
                    }}
                    onClick={() => bachelorsFileRefs.bonafide.current?.click()}
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
                <Typography>CMM</Typography>
              </Grid>
              <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
                <>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    className=""
                    onChange={(event) =>
                      handleSubmit(event, "academic.bachelors.CMM")
                    }
                    ref={bachelorsFileRefs.CMM}
                    accept=".pdf"
                  />
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      p: 0,
                      fontSize: "0.7rem",
                    }}
                    onClick={() => bachelorsFileRefs.CMM.current?.click()}
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
                <Typography>PCM</Typography>
              </Grid>
              <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
                <>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    className=""
                    onChange={(event) =>
                      handleSubmit(event, "academic.bachelors.PCM")
                    }
                    ref={bachelorsFileRefs.PCM}
                    accept=".pdf"
                  />
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      p: 0,
                      fontSize: "0.7rem",
                    }}
                    onClick={() => bachelorsFileRefs.PCM.current?.click()}
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
              }}
            >
              <Grid item xs={4}>
                <Typography>OD</Typography>
              </Grid>
              <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
                <>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    className=""
                    onChange={(event) =>
                      handleSubmit(event, "academic.bachelors.OD")
                    }
                    ref={bachelorsFileRefs.OD}
                    accept=".pdf"
                  />
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      p: 0,
                      fontSize: "0.7rem",
                    }}
                    onClick={() => bachelorsFileRefs.OD.current?.click()}
                  >
                    <FileUploadOutlinedIcon />
                  </Button>
                </>
              </Grid>
            </Grid>
          </div>
        </Accordion>
      </>
    );
  };

  const Masters = () => {
    const mastersFileRefs = {
      transcripts: useRef<HTMLInputElement>(null),
      bonafide: useRef<HTMLInputElement>(null),
      CMM: useRef<HTMLInputElement>(null),
      PCM: useRef<HTMLInputElement>(null),
      OD: useRef<HTMLInputElement>(null),
    };
    return (
      <>
        <Accordion title="Masters">
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
                <Typography>Transcripts</Typography>
              </Grid>
              <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
                <>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    className=""
                    onChange={(event) =>
                      handleSubmit(event, "academic.masters.transcripts")
                    }
                    ref={mastersFileRefs.transcripts}
                    accept=".pdf"
                  />
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      p: 0,
                      fontSize: "0.7rem",
                    }}
                    onClick={() => mastersFileRefs.transcripts.current?.click()}
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
                <Typography>Bonafide</Typography>
              </Grid>
              <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
                <>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    className=""
                    onChange={(event) =>
                      handleSubmit(event, "academic.masters.bonafide")
                    }
                    ref={mastersFileRefs.bonafide}
                    accept=".pdf"
                  />
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      p: 0,
                      fontSize: "0.7rem",
                    }}
                    onClick={() => mastersFileRefs.bonafide.current?.click()}
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
                <Typography>CMM</Typography>
              </Grid>
              <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
                <>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    className=""
                    onChange={(event) =>
                      handleSubmit(event, "academic.masters.CMM")
                    }
                    ref={mastersFileRefs.CMM}
                    accept=".pdf"
                  />
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      p: 0,
                      fontSize: "0.7rem",
                    }}
                    onClick={() => mastersFileRefs.CMM.current?.click()}
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
                <Typography>PCM</Typography>
              </Grid>
              <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
                <>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    className=""
                    onChange={(event) =>
                      handleSubmit(event, "academic.masters.PCM")
                    }
                    ref={mastersFileRefs.PCM}
                    accept=".pdf"
                  />
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      p: 0,
                      fontSize: "0.7rem",
                    }}
                    onClick={() => mastersFileRefs.PCM.current?.click()}
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
              }}
            >
              <Grid item xs={4}>
                <Typography>OD</Typography>
              </Grid>
              <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
                <>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    className=""
                    onChange={(event) =>
                      handleSubmit(event, "academic.masters.OD")
                    }
                    ref={mastersFileRefs.OD}
                    accept=".pdf"
                  />
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      p: 0,
                      fontSize: "0.7rem",
                    }}
                    onClick={() => mastersFileRefs.OD.current?.click()}
                  >
                    <FileUploadOutlinedIcon />
                  </Button>
                </>
              </Grid>
            </Grid>
          </div>
        </Accordion>
      </>
    );
  };

  return (
    <div>
      <Masters />
      <Bachelors />
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
          <Typography fontWeight="500">School</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) =>
                handleSubmit(event, "academic.secondarySchool")
              }
              ref={inputFileRefs.secondarySchool}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.secondarySchool.current?.click()}
            >
              <FileUploadOutlinedIcon />
            </Button>
          </>
        </Grid>
      </Grid>
      {/* PLus 2 */}
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
          <Typography fontWeight="500">Grade 12</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "academic.plus2")}
              ref={inputFileRefs.plus2}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.plus2.current?.click()}
            >
              <FileUploadOutlinedIcon />
            </Button>
          </>
        </Grid>
      </Grid>
      {/* Degree */}
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
          <Typography fontWeight="500">Degree</Typography>
        </Grid>
        <Grid item xs={8} sx={{ justifyContent: "end", display: "flex" }}>
          <>
            <input
              style={{ display: "none" }}
              type="file"
              className=""
              onChange={(event) => handleSubmit(event, "academic.degree")}
              ref={inputFileRefs.degree}
              accept=".pdf"
            />
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                p: 0,
                fontSize: "0.7rem",
              }}
              onClick={() => inputFileRefs.degree.current?.click()}
            >
              <FileUploadOutlinedIcon />
            </Button>
          </>
        </Grid>
      </Grid>
    </div>
  );
};

export default AcademicDocs;
