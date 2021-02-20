import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import styled from 'styled-components'

import { BASE_URL, API_KEY } from './components/constants'
import Header from './components/Header'
import Details from './components/Details'
import Footer from './components/Footer'

const StyledButton = styled.button`
  border:none;
  font-size:120%;
  padding:1%;
  background:#0b3d91;
  margin-top:1%;
  margin-left:1.5%;
  color:white;
  border-radius:5px;
  box-shadow:1px 1px 3px #696969;

  &:hover {
    color: #fc3d21;
    box-shadow:none;
    cursor:pointer;
  }
`

function App() {

  const [photo, setPhoto] = useState(false)
  const [nasaData, setNasaData] = useState(null)

  const togglePhoto = () => {
    console.log('working')
    photo ? setPhoto(false) : setPhoto(true)
  }

  useEffect( () => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then( res => {
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch( err => {
        debugger
      })
  }, [])

  const Button = props => {
    return (
      <div>
        <StyledButton onClick={togglePhoto}>
          {photo ? 'Hide Photo' : 'Click Here to see Photo!'}
        </StyledButton>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      {
        photo &&
        <Details photo={photo} data={nasaData} />
      }
      <Button />
      <Footer photo={photo} />
    </div>
  );
}

export default App;
