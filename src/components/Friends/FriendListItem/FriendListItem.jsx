import {OnlineSpan, FriendItem } from "./FriendListItem.styled";

export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
    return (
      <FriendItem>
        <OnlineSpan status={isOnline}></OnlineSpan>
        <img src={avatar} alt={name} width="48" height="48" />
        <p>{name}</p>
      </FriendItem>
    );
}