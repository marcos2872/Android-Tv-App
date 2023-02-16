/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'

const useIput = () => {
  const [value, setValue] = useState('')

  const save = (v: string): void => {
    setValue(v)
  }

  return {
    set: save, get: value
  }
}

export default useIput
