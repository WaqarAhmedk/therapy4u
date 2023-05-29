import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import AppBarCustom from './appbar/appbar'
import HeroSection from './homepage/herosection'
import AbouTmE from './aboutme/aboutme'
import { Box } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Therapy 4u</title>
        <meta name="description" content="Theraapy 4U: Empowering minds, healing hearts, and nurturing growth through compassionate psychiatric care" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/logo.jpeg" />
      </Head>


      <HeroSection />
      <AbouTmE />


    </>
  )
}
