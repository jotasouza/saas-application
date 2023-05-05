import React from 'react'
//eslint-disable-next-line
import { Box, Link, Typography, useTheme, useMediaQuery, Collapse, Alert, TextField, Button } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const theme = useTheme()
  const isNotMobile = useMediaQuery("(min-width:1000px)")
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      await axios.post("/api/auth/register", {
        username,
        email,
        password
        }, config)
        .then(navigate("/login"))
    } catch (err) {
      console.log(err)
      if (err.response.data.error) {
        setError(err.response.data.error)
      } else if (err.message) {
        setError(err.message)
      } else {
        setError("Something went wrong")
      }
      setError(err.response.data.error)
      setTimeout(() => {
        setError("")
      }, 5000)
    }
  }
  
  return (
    <Box 
      width={ isNotMobile ? "40%" : "80%"}
      p={ isNotMobile ? "1rem 6%" : "2rem 2%"}
      m="2rem auto"
      borderRadius={ isNotMobile ? 1 : 3}
      backgroundColor={theme.palette.background.alt}
      sx={({boxShadow:5})}
      >
      <div>
        <Collapse in={error}>
          <Alert severity="error" sx={({mb:2})}>{error}</Alert>
        </Collapse>
        <form onSubmit={handleSubmit}>
          <Typography variant="h3" fontWeight="bold" textAlign={"center"} mt={2}>Sign Up</Typography>
            <TextField 
              required
              label="Username"
              fullWidth
              value={username}
              margin='normal'
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField 
              required
              label="E-mail Address"
              fullWidth
              value={email}
              margin='normal'
              type={'email'}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField 
              required
              label="Password"
              fullWidth
              value={password}
              margin='normal'
              type={'password'}
              onChange={(e) => setPassword(e.target.value)}
            /> 
            <Button fullWidth variant='contained' type='submit' size='large' sx={({color:'white', mt:2, mb:4})}>Sign Up</Button>
        </form>
      </div>
    </Box>
  )
}

export default Register