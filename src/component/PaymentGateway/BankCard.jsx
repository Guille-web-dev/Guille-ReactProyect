import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

function BankCard({ form }) {

  const { cvc } = form || {};

  return (
    <div className="cardContainer">
      <div className="frontCardContainer">
        <FrontCard data={form} />
      </div>
      <div className="backCardContainer">
        <BackCard cvc={cvc} />
      </div>
    </div>
  );
}

export default BankCard;
