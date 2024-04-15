import { Grid, Typography } from "@mui/material";
import { Card } from "@mui/material";
import React from "react";
import {
  CustomTimeline,
  CustomTimelineItem,
} from "../../../../genericComponents/timeline";

const Logs = ({ data}:any) => {
  return (
    <div>
      <Card style={{ padding: "1rem" }}>
        <h3>Application logs</h3>
        <CustomTimeline>
          {data?.map((item: any, index: any) =>
            item.stages.map((stage: any, stageIndex: any) => (
              <CustomTimelineItem
                key={stage._id}
                content={`Step ${stageIndex + 1}`}
              >
                <p
                  style={{
                    marginLeft: "15px",
                    marginBottom: "5px",
                    fontWeight: "600",
                  }}
                >
                  {stage.name}
                </p>
                {/* Add other stage information as needed */}
              </CustomTimelineItem>
            ))
          )}
        </CustomTimeline>
      </Card>
    </div>
  );
};

const ApplicationPopup = ({ data}:any) => {
  return (
    <div>
      <Typography>
        Master of Integrated Innovation for Products & Services{" "}
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Logs data={data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ApplicationPopup;
