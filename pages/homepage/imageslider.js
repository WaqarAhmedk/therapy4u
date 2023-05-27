import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import hero1 from '../../public/hero1.jpeg'
import hero2 from '../../public/hero2.jpg'

import Image from 'next/image';
import { SlideshowOutlined } from '@material-ui/icons';
import slide1 from './components/slide1';
import Slide1 from './components/slide1';
import Slide2 from './components/slide2';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slides = [


    <Slide1 />,
    <Slide2 />

];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);





    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{
        }}>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                interval={4000}

            >
                {slides.map((step, index) => (
                    <Box key={step.label} sx={{
                    }}>
                        {Math.abs(activeStep - index) <= 2 ? (

                            <Box sx={{
                                backgroundColor: 'red',
                                height: '100vh',
                            }}>
                                {
                                    step
                                }
                            </Box>

                        ) : null}
                    </Box>
                ))}
            </AutoPlaySwipeableViews>

        </Box>
    );
}

export default SwipeableTextMobileStepper;