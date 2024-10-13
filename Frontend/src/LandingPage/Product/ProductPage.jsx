import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function Product() {
  return (
    <>
      <Hero />
      <LeftSection
        img={"Media/img/kite.png"}
        title={"Kite"}
        des={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        linkName1={"Try demo"}
        linkName2={"Learn more"}
      />
      <RightSection
        img={"Media/img/console.png"}
        title={"Console"}
        des={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        linkName1={"Learn more"}
      />
      <LeftSection
        img={"Media/img/coin.png"}
        title={"Coin"}
        des={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        linkName1={"Coin"}
      />
      <RightSection
        img={"Media/img/kiteconnect.png"}
        title={"Kite connect API"}
        des={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        linkName1={"Kite connect"}
      />

      <LeftSection
        img={"Media/img/varsity.png"}
        title={"Varsity mobile"}
        des={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
      />
      <Universe />
    </>
  );
}

export default Product;
