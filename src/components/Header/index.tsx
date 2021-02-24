import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'

import * as S from './styles'

export type HeaderProps = {
  toggleTheme(): void
}

const Header = ({ toggleTheme }: HeaderProps) => {
  const { colors, name } = useContext(ThemeContext)

  return (
    <S.Wrapper>
      <img src="img/logo-full.svg" alt="" />

      <Switch
        checked={name === 'Light'}
        onChange={toggleTheme}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={15}
        onHandleColor={colors.grayLine}
        offHandleColor={colors.grayLine}
        offColor={colors.background}
        onColor={colors.background}
      />
    </S.Wrapper>
  )
}

export default Header
