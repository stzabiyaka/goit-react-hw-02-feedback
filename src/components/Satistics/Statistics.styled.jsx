import styled from '@emotion/styled';

export const StatsList = styled.ul`
  margin: 0 auto;
  width: fit-content;
  padding: 0;
  list-style: none;
`;

export const StatsListItem = styled.li`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.33;

  &::first-letter {
    text-transform: uppercase;
  }
`;
