import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../assets";
import CustomTabs from "../../genericComponents/tabs";
import { getSingleCourse } from "../../services";

const About = ({ data }: any) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Typography
        fontWeight="700"
        fontSize="20px"
        className="underlined"
        gutterBottom
        width="60px"
      >
        About
      </Typography>
      <Typography fontSize="15px" sx={{ mt: 2 }}>
        {data}
      </Typography>
    </div>
  );
};
const Details = ({ data }: any) => {
  const navigate = useNavigate();

  const handleNavigateToUniversity = (id: string) => {
    navigate(`/university/${id}`);
  };
  return (
    <>
      <Box sx={{ boxShadow: 1, borderRadius: "10px", p: 2 }}>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={5}>
          <img
            src={data?.university?.logoSrc}
            alt="logo"
            style={{ borderRadius: "10px" }}
          />
          <Box>
            <Typography
              fontWeight="600"
              sx={{
                fontSize: { xs: "16px", lg: "20px" },
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              {data?.name}
            </Typography>
            <Typography fontSize="0.9rem">
              <span
                style={{ color: "#1B5FE3", cursor: "pointer" }}
                onClick={() =>
                  handleNavigateToUniversity(data?.university?._id)
                }
              >
                {data?.university?.name}
              </span>
              <span style={{ color: "#848586" }}>
                &nbsp; | {data?.university?.location?.city} ,{" "}
                {data?.university?.location?.state} |{" "}
                {data?.university?.location?.country}
              </span>
            </Typography>
            <Button
              sx={{
                color: "#fff",
                background: "#FEB853",
                textTransform: "none",
                mt: 2,
                fontSize: "16px",
                "&:hover": {
                  background: "#FEB853",
                  color: "#fff",
                },
              }}
            >
              Apply now
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ m: 5 }}>
        <Grid
          container
          sx={{
            background: "#F5F8FA",
            borderRadius: "8px",
            p: 3,
            "& .MuiGrid-item": {
              pt: 0,
            },
          }}
          spacing={2}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            item
            md={2}
            xs={12}
          >
            <Typography fontWeight="600">{data?.duration} months</Typography>
            <Typography color="#848586" fontSize="12px">
              Duration
            </Typography>
          </Grid>
          <Divider sx={{ borderWidth: "1px" }} />
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            item
            md={2}
            xs={12}
          >
            <Typography fontWeight="600">{data?.studyLevel}</Typography>
            <Typography color="#848586" fontSize="12px">
              Course level
            </Typography>
          </Grid>
          <Divider sx={{ borderWidth: "1px" }} />

          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            item
            md={2}
            xs={12}
          >
            <Typography fontWeight="600">{data?.studyMode}</Typography>
            <Typography color="#848586" fontSize="12px">
              Study mode
            </Typography>
          </Grid>
          <Divider sx={{ borderWidth: "1px" }} />

          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            item
            md={3}
            xs={12}
          >
            <Typography fontWeight="600">
              {data?.tuitionFee?.tuitionFee} /{" "}
              {data?.tuitionFee?.tuitionFeeType}
            </Typography>
            <Typography color="#848586" fontSize="12px">
              Fees
            </Typography>
          </Grid>
          <Divider sx={{ borderWidth: "1px" }} />

          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            item
            md={2}
            xs={12}
          >
            <Typography fontWeight="600">24 months</Typography>
            <Typography color="#848586" fontSize="12px">
              Living cost
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
const Information = () => {
  return (
    <div>
      <Box sx={{ mb: 1 }}>
        <Typography fontWeight="600" fontSize="18px" gutterBottom>
          Disciplines
        </Typography>
        <Typography>Disciplines</Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography fontWeight="600" fontSize="18px" gutterBottom>
          Sub Disciplines
        </Typography>
        <Typography>Disciplines</Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography fontWeight="600" fontSize="18px" gutterBottom>
          Start date and Application deadline
        </Typography>
        <Typography>Disciplines</Typography>
      </Box>
    </div>
  );
};
const tabs = [
  {
    label: "Key information ",
    Component: (
      <div>
        <Information />
      </div>
    ),
  },
  {
    label: "Admission requirements",
    Component: <div></div>,
  },
  {
    label: "Scholarship",
    Component: <div></div>,
  },
  {
    label: "Visa information",
    Component: <div></div>,
  },
];

const CourseDetailedPage: React.FC<{ courseId: string }> = ({ courseId }) => {
  const [singleCourseData, setSingleCourseData] = useState<any | null>(null);
  const singleCourse = async () => {
    const response = await getSingleCourse(courseId, "INR");
    if (response) {
      console.log(response);
      setSingleCourseData(response?.data?.data);
    } else {
      console.log("Error");
    }
  };
  useEffect(() => {
    if (courseId !== "") {
      singleCourse();
    }
  }, [courseId]);

  return (
    <div>
      <Box
        sx={{
          background: "#fff",
          borderRadius: "10px",
          height: "82vh",
          overflowY: "scroll",
          p: 2,
          mt: 4,
        }}
      >
        <Details data={singleCourseData} />
        <About data={singleCourseData?.about} />
        <CustomTabs tabs={tabs} />
      </Box>
    </div>
  );
};

export default CourseDetailedPage;
