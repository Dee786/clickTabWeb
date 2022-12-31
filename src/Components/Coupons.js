import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components'

const ContainerC = styled.div`
 height:270px;
 background-color:#F2F2F2;
 margin:20px 20px;
 width:fit-content;
`;


export default function Coupons({item,width}) {
  //console.log(item)
  return (
    <ContainerC>
    <Card sx={{width: width,height: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="green iguana"
      />
      <CardContent sx={{overflowY: "auto",maxHeight: "56px",marginRight:"-50px",paddingRight:"50px"}}>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{window.location.replace(item.link)}}>Share</Button>
        <Button size="small" style={{backgroundColor:"grey",color:"white"}}>{item.code}</Button>
      </CardActions>
    </Card>
    </ContainerC>
  );
}