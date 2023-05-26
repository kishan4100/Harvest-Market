import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin: 30px 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;
const FilterTexT = styled.span`
  margin: 10px 10px 10px 50px;
  font-weight: 400;
  font-size: 2rem;
`;
const Select = styled.select`
  border: 1px solid gray;
  margin: 10px;
  font-size: 1.5rem;
`;
const Option = styled.option`
  font-size: 1rem;
`;

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  console.log(cat);
  const [filter, setFilter] = useState({ category: cat, "unit(s)": "kg" });
  const [sort, setSort] = useState("newest");
  const navigate = useNavigate();
  const handleFilter = (event) => {
    const selectedValue = event.target.value.split("s")[0];
    navigate(`/products/${selectedValue}`);
    console.log(location.pathname);
    console.log(selectedValue);
    setFilter((prevstate) => ({
      ...prevstate,
      [event.target.name]: selectedValue,
    }));
  };
  const handleSort = (e) => {
    setSort((prevstate) => e.target.value);
  };
  console.log(filter);
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Title>Fruits</Title>
      <FilterContainer>
        <Filter>
          <FilterTexT>Filter Products:</FilterTexT>
          <Select name="category" onChange={handleFilter}>
            <Option value="" selected disabled hidden>
              Choose here
            </Option>
            <Option value="all">all</Option>
            <Option value="Fruits">Fruits</Option>
            <Option value="Vegetables">Vegetables</Option>
            <Option value="Grains">Grains</Option>
            {/* <Option>Millets</Option> */}
          </Select>
          <Select name="color" onChange={handleFilter}>
            <Option disabled selected>
              unit(s)
            </Option>
            <Option>kg</Option>
            <Option>pounds</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterTexT>
            Sort Products:
            <Select name="sort" onChange={handleSort}>
              <Option value="newest">Newest</Option>
              <Option value="asec">Price (Asec)</Option>
              <Option value="desc">Price (Desc)</Option>
            </Select>
          </FilterTexT>
        </Filter>
      </FilterContainer>
      <Products type={2} cat={cat} filter={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductList;
