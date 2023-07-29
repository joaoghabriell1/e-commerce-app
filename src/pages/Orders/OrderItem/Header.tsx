import formatDate from "../../../utils/formatDate";
import styled from "styled-components";

interface Props {
  date: string;
  total: number;
}

const Header = ({ date, total }: Props) => {
  const formatedDate = formatDate(date);
  return (
    <HeaderTag>
      <div>
        <h5>Order placed</h5>
        {formatedDate}
      </div>
      <div>
        <h5>Total</h5>
        U${total},00
      </div>
      <div>
        <h5>Sendo To</h5>
        <p>user name</p>
      </div>
    </HeaderTag>
  );
};

const HeaderTag = styled.header`
  display: flex;
  background: #fff;
  padding: 1rem;
  gap: 1rem;
`;

export default Header;
