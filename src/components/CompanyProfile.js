import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CustomDiv = styled.div`
padding : 16px;
backgroundcolor: #f0f0f0;
`

function CompanyProfile({companyData}) {
  const [data, setData]= useState("");
  console.log(companyData)

useEffect(() => {
setData("Nissi Bintaro");
  },[]);


  return (
    <CustomDiv>
        <p
        style={{
            fontSize: "24px",
            color: "blue",
        }}
        >
        Company Profile
        </p>
      
    <h1> Company name: {companyData.name} | {data} </h1>
    <h2> Company address: {companyData.address}</h2>
    <button onClick={()=> setData("PT Indodev Niaga Internet")}>
     Add company name   
    </button>    
    </CustomDiv>
  );
}

export default CompanyProfile;