import styled from "styled-components";
import userIcon from "../../assets/user-icon.svg";
import { useState, useContext } from "react";
import AuthContext from "../../store/auth/auth-context";
import { AuthType } from "../../store/auth/auth-context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetCurrentUserId } from "../../hooks/getCurrentUserId";

const UserCard = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext) as AuthType;
  const { user, logOut } = authContext;
  const [showCard, setShowCard] = useState<boolean>(false);
  const { currentUserId } = useGetCurrentUserId();

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
          <Heading>Your Account</Heading>
          <Info>
            <CoverLayer>
              <span>In production</span>
            </CoverLayer>
            <nav>
              <Ul>
                <li>
                  <Link to={`${currentUserId}/orders`}>See your orders</Link>
                </li>
                <li>See your account</li>
                <li>Favorite products</li>
                <li>Post your products</li>
              </Ul>
            </nav>
          </Info>
          <ActionButton onClick={handleClick}>
            {user ? "LogOut" : "LogIn"}
          </ActionButton>
        </InfoCard>
      ) : null}
    </div>
  );
};

const CoverLayer = styled.div`
  position: absolute;
  background: var(--clr-dark-gray-200);
  border-radius: 5px;
  right: 0;
  left: 0;
  bottom: 0;
  top: 3rem;
  display: none;
  justify-content: center;
  align-items: center;
  span {
    font-weight: bold;
    font-size: 2.5rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
  font-size: 1.4rem;
  justify-content: center;
  & > li:hover {
    color: var(--clr-accent-purple);
    font-weight: 600;
    cursor: pointer;
  }
`;

const Heading = styled.div`
  font-weight: bold;
`;

const InfoCard = styled.div`
  position: absolute;
  background: var(--clr-dark-gray-100);
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
  position: relative;
  &:hover > div {
    display: flex;
  }
`;

const ActionButton = styled.button`
  background: light;
  border-radius: 5px;
  font-family: inherit;
  font-weight: 600;
  border: 0;
  padding: 0.9rem;
  border: 1px solid black;
  background: var(--clr-accent-purple);
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export default UserCard;
