import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './button'

// import { multiply } from '@repo/utils/multiply'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'ui-button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onPress: fn() },
}

export default meta

type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    title: `Button`,
  },
}

export const Secondary: Story = {
  args: {
    title: 'Button',
  },
}

export const Warning: Story = {
  args: {
    primary: true,
    title: 'Delete now',
    backgroundColor: 'red',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    title: 'Button',
  },
}

export const Small = {
  args: {
    size: 'small',
    title: 'Button',
  },
}
