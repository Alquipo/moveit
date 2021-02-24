import { Story, Meta } from '@storybook/react/types-6-0'
import Countdown from '.'

export default {
  title: 'Countdown',
  component: Countdown
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '400px', margin: '0 auto' }}>
    <Countdown {...args} />
  </div>
)
