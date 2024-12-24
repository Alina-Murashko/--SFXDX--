import type { Meta, StoryObj } from '@storybook/react'
import {ButtonMetamask} from "@/feature/layout/ui/header/ui/ButtonMetamask/ButtonMetamask";

const meta = {
  component: ButtonMetamask,
  argTypes: {
    handleCopyToClipboard: { action: 'handleCopyToClipboard' },
    walletAddress: { control: 'text' },
  },
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof ButtonMetamask>

export default meta
type Story = StoryObj<typeof ButtonMetamask>


export const MetamaskButton = {
  args: {
    handleCopyToClipboard: () => alert('Copied to clipboard!'),
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
  },
} satisfies Story
