import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../assets/hooks";
import { expandCardStyles } from "../../components/styles/customStyles";
import { CustomButton } from "../../genericComponents/customButton";
import CustomCard from "../../genericComponents/customCard";
import { ShortlistedCourse } from "../../types/types";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Images from "../../assets";
import { getAlllistings } from "../../services";

const CoursesCard = () => {
  const shortlistedCourses = useAppSelector(
    (state) => state.shortlistedcourses
  );
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCourses, setTotalCourses] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const [courses, setCourses] = useState([]);

  const isRequested = useRef(false);

  const filterdata = {
    page: currentPage,
    filterData: [],
    currency: "INR",
  };
  const courseListings = async () => {
    const response = await getAlllistings("courses", filterdata);
    if (response) {
      console.log(response);
      setCourses(response.data.list);
      setTotalCourses(response.data.totalItems);
      setTotalPages(response.data.totalPages);
    }
  };

  useEffect(() => {
    if (!isRequested.current) {
      courseListings();

      isRequested.current = true;
    }
  }, []);

  return (
    <div>
      <Typography gutterBottom fontWeight="600">
        Total courses : {totalCourses}
      </Typography>
      <Box
        sx={{
          borderRadius: "10px",
          height: "82vh",
          overflowY: "scroll",
          p: 2,
        }}
      >
        <Grid container spacing={1}>
          {courses && courses?.length > 0 && (
            <>
              {courses?.map((item: any, i: number) => (
                <Grid item xs={12}>
                  <Card
                    sx={{
                      boxShadow: 0,
                      background:"#F7F7F7",
                      p: 2,
                      borderRadius: "0.625rem",
                      mb: 1,
                      cursor: "pointer",
                      position: "relative",
                      "&:hover": {
                        // background: "rgba(59, 63, 118, 0.1)",
                        border: "1px solid #3B3F76",
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        fontWeight="600"
                        sx={{
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
                        <Typography
                          fontSize="0.8rem"
                          color="#FF751A"
                          fontWeight="500"
                        >
                          {item.subDiscipline}
                        </Typography>
                        <Typography
                          fontSize="0.9rem"
                          fontWeight="500"
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
                        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                          <Typography fontSize="0.8rem" color="#1F8659">
                            {" "}
                            {item.studyLevel} |
                          </Typography>
                          <Typography fontSize="0.8rem" color="#1F8659">
                            {item.duration ? item.duration + " months |" : ""}{" "}
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
                                  Math.round(item.tuitionFee.tuitionFee * 100) /
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
                              {item.tuitionFee?.tuitionFee
                                ? "/" + item.tuitionFee?.tuitionFeeType + " |"
                                : ""}{" "}
                              {item.studyMode}
                            </span>
                          </Typography>
                        </Stack>
                      </Stack>
                      <Grid
                        container
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
                                  sx={{ color: "#FF751A" }}
                                  // onClick={() => handleShortlist(data)}
                                />
                              </>
                            )}
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </> )}
        </Grid>
      </Box>
    </div>
  );
};

export default CoursesCard;
