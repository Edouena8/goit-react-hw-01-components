
import PropTypes from 'prop-types';
import { StatItem } from './StatisticsItem.styled';

export const StatisticsItem = ({id, label, percentage}) => {
    return (
        <StatItem key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
        </StatItem>
    )
};

StatisticsItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};