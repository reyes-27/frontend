import Layout from "../components/layout/Layout";
import HomeMenu from "../components/HomeMenu";
import React, {useContext } from 'react'
import HeroSection from '../components/HeroSection'
import PricingList from "../components/pricing/PricingList";

const HomePage = () => {
  return (
    <Layout>
        <HeroSection />
        <PricingList />
        <HomeMenu />
    </Layout>
  )
}

export default HomePage
