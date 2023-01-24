import React from 'react'
import { useState } from 'react'

export const MyText = () => {
  const [value, setValue] = useState('')
  return (
    <>
    <label htmlFor='input'>Message</label>
      <input id='input' onChange={(event) => setValue(event.target.value)} value={value} />
      <h2>{value}</h2>
    </>
  )
}
