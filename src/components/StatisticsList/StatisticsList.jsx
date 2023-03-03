import PropTypes from 'prop-types';
import { StatisticsItem } from "components/StatisticsItem/StatisticsItem";
import { StatList } from './StatisticsList.styled';

export const StatisticsList = ({stats}) => {
    return (
        <StatList>
            {stats.map(({id, label, percentage}) => (
                <StatisticsItem
                    key={id}
                    id={id}
                    label={label}
                    percentage={percentage}
                />
            ))}
        </StatList>
    )
};

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        },),
    ),
    
}