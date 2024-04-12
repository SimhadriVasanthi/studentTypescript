import { Box } from "@mui/material";
import React from "react";
import Images from "../../../../assets";
import { useAppSelector } from "../../../../assets/hooks";
import Accordion from "../../../../genericComponents/accordian";
import Bachelors from "./bachelors";
import Diploma from "./diploma";
import School from "./grade10";
import Plus2 from "./plus2";
import PostGrad from "./postGrad";

const Education = () => {
  const education = useAppSelector((state) => state.educationhistory);
  console.log(education);

  const profile = [
    {
      title: "Masters",
      component: <PostGrad />,
    },
    {
      title: "Under Graduation",
      component: <Bachelors />,
    },
    {
      title: "Diploma",
      component: <Diploma />,
    },
    {
      title: "Grade 12",
      image: Images.workExperience,
      component: <Plus2 />,
    },
    {
      title: "Grade 10",
      image: Images.workExperience,
      component: <School />,
    },
  ];
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: "10px",
        overflowY: "scroll",
      }}
    >
      {profile?.map((item: any) => (
        <Accordion title={item.title} >
          {item.component}
        </Accordion>
      ))}
    </Box>
  );
};

export default Education;
