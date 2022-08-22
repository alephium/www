export const isBrowser = typeof window !== 'undefined'

export const isMobile = isBrowser && /Mobi|Android/i.test(navigator.userAgent)

export const toId = (str: string) => str.replace(/\s/g, '_').toLowerCase()
