import { Box } from "@mui/material";
import React from "react";
import CustomTabs from "../../../../genericComponents/tabs";
import AppliedUniversities from "./appliedUniversities";
import Shortlisted from "./shortlisted";

const Universities = () => {
  const tabs = [
    {
      label: "Shortlisted universities",
      Component: (
        <div>
          <Shortlisted />
        </div>
      ),
    },
    {
      label: "Applied universities",
      Component: (
        <div>
          <AppliedUniversities />
        </div>
      ),
    },
  ];
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: "10px",
        boxShadow: 1,
        height: "81vh",
        p: 2,
      }}
    >
      <CustomTabs tabs={tabs} />
    </Box>
  );
};

export default Universities;
