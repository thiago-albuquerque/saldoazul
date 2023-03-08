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
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TitleContainer = styled.View``;
export const Title = styled.Text`
  font-size: 16px;
  color: #777;
`;
export const DateMovements = styled.Text`
  font-size: 12px;
  color: #aaa;
`;
export const ValueMovementsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ValueMovements = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #777;
  margin: 0 8px 0 0;
`;
export const DeleteButton = styled.TouchableOpacity`
  padding: 8px;
`;
export const BgIcon = styled.View`
  width: 30px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: ${props => (props.bg === 'receita' ? '#80AE0F' : '#D44816')};
  border-radius: 4px;
  margin: 0 8px 0 0;
`;
