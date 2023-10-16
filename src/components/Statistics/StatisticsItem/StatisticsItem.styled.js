import styled from 'styled-components';
import { getRandomHexColor } from 'generalFunctions/getRandomColor';

export const StatisticItem = styled.div`
display: flex;
flex-direction: column;
padding: 8px;
width: calc(300px / 5);
background-color: ${getRandomHexColor};
color: white;
text-transform: none;
`