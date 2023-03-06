import PropTypes from 'prop-types';
import { TransactionItem } from "components/TransitionItem/TransitionItem";
import { Table, TableHead, TableBody } from './TransactionHistory.styled';

export const TransactionHistyry = ({items}) => {
    return (
        <Table>
            <TableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHead>
            <TableBody>
                {items.map(({id, type, amount, currency}) => (
                    <TransactionItem
                        key={id}
                        id={id}
                        amount={amount}
                        type={type}
                        currency={currency}
                    />
                ))} 
            </TableBody>
        </Table>
    )
};

TransactionHistyry.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};