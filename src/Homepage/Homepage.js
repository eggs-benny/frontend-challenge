import { Post } from '../Post/Post';

export function Homepage() {
  return (
    <>
      <h1>Hello World</h1>
      <Post />
      <div className="watermark">
        <p>c WYSPR 2022</p>
      </div>
    </>
  );
}
