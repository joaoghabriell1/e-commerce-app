import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setEspecificProductFilter } from "../../store/products-slice";
import styled from "styled-components";
import searchIcon from "../../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";
import { setFilter } from "../../store/products-slice";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const cleanInput = searchInput.trim().toLocaleLowerCase();
    if (cleanInput === "") return;
    dispatch(setEspecificProductFilter(cleanInput));
    setSearchInput("");
    dispatch(setFilter(""));
    navigate("/");
  };

  return (
    <Container>
      <input
        onChange={handleChange}
        value={searchInput}
        placeholder="Searching for something especific?"
        type="text"
      />
      <SearchButton onClick={handleSearch}>
        <img src={searchIcon} alt="" />
      </SearchButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 325px;
  background: hsla(202, 11%, 96%, 1);
  padding: 1rem 1.6rem;
  border-radius: 8px;
  color: hsla(240, 5%, 48%, 1);
  margin-right: 2.4rem;
  input {
    border: 0;
    flex: 1;
    background: none;
    outline: 0;
  }
  input::placeholder {
    font-weight: 400;
  }
  img {
    width: 24px;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`;

export default SearchBar;
