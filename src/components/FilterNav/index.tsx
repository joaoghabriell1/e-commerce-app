import styled from "styled-components";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  setFilter,
  setEspecificProductFilter,
} from "../../store/products/products-slice";

interface Props {
  filters: string[];
  categoryFilter: string;
}

interface FilterItemProps {
  currentfilter: number;
}

const FilterNav = ({ filters, categoryFilter }: Props) => {
  const dispatch = useAppDispatch();
  const filterHandler = (filter: string) => {
    dispatch(setEspecificProductFilter(null));
    dispatch(setFilter(filter));
  };

  return (
    <nav>
      <FilterList>
        <FilterItem
          currentfilter={categoryFilter === "" ? 1 : 0}
          onClick={() => {
            filterHandler("");
          }}
        >
          All Products
        </FilterItem>
        {filters.map((filter, index) => {
          return (
            <FilterItem
              onClick={() => {
                filterHandler(filter);
              }}
              value={filter}
              key={index}
              currentfilter={categoryFilter === filter ? 1 : 0}
            >
              {filter}
            </FilterItem>
          );
        })}
      </FilterList>
    </nav>
  );
};

const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 1rem;
`;

const FilterItem = styled.li<FilterItemProps>`
  text-transform: uppercase;
  font-weight: ${(p: FilterItemProps) => (p.currentfilter ? "bold" : "500")};
  border-bottom: ${(p: FilterItemProps) =>
    p.currentfilter ? "4px solid hsla(16, 100%, 76%, 1)" : "none"};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default FilterNav;
