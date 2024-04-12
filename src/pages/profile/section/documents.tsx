import { Box } from '@mui/material'
import React from 'react'
import CustomTabs from '../../../genericComponents/tabs'
import OtherDocs from './documents/otherDocs'
import TranscriptDocs from './documents/personal'

const Documents = () => {
  const tabs = [
    {
      label: "Transcript Documents ",
      Component: (
        <div>
          <TranscriptDocs/>
        </div>
      ),
    },
    {
      label: "Other Documents",
      Component: (
        <div>
          <OtherDocs/>
        </div>
      ),
    },
  
  ];
  // const uploadDoc = async()=>{
  //   dispatch(addDocument({
  //     pathArray:["personal","resume"],
  //     isArray:false,
  //     data:undefined
  //   }))
  // }
  return (
    <Box sx={{
      background: "#fff",
      borderRadius: "10px",
      boxShadow: 1,
      height: "81vh",
      p: 2,
      overflowY:"scroll",
    }}>
      <CustomTabs tabs={tabs}/>
    </Box>
  )
}

export default Documents