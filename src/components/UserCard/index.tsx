import styled from "styled-components";
import userIcon from "../../assets/user-icon.svg";
import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { AuthType } from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const UserCard = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext) as AuthType;
  const { user, logOut } = authContext;
  const [showCard, setShowCard] = useState<boolean>(false);

  const handleClick = () => {
    if (user) {
      logOut();
    } else {
      navigate("auth");
    }
  };
  return (
    <div>
      <UserIcon onClick={() => setShowCard((prev) => !prev)}>
        <img src={userIcon} alt="user-icon" />
      </UserIcon>
      {showCard ? (
        <InfoCard>
          <div>User</div>
          <Info>butinfo</Info>
          <ActionButton onClick={handleClick}>
            {user ? "LogOut" : "LogIn"}
          </ActionButton>
        </InfoCard>
      ) : null}
    </div>
  );
};

const InfoCard = styled.div`
  position: absolute;
  background: var(--clr-white);
  box-shadow: 1px 1px 10px lightgray;
  width: 250px;
  height: 250px;
  border-radius: 1rem;
  right: 1rem;
  z-index: 1;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const UserIcon = styled.div`
  display: flex;
  margin-left: 2rem;
  padding: 0.3rem;
  border: 2px solid #000;
  background: #d3d3d3a2;
  border-radius: 50%;
  img {
    aspect-ratio: 1/1;
    width: 25px;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Info = styled.div`
  flex: 1;
`;

const ActionButton = styled.button`
  background: light;
  border-radius: 5px;
  font-family: inherit;
  font-weight: bold;
  border: 0;
  padding: 0.6rem;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default UserCard;
