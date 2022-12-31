import React from 'react'
import styled from 'styled-components'
import Coupons from './Coupons';
import Parse from 'parse/dist/parse.min.js';

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
  const [readResults, setReadResults] = React.useState(null);
  const readTodos = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query('coupons');
    try {
      let todos = await parseQuery.find();
      // Be aware that empty or invalid queries return as an empty array
      // Set results to state variable
      console.log(todos);
      setReadResults(todos);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };
  if(readResults === null){
    readTodos();
  }
  //console.log(items)
  return (
    <Container >
        {
            readResults?.map(item=>{
                return(<Coupons item={item.attributes} width={window.innerWidth>400 ? "320px" : "222px"} />)
            })
        }
    </Container>
  )
}

export default CouponContainer