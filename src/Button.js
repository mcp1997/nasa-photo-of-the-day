import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Button(props) {
    
    const [photo, setPhoto] = useState(false)

    const togglePhoto = () => {
        photo ? setPhoto(false) : setPhoto('https://apod.nasa.gov/apod/image/2102/SunPillar_Cohea_3400.jpg')
    }

    return (
        <div>
            {
                photo &&
                <div className='photoContainer'>
                <h3>Sample Image Title</h3>
                <img src={photo} alt='' style={{width:1000}} />
                <p>Photo taken by John Smith on 1-1-2000</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue porttitor nibh, congue maximus tellus vehicula eu. Nam finibus pulvinar augue, at molestie lacus. Nullam dignissim nisi libero, a commodo nisi ornare ut. Nulla ornare, elit sit amet pulvinar pharetra, est libero semper libero, et sagittis sem ante a nisi. Quisque vitae velit bibendum, ultrices nisl in, aliquet lectus. Nunc posuere enim nisl, quis vehicula nunc facilisis ac. Nam vestibulum ligula vel orci convallis auctor.</p>
                </div>
            }
            <div className='buttonContainer'>
                <button onClick={togglePhoto}>
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
        </div>
    )
}