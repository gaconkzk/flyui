import { ObjectOptions } from '../index'

export type SelectType = {
  selected: string | number
  disabled?: boolean
  placeholder?: string
  label?: string
  message?: string
  invalid?: boolean
  readOnly?: boolean
  required?: boolean
  hideAppend?: boolean
  tabindex?: number
  options?: string[] | ObjectOptions[] | any[]
}
