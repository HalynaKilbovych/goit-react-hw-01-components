import PropTypes from 'prop-types';
import { StatisticsWrapper, StatisticsTitle, StatisticsList, StatisticsItem, Label, Value } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
      <StatisticsWrapper>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
        <StatisticsList>
          {stats.map(item => (
            <StatisticsItem
              key={item.id}
            >
              <Label>{item.label}</Label>
              <Value>{item.percentage}%</Value>
            </StatisticsItem>
          ))}
        </StatisticsList>
      </StatisticsWrapper>
    );
  };
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
