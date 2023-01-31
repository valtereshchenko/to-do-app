import React from 'react'

type CheckboxProps = {
    onClick: ()=> void,
    defaultChecked: boolean
}

export const Checkbox = ({onClick, defaultChecked}: CheckboxProps) => {
  return (
    <input type="checkbox" onClick={onClick} defaultChecked={defaultChecked} />
  )
}
