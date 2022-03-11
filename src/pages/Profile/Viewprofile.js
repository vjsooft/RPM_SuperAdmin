import {useState} from "react";
import {Avatar,Box,Button,Card,CardActions,CardContent,Divider,Typography, CardHeader,TextField,Grid} from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Api from '../../context/Api';
import validation from '../../context/validation';
import *as Yup from 'yup'
import { ToastContainer, toast } from "react-toastify";
// import { Link } from 'react-router-dom';
import {useFormik } from 'formik'
import axios from 'axios';
import generalConfig from "../../context/generalConfig";
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';


const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  name: 'Katarina Smith',
  address: 'Zimo Infotech'
};
export default function Viewprofile() {
// Image Crop
    // const [srcImg, setSrcImg] = useState(null);
    // const [image, setImage] = useState(null);
    // const [crop, setCrop] = useState( {
    //   aspect: 16 / 9,
    //   width: 150,
    //   height: 150, 
    //   // minWidth:201,
    //   // maxWidth:202,
    //   // height: 200,
    //   // minHeight:201,
    //   // maxHeight:202,
    //   // disabled:false,
    //   // locked:true,
    //   circularCrop:true
    // });
    // const [result, setResult] = useState(null);

    // const handleImage = async (event) => {
    //     setSrcImg(URL.createObjectURL(event.target.files[0]));
    //     console.log(event.target.files[0]);
    // };
    // const getCroppedImg = async () => {
    //     try {
    //         const canvas = document.createElement("canvas");
    //         const scaleX = image.naturalWidth / image.width;
    //         const scaleY = image.naturalHeight / image.height;
    //         canvas.width = crop.width;
    //         canvas.height = crop.height;
    //         const ctx = canvas.getContext("2d");
    //         ctx.drawImage(
    //             image,
    //             crop.x * scaleX,
    //             crop.y * scaleY,
    //             crop.width * scaleX,
    //             crop.height * scaleY,
    //             0,
    //             0,
    //             crop.width,
    //             crop.height
    //         );

    //         const base64Image = canvas.toDataURL("image/jpeg", 1);
    //         setResult(base64Image);
    //         console.log(result);
    //     } catch (e) {
    //         console.log("crop the image");
    //     }
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(result);
    // }










  const formik = useFormik ({
    initialValues:{
      fName:"", lName:"", email:"", mobileNo:"", address:"", image:"",
    },
    validationSchema: Yup.object({
      fName:Yup.string().required("First name is required").max(30, 'Must be 15 characters or less').matches(validation.pattern.NAME, 'First name is not valid'),
      lName:Yup.string().required("Last name is required").max(30, 'Must be 15 characters or less').matches(validation.pattern.NAME, 'Last name is not valid'),
      email:Yup.string().required("Email is required").max(30, 'Must be 15 characters or less').matches(validation.pattern.EMAIL, 'Email is not valid'),
      mobileNo:Yup.string().required("Mobile number is required").max(10, 'Must be 10 characters').matches(validation.pattern.PHONE_NO, 'Mobile number is not valid'),
      address:Yup.string().required("Address is required").max(90, 'Must be 15 characters or less').matches(validation.pattern.WHITESPACE, 'Address is not valid'),
    }),
    onSubmit:(values)=>{
      console.log("cascsac", values)
      axios.post(Api.profileUpdate(), values).then((res)=>{
        if(res.data.code == 200){

        }else{}
      }).catch(err=>{

      })
    }
  })
  let profileImageUpload = (event) => {
    let imgData = event.target.files[0];
    const fd = new FormData();
    fd.append("file", imgData);
    fd.append("type", "GROUPIMAGE");
    axios.post(Api.profileImage(), fd).then((response) => {
      if (response.data.code === 200) {
        formik.setFieldValue("image", response.data.data.imagePath);
      } else {
        toast.error(response.data.message, { icon: true });
      }
    }).catch(err=>{

    })
  };

  return (
    <div className='container'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
              {/* <div className='col-12'>
              <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImage}
                        />
                    </div>
                    <div>
                        {srcImg && (
                            <div>
                                <ReactCrop
                                    style={{maxWidth: "50%"}}
                                    src={srcImg}
                                    onImageLoaded={setImage}
                                    crop={crop}
                                    onChange={setCrop}
                                />
                                <Button className="cropButton" onClick={getCroppedImg}
                                >
                                    crop
                                </Button>
                            </div>
                        )}
                        {result && (
                            <div>
                                <img src={result} alt="cropped image"/>
                            </div>
                        )}
                    </div>
              </div> */}



              <div className='col-4'>
                <Card >
                  <CardContent>
                    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                      {formik.values.image ? (
                        <Avatar src={`${generalConfig.profileImage}${formik.values.image}`} sx={{ height: 64, mb: 2, width: 64}}/>
                      ) : <Avatar src={user.avatar} sx={{ height: 64, mb: 2, width: 64}} />
                      }
                      <Typography color="textPrimary" gutterBottom variant="h5">
                        {formik.values.fName || formik.values.lName ? (
                          <Grid>{formik.values.fName} {formik.values.lName}</Grid>
                        ) : <Grid>{user.name}</Grid>
                        }
                      </Typography>
                      <Typography color="textSecondary" variant="body2">
                        {formik.values.address ? (
                          <Grid>{formik.values.address}</Grid>
                        ) : <Grid>{user.address}</Grid>}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Divider />
                  <CardActions className='position-relative'>
                    <input className='cusImgUploded' type="file" onChange={(e) => profileImageUpload(e)} name="image" onBlur={formik.handleBlur} />
                    <Button color="primary" fullWidth variant="text">Upload picture</Button>
                  </CardActions>
                </Card>
              </div>
              <div className='col-8'>
                  <Card>
                    <CardHeader subheader="The information can be edited" title="Profile"/>
                    <Divider />
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                          <TextField fullWidth label="First name" name="fName" variant="outlined" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fName}/>
                          <div>
                            {formik.touched.fName && formik.errors.fName ? (
                              <FormHelperText className='text-danger'>{formik.errors.fName}</FormHelperText>
                            ) : null}
                          </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <TextField fullWidth label="Last name" name="lName" variant="outlined" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lName}/>
                          <div>
                            {formik.touched.lName && formik.errors.lName ? (
                              <FormHelperText className='text-danger'>{formik.errors.lName}</FormHelperText>
                            ) : null}
                          </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <TextField fullWidth label="Email Address" name="email" variant="outlined" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}/>
                          <div>
                            {formik.touched.email && formik.errors.email ? (
                              <FormHelperText className='text-danger'>{formik.errors.email}</FormHelperText>
                            ) : null}
                          </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <TextField fullWidth label="Phone Number" name="mobileNo" type="number" variant="outlined" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.mobileNo}/>
                          <div>
                            {formik.touched.mobileNo && formik.errors.mobileNo ? (
                              <FormHelperText className='text-danger'>{formik.errors.mobileNo}</FormHelperText>
                            ) : null}
                          </div>
                        </Grid>
                        <Grid item md={12} xs={12}>
                          <TextField fullWidth label="Address" name="address" variant="outlined" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.address}/>
                          <div>
                            {formik.touched.address && formik.errors.address ? (
                              <FormHelperText className='text-danger'>{formik.errors.address}</FormHelperText>
                            ) : null}
                          </div>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Divider />
                    <Box sx={{display: 'flex',justifyContent: 'flex-end',p: 2}}>
                      <Button color="primary" variant="contained" type='submit'>Save details</Button>
                    </Box>
                  </Card>
              </div>
          </div>
        </form>
    </div>
  )
}