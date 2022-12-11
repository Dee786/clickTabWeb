import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import styled from 'styled-components'

const Container = styled.div`
 padding: 12px;
`;

const Image = styled.img`
 width:100%;
 height:300px;
`;

export default function Example(props)
{
    var items = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyKXEHr1SO_cy1wa5uhr00CbFXj4OLW2Jzg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"
    ]

    return (
        <Container>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Container>
    )
}

function Item(props)
{
    return (
        <Paper style={{padding:"20px"}}>
           <Image src={props.item} />
        </Paper>
    )
}