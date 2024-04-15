import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { getDocfromChat } from "../../../../services/index";
import { Box, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
// import Images from "../../assets/index";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfPreview: React.FC = () => {
  const docId = localStorage.getItem("docId");
  const [url, setUrl] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const downloadPdf = () => {
    const link = document.createElement("a");
    if (url) {
      link.href = url;
      link.download = "file.pdf";
      link.click();
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < (numPages || 1)) {
      setPageNumber(pageNumber + 1);
    }
  };

  const getDocumentOrImage = async (id: any) => {
    if (id) {
      setLoading(true);
      const response = await getDocfromChat(id);
      if (response) {
        setUrl(response);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    getDocumentOrImage(docId);
  }, [docId]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#E6E6E6",
        border: "1px solid #000",
        marginTop: "3rem",
      }}
    >
      {loading ? (
        <Box sx={{ height: "100vh" }}>
          <Typography>Loading ...</Typography>
        </Box>
      ) : (
        <div>
          <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
            <Grid
              item
              md={4}
              style={{ height: "100vh", overflow: "hidden scroll" }}
            >
              <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages || 0), (el, index) => (
                  <Page
                    onClick={() => setPageNumber(index + 1)}
                    className="pdfCard"
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ))}
              </Document>
            </Grid>
            <Grid
              item
              md={8}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <div className="Example__container__document">
                <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page
                    pageNumber={pageNumber}
                    // Corrected TypeScript syntax
                    // style={{ boxShadow: "10px 10px 20px #aaaa" }}
                  />
                </Document>
                <Stack
                  direction="row"
                  sx={{ justifyContent: "space-between", mt: 3 }}
                  className="pdf-navigation"
                >
                  <button
                    onClick={goToPreviousPage}
                    disabled={pageNumber <= 1}
                    style={{
                      border: 0,
                      background: "#E6E6E6",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowBackIosNewOutlinedIcon />
                  </button>
                  <p>
                    Page {pageNumber} of {numPages || 1}
                  </p>
                  <button
                    onClick={goToNextPage}
                    disabled={pageNumber >= (numPages || 1)}
                    style={{
                      border: 0,
                      background: "#E6E6E6",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowForwardIosOutlinedIcon />
                  </button>
                </Stack>
              </div>
              <DownloadIcon onClick={downloadPdf} sx={{ ml: 5 }} />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default PdfPreview;
