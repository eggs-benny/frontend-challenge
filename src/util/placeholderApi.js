export const PlaceholderContent = {
  async getPhotos() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const jsonRes = await res.json();
      if (!jsonRes) {
        console.error('No photos found');
        return []
      }
      const eightPhotoLimit = jsonRes.slice(0,8)

      return eightPhotoLimit.map((image) => {
        return {
          id: image.id,
          thumbnailUrl: image.thumbnailUrl
        };
      });
    } catch (error) {
      console.error('Failed to fetch photos',  error);
      throw new Error('Failed to fetch photos');
    }
  },
  async getComments() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments')
      const jsonRes = await res.json();
      if (!jsonRes) {
        console.error('No comments found')
        return [];
      }

      const eightCommentLimit = jsonRes.slice(0,8)

      return eightCommentLimit.map((comment) => {
        return {
          id:comment.id,
          name:comment.name,
          email:comment.email.toLowerCase()
        };
      })
      
      }
      catch(error) {
        console.error('Failed to fetch comments', error);
        throw new Error('Failed to fetch comments');
      }
    }
};
