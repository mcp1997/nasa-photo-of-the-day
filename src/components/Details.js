import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledTitle = styled.div`
    display:flex;
    justify-content:space-between;
    margin:0 auto;
    width:83%;
    font-size:120%;
    font-weight:bold;
`
const StyledP = styled.p`
    width:83%;
    text-align:left;
    margin:1% auto;
`

export default function Details(props) {

    const { photo, data } = props

    return (
        <div>
            {
                photo &&
                <div>
                    <StyledTitle>
                        <p>{data.title}, by {data.copyright ? data.copyright : 'NASA'}</p>
                        <p>{data.date}</p>
                    </StyledTitle>
                    <img src={data.hdurl} alt={data.title} style={{width:1000}} />
                    <StyledP>{data.explanation}</StyledP>
                </div>
            }
        </div>
    )
}