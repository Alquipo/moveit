import { Story, Meta } from '@storybook/react/types-6-0'
import ExperienceBar from '.'

export default {
  title: 'ExperienceBar',
  component: ExperienceBar
} as Meta

export const Default: Story = (args) => <ExperienceBar {...args} />
