import styled from "styled-components";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  setFilter,
  setEspecificProductFilter,
} from "../../store/products-slice";

interface Props {
  filters: string[];
  categoryFilter: string;
}

interface FilterItemProps {
  currentfilter: boolean;
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
          currentfilter={categoryFilter === ""}
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
              currentfilter={categoryFilter === filter}
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
  gap: 4rem;
`;

const FilterItem = styled.li<FilterItemProps>`
  text-transform: uppercase;
  font-weight: ${(p: FilterItemProps) => (p.currentfilter ? "bold" : "500")};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default FilterNav;
