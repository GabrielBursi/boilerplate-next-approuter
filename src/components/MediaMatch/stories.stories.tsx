import type { Meta, StoryObj } from '@storybook/react';
import { MediaMatch } from ".";

const meta: Meta<typeof MediaMatch> ={
    title: 'Utils/MediaMatch',
    component: MediaMatch,
}
export default meta

type Story = StoryObj<typeof MediaMatch>;

export const Desktop: Story = {
    args: {
        greaterThan: 'medium'
    }
}

export const Mobile: Story = {
    args: {
        lessThan: 'medium'
    },
    parameters:{
        viewport: {
            defaultViewport: 'mobile1'
        }
    }
}