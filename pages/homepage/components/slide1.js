import { Box, Typography } from '@mui/material'
import React from 'react'
import hero1 from '../../../public/hero1.jpeg'
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

import Image from 'next/image';
export default function Slide1() {
    return (<Box sx={{
        width: '100%',
        position: 'relative',
    }}>
        <Image
            alt='image slide 1'
            src={hero1}

            style={{
                height: '100vh',
                display: 'block',
                width: '100vw',
                objectFit: 'cover',
            }}
        />

        <Box sx={{
            position: 'absolute',
            top: {
                xs: '10%',
                sm: '15%'
            },
            right: '5%',
        }}>
            <Typography sx={{
                color: '#59687A',
                fontSize: {
                    xs: '20px',
                    sm: '30px'
                },
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                YOU'RE NOT ALONE
            </Typography>
            <Box sx={{
            }}>
                <Typography sx={{
                    color: '#F3FE04',
                    lineHeight: {
                        xs: '40px',
                        sm: '60px'
                    },
                    fontWeight: 1000,
                    fontSize: {
                        xs: '30px',
                        sm: '50px'
                    },
                    textAlign: 'center',
                }}>
                    WE CAN PUT THEM  <br />IN ORDER TOGETHER
                </Typography>
            </Box>
            <Typography sx={{
                color: '#59687A',
                fontSize: '20px',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                Insight, introspection, self-awareness, healing.

            </Typography>


        </Box>

    </Box >)
}
