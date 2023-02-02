import styled from 'styled-components';
import { getRandomHexColor } from 'components/utils/randomColor';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  height: 70px;
  border-radius: 3px;
  background-color: white;
  list-style: none;
  padding: 10px;
  margin: 0;
  padding: 5px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'grey';
    }
  }};
`;

export const Avatar = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${getRandomHexColor};

`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;