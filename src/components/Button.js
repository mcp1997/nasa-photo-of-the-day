import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function Button(props) {
    
    const { toggle, photo } = props

    return (
            <div className='buttonContainer'>
                <button onClick={toggle}>
                    {photo ? 'Hide Photo' : 'Click Here to see Photo!'}
                </button>
                {
                    photo && 
                        <div>
                            <p>Like what you see?</p>
                            <p>Click <a href='https://www.nasa.gov/multimedia/imagegallery/index.html'>here</a> to see more!</p>
                        </div>  
                }
            </div>
    )
}