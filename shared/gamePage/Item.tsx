import styled from "@emotion/styled";

const Text = styled.span`
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 68px;
  letter-spacing: 2px;
  color: #ffffff;
  position: absolute;
  z-index: 1;
  padding-left: 70px;
  padding-top: 70px;
`;

const Container = styled.div`
  position: absolute;
`;

const Image = styled.img`
  position: absolute;
  z-index: 1;
  width: ${props => props.width ? props.width : "initial"};
`;

const Item = ({ text = "", theme, id, width }) => {
  return (
    <Container>
      <Image src={`/static/${theme}/${id}`} width={width} />
      <Text>{text}</Text>
    </Container>
  );
};
export default Item;
