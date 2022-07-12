import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  align-items: center;
  list-style: none;
`;

export const ButtonListItem = styled.li`
  display: block;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FeedbackButton = styled.button`
  display: inline-block;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;

  cursor: pointer;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.borderMiddleColor};
  box-shadow: 0 2px 5px ${({ theme }) => theme.colors.textMiddleColor};

  transition: color, background-color, transform 250ms ease-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.textLightColor};
    background-color: ${({ theme }) => theme.colors.accentColor};
    border-color: transparent;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accentColor};
    transform: scale(105%);
  }
`;
