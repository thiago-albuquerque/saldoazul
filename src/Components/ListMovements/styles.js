import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #eff3f6;
  border-radius: 8px;
  padding: 8px;
  margin: 0 0 8px 0;
`;
export const DescriptionContainer = styled.View`
  max-width: 54%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const TitleContainer = styled.View``;
export const Title = styled.Text`
  font-size: 16px;
  color: #777;
`;
export const DateMovements = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #aaa;
`;
export const ValueMovementsContainer = styled.View`
  max-width: 45%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ValueMovements = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.color === 'receita' ? '#80AE0F' : '#D44816')};
  margin: 0 4px 0 0;
`;
export const DeleteButton = styled.TouchableOpacity`
  padding: 4px;
`;
export const BgIcon = styled.View`
  width: 30px;
  height: 42px;
  align-items: center;
  justify-content: center;
  background: ${props => (props.bg === 'receita' ? '#80AE0F' : '#D44816')};
  border-radius: 4px;
  margin: 0 4px 0 0;
`;
