import styled from "styled-components";
const Container = styled.div`
  background-color: #5c8984;
  width: 100wh;
  min-height: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;

const Announcement = () => {
  return (
    <Container>Connecting You with the Finest Farm-Fresh Produce..</Container>
  );
};

export default Announcement;
