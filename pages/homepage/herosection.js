import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import SwipeableTextMobileStepper from './imageslider';
import ResponsiveAppBar from '../appbar/appbar';

export default function HeroSection() {
    return (<Box sx={{
        width: '100vw',
        position: 'relative',
        backgroundcolor: 'cyan',
    }}>
        <ResponsiveAppBar />
        <SwipeableTextMobileStepper style={{
        }} />
    </Box>)
}
