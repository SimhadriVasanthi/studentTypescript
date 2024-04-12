import { Box } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../../assets/hooks";
import ExpandCard from "../../../../genericComponents/expandCard";
import Aptitude from "./aptitude";
import EnglishTest from "./englishTest";
import WorkExperienceDocs from "./workExperienceDocs";

const OtherDocs = () => {
  const documents = useAppSelector(state=>state.documents)

  const profile = [
    {
      title: "Aptitude Test Marksheet",
      image: 1,
      component: <Aptitude data={documents?.data?.test?.languageProf}/>,
    },
    {
      title: "English Proficiency Test Scores report",
      image: 2,
      component: <EnglishTest data={documents?.data?.test?.general}/>,
    },
    {
      title: "Work Experience",
      image: 3,
      component: <WorkExperienceDocs data={documents?.data?.workExperiences}/>,
    },
    // {
    //   title: "Letter of Recommendation",
    //   image: 4,
    //   component: <LOR/>,
    // },
    // {
    //   title: "Statement of Purpose",
    //   image: 5,
    //   component: <SOP />,
    // },
  ];
  return (
    <Box>
      {profile?.map((item: any) => (
        <ExpandCard title={item.title} imageUrl={item.image}>
          {item.component}
        </ExpandCard>
      ))}
    </Box>
  );
};

export default OtherDocs;
