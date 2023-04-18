import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Post } from '../Post/Post';
import { Grid } from '@mui/material';
import { PlaceholderContent } from '../util/placeholderApi';

const Watermark = styled('div')({
  color: 'grey',
  padding: '5px',
  fontSize: '12px',
  fontWeight: 'bolder',
  position: 'fixed',
  bottom: 0,
  left: 0
});

export function Homepage() {
  const [photos, setPhotos] = useState([]);

  async function generatePhotos() {
    try {
      const photoApiResult = await PlaceholderContent.getPhotos();
      setPhotos(photoApiResult);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    generatePhotos()
  }, [])

  return (
    <>
      <Grid container spacing={2}>
        {photos.map((photo) => {
          return (
            <Grid item xs={3} sx={{ border: 1 }}>
              <Post
                key={photo.id}
                title={photo.title}
                url={photo.url}
                thumbnail={photo.thumbnailUrl}
              />
            </Grid>
          );
        })}
      </Grid>
      <Watermark>
        <p>© WYSPR 2022</p>
      </Watermark>
    </>
  );
}
