import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin: 0 0 8px 0;
`;
export const TitleApp = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #008fff;
  margin: 0 0 8px 0;
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
export const SignUpButtom = styled.TouchableOpacity`
  width: 96%;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #008fff;
  padding: 8px 16px;
  margin: 8px 0 16px 0;
`;
export const SignUpButtomText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
export const SignInButtom = styled.TouchableOpacity`
  width: 96%;
  max-width: 600px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
`;
export const SignInButtomText = styled.Text`
  font-size: 12px;
  color: #777;
`;
export const SignInButtomBoldText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #008fff;
`;
