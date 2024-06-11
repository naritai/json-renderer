import { JSONValue } from '../types'
import { isDate } from './isDate'
import { isValidEmail } from './isValidEmail'

export type RenderableJSONValue = Omit<JSONValue, 'JSONObject' | 'JSONArray'>

export type RenderableJSONMember = {
  value: RenderableJSONValue
  type: InputType
  tag: Tags
}

export enum InputType {
  string = 'text',
  number = 'number',
  date = 'datetime-local',
  boolean = 'radio',
  email = 'email',
}

export enum Tags {
  INPUT = 'INPUT',
  TEXTAREA = 'TEXTAREA',
  RADIO = 'RADIO',
}

export const jsonMemberResolver = ([key, value]: [
  string,
  JSONValue,
]): RenderableJSONMember | null => {
  if (key === 'id') {
    return null
  }

  if (typeof value === 'boolean') {
    return { value, type: InputType['boolean'], tag: Tags.RADIO }
  }

  if (typeof value === 'number') {
    return { value, type: InputType['number'], tag: Tags.INPUT }
  }

  if (typeof value === 'number') {
    return { value, type: InputType['number'], tag: Tags.INPUT }
  }

  if (typeof value === 'string' && isDate(value)) {
    return { value, type: InputType['date'], tag: Tags.INPUT }
  }

  if (typeof value === 'string' && isValidEmail(value)) {
    return { value, type: InputType['email'], tag: Tags.INPUT }
  }

  if (typeof value === 'string' && value.length < 80) {
    return { value, type: InputType['string'], tag: Tags.INPUT }
  }

  if (typeof value === 'string') {
    return { value, type: InputType['string'], tag: Tags.TEXTAREA }
  }

  return null
}
