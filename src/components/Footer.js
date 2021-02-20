import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin:5% auto;
    font-size:120%;
`
const StyledA = styled.a`
    text-decoration:none;
    font-weight:bold;
    color:black;

    &:hover{
        color:#ff8c00;
    }
`

export default function Footer(props) {

    const { photo } = props

    return (
        <div>
            {
                photo && 
                    <StyledDiv>
                        <p><i>Like what you see?</i></p>
                        <p>Click <StyledA href='https://www.nasa.gov/multimedia/imagegallery/index.html'>here</StyledA> to see more!</p>
                    </StyledDiv>  
            }
        </div>
    )
}