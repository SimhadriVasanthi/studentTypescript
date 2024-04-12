import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Images from "../../../../assets";
import { useAppSelector } from "../../../../assets/hooks";
import { deleteIcon } from "../../../../components/styles/customStyles";
import { CustomButton } from "../../../../genericComponents/customButton";
import CustomCard from "../../../../genericComponents/customCard";
import { ShortlistedCourse } from "../../../../types/types";

const Shortlisted = () => {
  const shortlistedCourses = useAppSelector(
    (state) => state.shortlistedcourses
  );
console.log(shortlistedCourses)
  return (
    <div>
      <Grid container spacing={2}>
        {shortlistedCourses.data?.map((item: ShortlistedCourse, i: number) => 
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
                  {/* {item.course.name} */}
                  Master of Integrated Innovation for Products & Services
                </Typography>
                <Stack sx={{ my: 2 }} spacing={1}>
                  <Typography
                    fontSize="0.9rem"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* <img
               src={item.university.logoSrc}
               alt="logo"
               style={{ width: "1rem", marginRight: "5px" }}
             /> */}
                    {/* {item.university.name} */}
                    New York university
                  </Typography>
                  <Typography fontSize="0.8rem">
                    {/* {item.university.location.city},
             {item.university.location.country} */}
                    Los Angeles, California
                  </Typography>
                  <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                    {/* <Typography fontSize="0.8rem" color="#09757A">
               {" "}
               {item.course.studyLevel} |
             </Typography>
             <Typography fontSize="0.8rem" color="#09757A">
               {item.course.duration
                 ? item.course.duration + " months |"
                 : ""}{" "}
             </Typography>
             <Typography
               fontSize="0.8rem"
               color="#09757A"
               sx={{ display: "flex" }}
             >
               <span
                 className="card"
                 style={{
                   fontSize: "11px",
                   margin: "2px 2px 0 0",
                 }}
               >
                 {" "}
                 {item.course.tuitionFee?.tuitionFee
                   ? item.course.currency.symbol
                   : ""}
                 <span className="hover-text">
                   Currency : {item?.course.currency?.code}
                 </span>
               </span>
               {item.course.tuitionFee?.tuitionFee
                 ? (
                     Math.round(item.course.tuitionFee.tuitionFee * 100) /
                     100
                   ).toLocaleString("en-US")
                 : ""}
               <span
                 style={{
                   fontSize: "11px",
                   marginLeft: "3px",
                   marginTop: "2px",
                 }}
               >
                 {" "}
                 {item.course.tuitionFee?.tuitionFee
                   ? "/" + item.course.tuitionFee?.tuitionFeeType + " |"
                   : ""}{" "}
               </span>
               <span className="hover-text">
                 Currency : {item?.course?.currency?.code}
               </span>
             </Typography> */}
                    <Typography
                      fontSize="0.8rem"
                      color="#1F8659"
                      fontWeight="600"
                    >
                      {/* {item.course.studyMode} */}
                      M.Sc. | 2 years | $38,130 per year | online
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "space-between" }}
                >
                  <CustomButton
                    handleSubmit={() => console.log("clicked")}
                    width="250px"
                  >
                    Apply now
                  </CustomButton>
                  <Box
                    component="img"
                    src={Images.deleteIcon}
                    alt="icon"
                    sx={deleteIcon}
                  />
                </Stack>
              </Box>
            </CustomCard>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Shortlisted;
