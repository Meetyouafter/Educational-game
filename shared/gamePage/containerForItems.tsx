import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContainerForItems = ({design, count}) => {
  const need = 'r'.repeat(count+1) //for repeat ellipse
  const arr = need.split('')

  return (
    <div css={css`
    width: 890px;
    height: 230px;
    background-image: url(/static/${design}/container.png);
    borderRadius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    `}>
      {arr.map((element) => (
        <div css={css`
        width: 131px;
        height: 131px;
        background-image: url(/static/ellipse.png);
        `}>{element}</div>
      ))}
    </div>
    )
  }

