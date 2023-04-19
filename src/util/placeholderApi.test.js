import { PlaceholderContent } from './placeholderApi';

describe('getPhotos()', () => {
  it('should fetch photos from the API and return an array of photo objects', async () => {
    const photos = await PlaceholderContent.getPhotos();
  
    expect(Array.isArray(photos)).toBe(true);
    expect(photos.length).toBe(8);
    expect(photos[0]).toHaveProperty('id');
    expect(photos[0]).toHaveProperty('thumbnailUrl');
  });
});

describe('getComments()', () => {
  it('should fetch comments from the API and return an array of comment objects', async () => {
    const comments = await PlaceholderContent.getComments();
  
    expect(Array.isArray(comments)).toBe(true);
    expect(comments.length).toBe(8);
    expect(comments[0]).toHaveProperty('id');
    expect(comments[0]).toHaveProperty('name');
    expect(comments[0]).toHaveProperty('email');
  });
});
