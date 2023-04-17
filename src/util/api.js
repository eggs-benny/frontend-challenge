export const Guest = {
  async getComments() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments')
      const jsonRes = await res.json();
      if (!jsonRes) {
        return console.error('No comments found')
        // display error for user
      }
      return jsonRes.map((comment) => {
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
    },

    async getPhotos() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const jsonRes = await res.json();
        if (!jsonRes) {
          return console.error('No comments found')
          // display error for user
        }
        return jsonRes.map((image) => {
          return {
            id:image.id,
            title: image.title,
            url: image.url,
            thumbnailUrl: image.thumbnailUrl
          };
        })
        
        }
        catch(error) {
          console.error(error);
        }
      }
  }
  // async updateGuestRSVP() {
  //   try {
  //     const res = await fetch(`http://localhost:5001/guests/${guestId}`)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
