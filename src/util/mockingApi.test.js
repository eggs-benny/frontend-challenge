import { PlaceholderContent } from './placeholderApi';
import fetchMock from 'jest-fetch-mock';
import mockResponse from './mockReponse.json';
fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('PlaceholderContent', () => {
  it('should return a list of 8 photos', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const photos = await PlaceholderContent.getPhotos();
    expect(Array.isArray(photos)).toBe(true);
    expect(photos.length).toBe(8);
    expect(photos[0]).toHaveProperty('id');
    expect(photos[0]).toHaveProperty('thumbnailUrl');
    expect(fetchMock).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/photos'
    );
  });

  describe('PlaceholderContent', () => {
    it('should return a list of 8 comments', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockResponse));
      const comments = await PlaceholderContent.getComments();

      expect(Array.isArray(comments)).toBe(true);
      expect(comments.length).toBe(8);
      expect(comments[0]).toHaveProperty('id');
      expect(comments[0]).toHaveProperty('name');
      expect(comments[0]).toHaveProperty('email');
      expect(fetchMock).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/comments'
      );
    });
    it('should throw an error if the API returns an error', async () => {
      fetchMock.mockReject(new Error('API error'));

      await expect(PlaceholderContent.getComments()).rejects.toThrow(
        'Failed to fetch comments'
      );
      expect(fetchMock).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/comments'
      );
    });
  });
});
