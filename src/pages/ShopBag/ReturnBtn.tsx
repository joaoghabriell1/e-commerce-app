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
  border: 0;
  font-weight: bold;
  color: hsla(203, 14%, 44%, 1);
  margin-bottom: 2.5rem;
  &:hover {
    cursor: pointer;
    color: hsla(16, 100%, 76%, 1);
  }
  img {
    width: 24px;
  }
`;

export default ReturnBtn;
