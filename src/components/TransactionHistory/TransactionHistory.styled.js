import styled from 'styled-components'; 
import { getRandomHexColor } from 'components/utils/randomColor';

export const TransactionHistoryTable = styled.table`
    background-color: beige;
    padding: 20px;
    border-radius: 3px;
    width: calc((100% - 30px) / 4);
`

export const TableHead = styled.thead`
    font-size: 20px;
    background-color: blueviolet;
    color: antiquewhite;
`
  

export const TableBodyRow = styled.tr`
    /* border-radius: 3px; */
`

export const TableBodyItem = styled.td`
    padding: 10px;
    background-color: ${getRandomHexColor};

`