import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Post } from '../Post/Post';
import { Grid } from '@mui/material';
import { PlaceholderContent } from '../util/placeholderApi';

const Watermark = styled('div')({
  color: 'grey',
  padding: '5px',
  fontSize: '10px',
  fontWeight: 'bolder',
  position: 'fixed',
  bottom: 0,
  left: 0,
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
      <Grid container spacing={2} margin="75px">
        {photos.map((photo, index) => {
          const comment = comments[index];
          return (
            <Grid item xs={2} sx={{ border: 1, margin: "20px", padding: "3px", minWidth:"200px" }} key={photo.id}>
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
