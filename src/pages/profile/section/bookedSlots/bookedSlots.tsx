import { Box } from '@mui/material';
import CustomTabs from '../../../../genericComponents/tabs';
import CompletedSessions from './completedSessions';
import Sessions from './sessions';
import UpcomingSessions from './upcomingSessions';

const BookedSlots = () => {
  const tabs = [
    {
      label: "Sessions ",
      Component: (
        <div>
          <Sessions/>
        </div>
      ),
    },
    {
      label: "Upcoming Sessions ",
      Component: (
        <div>
          <UpcomingSessions/>
        </div>
      ),
    },
    {
      label: "Completed / Cancelled Sessions",
      Component: (
        <div>
          <CompletedSessions/>
        </div>
      ),
    },
  ];
  return (
    <Box sx={{
      background: "#fff",
      borderRadius: "10px",
      boxShadow: 1,
      height: "81vh",
      overflowY:"scroll",
      p: 2,
    }}>
      <CustomTabs tabs={tabs}/>
    </Box>
  )
}

export default BookedSlots