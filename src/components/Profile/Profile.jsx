import { ProfileWrapper, UserWrapper, ProfileList, ProfileImg, ProfileItem } from "./Profile.styled";

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  const viewsToString = views.toString().split('');
  const viewsAddedComa =
    viewsToString.length < 5
      ? viewsToString.splice(1, 0, ',')
      : viewsToString.splice(2, 0, ',');
      
  return (
    <ProfileWrapper>
      <UserWrapper>
        <ProfileImg src={avatar} alt={username} width="150" height="150" />
        <h2>{username}</h2>
        <p>@{tag}</p>
        <p>{location}</p>
      </UserWrapper>

      <ProfileList>
        <ProfileItem>
          <span>Followers</span>
          <span>
            <b>{followers}</b>
          </span>
        </ProfileItem>
        <ProfileItem>
          <span>Views</span>
          <span>
            <b>{viewsToString}</b>
          </span>
        </ProfileItem>
        <ProfileItem>
          <span>Likes</span>
          <span>
            <b>{likes}</b>
          </span>
        </ProfileItem>
      </ProfileList>
    </ProfileWrapper>
  );
};
