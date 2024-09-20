import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { TextSlide } from '../components/TextSlide/TextSlide'
import { ImageCarousel } from '../components/ImageCarousel/ImageCarousel'
import SportsCategorySection from '../components/SportsCategorySection/SportsCategorySection'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'

export const Home= () => {
  return (
    <div className="home">
        <Navbar/>
        <TextSlide/>
        <ImageCarousel/>
        <SportsCategorySection/>
        <NewsLetter/>
    </div>
  )
}
