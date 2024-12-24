import type { Meta, StoryObj } from '@storybook/react'
import {Logo} from "@/common/components";

const meta = {
  component: Logo,
  tags: ['autodocs'],
  title: 'Components/Logo',
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof Logo>

export const Logotype = {
  args: {
  },
} satisfies Story

