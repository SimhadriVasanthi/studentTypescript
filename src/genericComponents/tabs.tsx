import React, { ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { activeTab } from '../components/styles/customStyles';

interface TabData {
  label: string;
  Component: ReactNode;
}

interface CustomTabsProps {
  tabs: TabData[];
}

function TabPanel(props: { children?: ReactNode; index: number; value: number; }) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={[{
          "& .MuiTabs-root":{
            display:"inline-block !important"
          },
          "& .MuiTabs-scroller": {
            overflowX: "scroll !important",
            "&::-webkit-scrollbar": {
              width: "12px",
            },
            "&::-webkit-scrollbar-thumb": {
            //   backgroundColor: "#fff",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-track": {
            //   backgroundColor: "#fff",
            },
          }
        }, activeTab]}
      >
        {tabs.map(({ label }, i) => (
          <Tab
            label={label}
            key={i}
            sx={{
              textTransform: 'none',
              fontSize: { sm: '1rem', xs: "14px" },
              mb:2
            }}
          />
        ))}
      </Tabs>
      {tabs.map(({ Component }, i) => (
        <TabPanel value={value} index={i} key={i} >
          {Component}
        </TabPanel>
      ))}
    </Box>
  );
}

export default CustomTabs;
