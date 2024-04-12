import { Box, Typography } from '@mui/material'
import React from 'react'

const Sessions = () => {
  interface Advisor {
    role: string,
    name: string,
    displayPicSrc: string,
    emailId: string
  }

  const advisors: Advisor[] = [
    {
      role: "Student Advisor",
      name: "Santosh",
      displayPicSrc: "",
      emailId: "santosh@gmail.com",
    },
    {
      role: "Student Advisor",
      name: "",
      displayPicSrc: "",
      emailId: "",
    },
    {
      role: "Student Advisor",
      name: "",
      displayPicSrc: "",
      emailId: "",
    },
  ]

  return (
    <Box sx={{padding:"1rem 5rem"}}>
      {/* Map over the advisors array and render each advisor's information */}
      {advisors?.map((advisor: Advisor, index: number) => (
        <Box key={index} sx={{ boxShadow:1, padding: '1rem', marginBottom: '1rem',borderRadius:"10px" }}>
          <Typography fontSize="16px" color="#3B3F76" className="underlined">{advisor.role}</Typography>
          <Typography variant="body1">{advisor.name}</Typography>
          <Typography variant="body1">{advisor.emailId}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default Sessions
