import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import hero2 from '../../../public/hero2.jpg';
import hero2img from '../../../public/hero2img.png'
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

import TextTransition, { presets } from 'react-text-transition';

import Image from 'next/image';



const TEXTS = [
    <Typography sx={{ marginTop: '20px', fontSize: { xs: '30px', sm: '40px' }, fontWeight: 'bold', color: 'red' }} >GUIDING MINDS</Typography>,
    <Typography sx={{ marginTop: '20px', fontSize: { xs: '30px', sm: '40px' }, fontWeight: 'bold', color: 'blue' }}>MENDING HEARTS</Typography>,
    <Typography sx={{ marginTop: '20px', fontSize: { xs: '30px', sm: '40px' }, fontWeight: 'bold', color: 'Green' }} >SOOTHING SOULS</Typography>


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

            top: '30%',

            left: '10%'
        }}>


            <Typography sx={{
                fontSize: {
                    xs: '40px',
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
                    xs: 'block',
                    sm: 'flex'
                }
            }}>
                <Typography sx={{
                    fontSize: {
                        xs: '30px',
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
