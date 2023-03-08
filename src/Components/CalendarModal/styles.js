import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
`;
export const BackButtom = styled.TouchableOpacity`
  width: 96%;
  max-width: 600px;
  align-items: flex-start;
  justify-content: center;
  padding: 8px;
  margin: 0 0 24px 0;
`;
export const CalendarContainer = styled.View`
  width: 96%;
  max-width: 600px;
  justify-content: center;
  border-radius: 8px;
  background: #fff;
  padding: 4px;
  margin: 0 0 24px 0;
`;
export const FilterButtom = styled.TouchableOpacity`
  width: 96%;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #008fff;
  padding: 8px 16px;
`;
export const FilterButtomText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
