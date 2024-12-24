import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import {Button, Modal} from "@/common/components";

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const ModalDefault = {
  args: {
    children: 'Modal',
    onOpenChange: () => {},
    open: true,
    title: 'Modal title',
  },
  render: args => {
    const ModalComponent = () => {
      const [open, setOpen] = useState(false);

      return (
          <>
            <button onClick={() => setOpen(true)}>Open Modal</button>
            <Modal {...args} onOpenChange={setOpen} open={open} title={'Title Test'}>
              <div style={{ padding: '20px', display: "flex",flexDirection: "column" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                <Button>Test Content</Button>
              </div>
            </Modal>
          </>
      );
    };

    return <ModalComponent />;
  },
} satisfies Story

