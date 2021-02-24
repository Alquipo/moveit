import { Story, Meta } from '@storybook/react/types-6-0'
import CompletedChallenges from '.'

export default {
  title: 'CompletedChallenges',
  component: CompletedChallenges
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '400px', margin: '0 auto' }}>
    <CompletedChallenges {...args} />
  </div>
)
