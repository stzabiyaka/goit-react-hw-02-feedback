import PropTypes from 'prop-types';
import { StatsList, StatsListItem } from './Statistics.styled';

export function Statistics(props) {
  const keys = Object.keys(props);
  return (
    <StatsList>
      {keys.map(key => (
        <StatsListItem key={key}>
          {key === 'positivePercentage'
            ? `positive feedback: ${props[key]}%`
            : `${key}: ${props[key]}`}
        </StatsListItem>
      ))}
    </StatsList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
