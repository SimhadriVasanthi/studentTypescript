import { Grid } from "@mui/material";
import { useState } from "react";
import CourseDetailedPage from "./courseDetailedPage";
import CoursesCard from "./coursesCard";


const Courses = () => {
  const [courseId,setCourseId] = useState("")
  return (
    <div>
      <Grid container sx={{p:2,px:3 }} spacing={4}>
        <Grid item xs={12} md={3.5}>
            <CoursesCard setCourseId={setCourseId}/>
        </Grid>
        <Grid item xs={12} md={8.5}>
           <CourseDetailedPage courseId={courseId}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Courses;
