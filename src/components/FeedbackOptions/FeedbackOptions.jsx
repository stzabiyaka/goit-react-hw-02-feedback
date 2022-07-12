import PropTypes from 'prop-types';
import {
  ButtonList,
  ButtonListItem,
  FeedbackButton,
} from './FeedbackOptions.styled';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <ButtonListItem key={option}>
            <FeedbackButton
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackButton>
          </ButtonListItem>
        );
      })}
    </ButtonList>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
