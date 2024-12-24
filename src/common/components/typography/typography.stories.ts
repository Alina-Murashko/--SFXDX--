import type { Meta, StoryObj } from '@storybook/react'
import {Typography} from "@/common/components";

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
           'h1',
          'subtitle1',
        'subtitle2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof Typography>


export const Subtitle1 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'subtitle1',
  },
} satisfies Story

export const Title = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'title1',
  },
} satisfies Story

export const Link = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'link',
  },
} satisfies Story
