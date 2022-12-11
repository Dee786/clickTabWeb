import React from 'react'
import styled from 'styled-components'
import CouponContainer from './CouponContainer';
import Crousel from "./Crousel";
import OfferContainer from './OfferContainer';

function Home() {
    const Container = styled.div`
    background-color:#F2F2F2;
    width:100%;
    min-height:676px;
    `;
  return (
    <Container>
      <Crousel />
      <CouponContainer />
      <OfferContainer />
    </Container>
  )
}

export default Home