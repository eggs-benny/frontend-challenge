export function Post({thumbnail, name, email}) {
  return (
    <div className="post">
      <div className="image">
        <img src={thumbnail} alt="description" />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <h4>{email}</h4>
      </div>
    </div>
  );
}