import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledDiv = styled.div`
    background: #DCDCDC;
    border-radius:5px;
    box-shadow:1px 1px 5px #696969;
    padding:1% 0 2% 2%;
    width:80%;
    margin:1% auto;
`

const StyledH2 = styled.h2`
    margin:-1% 0 2%;
`
const StyledLogo = styled.div`
    margin-left:1%;
`

export default function Header(props) {

    return (
        <StyledDiv>
            <h1>Matt Phillips Presents:</h1>
                <StyledLogo>
                    <img
                        src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' 
                        alt='NASA Logo'
                        style={{width:500}} 
                    />
                </StyledLogo>
            <StyledH2>Photo of the Day</StyledH2>
        </StyledDiv>
    )
}