import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 min-height:300px;
 background-color:#a5db8a;
 margin:20px;
 padding:20px;
 display:flex;
 overflow-x: auto;
`;

const ContainerC = styled.img`
${window.innerWidth>400 ? 'width:30%;' : 'width:77%;'}
 height:270px;
 background-color:#F2F2F2;
 margin:20px;
`;

const items = ["a","b","c","a","b","c"];

function CouponContainer() {
  return (
    <Container >
        {
            items.map(item=>{
                return(<ContainerC item={item} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"/>)
            })
        }
    </Container>
  )
}

export default CouponContainer