
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