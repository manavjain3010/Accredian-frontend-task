import { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Box,
  TextField,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { Close, Lock, AccountCircle } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7c3aed',
    },
  },
});

export default function LoginForm({ onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={true} onClose={onClose} maxWidth="md">
        <Box sx={{ display: 'flex', height: 500 }}>
          {/* Left Side - Image */}
          <Box sx={{
            width: '40%',
            backgroundImage: 'url(https://source.unsplash.com/random/800x600?nature)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8
          }} />
          
          {/* Right Side - Form */}
          <Box sx={{ p: 4, width: '60%', position: 'relative' }}>
            <IconButton
              onClick={onClose}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <Close />
            </IconButton>

            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Lock color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
                Welcome Back
              </Typography>
              <Typography color="text.secondary">
                Please sign in to continue
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Email Address"
                name="email"
                type="email"
                variant="outlined"
                InputProps={{
                  startAdornment: <AccountCircle sx={{ mr: 1, color: 'action.active' }} />
                }}
                value={formData.email}
                onChange={handleChange}
              />
              
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                InputProps={{
                  startAdornment: <Lock sx={{ mr: 1, color: 'action.active' }} />
                }}
                value={formData.password}
                onChange={handleChange}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 3, py: 1.5, borderRadius: 2 }}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Dialog>
    </ThemeProvider>
  );
}

LoginForm.propTypes = {
  onClose: PropTypes.func.isRequired
};