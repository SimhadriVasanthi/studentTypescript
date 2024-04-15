import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Images from "../../../../assets";
import { useAppDispatch, useAppSelector } from "../../../../assets/hooks";
import { deleteIcon } from "../../../../components/styles/customStyles";
import { CustomButton } from "../../../../genericComponents/customButton";
import CustomCard from "../../../../genericComponents/customCard";
import ConfirmDialog from "../../../../genericComponents/modalPopup/confirmDialog";
import { deleteShortList } from "../../../../services";
import { removeShortlisted } from "../../../../store/Slices/shortlistedCoursesSlice";
import { ShortlistedCourse } from "../../../../types/types";

const Shortlisted = () => {
  const shortlistedCourses = useAppSelector(
    (state) => state.shortlistedcourses
  );
  const [open, setOpen] = useState(false);
  const [deleteId,setDeleteId] = useState("");

  const dispatch = useAppDispatch();

  const handleDeleteOpen = (id:string) => {
    setOpen(true);
    setDeleteId(id)
  };

  const handleDelete = async () => {
    const response = await deleteShortList(deleteId);
    if (response.data.success) {
      dispatch(removeShortlisted(deleteId));
      setOpen(false)
    }
  };
  return (
    <div>
      <Grid container spacing={2}>
        {shortlistedCourses.data && shortlistedCourses?.data?.length > 0 ? (
          <>
            {shortlistedCourses.data?.map(
              (item: ShortlistedCourse, i: number) => (
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
                        {item.course.name}
                      </Typography>
                      <Stack sx={{ my: 2 }} spacing={1}>
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
                        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                          <Typography fontSize="0.8rem" color="#1F8659">
                            {" "}
                            {item.course.studyLevel} |
                          </Typography>
                          <Typography fontSize="0.8rem" color="#1F8659">
                            {item.course.duration
                              ? item.course.duration + " months |"
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
                              {item.course.tuitionFee?.tuitionFee
                                ? item.course.currency.symbol
                                : ""}
                            </span>
                            {item.course.tuitionFee?.tuitionFee
                              ? (
                                  Math.round(
                                    item.course.tuitionFee.tuitionFee * 100
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
                              {item.course.tuitionFee?.tuitionFee
                                ? "/" +
                                  item.course.tuitionFee?.tuitionFeeType +
                                  " |"
                                : ""}{" "}
                              {item.course.studyMode}
                            </span>
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
                          // handleSubmit={undefined}
                        >
                          Apply now
                        </CustomButton>
                        <Box
                          component="img"
                          src={Images.deleteIcon}
                          alt="icon"
                          sx={deleteIcon}
                          onClick={() => handleDeleteOpen(item._id)}
                        />
                      </Stack>
                    </Box>
                  </CustomCard>
                </Grid>
              )
            )}
          </>
        ) : (
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              flexDirection: "column",
            }}
          >
            <img
              src={Images.noData}
              alt="noData"
              style={{ width: "70px", height: "70px" }}
            />
            <Typography>No shortlisted courses</Typography>
          </Grid>
        )}
      </Grid>
      <ConfirmDialog
        open={open}
        handleClose={()=>setOpen(false)}
        additionalData={{
          onSubmit: handleDelete, // Pass the function directly without curly braces
          title:"Are you sure you want to delete this from your shortlist?",
          content:"You’re just a few steps away from applying to universities."
        }}
        
      />
    </div>
  );
};

export default Shortlisted;
