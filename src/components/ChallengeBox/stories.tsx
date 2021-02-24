import { Story, Meta } from '@storybook/react/types-6-0'
import ChallengeBox from '.'

export default {
  title: 'ChallengeBox',
  component: ChallengeBox
} as Meta

export const Default: Story = (args) => <ChallengeBox {...args} />
// export const ActiveChallenge: Story = (args) => <ChallengeBox {...args} />

// ActiveChallenge.args = {
//   ativeChallenge: {
//     type: 'body',
//     description:
//       'Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.',
//     amount: 80
//   }
// }
