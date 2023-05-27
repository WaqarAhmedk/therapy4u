import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import hero2 from '../../../public/hero2.jpg';
import hero2img from '../../../public/hero2img.png'

import TextTransition, { presets } from 'react-text-transition';

import Image from 'next/image';



const TEXTS = [
    <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: 'red' }} >GUIDING MINDS</Typography>,
    <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: 'blue' }}>MENDING HEARTS</Typography>,
    <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: 'Green' }} >RESTORING INNER HARMONY</Typography>


];

export default function Slide2() {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
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
            top: '15%',
            left: '10%'
        }}>
            <Image src={hero2img} alt='pschyotherpy' style={{
                height: '80%',
                display: 'block',
                width: '85%',
            }} />
        </Box>

        <Box sx={{
            position: 'absolute',
            top: '30%',
            right: '30%'
        }}>
            <TextTransition springConfig={presets.wobbly}>

                {TEXTS[index % TEXTS.length]}

            </TextTransition>
        </Box>

    </Box>)
}
