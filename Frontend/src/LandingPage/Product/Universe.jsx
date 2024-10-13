import { useNavigate } from "react-router-dom";
function Universe() {
  const navigate = useNavigate();
  return (
    <div className="Container p-md-5 ">
      <div className="row flex justify-content-center text-center mt-md-5">
        <h1 className="mt-sm-3 " style={{ fontSize: "2.2rem" }}>
          The Zerodha Universe
        </h1>
        <p className=" mt-3" style={{ fontSize: "17px" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row mt-md-5">
          <div className="col">
            <div className="up ">
              <img
                style={{ height: "55px" }}
                src="Media/img/zerodhaFundhouse.png"
              />
              <p className="sm-rem mt-3">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
            <div className="dw mt-5">
              <img style={{ height: "55px" }} src="Media/img/streakLogo.png" />
              <p className="sm-rem mt-3">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>
          </div>
          <div className="col px-md-3">
            <div className="up ">
              <img
                style={{ height: "40px" }}
                src="Media/img/sensibullLogo.svg"
              />
              <p className="sm-rem mt-3">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </div>
            <div className="dw mt-5">
              <img
                style={{ height: "55px" }}
                src="Media/img/smallcaseLogo.png"
              />
              <p className="sm-rem mt-3">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="up ">
              <img style={{ height: "55px" }} src="Media/img/tijori.svg" />
              <p className="sm-rem mt-3">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </div>
            <div className="dw mt-5">
              <img style={{ height: "55px" }} src="Media/img/ditto-logo.png" />
              <p className="sm-rem mt-3">
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </div>
          </div>
        </div>
        <button className="btn-Hero" onClick={() => navigate("/signup")}>
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
