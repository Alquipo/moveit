import { Story, Meta } from '@storybook/react/types-6-0'
import SideBar from '.'

export default {
  title: 'SideBar',
  component: SideBar
} as Meta

export const Default: Story = (args) => <SideBar {...args} />
