import React from 'react'
import { Box, Link, Typography, useTheme } from '@mui/material'

const Navbar = () => {
  const theme = useTheme()
  return (
   <Box 
    width="100%" 
    backgroundColor={theme.palette.background.alt} 
    textAlign="center" p="1rem 6%" sx={({boxShadow:3, mb:2})}
    >
      <Typography variant="h2" color={"primary"} fontWeight="bold">
        <Link href="/" color="inherit" underline="none">
          ALZEN AI
        </Link>
      </Typography>

        <Link href="/" color="inherit" underline="none" p={1}> Home</Link>
        <Link href="/about" color="inherit" underline="none" p={1}> About</Link>
        <Link href="/login" color="inherit" underline="none" p={1}> Login</Link>
        <Link href="/register" color="inherit" underline="none" p={1}> Register</Link>
      
   </Box>
  )
}

export default Navbar