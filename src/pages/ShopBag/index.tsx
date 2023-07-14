import { Link } from "react-router-dom";
import { MainContainer } from "../../globalSyles";
import goback from "../../assets/goback-icon.svg";
import ShopBagProduct from "../../components/ShopBagProduct";

const ShopBag = () => {
  return (
    <MainContainer>
      <section>
        <header>
          <button>
            <Link to="/">
              <img src={goback} alt="go-back icon" />
              Voltar
            </Link>
          </button>
          <div>
            <h2>SEU CARRINHO</h2>
            <div>
              <span>Total(3 produtos)</span>
              <span>RS161,00</span>
            </div>
          </div>
        </header>
        <div>
          <ShopBagProduct />
        </div>
      </section>
      <aside></aside>
    </MainContainer>
  );
};

export default ShopBag;
