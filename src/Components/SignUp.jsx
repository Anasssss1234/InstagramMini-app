import { Box, Button, TextField } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate();

    const [input, setInput]=useState({
        name:'',
        username:'',
        email:'',
        password:'',
    })

    const handleChange =(e)=>{
        const updatedData={...input, [e.target.name]: e.target.value}
        setInput(updatedData)
    }
    const handleClick =()=>{
        if(!input.name || !input.username || !input.email || !input.password){
            alert("input feilds are empty")
        } else{
            alert("Succesfully Registered")
            navigate('/login')
            localStorage.setItem('register-user', JSON.stringify(input))
        }
    }
    return (
        <>
            <div className="container">
                <Box
                    sx={{
                        width: '350px',
                        boxShadow: 1,
                        borderRadius: 2,
                        backgroundColor: '#f5f5f5',
                        p: 4,
                        display: "flex",
                        flexDirection: 'column',
                        textAlign: 'center'
                    }}>

                    <h2>Instagram</h2>

                    <Button
                        variant="contained"
                        href="#contained-buttons"
                        sx={{ my: 3 }}
                        startIcon={<FacebookIcon />}
                    >
                        Log in with Facebook
                    </Button>
                    OR
                    <Box sx={{ mt: 1 }}>

                        <TextField
                            margin="dense"
                            id="outlined-name-input"
                            name='name'
                            value={input.name}
                            onChange={handleChange}
                            label="Full Name"
                            type="name"
                            autoComplete="off"
                            fullWidth
                            size='small'
                        />
                        <TextField
                            margin="dense"
                            id="outlined-username-input"
                            name='username'
                            value={input.username}
                            onChange={handleChange}
                            label="Username"
                            type="name"
                            autoComplete="off"
                            fullWidth
                            size='small'
                        />

                        <TextField
                            margin="dense"
                            id="outlined-email-input"
                            name='email'
                            value={input.email}
                            onChange={handleChange}
                            label=" Email"
                            type="email"
                            autoComplete='off'
                            fullWidth
                            size='small'
                        />

                        <TextField
                            margin="dense"
                            id="outlined-password-input"
                            name='password'
                            value={input.password}
                            onChange={handleChange}
                            label="Password"
                            type="password"
                            autoComplete="off"
                            fullWidth
                            size='small'
                        />
                        <Button
                             onClick={handleClick}
                             variant='contained'
                            fullWidth 
                            sx={{ mt: 1 }}
                        >
                            Sign up
                        </Button>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default SignUp
