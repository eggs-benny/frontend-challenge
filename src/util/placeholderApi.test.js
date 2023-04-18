import { PlaceholderContent } from './placeholderApi';

describe('PlaceholderContent.getPhotos()', () => {
  it('should fetch photos from the API and return an array of photo objects', async () => {
    const photos = await PlaceholderContent.getPhotos();
  
    expect(Array.isArray(photos)).toBe(true);
    expect(photos.length).toBeGreaterThan(0);
    expect(photos[0]).toHaveProperty('id');
    expect(photos[0]).toHaveProperty('title');
    expect(photos[0]).toHaveProperty('url');
    expect(photos[0]).toHaveProperty('thumbnailUrl');
  });
});
