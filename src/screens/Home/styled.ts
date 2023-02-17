import styled from 'styled-components/native'

export const Main = styled.SafeAreaView`
background-color: ${({ theme }) => theme.colors.back1};
`
export const Scroll = styled.ScrollView`
background-color: ${({ theme }) => theme.colors.back1};
`
export const Container = styled.View`
    margin-top: 32px;
    padding-horizontal: 24px;
`
