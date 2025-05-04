import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper
} from '@mui/material';
import { checkUsername } from './services/authService';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    const result = await checkUsername(username);
    if (result.error) {
      setError(result.data);
    } else {
      setEmail(result.data);
    }
    setIsLoading(false);
  };

  if (email) {
    return (
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Login Successful
          </Typography>
          <Typography variant="body1">
            Your email address is: {email}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            onClick={() => setEmail('')}
            sx={{ mt: 2 }}
          >
            Back
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          error={!!error}
          helperText={error}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          disabled={isLoading || !username}
          sx={{ mt: 2 }}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </Paper>
    </Box>
  );
}

export default LoginForm; 