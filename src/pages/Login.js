import React from 'react'
import { Card, Box,Typography, TextField,Grid,Button,InputAdornment} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LookIcon from '@mui/icons-material/Lock';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import logovistony from 'src/images/logo-vistony.png';

export const Login = () => {


    return (
        <>
        <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    minHeight:'100vh',
                }}>
                <Box
                    sx={{
                      
                        padding:8,
                        boxShadow:'5px 15px 20px 8px #f2f2f2',
                        borderRadius:8
                        }}>

                        <Grid2 spacing={1}>
                            <Grid size={12}>
                            <Typography variant="h5" sx={{
                                fontWeight:'bold',
                                textAlign:'center',
                                
                                }}>BIENVENIDO</Typography>
                            </Grid>
                            <Grid size={12} sx={{
                                paddingY:3
                            }}>
                                <img src={logovistony} width={223}></img>
                            </Grid>


                        <Grid size={12}>
                            <TextField id="standard-basic" label="Usuario" variant="standard" sx={{marginY:3}} 
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <PersonIcon />
                                      </InputAdornment>
                                    ),
                                  }}/>
                        </Grid>

                        <Grid size={12}>
                            <TextField id="standard-basic" label="Password" variant="standard" type="password"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <LookIcon />
                                  </InputAdornment>
                                ),
                              }} />
                        </Grid>

                        <Grid size={12}>
                            <Button sx={{
                                background:'linear-gradient(90deg, #3F2DC1 20%, #D60928 100%)',
                                color:'white',
                                paddingY:1.5,
                                width:'100%',
                                borderRadius:7,
                                marginTop:6,
                                fontWeight:'bold',
                            }}>INGRESAR</Button>
                        </Grid>
                        </Grid2>
                        

                </Box>
        </Box>
                
        </>
    )
}

