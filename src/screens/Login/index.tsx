/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef } from 'react'
import useIput from '../../hooks/useInput'
import useInputFocused from '../../hooks/useInputFocused'
import theme from '../../theme'
import { Body, Main, Register, Submit, Label, Text, Input } from './styled'

const Login: React.FC = () => {
  const navigation = useNavigation() as { navigate: (para: string) => void }
  const emailFocus = useInputFocused(true)
  const passwordFocus = useInputFocused(false)
  const loginFocus = useInputFocused(false)
  const registerFocus = useInputFocused(false)
  const refs = useRef<any>([])
  const email = useIput()
  const password = useIput()

  useEffect(() => {
    refs.current[0].focus()
  }, [])

  return (
    <Main>
      <Body>
        <Label onPress={() => { refs.current[0].focus() }}>
          <Input
            ref={el => { refs.current[0] = el }}
            onFocus={() => {
              emailFocus.set(true)
            }}
            onBlur={() => {
              emailFocus.set(false)
            }}
            placeholder='E-mail'
            placeholderTextColor={theme.colors.textPlaceHolder}
            focus={emailFocus.get}
            value={email.get}
            onChangeText={(e) => { email.set(e) }}
            onEndEditing={() => {
              refs.current[1].focus()
            }}
          />
        </Label>

        <Label onPress={() => { refs.current[1].focus() }}>
          <Input
            ref={el => { refs.current[1] = el }}
            onFocus={() => {
              passwordFocus.set(true)
            }}
            onBlur={() => {
              passwordFocus.set(false)
            }}
            placeholder='Senha'
            placeholderTextColor={theme.colors.textPlaceHolder}
            focus={passwordFocus.get}
            value={password.get}
            onChangeText={(e) => { password.set(e) }}
            onEndEditing={() => {
              refs.current[2].setNativeProps?.({ hasTVPreferredFocus: true })
              loginFocus.set(true)
            }}
          />
        </Label>

          <Submit
            onPress={() => { navigation.navigate('home') }}
            ref={el => { refs.current[2] = el }}
            onFocus={() => {
              loginFocus.set(true)
            }}
            onBlur={() => {
              loginFocus.set(false)
              refs.current[3].setNativeProps?.({ hasTVPreferredFocus: true })
            }}
            focus={loginFocus.get}
          >
            <Text text='entrar'>Entrar</Text>
          </Submit>

        <Register
          onPress={() => { navigation.navigate('register') }}
          ref={el => { refs.current[3] = el }}
          onFocus={() => {
            registerFocus.set(true)
          }}
          onBlur={() => {
            registerFocus.set(false)
          }}
        >
          <Text text=''>Cadastrar</Text>
        </Register>

      </Body>
    </Main>
  )
}

export default Login
