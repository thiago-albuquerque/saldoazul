import styled from 'styled-components/native';

export const Container = styled.View`
  width: 320px;
  height: 110px;
  align-items: center;
  background: ${props => props.bg};
  border-radius: 24px;
  padding: 16px 0;
  margin: 0 8px 0 0;
`;
export const ValueBalance = styled.Text`
  max-width: 80%;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin: 0 0 4px 0;
`;
export const Description = styled.Text`
  font-size: 14px;
  color: #fff;
`;
