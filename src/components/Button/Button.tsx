import * as React from 'react'

interface IButtonProps {
  /** The label of the button */
  label: string
}

/**
 * A button component for all your pressing needs 
 */
const Button: React.FC<IButtonProps> = ({ label }) => {
  return (
    <button>{label}</button>
  )
}

export {
  Button,
  IButtonProps
}
