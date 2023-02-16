/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { useNavigation } from '@react-navigation/native'
import { validate } from 'email-validator'
import React, { useEffect, useRef } from 'react'
import useIput from '../../hooks/useInput'
import useInputFocused from '../../hooks/useInputFocused'
import theme from '../../theme'
import { Body, Main, Submit, Label, Text, Input } from './styled'

const Register: React.FC = () => {
  const navigation = useNavigation() as { navigate: (para: string) => void }
  const emailFocus = useInputFocused(true)
  const passwordFocus = useInputFocused(false)
  const password2Focus = useInputFocused(false)
  const registerFocus = useInputFocused(false)
  const refs = useRef<any>([])
  const email = useIput()
  const password = useIput()
  const password2 = useIput()

  useEffect(() => {
    if (refs.current) {
      refs.current[0].focus()
    }
  }, [])

  return (
    <Main>
      <Body>
        <Label onPress={() => { refs.current[0].focus(0) }}>
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
              refs.current[2].focus()
            }}
          />
        </Label>

        <Label onPress={() => { refs.current[2].focus() }}>
          <Input
            ref={el => { refs.current[2] = el }}
            onFocus={() => {
              password2Focus.set(true)
            }}
            onBlur={() => {
              password2Focus.set(false)
            }}
            placeholder='Confirme a Senha'
            placeholderTextColor={theme.colors.textPlaceHolder}
            focus={password2Focus.get}
            value={password2.get}
            onChangeText={(e) => { password2.set(e) }}
            onEndEditing={() => {
              refs.current[3].setNativeProps?.({ hasTVPreferredFocus: true })
            }}
          />
        </Label>

          <Submit
            onPress={() => { navigation.navigate('home') }}
            ref={el => { refs.current[3] = el }}
            onFocus={() => {
              registerFocus.set(true)
            }}
            onBlur={() => {
              registerFocus.set(false)
            }}
            disabled={!(validate(email.get) && password.get.length >= 6 && password.get === password2.get)}
          >
            <Text>Cadastrar</Text>
          </Submit>
      </Body>
    </Main>
  )
}

export default Register
