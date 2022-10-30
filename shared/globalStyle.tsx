import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        //background: white;
        min-height: 100%;
      }
    `}
  />
)