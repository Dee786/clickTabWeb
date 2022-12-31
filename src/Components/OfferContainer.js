import React from 'react'
import styled from 'styled-components'
import Coupons from './Coupons';
import Offers from './Offers';
import Parse from 'parse/dist/parse.min.js';

const Container = styled.div`
 height:100%;
 background-color:#998adb;
 margin:20px;
 padding:20px;
 display: flex;
 flex-wrap: wrap;
`;


function OfferContainer() {
  const [readResults, setReadResults] = React.useState(null);
  const readTodos = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query('Offers');
    try {
      let todos = await parseQuery.find();
      // Be aware that empty or invalid queries return as an empty array
      // Set results to state variable
      setReadResults(todos);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  readResults === null && readTodos();

  return (
    <Container>
        {
            readResults?.map(item=>{
                return(<Offers offer={item.attributes} width={window.innerWidth>400 ? "317px" : "100%"} />)
            })
        }
    </Container>
  )
}

export default OfferContainer