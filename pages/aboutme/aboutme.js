import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

import myimg from '../../public/my.jpg'
import bgimg from '../../public/bg2.jpg'

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function AbouTmE() {





    return (
        <Box container sx={{
            backgroundColor: '#EEF0EF',
            marginX: '1%',
            paddingX: '5%',
            paddingY: '2%',

        }}>
            <Grid container sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Grid xs={12} sm={6} md={6} lg={7}>
                    <Typography sx={{
                        fontSize: '30px',
                        fontWeight: '600',
                        color: '#59687A',
                        marginBottom: '30px'
                    }}>About Me</Typography>
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#59687A',
                        marginTop: '10px',
                        marginBottom: '5px'
                    }}>Introduction</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Dr. Fazia Din, a compassionate and highly skilled psychiatrist dedicated to guiding individuals towards mental well-being. With her profound expertise and unwavering commitment, she empowers her patients to overcome their challenges and find healing. Dr. Din's holistic approach combines scientific knowledge with genuine empathy, making her a trusted and transformative force in the field of psychiatry.
                    </Typography>
                    <Typography sx={{
                        fontSize: '20px',
                        marginTop: '10px',
                        fontWeight: '600',
                        color: '#59687A',
                        marginBottom: '5px'
                    }}>Experience</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Dr. Fazia Din, a compassionate and highly skilled psychiatrist dedicated to guiding individuals towards mental well-being. With her profound expertise and unwavering commitment, she empowers her patients to overcome their challenges and find healing. Dr. Din's holistic approach combines scientific knowledge with genuine empathy, making her a trusted and transformative force in the field of psychiatry.
                    </Typography>
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#59687A',
                        marginTop: '10px',
                        marginBottom: '5px'
                    }}>Something Else</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Dr. Fazia Din, a compassionate and highly skilled psychiatrist dedicated to guiding individuals towards mental well-being. With her profound expertise and unwavering commitment, she empowers her patients to overcome their challenges and find healing. Dr. Din's holistic approach combines scientific knowledge with genuine empathy, making her a trusted and transformative force in the field of psychiatry.
                    </Typography>

                </Grid>
                <Grid xs={12} sm={6} md={5} lg={4} sx={{
                    marginTop: '50px',

                }}>
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            sx={{
                                height: '250px',
                            }}
                        >
                            <Image src={myimg} style={{ height: '100%', width: '100%', objectFit: 'fill' }} />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Dr. Fazia Din, a compassionate and highly skilled psychiatrist dedicated to guiding individuals towards mental well-being. With her profound expertise and unwavering commitment, she empowers her patients to overcome their challenges and find healing. Dr. Din's holistic approach combines scientific knowledge with genuine empathy, making her a trusted and transformative force in the field of psychiatry.
                            </Typography>
                        </CardContent>


                    </Card>
                </Grid>
            </Grid>

        </Box>
    )
}
