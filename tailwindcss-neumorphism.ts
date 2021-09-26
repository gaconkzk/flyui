import Color from 'color'
import _ from 'lodash'

import plugin from 'windicss/plugin'

const invalidKeywords = [
  'currentcolor',
  'transparent',
  'unset',
  'initial',
  'inherit',
]

const flattenColorPalette = function (colors) {
  const result = _(colors)
    .flatMap((color, name) => {
      if (!_.isObject(color)) {
        return [[name, color]]
      }

      return _.map(color, (value, key) => {
        const suffix = key === 'default' ? '' : `-${key}`
        return [`${name}${suffix}`, value]
      })
    })
    .fromPairs()
    .value()
  return result
}

const generateShades = (color) => {
  try {
    return {
      baseColor: Color(color).hex(),
      shadowColor: Color(color).isDark()
        ? Color(color).darken(0.45).hex()
        : Color(color).darken(0.25).hex(),
      highlightColor: Color(color).isLight()
        ? Color(color).lighten(0.2).hex()
        : Color(color).lighten(0.35).hex(),
      shadowGradient: Color(color).isDark()
        ? Color(color).darken(0.2).hex()
        : Color(color).darken(0.15).hex(),
      highlightGradient: Color(color).isLight()
        ? Color(color).lighten(0.1).hex()
        : Color(color).lighten(0.05).hex(),
    }
  } catch (err) {
    console.error(err)
    return false
  }
}

const invalid = (color) => {
  if (Array.isArray(color)) {
    return color.some((c) => invalidKeywords.includes(c.toLowerCase()))
  } else {
    return invalidKeywords.includes(color.toLowerCase())
  }
}

export default plugin(
  function ({ addUtilities, e, theme, variants }) {
    const nmFlatPairs = []
    _.forEach(
      flattenColorPalette(theme('neumorphismColor', theme('backgroundColor'))),
      (color, colorKey) => {
        if (invalid(color)) return []
        const shades = generateShades(color)
        if (!shades) {
          console.log(
            `tailwind-neumorphism: Something went wrong generating shades of '${colorKey}' (${color}). Skipping.`,
          )
          return false
        }

        const themeSize = theme('neumorphismSize') as Record<string, string>
        _.forEach(themeSize, (size, sizeKey) => {
          nmFlatPairs.push([
            sizeKey.toLowerCase() === 'default'
              ? `.${e(`nm-flat-${colorKey}`)}`
              : `.${e(`nm-flat-${colorKey}-${sizeKey}`)}`,
            {
              border: `1px solid ${Color(color).lighten(0.15).hex()}`,
              background: shades.baseColor,
              boxShadow: `${size} ${size} calc(${size} * 2) ${shades.shadowColor}, calc(${size} * -1) calc(${size} * -1) calc(${size} * 2) ${shades.highlightColor}`,
            },
          ])
        })
      },
    )

    addUtilities(
      _.fromPairs(nmFlatPairs),
      variants('neumorphismFlat', ['responsive', 'hover', 'focus']),
    )

    const nmConcavePairs = []
    _.forEach(
      flattenColorPalette(theme('neumorphismColor', theme('backgroundColor'))),
      (color, colorKey) => {
        if (invalid(color)) return []
        const shades = generateShades(color)
        if (!shades) {
          console.log(
            `tailwind-neumorphism: Something went wrong generating shades of '${colorKey}' (${color}). Skipping.`,
          )
          return false
        }

        const themeSize = theme('neumorphismSize') as Record<string, string>
        _.forEach(themeSize, (size, sizeKey) => {
          nmConcavePairs.push([
            sizeKey.toLowerCase() === 'default'
              ? `.${e(`nm-concave-${colorKey}`)}`
              : `.${e(`nm-concave-${colorKey}-${sizeKey}`)}`,
            {
              border: `1px solid ${Color(color).lighten(0.15).hex()}`,
              background: `linear-gradient(145deg, ${shades.shadowGradient}, ${shades.highlightGradient})`,
              boxShadow: `${size} ${size} calc(${size} * 2) ${shades.shadowColor}, calc(${size} * -1) calc(${size} * -1) calc(${size} * 2) ${shades.highlightColor}`,
            },
          ])
        })
      },
    )

    addUtilities(
      _.fromPairs(nmConcavePairs),
      variants('neumorphismConcave', ['responsive', 'hover', 'focus']),
    )

    const nmConvexPairs = []
    _.forEach(
      flattenColorPalette(theme('neumorphismColor', theme('backgroundColor'))),
      (color, colorKey) => {
        if (invalid(color)) return []
        const shades = generateShades(color)
        if (!shades) {
          console.log(
            `tailwind-neumorphism: Something went wrong generating shades of '${colorKey}' (${color}). Skipping.`,
          )
          return false
        }

        const themeSize = theme('neumorphismSize') as Record<string, string>
        _.forEach(themeSize, (size, sizeKey) => {
          nmConvexPairs.push([
            sizeKey.toLowerCase() === 'default'
              ? `.${e(`nm-convex-${colorKey}`)}`
              : `.${e(`nm-convex-${colorKey}-${sizeKey}`)}`,
            {
              border: `1px solid ${Color(color).lighten(0.15).hex()}`,
              background: `linear-gradient(145deg, ${shades.highlightGradient}, ${shades.shadowGradient})`,
              boxShadow: `${size} ${size} calc(${size} * 2) ${shades.shadowColor}, calc(${size} * -1) calc(${size} * -1) calc(${size} * 2) ${shades.highlightColor}`,
            },
          ])
        })
      },
    )

    addUtilities(
      _.fromPairs(nmConvexPairs),
      variants('neumorphismConvex', ['responsive', 'hover', 'focus']),
    )

    const nmInsetPairs = []
    _.forEach(
      flattenColorPalette(theme('neumorphismColor', theme('backgroundColor'))),
      (color, colorKey) => {
        if (invalid(color)) return []
        const shades = generateShades(color)
        if (!shades) {
          console.log(
            `tailwind-neumorphism: Something went wrong generating shades of '${colorKey}' (${color}). Skipping.`,
          )
          return false
        }

        const themeSize = theme('neumorphismSize') as Record<string, string>
        _.forEach(themeSize, (size, sizeKey) => {
          nmInsetPairs.push([
            sizeKey.toLowerCase() === 'default'
              ? `.${e(`nm-inset-${colorKey}`)}`
              : `.${e(`nm-inset-${colorKey}-${sizeKey}`)}`,
            {
              border: `1px solid transparent`,
              background: shades.baseColor,
              boxShadow: `inset ${size} ${size} calc(${size} * 2) ${shades.shadowColor}, inset calc(${size} * -1) calc(${size} * -1) calc(${size} * 2) ${shades.highlightColor}`,
            },
          ])
        })
      },
    )

    addUtilities(
      _.fromPairs(nmInsetPairs),
      variants('neumorphismInset', ['responsive', 'hover', 'focus']),
    )
  },
  {
    theme: {
      neumorphismSize: {
        xs: '0.05em',
        sm: '0.1em',
        default: '0.2em',
        lg: '0.4em',
        xl: '0.8em',
      },
    },
  },
)
