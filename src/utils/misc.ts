export const isBrowser = typeof window !== 'undefined'

export const isMobile = isBrowser && /Mobi|Android/i.test(navigator.userAgent)
