import PropTypes from 'prop-types';
import { TransactionHistoryTable, TableHead, TableBodyRow, TableBodyItem } from './TransactionHistory.styled';
 
export const TransactionHistory = ({items}) => { 
    return ( 
        <TransactionHistoryTable>
        <TableHead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </TableHead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <TableBodyRow key={id}>
                    <TableBodyItem>{type}</TableBodyItem>
                    <TableBodyItem>{amount}</TableBodyItem>
                    <TableBodyItem>{currency}</TableBodyItem>
                </TableBodyRow>
            ))}
            </tbody>
        </TransactionHistoryTable>
)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ).isRequired,
  }