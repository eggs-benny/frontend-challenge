import { useState, useEffect } from 'react';
import { Post } from '../Post/Post';
import { Grid, Box, styled } from '@mui/material';
import { PlaceholderContent } from '../util/placeholderApi';

const Watermark = styled('div')({
  color: 'grey',
  padding: '5px',
  fontSize: '10px',
  fontWeight: 'bolder',
  position: 'fixed',
  bottom: 0,
  left: 0
});

const BlueDotContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  padding:'5px',
  paddingBottom:'15px'
});

const BlueDot = styled('div')({
  width: '2px',
  height: '2px',
  borderRadius: '50%',
  backgroundColor: 'dodgerblue',
  marginLeft: '1px'
});

export function Homepage() {
  const [photos, setPhotos] = useState([]);
  const [comments, setComments] = useState([]);

  async function generatePhotos() {
    try {
      const photoApiResult = await PlaceholderContent.getPhotos();
      setPhotos(photoApiResult);
    } catch (error) {
      console.error(error);
    }
  }

  async function generateComments() {
    try {
      const commentApiResult = await PlaceholderContent.getComments();
      setComments(commentApiResult);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    generatePhotos();
    generateComments();
  }, []);

  return (
    <>
      <Grid container margin="75px">
        {photos.map((photo, index) => {
          const comment = comments[index];
          return (
            <Grid
              sx={{
                margin: '25px',
                paddingTop: '3px',
                minWidth: '150px',
                boxShadow: 'rgba(0, 0, 0, 0.3) 2px 4px 12px', // Set boxShadow to create a soft shadow border
                borderRadius: '4px' // Set borderRadius to round the corners
              }}
              key={photo.id}
            >
              <Box>
                <BlueDotContainer>
                <BlueDot />
                <BlueDot />
                <BlueDot />
                </BlueDotContainer>
              </Box>
              <Post
                thumbnail={photo.thumbnailUrl}
                name={comment.name}
                email={comment.email}
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
