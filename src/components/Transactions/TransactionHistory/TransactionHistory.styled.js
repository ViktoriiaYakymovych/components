import styled from 'styled-components';

export const Table = styled.table`
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  color: white;
  background-color: #89cff0;
`;

export const TableBody = styled.tbody`
 text-transform: capitalize;
 :nth-child(odd) {
    background-color: #fff;}
`;

export const TableData = styled.th`
padding: 8px;
`
