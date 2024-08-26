import { Palette, Theme } from '@mui/material'
import MuiCardHeader from '@mui/material/CardHeader'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'
import { CardColor } from '../types'

type StyledProps = {
  theme: Theme
  filled: boolean
  hasIcon: boolean
  iconColor: CardColor
  avatarStyle: any
  headerContentStyle: any
}

const CardHeader = styled(MuiCardHeader, {
  shouldForwardProp: prop =>
    !includes(prop, ['variant', 'hasIcon', 'iconColor', 'filled', 'avatarStyle', 'headerContentStyle'])
})(
  ({
    theme,
    filled,
    hasIcon,
    iconColor = 'secondary' as CardColor & keyof Palette,
    avatarStyle,
    headerContentStyle
  }: Partial<StyledProps>) => ({
    ['&.MuiCardHeader-root']: {
      ...(filled && { backgroundColor: theme?.palette.grey[200], minHeight: '48px' })
    },
    ['& .MuiCardHeader-avatar']: {
      ...(hasIcon && {
        width: '3rem',
        height: '3rem',
        borderRadius: '0.75rem',
        background: `linear-gradient(195deg, ${theme?.palette[iconColor].light}, ${theme?.palette[iconColor].main})`,
        position: 'absolute',
        top: '-20px',
        ...avatarStyle
      })
    },
    ['& .MuiCardHeader-content']: {
      ...(hasIcon && {
        paddingLeft: '80px'
      }),
      ...headerContentStyle
    },
    ['& .MuiCardHeader-action']: {
      display: 'flex',
      alignItems: 'center'
    }
  })
)

export default CardHeader
