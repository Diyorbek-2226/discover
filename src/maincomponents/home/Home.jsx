import React from 'react'
import { Contacts } from '../../components/Contacts/Contacts'
import Company from '../../components/Company/Company'
import { Ourprojects } from '../../components/Our projects/Ourprojects'
import Ourslider from '../../components/Oursliders/OurSlider'
import { Our } from '../../components/Our/Our'
import { Abaut } from '../../components/Abaut/Abaut'
import { Navbar } from '../../components/Navbar/navbar'
import { Header } from '../../components/header/Header'

export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
         <Header />
      <Abaut />
      <Our />
      <Ourslider />
      <Ourprojects />
      <Company/>
      <Contacts/>
    </div>
  )
}
