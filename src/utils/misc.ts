export const isBrowser = typeof window !== 'undefined'

export const isMobile = isBrowser && /Mobi|Android/i.test(navigator.userAgent)

export const toId = (str: string) => str.replaceAll("'", '').replace(/\s/g, '_').toLowerCase()

export const notEmpty = <TValue>(value: TValue | null | undefined): value is TValue =>
  value !== null && value !== undefined
