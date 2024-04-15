import { Typography } from "@mui/material";
import React from "react";
import Accordion from "../../../../genericComponents/accordian";

const WorkExperienceDocs = ({data}:any) => {
console.log(data)
  return (
    <div>
      <Accordion title="Work experience letters">
          <Typography>Work experience</Typography>
        </Accordion>
        <Accordion title="Internship letters">
          <Typography>Internship</Typography>
        </Accordion>
      
    </div>
  );
};

export default WorkExperienceDocs;
