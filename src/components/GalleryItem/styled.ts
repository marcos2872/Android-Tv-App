import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Main = styled.TouchableHighlight`
background-color: transparent;
    border-color: transparent;
    border-width: 5px;
    border-Radius: 15px;
    margin-horizontal: 10px;
`
export const Image = styled.Image`
    background-color: transparent;
    width: 350px;
    height: 250px;
    border-radius: 10px;
`
export const Description = styled.Text`
    position: absolute;
    bottom: -45px;
    left: 10px;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFPercentage(1.8)}px;
    font-weight: bold;
`
