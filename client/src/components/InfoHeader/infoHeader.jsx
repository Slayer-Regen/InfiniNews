import { Box, styled, Typography } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  background: "grey",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  height: 48,
  marginBottom: 30,
  position:"sticky",
  top:0,
  zIndex:10,
}));

const Text = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  margin-left: 50px;
  font-family: "Roboto", sans-serif;
`;

const InfoHeader = () => {
  return (
    <Container>
      <Text>Author :- Abbas Hassan</Text>
    </Container>
  );
};

export default InfoHeader;
