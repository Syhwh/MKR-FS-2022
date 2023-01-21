import React from 'react'
import { useState } from 'react'

export const MyText = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <input onChange={(event) => setValue(event.target.value)} value={value} />
      <h2>{value}</h2>
    </>
  )
}
