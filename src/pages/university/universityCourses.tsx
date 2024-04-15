import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Images from "../../assets";
import {
  expandCardStyles,
} from "../../components/styles/customStyles";
import { CustomButton } from "../../genericComponents/customButton";
import CustomCard from "../../genericComponents/customCard";
import {  UniversityListObj } from "../../types/types";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const UniversityCourses : React.FC<{ singleUniversityData: UniversityListObj }> = ({ singleUniversityData })  => {

  const [loading,setLoading] = useState(false)
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: "10px",
        boxShadow: 1,
        height: "72vh",
        overflowY: "scroll",
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        {singleUniversityData.courses?.map((item: any, i: number) => (
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard>
              <Box>
                <Typography
                  fontWeight="600"
                  sx={{
                    height: "2.55rem",
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
                  {item.name}
                </Typography>
                <Stack sx={{ my: 2 }} spacing={1}>
                  <Typography fontSize="0.9rem" color="#FF751A" fontWeight="500">
                    {item.subDiscipline}
                  </Typography>
                  <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                    <Typography fontSize="0.8rem" color="#1F8659">
                      {" "}
                      {item.studyLevel} |
                    </Typography>
                    <Typography fontSize="0.8rem" color="#1F8659">
                      {item.duration
                        ? item.duration + " months |"
                        : ""}{" "}
                    </Typography>
                    <Typography
                      fontSize="0.8rem"
                      color="#1F8659"
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
                        {item.tuitionFee?.tuitionFee
                          ? item.currency.symbol
                          : ""}
                      </span>
                      {item.tuitionFee?.tuitionFee
                        ? (
                            Math.round(
                              item.tuitionFee.tuitionFee * 100
                            ) / 100
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
                        {item.tuitionFee?.tuitionFee
                          ? "/" + item.tuitionFee?.tuitionFeeType 
                          : ""}{" "}
                      </span>
                    </Typography>
                  </Stack>
                </Stack>
                <Divider sx={{mb:2,borderWidth:"1px"}}/>
                <Box>
                  <Typography  sx={{
                     height: "3.95rem",
                     fontSize: { xs: "12px", lg: "13px" },
                     textOverflow: "ellipsis ",
                     lineClamp: 3,
                     textTransform: "none",
                     overflow: "hidden",
                     display: "-webkit-box",
                     WebkitLineClamp: "3",
                     WebkitBoxOrient: "vertical",
                     mb:1
                  }}>
                    {item.about}
                  </Typography>
                </Box>
                <Grid container
                  direction="row"
                  spacing={4}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Grid item xs={9}>
                  <CustomButton
                    handleSubmit={() => console.log("clicked")}
                    width="100%"
                    // handleSubmit={undefined}
                  >
                    Apply now
                  </CustomButton>
                  </Grid>
                  <Grid item xs={3}>
                  <Box sx={expandCardStyles.iconStyle}>
                    {loading ? (
                      <Box
                        component="img"
                        src={Images.standardLoader}
                        alt="standardLoader"
                        sx={{ width: "1rem", height: "1rem" }}
                      />
                    ) : (
                      <>
                          {/* <BookmarkIcon sx={{color:"#FF751A"}}/> */}
                        {/* ) : ( */}
                          <BookmarkBorderIcon
                          sx={{color:"#FF751A"}}
                            // onClick={() => handleShortlist(data)}
                          />
                      </>
                    )}
                  </Box>
                  </Grid>
                </Grid>
              </Box>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UniversityCourses;
