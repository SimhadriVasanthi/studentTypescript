import { Grid } from "@mui/material";
import CourseDetailedPage from "./courseDetailedPage";
import CoursesCard from "./coursesCard";


const Courses = () => {
  return (
    <div>
      <Grid container sx={{p:2,px:3 }} spacing={4}>
        <Grid item xs={12} md={3.5}>
            <CoursesCard/>
        </Grid>
        <Grid item xs={12} md={8.5}>
           <CourseDetailedPage/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Courses;
