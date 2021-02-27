import { ReactNode } from 'react'
import * as S from './styles'

type TooltipProps = {
  children: ReactNode
  text: string
}
const Tooltip = ({ children, text }: TooltipProps) => (
  <S.Wrapper data-text={text} tabIndex={1}>
    {children}
  </S.Wrapper>
)

export default Tooltip
