import { Story, Meta } from '@storybook/react/types-6-0'
import Profile from '.'

export default {
  title: 'Profile',
  component: Profile
} as Meta

export const Default: Story = () => <Profile />
