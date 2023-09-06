import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { validar } from './validation';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Login() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const MySwal = withReactContent(Swal)
    function handleChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validar(
            {
                ...userData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event) {
        //envio inputs a la database
        event.preventDefault()
        MySwal.fire({
            title: <p>Iniciando sesión</p>,
            didOpen: () => {
                MySwal.showLoading()
                setTimeout(() => {
                    navigate('/home')
                    MySwal.close()
                }, 2000)
            }
        })
    }
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="on"
                onSubmit={submitHandler}
            >
                <TextField id="outlined-basic" label="Email" name='email' variant="outlined" onChange={handleChange} type='text' />
                <TextField id="outlined-basic1" label="Password" name='password' variant="outlined" onChange={handleChange} type='password' />

                <span>{errors.email}</span>
                <span>{errors.password}</span>
                {errors.email || errors.password ? null : <Button
                    type='submit'
                    size="medium"
                    style={{
                        color: "green",
                        marginRight: 50,
                        backgroundColor: "transparent",
                        fontWeight: 600
                    }}
                >Log In</Button>}
            </Box>
        </>
    )
}

export default Login