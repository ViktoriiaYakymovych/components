import styled from "styled-components";

export const FriendItem = styled.div`
padding: 4px 16px;
display: flex;
gap: 8px;
align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Online = ({status}) => {
    return (status ? 'green' : 'red')
}

export const OnlineSpan = styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${Online};
`

