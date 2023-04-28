import Campaigns from '@/components/Campaigns';
import Reservation from '@/components/Reservation';
import MenuWrapper from '@/components/product/MenuWrapper';
import About from '@/components/ui/About';
import Carousel from '@/components/ui/Carousel';
import React from 'react'

export const Index = () => {
  return (
  <div className=''>
    <Carousel/>
    <Campaigns/>
    <MenuWrapper />
    <About />
    <Reservation />
  </div>)
};

export default Index;
