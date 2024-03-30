import {  Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import CustomModal from '../../genericComponents/modalPopup/customModal';
import { loginProps } from '../../types/types';

const Login = () => {
  const [open,setOpen] = useState(false)

  const initValues = {
    email:"",
    password:""
  }
  const handleOpenModal = () => {
    setOpen(true);
  }

  const handleCloseModal = () => {
    setOpen(false);
  }
  const onSubmitForm = (values:loginProps)=>{
    console.log(values)
  }
  return (
    <div>
      <Button onClick={handleOpenModal}>Open</Button>
      <CustomModal
        open={open}
        handleClose={handleCloseModal}
      >
        <Box sx={{mb:1.5}}>
        <Typography sx={{fontSize:"40px",fontWeight:700,color:"#3B3F76"}}>Welcome to <b style={{color:"#FEB853"}}>campusroot</b></Typography>
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
                  <Button type="submit">Continue</Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </CustomModal>
    </div>
  )
}

export default Login