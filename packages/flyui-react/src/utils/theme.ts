import colors from 'windicss/colors'
import Color from 'color'

export const theme = {
  colors: {
    prim: {
      1: colors.blue[500],
      '1-lighter': colors.blue[600],
      '1-shadow': colors.blue[800],
      '1-highlight': colors.blue[500],

      2: colors.warmGray[700],
      '2-lighter': colors.warmGray[600],
      '2-shadow': colors.warmGray[800],
      '2-highlight': colors.warmGray[500],
    },
  },
  textColor: {
    prim: {
      1: colors.gray[200],
      2: colors.gray[200],
    },
  },
}

export const updateTheme = (primaryColor: string) => {
  const rootStyle = getComputedStyle(document.documentElement)
  const originalColor = rootStyle.getPropertyValue('--f-primary')
  if (originalColor !== primaryColor) {
    document.documentElement.style.setProperty('--f-primary', primaryColor)
    document.documentElement.style.setProperty(
      '--f-primary-lighter',
      Color(primaryColor).lighten(0.15).hex(),
    )
    document.documentElement.style.setProperty(
      '--f-primary-shadow',
      Color(primaryColor).lighten(0.15).isDark()
        ? Color(primaryColor).darken(0.45).hex()
        : Color(primaryColor).darken(0.25).hex(),
    )
    document.documentElement.style.setProperty(
      '--f-primary-highlight',
      Color(primaryColor).isLight()
        ? Color(primaryColor).lighten(0.2).hex()
        : Color(primaryColor).lighten(0.35).hex(),
    )
    document.documentElement.style.setProperty(
      '--t-primary',
      Color(primaryColor).negate().grayscale().hex(),
    )
  }
}

export const defaultTheme = () => {
  updateTheme(theme.colors.prim[2])
}
