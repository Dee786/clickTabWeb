import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 height:100%;
 background-color:#998adb;
 margin:20px;
 padding:20px;
 display:block;
`;

const ContainerC = styled.img`
 ${window.innerWidth>400 ? 'width:30%;' : 'width:88%;'}
 height:270px;
 background-color:#F2F2F2;
 margin:20px;
`;
console.log(window.innerWidth)

const items = ["a","b","c","a","b","c","a","b","c","a","b","c"];

function OfferContainer() {
  return (
    <Container>
        {
            items.map(item=>{
                return(<ContainerC item={item} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"/>)
            })
        }
    </Container>
  )
}

export default OfferContainer