import React from 'react'
import styled from 'styled-components'
import Coupons from './Coupons';

const Container = styled.div`
 min-height:300px;
 background-color:#a5db8a;
 margin:20px;
 padding:20px;
 display:flex;
 overflow-x: auto;
`;

const items = ["a","b","c","a","b","c"];

function CouponContainer() {
  return (
    <Container >
        {
            items.map(item=>{
                return(<Coupons width={window.innerWidth>400 ? "320px" : "222px"} />)
            })
        }
    </Container>
  )
}

export default CouponContainer