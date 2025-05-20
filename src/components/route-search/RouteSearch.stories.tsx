import type { Meta, StoryObj } from '@storybook/react';

import { RouteSearch } from './RouteSearch';

const meta = {
  component: RouteSearch,
} satisfies Meta<typeof RouteSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};