import React from "react";
import CustomTabs from "../../genericComponents/tabs";
import { UniversityListObj } from "../../types/types";
import Overview from "./overview";
import UniversityCourses from "./universityCourses";

const OverviewDetailedPage : React.FC<{ singleUniversityData: UniversityListObj }> = ({ singleUniversityData })  => {

  const tabs = [
    {
      label: "Overview ",
      Component: <div>
        <Overview singleUniversityData={singleUniversityData}/>
      </div>,
    },
    {
      label: "Courses",
      Component: <div>
        <UniversityCourses singleUniversityData={singleUniversityData}/>
      </div>,
    },
  ];
  return (
    <div>
        <CustomTabs tabs={tabs} />

    </div>
  );
};

export default OverviewDetailedPage;
