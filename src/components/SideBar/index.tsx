import Switch from 'react-switch'

import * as S from './styles'
import { useTheme } from 'contexts/ThemeContext'

const SideBar = () => {
  const { ToggleTheme, theme } = useTheme()

  return (
    <S.Wrapper>
      <svg
        width="48"
        height="42"
        viewBox="0 0 48 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.2416 0H32.6817L23.9965 42H13.5564L22.2416 0Z"
          fill={theme.colors.blue}
        />
        <path
          d="M37.56 0H48L41.2331 32.9078H30.7905L37.56 0Z"
          fill={theme.colors.blue}
        />
        <path
          d="M6.76946 0H17.2095L10.4425 32.9078H0L6.76946 0Z"
          fill={theme.colors.blue}
        />
      </svg>

      <Switch
        checked={theme.title === 'dark'}
        onChange={ToggleTheme}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={15}
        onHandleColor={theme.colors.grayLine}
        offHandleColor={theme.colors.grayLine}
        offColor={theme.colors.background}
        onColor={theme.colors.background}
      />
    </S.Wrapper>
  )
}

export default SideBar
