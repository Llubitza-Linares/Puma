import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);
  const [estimatedTime, setEstimatedTime] = React.useState(0);

  const generateRandomTime = () => {
    const randomTime = Math.floor(Math.random() * 5) + 1;
    setEstimatedTime(randomTime);
    localStorage.setItem('estimatedTime', randomTime.toString());
  };

  useEffect(() => {
    const storedTime = localStorage.getItem('estimatedTime');
    if (storedTime) {
      setEstimatedTime(parseInt(storedTime));
    } else {
      generateRandomTime();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (estimatedTime > 0) {
        setEstimatedTime(prevTime => prevTime - 1);
        localStorage.setItem('estimatedTime', (estimatedTime - 1).toString());
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [estimatedTime]);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity="warning"
        >
          El bus estará en la parada en {estimatedTime} minutos.
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
    </Box>
  );
}
