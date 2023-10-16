import { TableData } from "./TransactionData.styled";

export const TransactionData = ({item: {type, amount, currency}}) => {
    return (
      <>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
      </>
    );
}