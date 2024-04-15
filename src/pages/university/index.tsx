import { Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUniversity } from "../../services";
import OverviewDetailedPage from "./overviewDetailedPage";
import UniversityDetails from "./universityDetails";
import { UniversityListObj } from "../../types/types"; 

const University: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const universityId = id;
  const isRequested = useRef(false);
  const [singleUniversityData, setSingleUniversityData] =
    useState<UniversityListObj | null>(null);

  const fetchSingleUniversity = async () => {
    try {
      const response = await getSingleUniversity(universityId, "INR");
      setSingleUniversityData(response.data.data);
    } catch (error) {
      console.error("Error fetching single university:", error);
    }
  };

  useEffect(() => {
    if (!isRequested.current) {
      fetchSingleUniversity();
      isRequested.current = true;
    }
  }, []);

  if (!singleUniversityData) {
    return (
      <Typography variant="body1" align="center">
        Loading...
      </Typography>
    );
  }

  return (
    <div>
      <Grid container sx={{ p: 2, background: "#F3F8FC" }}>
        <Grid item xs={12} md={4}>
          <UniversityDetails singleUniversityData={singleUniversityData} />
        </Grid>
        <Grid item xs={12} md={8}>
          <OverviewDetailedPage singleUniversityData={singleUniversityData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default University;
