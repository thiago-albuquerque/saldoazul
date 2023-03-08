import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 96%;
  max-width: 600px;
  align-items: center;
  background: #fff;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;
export const HeaderHistoric = styled.View`
  width: 96%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;
export const TitleHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #777;
`;
export const CalendarButton = styled.TouchableOpacity`
  padding: 8px;
`;
export const ListMovementsContainer = styled.View`
  width: 96%;
  height: 100%;
`;
