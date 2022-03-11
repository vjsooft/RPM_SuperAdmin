import { useFormik } from 'formik'
import React, { useState } from 'react'
import *as Yup from 'yup'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import validation from '../context/validation'
import Api from '../context/Api';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import logo from '../logo.png'
import FormHelperText from '@mui/material/FormHelperText';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

export default function Login() {
  const [state, setstate] = useState('password')
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().max(30, 'Must be 15 characters or less').required("Email is required").matches(validation.pattern.EMAIL, 'email is not valid'),
      password: Yup.string().required('Password is required').max(30, 'Must30 characters or less')
    }),
    onSubmit: (values) => {
      axios.post(Api.login(), values).then((res) => {
        if (res.data.code === 200) {
          toast(res.data.data)
          // setTimeout(()=>{navigator('/')}, 5000);
        } else {
          toast.error(res.data.message, { icon: true });
        }
      }).catch(err=>{

      })
    },
  })
  return (
    <div className='outer-wrapper'>
      <ToastContainer />
      <div className='login-page'>
        <div className='mb-3 text-center logo-w'>
          <img src={logo} className="img-fluid" />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ borderRadius: '50%' }}>
            <div className='mb-4'>
              <TextField
                label="Email"
                type="text" 
                name="email" 
                placeholder='email'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                size="small"
                className='w-100'
              />
              <div>
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText className='text-danger'>{formik.errors.email}</FormHelperText>
                ) : null}
              </div>
            </div>

            <div className='position-relative'>
              <TextField
                label="Password"
                type={state}
                name="password" 
                placeholder='password'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                size="small"
                className='w-100'
              />
              <span className='eye-opt' onClick={()=>{
                if(state === "text"){
                  setstate('password')
                }else{
                  setstate('text')
                }
              }}>{
                state === 'password' ? <VisibilityIcon color="dark" fontSize="small"/> : <VisibilityIcon color="dark" fontSize="small"/>
              }</span>
              <div>
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText className='text-danger'>{formik.errors.password}</FormHelperText>
                ) : null}
              </div>
            </div>
            <div className='text-end'><Link to={'/forgot-password'}>Forgot Password</Link></div>
            <div className='mt-2'>
              <Button type='submit' variant="contained">Submit</Button>
            </div>
          </Box>
        </form>
      </div>
    </div>
  )
}
