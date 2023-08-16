import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

// const formData = {
//   email: 'michael@gmail.com',
//   password: '123456',
//   displayName: 'Michael Javier',
// };

const formData = {
  email: '',
  password: '',
  displayName: '',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'The email has to include @'],
  password: [
    (value) => value.length >= 6,
    'The password must be at least 6 characters',
  ],
  displayName: [(value) => value.length >= 1, 'The name is required'],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status]
  );

  const {
    formState,
    displayNameValid,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  // console.log(displayNameValid);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title='Register'>
      {/* <h1>FormValid {isFormValid ? 'Valido' : 'Incorrect'}</h1> */}
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Full Name'
              type='text'
              placeholder='full name'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='email@gmail.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='password'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            {/* (comienza con null) si no hay nada entonces seria un string vacio   */}
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type='submit'
                variant='contained'
                fullWidth
              >
                Create Account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>
              Do you already have an account?
            </Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
