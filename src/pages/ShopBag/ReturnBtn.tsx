import { Link } from "react-router-dom";
import styled from "styled-components";
import goback from "../../assets/goback-icon.svg";

const ReturnBtn = () => {
  return (
    <Link to="/">
      <ReturnButton>
        <img src={goback} alt="go-back icon" />
        Go Back
      </ReturnButton>
    </Link>
  );
};

const ReturnButton = styled.button`
  background: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  align-items: center;
  font-family: inherit;
  border: 0;
  font-weight: 600;
  color: var(--clr-text-300);
  background: var(--clr-dark-gray-200);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-bottom: 2.5rem;

  &:hover {
    cursor: pointer;
    color: var(--clr-accent-purple);
    img {
      filter: invert(52%) sepia(92%) saturate(2169%) hue-rotate(221deg)
        brightness(103%) contrast(98%);
    }
  }
  img {
    width: 24px;
  }
`;

export default ReturnBtn;
