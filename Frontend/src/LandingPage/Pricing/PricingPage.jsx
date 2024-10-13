import OpenAccount from "../OpenAccount.jsx";
import Brokerage from "./Brokerage";
import Charges from "./Charges.jsx";

import Hero from "./Hero";

function PricingPage() {
  return (
    <>
      <Hero />
      <Brokerage />
      <OpenAccount />
      <Charges />
    </>
  );
}

export default PricingPage;
