import { Story, Meta } from '@storybook/react/types-6-0'
import Tooltip from '.'

export default {
  title: 'Tooltip',
  component: Tooltip
} as Meta

export const Default: Story = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10rem'
    }}
  >
    <Tooltip text="safasd">asjdhkjsa</Tooltip>
  </div>
)
