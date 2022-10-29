import { css, Global, keyframes, Keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const StartPageStyles = css({
  backgroundColor: '<img src="4882066 1.svg" alt="img" />',
})

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        background: brown;
        min-height: 100%;
        font-size: 24px;
      }
    `}
  />
)