export const PlaceholderContent = {
  async getPhotos() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const jsonRes = await res.json();
      if (!jsonRes) {
        return console.error('No photos found');
      }

      return jsonRes.map((image) => {
        return {
          id: image.id,
          title: image.title,
          url: image.url,
          thumbnailUrl: image.thumbnailUrl
        };
      });
    } catch (error) {
      console.error(error);
    }
  }
};
