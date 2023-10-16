import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 300px;
  background-color: #fff;
  color: #484848;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const UserWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
`;

export const ProfileList = styled.ul`
  display: flex;
`;

export const ProfileItem = styled.li`
  width: calc(300px / 3);
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: #fff;
`;
