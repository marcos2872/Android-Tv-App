import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Main = styled.View`
height: 380px;
`
export const Scroll = styled.ScrollView`
margin-bottom: 30px;
`
export const Title = styled.Text`
color: ${({ theme }) => theme.colors.text};
margin-left: 50px;
font-size: ${RFPercentage(2)}px;
`
