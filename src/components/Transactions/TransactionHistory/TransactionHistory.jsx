import { TransactionData } from './TransactionData/TransactionData';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <TransactionData item={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
