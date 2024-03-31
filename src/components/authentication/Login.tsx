import {  Box, Grid, InputLabel, Link, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import Images from '../../assets';
import { CustomButton } from '../../genericComponents/customButton';
import { loginProps } from '../../types/types';

const Login = () => {

  const initValues = {
    email:"",
    password:""
  }
  const onSubmitForm = (values:loginProps)=>{
    console.log(values)
  }
  return (
    <Box sx={{px:5}}> 
        <Box sx={{mb:1.5}}>
          <img src={Images.campusrootLogo} alt="logo"/>
        <Typography sx={{fontSize:{xs:"32px",sm:"36px"},fontWeight:700,color:"#3B3F76"}}>Welcome <b style={{color:"#FEB853"}}>back</b></Typography>
        <Typography sx={{color:"#807E7E"}}>Please enter your details</Typography>
        </Box>
          <Formik
            initialValues={initValues}
            onSubmit={(values: loginProps) => onSubmitForm(values)}
            enableReinitialize={true}
          >
            {({ errors, values, handleChange }) => (
              <Form>
                <Grid container spacing={1.25}>
                  <Grid item xs={12}>
                    <InputLabel id="email" sx={{fontWeight:600,color:"#000"}}>Email id</InputLabel>
                      <Field
                        id="email"
                        name="email"
                        size="small"
                        type="email"
                        as={TextField}
                        placeholder="Enter email"
                        value={values.email}
                        onChange={handleChange}
                        fullWidth
                        sx={{}}
                      />
                  </Grid>
                  <Grid item xs={12}>
                  <InputLabel id="password" sx={{fontWeight:600,color:"#000"}}>Password</InputLabel>
                      <Field
                        id="password"
                        name="password"
                        size="small"
                        type="password"
                        as={TextField}
                        placeholder="Enter password"
                        value={values.password}
                        onChange={handleChange}
                        fullWidth
                        sx={{}}
                      />
                  </Grid>
                  <Grid item xs={12}>
                    <Link sx={{textDecoration:"none",color:"#7C7A7A",fontSize:"14px",fontWeight:500,float:"right",my:1,cursor:"pointer"}}>
                    Forgot password
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                  <CustomButton handleSubmit={onSubmitForm} width="100%" >Login</CustomButton>
                  </Grid>
                  <Grid item xs={12} sx={{textAlign:"center"}}>
                    <Typography sx={{color:"#7C7A7A",fontSize:"1rem",fontWeight:500,}}> New to Campusroot ?&nbsp; 
                    <Link sx={{textDecoration:"none",color:"#3B3F76",fontWeight:600,cursor:"pointer"}}>
                    Sign up
                    </Link>
                    </Typography>
                  </Grid>
                </Grid>
                
              </Form>
            )}
          </Formik>
    </Box>
  )
}

export default Login