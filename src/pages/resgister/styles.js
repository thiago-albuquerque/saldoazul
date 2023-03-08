import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #eff3f6;
`;
export const Title = styled.Text`
  width: 96%;
  max-width: 600px;
  font-size: 24px;
  font-weight: bold;
  color: #777;
  margin: 0 0 32px 0;
`;
export const InputLabel = styled.Text`
  width: 96%;
  max-width: 600px;
  font-size: 12px;
  color: #aaa;
  margin: 0 0 4px 0;
`;
export const Input = styled.TextInput`
  width: 96%;
  max-width: 600px;
  border: 1px solid #aaa;
  border-radius: 8px;
  background: #fff;
  padding: 8px 16px;
  margin: 0 0 16px 0;
`;
export const CategoryContainer = styled.View`
  width: 96%;
  max-width: 600px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 24px 0;
`;
export const RevenueButton = styled.TouchableOpacity`
  width: 48%;
  max-width: 600px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${props => (props.checked ? '#80ae0f' : '#fff')};
  padding: 8px 16px;
`;
export const ReceiveText = styled.Text`
  font-size: 16px;
  color: ${props => (props.checked ? '#fff' : '#777')};
  margin: 0 0 0 8px;
`;
export const ExpenseButton = styled.TouchableOpacity`
  width: 48%;
  max-width: 600px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${props => (props.checked ? '#d44816' : '#fff')};
  padding: 8px 16px;
`;
export const RegisterButtom = styled.TouchableOpacity`
  width: 96%;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #008fff;
  padding: 8px 16px;
  margin: 8px 0 16px 0;
`;
export const RegisterText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
