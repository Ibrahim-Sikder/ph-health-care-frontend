import HeroSection from '@/components/ui/HomePage/HeroSection/HeroSection';
import Specialist from '@/components/ui/HomePage/Specialist/Specialist';
import TopRatedDoctors from '@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors';
import WhyUs from '@/components/ui/HomePage/WhyUs/WhyUs';
import React from 'react';

const Home = () => {
  return (
    <>
     <HeroSection/>
     <Specialist/>
     <TopRatedDoctors/>
     <WhyUs/>
    </>
  );

};

export default Home;