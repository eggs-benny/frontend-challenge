import { useState, useEffect } from 'react';
import { Post } from './Post';
import { Grid } from '@mui/material';
import { PlaceholderContent } from '../util/placeholderApi';
import { Watermark } from './Watermark'
import { styles } from '../styles/Homepage.styles'

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
        {photos.length > 0 ? (
          photos.map((photo, index) => {
            const comment = comments[index];
            return (
              <Grid
                sx={styles.postContainer}
                key={photo.id}
              >
                <Post
                  thumbnail={photo.thumbnailUrl}
                  name={comment.name}
                  email={comment.email}
                />
              </Grid>
            );
          })
        ) : (
          <div>No posts found</div>
        )}
      </Grid>
      <Watermark>
        <p>© WYSPR 2022</p>
      </Watermark>
    </>
  );
}
