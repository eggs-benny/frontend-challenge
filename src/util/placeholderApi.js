export const PlaceholderContent = {
  async getPhotos() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const jsonRes = await res.json();
      if (!jsonRes) {
        return console.error('No photos found');
      }
      const eightPhotoLimit = jsonRes.slice(0,8)

      return eightPhotoLimit.map((image) => {
        return {
          id: image.id,
          thumbnailUrl: image.thumbnailUrl
        };
      });
    } catch (error) {
      console.error(error);
    }
  },
  async getComments() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments')
      const jsonRes = await res.json();
      if (!jsonRes) {
        return console.error('No comments found')
      }

      const eightCommentLimit = jsonRes.slice(0,8)

      return eightCommentLimit.map((comment) => {
        return {
          id:comment.id,
          name:comment.name,
          email:comment.email,
          body:comment.body
        };
      })
      
      }
      catch(error) {
        console.error(error);
      }
    }
};
