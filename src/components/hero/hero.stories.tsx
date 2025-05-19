import type { Meta, StoryObj } from '@storybook/react';

import { hero } from './hero';

const meta = {
  component: hero,
} satisfies Meta<typeof hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};