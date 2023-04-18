import React from 'react';
import { styled } from '@mui/material/styles';
import { Post } from '../Post/Post';
import { Grid } from '@mui/material';

const Watermark = styled('div')({
  color: 'grey',
  padding: '5px',
  fontSize: '12px',
  fontWeight: 'bolder',
  position: 'fixed',
  bottom: 0,
  left: 0,
});

export function Homepage() {
  return (
    <>
      <h1>Hello World</h1>
      <Grid container spacing={2}>
        <Grid item xs={3} sx={{ border: 1 }}>
          <Post />
        </Grid>
        <Grid item xs={3} sx={{ border: 1 }}>
          <Post />
        </Grid>
        <Grid item xs={3} sx={{ border: 1 }}>
          <Post />
        </Grid>
        <Grid item xs={3} sx={{ border: 1 }}>
          <Post />
        </Grid>
        <Grid item xs={3} sx={{ border: 1 }}>
          <Post />
        </Grid>
        <Grid item xs={3} sx={{ border: 1 }}>
          <Post />
        </Grid>
        <Grid item xs={3} sx={{ border: 1 }}>
          <Post />
        </Grid>
        <Grid item xs={3} sx={{ border: 1 }}>
          <Post />
        </Grid>
      </Grid>
      <Watermark>
        <p>© WYSPR 2022</p>
      </Watermark>
    </>
  );
}
