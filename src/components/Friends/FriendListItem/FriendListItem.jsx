export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
    return (
      <>
        <span>{isOnline ? "Online" : "Offline"}</span>
        <img src={avatar} alt={name} width="48" height="48" />
        <p>{name}</p>
      </>
    );
}