export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>
            <b>Followers: </b>
          </span>
          <span>{followers}</span>
        </li>
        <li>
          <span>
            <b>Views: </b>
          </span>
          <span>{views}</span>
        </li>
        <li>
          <span>
            <b>Likes: </b>
          </span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
