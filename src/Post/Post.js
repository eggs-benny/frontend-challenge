export function Post({thumbnail}) {
  return (
    <div className="post">
      <div className="image">
        <img src={thumbnail} alt="description" />
      </div>
      <div className="content">
        <h3>quo vero reiciendis velit similique earum</h3>
        <h4>Jayne_Kuhic@sydney.com</h4>
      </div>
    </div>
  );
}