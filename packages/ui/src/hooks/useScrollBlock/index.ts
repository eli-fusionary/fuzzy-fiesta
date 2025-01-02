import { useCallback, useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'

const safeDocument = typeof document === 'undefined' ? null : document

export const useScrollBlock = (): [() => void, () => void] => {
  const scrollBlocked = useRef<boolean>(false)
  const { body } = safeDocument ?? {}
  const html = safeDocument?.documentElement

  const blockScroll = () => {
    if (!body?.style || scrollBlocked.current) {
      return
    }

    const scrollBarWidth = isMobile
      ? 0
      : window.innerWidth - (html?.clientWidth ?? 0)
    const bodyPaddingRight =
      Number.parseInt(
        globalThis.getComputedStyle(body).getPropertyValue('padding-right'),
        10,
      ) || 0

    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */
    if (html) {
      html.style.position = 'relative' /* [1] */
      html.style.overflow = 'hidden' /* [2] */
    }

    body.style.position = 'relative' /* [1] */
    body.style.overflow = 'hidden' /* [2] */
    body.style.paddingRight = `${(bodyPaddingRight + scrollBarWidth).toString()}px`

    scrollBlocked.current = true
  }

  const allowScroll = useCallback(() => {
    if (!body?.style || !scrollBlocked.current) {
      return
    }

    if (html) {
      html.style.position = ''
      html.style.overflow = ''
    }

    body.style.position = ''
    body.style.overflow = ''
    body.style.paddingRight = ''

    scrollBlocked.current = false
  }, [body?.style, html])

  useEffect(() => {
    return () => {
      if (scrollBlocked.current) {
        allowScroll()
      }
    }
  }, [allowScroll])

  return [blockScroll, allowScroll]
}
