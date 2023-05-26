import styled from "styled-components";
import categories from "../Data/Data2.js";
import Category from "./Category";

const Container = styled.div`
  margin: 10px 0px;
  padding: 5px;
  width: 100%;
`;
const CategoryContainer = styled.div`
  display: flex;
  padding: 5px;
  width: 100%;
  justify-content: space-between;
`;
const TextContainer = styled.div`
  width: 100%;
  min-height: 20px;
  margin-left: 4%;
`;
const Text = styled.p`
  font-weight: 600;
  font-size: 30px;
  color: black;
`;

const Categories = () => {
  return (
    <Container>
      <TextContainer>
        <Text>Categories :</Text>
      </TextContainer>
      <CategoryContainer>
        {categories.map((category) => (
          <Category item={category} key={category.id} />
        ))}
      </CategoryContainer>
    </Container>
  );
};

export default Categories;
