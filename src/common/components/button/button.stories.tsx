import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import YouTube from "@/assets/icons/YouTube";

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
} satisfies Story

export const FullWidth = {
  args: {
    children: 'Button',
    fullWidth: true,
    variant: 'primary',
  },
} satisfies Story

export const PrimaryDisabled = {
  args: {
    children: 'Button',
    disabled: true,
  },
} satisfies Story

export const WithIcon = {
  args: {
    children: (
        <YouTube/>
    ),
    variant: 'icon',
  },
} satisfies Story

export const PrimaryActive  = {
    args: {
      children: 'Button',
      variant: 'primary-active',
    },
} satisfies Story

export const PrimaryActiveDisabled  = {
    args: {
      children: 'Button',
      disabled: true,
      variant: 'primary-active',
    },
} satisfies Story
