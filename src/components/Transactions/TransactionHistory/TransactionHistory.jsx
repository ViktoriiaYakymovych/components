import { Table, TableHead, TableBody, TableData} from './TransactionHistory.styled';

import { TransactionData } from './TransactionData/TransactionData';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableData>Type</TableData>
          <TableData>Amount</TableData>
          <TableData>Currency</TableData>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <TransactionData item={item} />
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
};
