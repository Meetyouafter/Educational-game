import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContainerForItems = ({design}) => {
  return (
    <div css={css`
    width: 886px;
    height: 222px;
    background-image: url(/static/${design}/container.png);
    borderRadius: 50px;
    display: flex;
    `}>
          <div css={css`
    width: 100px;
    height: 100px;
    background-color: blue;
    margin-top: 100px;
    margin-left: 100px;
    `}></div>
    <div css={css`
    width: 100px;
    height: 100px;
    background-color: green;
    margin-top: 100px;
    margin-left: 30px;
    `}></div>
    <div css={css`
    width: 100px;
    height: 100px;
    background-color: yellow;
    margin-top: 100px;
    margin-left: 40px;
    `}></div>
    <div css={css`
    width: 100px;
    height: 100px;
    background-color: black;
    margin-top: 100px;
    margin-left: 30px;
    `}></div>
    <div css={css`
    width: 100px;
    height: 100px;
    background-color: red;
    margin-top: 100px;
    margin-left: 40px;
    `}></div>
    <div css={css`
    width: 100px;
    height: 100px;
    background-color: white;
    margin-top: 100px;
    margin-left: 30px;
    `}></div>
      

    </div>
    )
  }

