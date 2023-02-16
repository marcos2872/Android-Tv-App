/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'

const useInputFocused = (bool: boolean) => {
  const [focus, setFocus] = useState(bool)

  return {
    set: setFocus,
    get: focus
  }
}

export default useInputFocused
