/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled, { type DefaultTheme } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
interface propsType { theme: DefaultTheme, focus?: boolean, disabled?: boolean }

export const Main = styled.View`
background-color: ${({ theme }) => theme.colors.back1};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`
export const Body = styled.View`
background-color: ${({ theme }) => theme.colors.back2};
width: ${({ theme }) => theme.SIZE.window / 2}px;
height: 50%;
min-height: 300PX;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 10px;
gap: 20px
`
export const Input = styled.TextInput`
width: 80%;
height: 30px;
background-color: ${({ theme }) => theme.colors.back1};
padding-left: 10px;
border-radius: 5px;
color: ${({ theme }) => theme.colors.text};
border: ${({ theme, focus }: propsType) => focus && theme.colors.button};
`
export const Submit = styled.TouchableOpacity`
width: 20%;
height: 40px;
align-items: center;
justify-content: center;
border-radius: 5px;
background-color: ${({ theme, disabled }: propsType) => !disabled ? theme.colors.button : theme.colors.dbutton};
`
export const Register = styled.TouchableOpacity`
`
export const Text = styled.Text`
color: ${({ theme }) => theme.colors.text};
font-size: ${RFPercentage(2)}px;
`
export const Label = styled.TouchableHighlight`
display: flex;
align-items: center;
width: 100%;
`
