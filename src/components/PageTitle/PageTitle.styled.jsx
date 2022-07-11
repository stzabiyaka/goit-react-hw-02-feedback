import styled from '@emotion/styled';

export const Title = styled.h1`
  display: block;
  width: 100%;
  margin-top: 0;
  margin-bottom: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 40px;
  line-height: 1.25;
  text-transform: uppercase;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgroundLightColor};
`;
