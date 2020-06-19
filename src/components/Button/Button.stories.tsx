import * as React from 'react'
import { withA11y } from '@storybook/addon-a11y';
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y]
}

export const withText = () => <Button label='hello' />

export const withEmoji = () => <Button label='😀 😎 👍 💯' />
