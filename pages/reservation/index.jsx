import Reservation from '@/components/Reservation'
import React from 'react'

const index = () => {
  return (
    //dive göre react.fragment daha performanslıdır
    <React.Fragment> 
        <Reservation />
    </React.Fragment>
  )
}

export default index