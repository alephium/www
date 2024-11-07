import { useEffect, useRef } from 'react'
import styled from 'styled-components'

// Extend the Window interface to include the google object with the translate namespace
declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google?: {
      translate?: {
        TranslateElement: {
          new (options: object, container: HTMLElement | null): void
          InlineLayout: {
            VERTICAL: any
          }
        }
      }
    }
  }
}

const TranslateComponent = () => {
  const googleTranslateRef = useRef(null)

  useEffect(() => {
    const addScript = document.createElement('script')
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
    document.body.appendChild(addScript)

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement.InlineLayout) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            autoDisplay: false,
            includedLanguages: 'en,fr,de,ar,bg,el,es,hi,id,it,nl,pt,ru,th,tr,vi,zh-CN',
            layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL
          },
          googleTranslateRef.current
        )
      }
    }
  }, [])

  return <TranslateComponentStyled ref={googleTranslateRef} />
}

export default TranslateComponent

const TranslateComponentStyled = styled.div`
  width: 80%;
  padding: 10px;
`
