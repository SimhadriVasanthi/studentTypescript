import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import CustomCard from "../../../../genericComponents/customCard";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useAppSelector } from "../../../../assets/hooks";

const AppliedUniversities = () => {
  const applicationsData = useAppSelector(state =>state.applications)
  console.log(applicationsData)
  
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} lg={4}>
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
              </Stack>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Stack direction="row" spacing={1}>
                <Typography
                  component="span"
                  fontSize="0.8rem"
                  fontWeight="500"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                  }} // Prevent line wrapping
                >
                  <WatchLaterIcon sx={{ color: "#72D4D1",fontSize:"1.25rem"  }} />
                  &nbsp; Dec 2025
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Typography
                  fontSize="0.8rem"
                  fontWeight="500"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <WatchLaterIcon sx={{ color: "#72D4D1",fontSize:"1.25rem"  }} />
                  &nbsp;Processing
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Typography
                  fontSize="0.8rem"
                  fontWeight="500"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <WatchLaterIcon sx={{ color: "#72D4D1",fontSize:"1.25rem" }} />
                  &nbsp; Waiting for counsellors
                </Typography>
              </Stack>
            </Box>
          </CustomCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default AppliedUniversities;
