import PropTypes from 'prop-types';
import { StatisticsList } from "components/StatisticsList/StatisticsList";
import { Container, StatTitle } from './Statistics.styled';

export const Statistics = ({title, stats}) => { 
    return (
        <Container>
            {title && <StatTitle>{title}</StatTitle>}
            <StatisticsList stats={stats}/>
        </Container>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired, 
            label: PropTypes.string.isRequired, 
            percentage: PropTypes.number.isRequired
        }),
    ).isRequired,
}