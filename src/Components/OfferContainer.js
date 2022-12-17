import React from 'react'
import styled from 'styled-components'
import Coupons from './Coupons';
import Offers from './Offers';

const Container = styled.div`
 height:100%;
 background-color:#998adb;
 margin:20px;
 padding:20px;
 display: flex;
 flex-wrap: wrap;
`;

const items = ["a","b","c","a","b","c","a","b","c","a","b","c"];

function OfferContainer() {
  return (
    <Container>
        {
            items.map(item=>{
                return(<Offers width={window.innerWidth>400 ? "317px" : "100%"} />)
            })
        }
    </Container>
  )
}

export default OfferContainer