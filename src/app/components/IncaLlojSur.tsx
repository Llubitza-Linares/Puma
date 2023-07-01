//import styles from './page.module.css'
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import { cardData } from '../../data/card';
import TransitionAlerts from '../components/TransitionAlerts';

export default function Incallojeta2() {
  const containerStyle = {
    backgroundColor: '#ffdab9',
    minHeight: '100vh',
  };
  const textStyle = {
    color: '#ff0000',
  };
  return (
    <main style={containerStyle}>
      <h1>Ruta Incallojeta Norte</h1>
      <TransitionAlerts />
      <Grid container spacing={2}>
        {cardData.map(card => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" style={textStyle}>
                  {card.title}
                </Typography>
                <Typography color="body2" gutterBottom>
                  {card.subtitle}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
