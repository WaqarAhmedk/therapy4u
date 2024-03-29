import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import hero3 from '../../../public/slide3.jpg';




import Image from 'next/image';




export default function Slide3() {








    return (<Box sx={{
        position: 'relative',
    }}>
        <Image alt='image slide 1'
            src={hero3}
            style={{
                height: '100vh',
                display: 'block',
                width: '100%',
            }}
        />

        <Box sx={{
            position: 'absolute',

            top: {
                xs: '6%',
                sm: '15%'
            },

            left: {
                xs: '1%',
                sm: '10%'
            }
        }}>
            <Box sx={{

            }}>


                <Typography sx={{
                    fontSize: {
                        xs: '20px',
                        sm: '40px'
                    },
                    fontWeight: '700',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    Discover healing and inner peace through compassionate conversation with a trusted psychiatrist. Talk to us today and let's embark on your journey towards mental well-being
                </Typography>


            </Box>

        </Box>

        <Box sx={{
            position: 'absolute',
            display: 'flex',
            bottom: '10%',
            right: {
                xs: '30%',
                sm: '10%',
                md: '8%'
            },
            justifyContent: 'center',

        }}>


            <Instagram style={{
                color: 'white',
                fontSize: '40px'
            }} />
            <Facebook style={{
                color: 'white',
                fontSize: '40px'
            }} />
            <Twitter style={{
                color: 'white',
                fontSize: '40px'
            }} />

        </Box>


    </Box>)
}
