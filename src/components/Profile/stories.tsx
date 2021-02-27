import { Story, Meta } from '@storybook/react/types-6-0'
import Profile, { ProfileProps } from '.'

export default {
  title: 'Profile',
  component: Profile
} as Meta

export const Default: Story<ProfileProps> = (props) => <Profile {...props} />
