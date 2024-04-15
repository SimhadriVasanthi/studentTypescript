import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import CustomCard from "../../../../genericComponents/customCard";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useAppSelector } from "../../../../assets/hooks";
import { Application } from "../../../../types/types";
import ApplicationPopup from "./applicationPopup";

const AppliedUniversities = () => {
  const applicationsData = useAppSelector((state) => state.applications);
  console.log(applicationsData.data.processing);
  function date(date: Date) {
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return month + " " + year;
  }
  return (
    <div>
      <Grid container spacing={2}>
        {applicationsData?.data?.processing?.map(
          (item: Application, i: number) => (
            <Grid item xs={12} sm={6} lg={4}>
              <CustomCard>
                <Box>
                  <Typography
                    fontWeight="600"
                    sx={{
                      height: "2.6rem",
                      fontSize: { xs: "13px", lg: "15px" },
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
                    {item.course.name}
                  </Typography>
                  <Stack sx={{ my: 1 }} spacing={1}>
                    <Typography
                      fontSize="0.9rem"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.university.logoSrc}
                        alt="logo"
                        style={{ width: "1rem", marginRight: "5px" }}
                      />
                      {item.university.name}
                    </Typography>
                    <Typography fontSize="0.8rem">
                      {item.university.location.city},
                      {item.university.location.country}
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
                      <WatchLaterIcon
                        sx={{ color: "#72D4D1", fontSize: "1.25rem" }}
                      />
                      &nbsp;{" "}
                      {item?.intake ? date(new Date(item?.intake)) : null}
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography
                      fontSize="0.8rem"
                      fontWeight="500"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <WatchLaterIcon
                        sx={{ color: "#72D4D1", fontSize: "1.25rem" }}
                      />
                      &nbsp;{item.status}
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography
                      fontSize="0.8rem"
                      fontWeight="500"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <WatchLaterIcon
                        sx={{ color: "#72D4D1", fontSize: "1.25rem" }}
                      />
                      &nbsp;{item.stage}
                    </Typography>
                  </Stack>
                </Box>
              </CustomCard>
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};

export default AppliedUniversities;
