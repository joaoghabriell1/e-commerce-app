import formatDate from "../../../utils/formatDate";
import styled from "styled-components";

interface Props {
  userName: string | null;
  date: string;
  total: number;
}

const Header = ({ userName, date, total }: Props) => {
  const formatedDate = formatDate(date);
  return (
    <HeaderTag>
      <div>
        <h5>Order placed</h5>
        {formatedDate}
      </div>
      <div>
        <h5>Total</h5>
        U${total.toFixed(2)}
      </div>
      <div>
        <h5>Sendo To</h5>
        <p>{userName}</p>
      </div>
    </HeaderTag>
  );
};

const HeaderTag = styled.header`
  display: flex;
  background: #1e1e1e;
  padding: 1rem;
  gap: 1rem;
`;

export default Header;
