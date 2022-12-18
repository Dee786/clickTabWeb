import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ReportContainer = styled.div`
    border: 2px solid black;
    width: 60%;
    background-color:aquamarine;
    border-radius: 20px;
    padding:20px;
`;

const Report = () => {
    const [report, setreport] = React.useState([]);
    React.useEffect(() => {
      axios.get("https://api.trackier.com/v2/publishers/reports?apiKey=630f1eb6ed01a6b84f048cc25d2630f1eb6ed048&camp_ids[]=2900").then(data=>{
        setreport(data.data.records[0])
      })
    }, [])
    
  return (
    <div style={{marginLeft:"25%",paddingTop:"20px"}}>
        <ReportContainer>
            <h3>Approved Conversations: {report.approvedConversions}</h3>
            <h3>Campaign id: {report.campaign_id}</h3>
            <h3>Campaign Name: {report.campaign_name}</h3>
            <h3>Click: {report.clicks}</h3>
        </ReportContainer>
    </div>
  )
}

export default Report