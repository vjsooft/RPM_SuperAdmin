import { useFormik } from 'formik'
import *as Yup from 'yup'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import validation from '../context/validation'
import Api from '../context/Api';
import { Button } from '@mui/material';
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import logo from '../logo.png'
import FormHelperText from '@mui/material/FormHelperText';
import { Link } from 'react-router-dom';

export default function forgotpassword() {
    const formik = useFormik({
        initialValues:{
            email:''
        },
        validationSchema: Yup.object({
            email: Yup.string().max(30, 'Must be 15 characters or less').required("Email is required").matches(validation.pattern.EMAIL, 'email is not valid')
        }),
        onSubmit:(values) =>{
            axios.post(Api.forgotpassword(), values).then((res)=>{
                if(res.data.code == 200){
                    console.log("submit", res)
                }else{}
            }).catch(err =>{

            })
        }
    })
  return (
    <div className='outer-wrapper'>
    <ToastContainer/>
    <div className='login-page'>
        <div className='mb-3 text-center logo-w'>
          <img src={logo} className="img-fluid" />
        </div>
        <div className='mb-3 text-center'>
            <h3>Forgot Password</h3>
            <p>Enter your email address associated with the account, we will send <strong>OTP</strong> to reset password</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ borderRadius: '50%' }}>
            <div className='mb-4'>
              <TextField
                label="Email"
                type="text" 
                name="email" 
                placeholder='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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

            <div className='mt-2'>
              <Button type='submit' variant="contained">Submit</Button>
            </div>
            <Box><Link to={'/login'}>Login</Link></Box>
          </Box>
        </form>
      </div>
    </div>
  )
}
