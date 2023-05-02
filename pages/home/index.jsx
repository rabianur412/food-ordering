import Campaigns from '@/components/Campaigns';
import Reservation from '@/components/Reservation';
import Customers from '@/components/customers/Customers';
import MenuWrapper from '@/components/product/MenuWrapper';
import About from '@/components/ui/About';
import Carousel from '@/components/ui/Carousel';
import React from 'react'

export const Index = () => {
  return (
  <React.Fragment >
    <Carousel/>
    <Campaigns/>
    <MenuWrapper />
    <About />
    <Reservation />
    <Customers />
  </React.Fragment>)
};

export default Index;
