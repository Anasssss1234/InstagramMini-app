
import { Box, TextField, Button, Link } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

   
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        const updatedData = { ...input, [e.target.name]: e.target.value }
        setInput(updatedData)
    }

    const handleLogin = () => {
        const users=JSON.parse(localStorage.getItem('register-user'))
       
        if(input.email===users.email && input.password === users.password){
            alert("successfully LoggedIn")
            localStorage.setItem('loggedIn', JSON.stringify(input))
            navigate('/instalogo')
        }  else if(input.email==='' && input.password===''){
            alert('input feilds are empty')
        }
        
        else{
            alert('email & password are wrong')
            input.email('')
            input.password('')
        }
    }

    return (
        <div>
            <div className="container">
                <Box sx={{
                    width: '350px',
                    boxShadow: 1,
                    borderRadius: 2,
                    backgroundColor: '#f5f5f5',
                    p: 3,
                    display: "flex",
                    flexDirection: 'column',
                    textAlign: 'center'
                }}>

                    <h2>Instagram</h2>

                    <Box sx={{ my: 3 }}>
                        <TextField

                            margin="dense"
                            id="outlined-email-input"
                            label=" Email"
                            name='email'
                            value={input.email}
                            onChange={handleChange}
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
                            variant='contained'
                            fullWidth
                            onClick={handleLogin}
                            sx={{ mt: 3 }}
                        >
                            Log in
                        </Button>
                    </Box>
                    OR
                    <Link
                        href="#"
                        underline='none'
                        sx={{ mt: 2 }}
                    >Logn in with Facebook
                    </Link>
                    <span
                        style={{ marginTop: '40px' }}>
                        Don't have an account?
                        <Link href='/'
                            underline='none'>
                            Sign up
                        </Link>
                    </span>
                </Box>
            </div>
        </div>
    )
}

export default Login
