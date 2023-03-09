import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #eff3f6;
`;
export const AlertContainer = styled.View`
  width: 96%;
  max-width: 600px;
  justify-content: center;
`;
export const AlertText = styled.Text`
  width: 96%;
  max-width: 600px;
  font-size: 18px;
  color: #777;
  text-align: center;
  margin: 24px 0;
`;
export const Image = styled.Image`
  width: 112px;
  height: 110px;
  margin: 0 0 24px 0;
`;
export const SignOutButtom = styled.TouchableOpacity`
  width: 96%;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #008fff;
  padding: 8px 16px;
  margin: 8px 0 16px 0;
`;
export const SignOutButtomText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
