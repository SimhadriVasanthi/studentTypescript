import { Box } from "@mui/material";
import React from "react";
import Images from "../../../../assets";
import ExpandCard from "../../../../genericComponents/expandCard";
import Dashboard from "../dashboard";
import Education from "../education";
import TestScoreForm from "../testScores/testScores";
import ExtraCurricular from "./extraCurricular";
import Family from "./family";
import PersonalDetails from "./personalDetails";
import { Preferences, Skills } from "./preferences";
import WorkExperience from "./workExperience";

const ProfileSection = () => {
  const profile = [
    {
      title: "Personal Information",
      image: <img src={Images.proile} alt="header-icon" />,
      component: <PersonalDetails />,
    },
    {
      title: "Education",
      image:  <img src={Images.education} alt="header-icon" />,
      component: <Education />,
    },
    {
      title: "Test Scores",
      image:  <img src={ Images.testscores} alt="header-icon" />,
      component: <TestScoreForm />,
    },
    {
      title: "Work experience",
      image:  <img src={Images.workExperience} alt="header-icon" />,
      component: <WorkExperience />,
    },
    {
      title: "Preferences",
      image:  <img src={Images.preferences} alt="header-icon" />,
      component: <Preferences />,
    },
    {
      title: "Skills",
      image:  <img src={Images.skills} alt="header-icon" />,
      component: <Skills />,
    },
    {
      title: "Family",
      image:  <img src={Images.family} alt="header-icon" />,
      component: <Family />,
    },
    {
      title: "Extra Curriculum Activities ",
      image:  <img src={Images.extracurricular} alt="header-icon" />,
      component: <ExtraCurricular />,
    },
  ];
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: "10px",
        boxShadow: 1,
        height: "82vh",
        p: 2,
        overflowY: "scroll",
      }}
    >
      {profile?.map((item: any) => (
        <ExpandCard title={item.title} imageUrl={item.image}>
          {item.component}
        </ExpandCard>
      ))}
    </Box>
  );
};

export default ProfileSection;
