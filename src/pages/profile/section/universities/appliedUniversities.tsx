import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import CustomCard from "../../../../genericComponents/customCard";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const AppliedUniversities = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard handleSubmit={() => console.log("first")}>
            <Box>
              <Typography
                fontWeight="600"
                sx={{
                  height: "2.6rem",
                  fontSize: { xs: "13px", lg: "16px" },
                  fontWeight: 600,
                  textOverflow: "ellipsis ",
                  lineClamp: 2,
                  textTransform: "none",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {/* {data.course.name} */}
                Master of Integrated Innovation for Products & Services
              </Typography>
              <Stack sx={{ my: 1 }} spacing={1}>
                <Typography
                  fontSize="0.9rem"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* <img
                    src={data.university.logoSrc}
                    alt="logo"
                    style={{ width: "1rem", marginRight: "5px" }}
                  /> */}
                  {/* {data.university.name} */}
                  New York university
                </Typography>
                <Typography fontSize="0.8rem">
                  {/* {data.university.location.city},
                  {data.university.location.country} */}
                  Los Angeles, California
                </Typography>
                <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                  <Typography
                    fontSize="0.8rem"
                    color="#1F8659"
                    fontWeight="600"
                  >
                    {/* {data.course.studyMode} */}
                    M.Sc. | 2 years | $38,130 per year | online
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Divider />
            <Box
              sx={{
                background: "#FFFAF4",
                p: 1,
                mt: 1,
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography color="#3B3F76" fontSize="0.8rem">
                  Intake : Dec 2025
                </Typography>
                <Typography color="#C5A636" fontSize="0.8rem">
                  Status : Processing
                </Typography>
                <Typography fontSize="0.8rem">
                  Stage : Waiting for counsellors{" "}
                </Typography>
              </Box>
              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"end"}}>
              <AccessTimeOutlinedIcon />
              </Box>
            </Box>
          </CustomCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default AppliedUniversities;
