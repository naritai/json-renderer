export const isDate = (value: string): boolean => {
  const val = Date.parse(value)
  return !isNaN(val)
}
