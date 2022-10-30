import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { WrapperForGame } from "../shared/gamePage/wrapperGame";
import { ContainerForItems } from "../shared/gamePage/containerGame";

const varOfDesign = ['candies', 'flowers', 'toys', 'coins'];


const FinalPage = () => {
  return (
    <div>
      <WrapperForGame>
        <ContainerForItems>
        </ContainerForItems>
      </WrapperForGame>
    </div>
  );
};

export default FinalPage;
