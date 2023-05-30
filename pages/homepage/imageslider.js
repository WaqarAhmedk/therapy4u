import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import hero1 from '../../public/hero1.jpeg'
import hero2 from '../../public/hero2.jpg'

import Image from 'next/image';
import { FavoriteOutlined, SlideshowOutlined } from '@material-ui/icons';
import Slide1 from './components/slide1';
import Slide2 from './components/slide2';

import Slide3 from './components/slide3';
import { Typography } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slides = [


    <Slide1 />,
    <Slide2 />,
    <Slide3 />

];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);





    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{
            position: 'relative'
        }}>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                interval={5000}

            >
                {slides.map((step, index) => (
                    <Box key={step.label} sx={{
                        width: '100%'
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

            <Box sx={{
                position: 'absolute',
                bottom: {
                    xs: '0%',
                    sm: '5%'
                },
                left: '5%',
                height: {
                    xs: 'fit-content',
                    sm: '200px'
                },
                right: '15%',
                background: `rgba(0,0,0, 0.25)`,
                backdropFilter: `blur(5px)`,
                width: '90%',
                display: {
                    xs: 'block',
                    sm: 'flex'

                },
                borderRadius: '20px',
                justifyContent: 'space-between',

            }}>

                <Box sx={{
                    padding: '20px'
                }}>
                    <Box sx={{
                        display: {
                            xs: 'block',
                            sm: 'flex'
                        },
                        alignItems: 'center'


                    }}>
                        <Typography sx={{
                            fontSize: '30px',
                            color: 'white',
                            marginLeft: '10px'
                        }}>Psychotherapy</Typography>
                    </Box>
                    <Typography sx={{
                        color: 'white',
                        marginTop: '10px'
                    }}>
                        Assessing and diagnosing mental health conditions through detailed interviews, observations, and assessments.
                    </Typography>
                </Box>
                <Box sx={{
                    padding: '20px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'


                    }}>
                        <Typography sx={{
                            fontSize: '30px',
                            color: 'white',
                            marginLeft: '10px'
                        }}>Counseling</Typography>
                    </Box>
                    <Typography sx={{
                        color: 'white',
                        marginTop: '10px'
                    }}>
                        Assessing and diagnosing mental health conditions through detailed interviews, observations, and assessments.
                    </Typography>
                </Box>
                <Box sx={{
                    backgroundColor: '#26605A',
                    padding: '20px',
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px'

                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'


                    }}>
                        <Typography sx={{
                            fontSize: '30px',
                            color: 'white',
                            marginLeft: '10px'
                        }}>Book a Session</Typography>
                    </Box>
                    <Typography sx={{
                        color: 'white',
                        marginTop: '10px'
                    }}>
                        Book a Session with us
                        Assessing and diagnosing mental health conditions through detailed interviews, observations, and assessments.
                    </Typography>
                </Box>

            </Box>

        </Box>
    );
}

export default SwipeableTextMobileStepper;