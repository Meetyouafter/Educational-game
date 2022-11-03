import styled from "@emotion/styled";

const Text = styled.span`
  font-family: Calibri;
  font-style: normal;
  font-weight: 700;
  font-size: 68px;
  line-height: 68px;
  letter-spacing: 2px;
  color: #ffffff;
  -webkit-text-stroke: 5px #242546;
  position: absolute;
  z-index: 1;
`;

const Container = styled.div`
  margin-top: 60px;
  position: relative;
  align-items: center;
  align-content: center;
  justify-content: center;
  display: flex;
`;

const Image = styled.img`
  position: absolute;
  z-index: 1;
  width: ${(props) => (props.width ? props.width : "initial")};
`;

const GameItem = ({ text = "", theme, id, width }) => {
  return (
    <Container>
      <Image src={`/static/${theme}/${id}`} width={width} />
      <Text>{text}</Text>
    </Container>
  );
};
export default GameItem;
