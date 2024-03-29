import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import hero2 from '../../../public/hero2.jpg';
import hero2img from '../../../public/hero2img.png'
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

import TextTransition, { presets } from 'react-text-transition';

import Image from 'next/image';



const TEXTS = [
    <Typography sx={{ marginTop: { xs: '10px', sm: '20px' }, fontSize: { xs: '30px', sm: '40px' }, fontWeight: 'bold', color: 'red' }} >GUIDING MINDS</Typography>,
    <Typography sx={{ marginTop: { xs: '10px', sm: '20px' }, fontSize: { xs: '30px', sm: '40px' }, fontWeight: 'bold', color: 'blue' }}>MENDING HEARTS</Typography>,
    <Typography sx={{ marginTop: { xs: '10px', sm: '20px' }, fontSize: { xs: '30px', sm: '40px' }, fontWeight: 'bold', color: 'Green' }} >SOOTHING SOULS</Typography>


];

export default function Slide2() {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            1500, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);







    return (<Box sx={{
        position: 'relative',
        width: '100%'
    }}>
        <Image alt='image slide 1'
            src={hero2}
            style={{
                height: '100vh',
                display: 'block',
                width: '100%',
            }}
        />



        <Box sx={{
            position: 'absolute',

            top: {
                xs: '5%',
                sm: '25%'
            },

            left: '10%'
        }}>


            <Typography sx={{
                fontSize: {
                    xs: '30px',
                    sm: '60px'
                },
                fontWeight: '1000',
                color: '#F3FE04'
            }}>
                THERAPY 4U
            </Typography>

            <Box sx={{
                marginLeft: {
                    xs: '0px',
                    sm: '100px'
                },
                display: {
                    sm: 'flex'
                }
            }}>
                <Typography sx={{
                    fontSize: {
                        xs: '20px',
                        sm: '30px'
                    },
                    color: '#59687A',
                    fontWeight: '1000',
                }}>
                    HELPS IN
                </Typography>
                <TextTransition springConfig={presets.wobbly}>

                    {TEXTS[index % TEXTS.length]}

                </TextTransition>
            </Box>

        </Box>

    </Box>)
}
