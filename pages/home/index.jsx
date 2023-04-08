import Campaigns from '@/components/Campaigns';
import MenuWrapper from '@/components/product/MenuWrapper';
import Carousel from '@/components/ui/Carousel';
import React from 'react'

export const Index = () => {
  return (
  <div className=''>
    <Carousel/>
    <Campaigns/>
    <MenuWrapper />
  </div>)
};

export default Index;
